import { getImageUrls } from "$lib/server/images/minioClient";
import { getUserTable } from "../../lib/server/database/userInfo"

export async function load() {
    // DBからユーザー情報取得
    const userInfos = await getUserTable();
    // MinIOから画像取得
    const bucketName = "angels";
    let images: Array<String> = [];
    try {
        images = await getImageUrls(bucketName);
    } catch(error) {
        console.error(error);
        throw error
    }
    
    return {
        post: {
            userInfos: JSON.stringify(userInfos),
            images: images
        }
    };
}
