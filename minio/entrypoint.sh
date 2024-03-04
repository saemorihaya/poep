#!/bin/sh

# 画像アップロードのスクリプト実行
/upload_images.sh

# minioサーバーを指定のアドレスで実行
exec minio server /data --console-address ":9001"
