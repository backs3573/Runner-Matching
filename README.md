# Runner Matching

ランナー向けマッチングアプリ MVP

## 概要
- Next.js + Tailwind CSS によるプロフィール一覧画面のMVP実装
- ダミーデータでUI動作確認

## ディレクトリ構成

```
src/
  components/
    Header.js
    ProfileCard.js
    ProfileList.js
    LikeButton.js
    dummyData.js
  main.js
```

## セットアップ手順

1. Next.js プロジェクト作成
   ```sh
   npx create-next-app@latest .
   ```
2. Tailwind CSS 導入
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   # tailwind.config.js, postcss.config.js を編集
   # globals.css に Tailwind の base/components/utilities を追加
   ```
3. `src/components/` 配下に各ファイルを配置
4. `pages/index.js` で `Header` と `ProfileList` を読み込む

## 画面例
- プロフィール一覧（ダミーデータ表示、いいねボタン付き）

## 今後の拡張例
- API連携
- プロフィール詳細・メッセージ画面追加
- Storybook/JestによるUIテスト

---



## 各クラス（コンポーネント）の動き

### Header.js
- アプリのタイトルやナビゲーションを表示する共通ヘッダーコンポーネントです。
- すべてのページ上部に表示され、ブランド名やロゴなどを配置できます。

### ProfileCard.js
- 個々のユーザープロフィール情報（名前・年齢・居住地・自己紹介・画像）をカード形式で表示します。
- カード内に LikeButton を含み、ユーザーごとに「いいね」操作が可能です。

### LikeButton.js
- 「いいね」ボタンの状態管理（未押下/押下済み）を行います。
- ボタンを押すと状態が切り替わり、色やテキストが変化します（例：「いいね」→「いいね済み」）。

### ProfileList.js
- 複数のプロフィールデータ（dummyData.js）を受け取り、ProfileCard をリスト表示します。
- map関数で各プロフィールごとに ProfileCard を生成し、グリッドレイアウトで一覧表示します。

### dummyData.js
- ダミーのプロフィールデータ（配列）を定義します。
- ProfileList でこのデータを読み込み、UIの動作確認やテストに利用します。

---