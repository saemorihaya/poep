# Makefile

# イメージ名を定義
IMAGE_NAME=poep_sox

# タグ名を定義
MY_TAG=demo

# ポート番号を定義
HOST_PORT=4000
DOCKER_PORT=4000

# Dockerイメージをビルドするためのターゲット
build:
	docker build -t $(IMAGE_NAME):$(MY_TAG) .

# コンテナを起動するためのターゲット
run:
	docker run -d -p $(HOST_PORT):$(DOCKER_PORT) $(IMAGE_NAME):$(MY_TAG)

# コンテナをkillするためのターゲット
kill:
	@docker ps -q | xargs -r docker kill


# イメージのビルドとコンテナの起動を行うターゲット
all: build run
