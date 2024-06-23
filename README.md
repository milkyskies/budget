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

## Version Control

イシュー（タスク）名：`<イシューカテゴリ>: <イシュー名>`
- 例：`feat: setup auth`

ブランチ名：`#<イシュー番号>-<イシューカテゴリ>/<イシュー名>`（英語名で、全小文字で、スペースをハイフンに置き換える）
- 例：`#23-feat/setup-auth`

コミット名：`#<イシュー番号> - <イシューカテゴリ>: <イシュー名> / <内容があれば内容>`
- 例：`#23 - feat: setup auth` または `#23 - feat: setup auth / グーグル認証`

PRタイトル：`#<イシュー番号> - <イシューカテゴリ>: <イシュー名>`
- 例：`#23 - feat: setup auth`

PR本文：`closes #<イシュー番号>`
- 例：`closes #23`

イシューカテゴリ
- feat（機能的な変更）
- fix（不具合の修正）
- refactor（リファクタ）
- chore