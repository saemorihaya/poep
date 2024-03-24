import { UserInfo } from '../../model/userInfo';
import { connectionPool } from './initializeConnection';

// DBサーバーのユーザーテーブルを検索します
export async function getUserTable(): Promise<UserInfo[]> {

    // クエリの実態
    const query = 'SELECT * FROM UserInfo';

    let connection;

    try {
        // プールからコネクションを取得する
        connection = await connectionPool.getConnection();

        // クエリを実行する
        const [data] = await connection.query(query);
        let userInfos: Array<UserInfo> = [];
        for (const d of data) {
            const userInfo = new UserInfo(d.id, d.username, d.password);
            userInfos.push(userInfo)
        }
        return userInfos
    } catch (error) {
        console.error("Database query error", error);
        throw error;
    } finally {
        // 成功失敗に関わらず、コネクションをプールに返却する
        if (connection) connection.release();
    }
}
