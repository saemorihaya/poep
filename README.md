# poepについて
（記述してください）

## Dockerfileの実行について

Dockerfileのイメージ作成は開発環境と本番環境で異なります。<br>
[Dockerfileのマルチステージビルド](https://docs.docker.jp/engine/userguide/eng-image/multistage-build.html#id4)を使用して環境ごとにコンテナ作成を分岐しています。

### 開発環境のコマンド
Visual Studio Codeの[Dev Containerプラグイン](https://code.visualstudio.com/docs/devcontainers/containers)を使用して、コンテナ上に立ち上げた開発環境をローカルのローカルのVisual Studio Codeで開発します。<br>

-  環境構築手順

1. Visual Studio Codeの拡張機能からDev Containersをインストールします。
2. インストール完了後、Visual Studio Codeのコマンドパレット(Command+Shift+p)から、Reopen in Containerを実行します。これで開発環境用のコンテナが起動し、Visual Studio Codeから操作可能になります。
3. (work arround)起動後、Visual Studio Code内でターミナルを開き、npm run devを実行します。<br>

以上で開発環境の構築は完了です。

### 本番環境のコマンド
（記述してください）
