# Ubuntuベースで起動する
FROM ubuntu:22.04

## ワーキングディレクトリの設定
WORKDIR /app/minio

# wgetをインストール
RUN apt-get update -q && apt-get install -yq wget \
    && rm -rf /var/lib/apt/lists/*

# MinIOサーバーのインストール
RUN wget https://dl.min.io/server/minio/release/linux-amd64/minio \
    && chmod +x minio \
    && mv minio /usr/bin/

# MinIOクライアント（mc）のインストール
RUN wget https://dl.min.io/client/mc/release/linux-amd64/mc \
    && chmod +x mc \
    && mv mc /usr/bin/

# スクリプトと画像ファイルをコピー
COPY upload_images.sh /upload_images.sh
COPY images/angels /images/angels
COPY entrypoint.sh /entrypoint.sh

ENV MINIO_ROOT_USER=poeproot123 \
    MINIO_ROOT_PASSWORD=poeprootpass123 \
    MINIO_SERVER_URL="http://localhost:9000" \
    MINIO_CONSOLE_ADDRESS=":9001"

# スクリプトに実行権限を付与
RUN chmod +x /upload_images.sh \
    && chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
