import { getUserTable } from "../../lib/server/database/userInfo"

export async function load() {
    const userInfos = await getUserTable();
    return {
        post: {
            userInfos: JSON.stringify(userInfos)
        }
    };
}
