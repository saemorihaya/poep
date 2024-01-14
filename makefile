# makeで実行されるデフォルト
default: build run

# dockerイメージを作成
build:
	docker build --target development -t poep:dev .

# dockerコンテナを作成
run:
	docker run -dp 4000:3000 poep:dev

# Phony targets
.PHONY: default build run
