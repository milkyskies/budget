# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="SvelteKit/Prisma"

ARG DATABASE_URL
ARG OPENAI_API_KEY
ARG CLIENT_URL

ENV DATABASE_URL=${DATABASE_URL}
ENV OPENAI_API_KEY=${OPENAI_API_KEY}
ENV CLIENT_URL=${CLIENT_URL}

# SvelteKit/Prisma app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm
ARG PNPM_VERSION=9.1.0
RUN npm install -g pnpm@$PNPM_VERSION


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp openssl pkg-config python-is-python3

# Install node modules
COPY --link .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

# Generate Prisma Client
COPY --link prisma .
RUN npx prisma generate

# Copy application code
COPY --link . .

# Build application
RUN pnpm run build

# Remove development dependencies
RUN pnpm prune --prod


# Final stage for app image
FROM base

# Install packages needed for deployment
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y openssl && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Copy built application
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "node", "./build/index.js" ]
