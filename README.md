# 家計簿アプリ

## Environment
Start local database
```bash
cd database
docker compose up
```

Setup local database
```bash
pnpm prisma:migrate
pnpm prisma:generate
```

## Developing

Install all recommended extensions from `.vscode/extensions.json`.

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

- chore
