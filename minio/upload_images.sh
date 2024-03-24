#!/bin/sh

# MinIOクライアント（mc）の設定
mc alias set minio http://localhost:9000 ${VITE_MINIO_ROOT_USER} ${VITE_MINIO_ROOT_PASSWORD}

# バケットの作成（すでに存在しない場合）
mc mb minio/angels --ignore-existing

# 画像ファイルをバケットにアップロード
mc cp --recursive ./images/angels* minio/angels/

# 開発環境なので作成したバケットにパブリックアクセスポリシーを適用する
mc policy set public minio/angels
