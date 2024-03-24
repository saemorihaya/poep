import { Article } from '$lib/model/article';
import { connectionPool } from './initializeConnection';

// DBサーバーの記事テーブルを検索します
export async function getArticles(): Promise<Article[]> {

    // クエリの実態
    const query = 'SELECT * FROM articles';

    let connection;

    try {
        // プールからコネクションを取得する
        connection = await connectionPool.getConnection();

        // クエリを実行する
        const [data] = await connection.query(query);
        if (Array.isArray(data)) {
            let articles: Array<Article> = [];
            data.forEach((d: any) => {
                const article = new Article(d.title, d.content_ja, d.content_en, d.created_at, d.source, d.image_url1, d.image_url2, d.image_url3);
                articles.push(article);
            });
            return articles
        } else {
            throw Error('Data is not an array.');
        }
    } catch (error) {
        console.error("Database query error", error);
        throw error;
    } finally {
        // 成功失敗に関わらず、コネクションをプールに返却する
        if (connection) connection.release();
    }
}
