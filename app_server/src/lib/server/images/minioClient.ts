import { Client, type BucketItem } from "minio";

// 環境変数を読み込む
const endPoint = import.meta.env.VITE_SERVER_HOST;
const port = Number(import.meta.env.VITE_SERVER_PORT);

// MinIOクライアントの設定
const minioClient = new Client({
    endPoint: endPoint,
    port: port,
    useSSL: false,
    accessKey: 'PnxRnC1T840izDABswww',
    secretKey: 'k2NRl4FuTpzebR95AKlKlLst8BQ03SqYX2tFTlMU'
  });

  // 指定されたバケットから画像のURLリストを取得する関数
  export async function getImageUrls(bucketName: string): Promise<Array<String>> {   
    return new Promise((resolve, reject) => {
        const bucketItems: Array<BucketItem> = [];
        const images: Array<String> = [];
        const stream = minioClient.listObjectsV2(bucketName, '', true);

        stream.on('data', async (bucketItem) => {
            if (bucketItem.name?.endsWith(".jpeg") || bucketItem.name?.endsWith(".jpg") || bucketItem.name?.endsWith(".png")) {
                try {
                    const imageUrl = `/${bucketName}/${bucketItem.name}`
                    images.push(imageUrl);
                } catch (error) {
                    reject(error);
                }
            }
        });

        stream.on('end', () => {
            resolve(images);
        });

        stream.on('error', (error) => {
            reject(error);
        });
    });
}
