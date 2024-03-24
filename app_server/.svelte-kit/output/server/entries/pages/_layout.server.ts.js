import { U as UserInfo } from "../../chunks/userInfo.js";
import mysql from "mysql2/promise";
const connectionPool = mysql.createPool({
  host: "host.docker.internal",
  user: "root",
  password: "poep123",
  database: "poep",
  port: 33161,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
async function getUserTable() {
  const query = "SELECT * FROM UserInfo";
  let connection;
  try {
    connection = await connectionPool.getConnection();
    const [data] = await connection.query(query);
    let userInfos = [];
    for (const d of data) {
      const userInfo = new UserInfo(d.id, d.username, d.password);
      userInfos.push(userInfo);
    }
    return userInfos;
  } catch (error) {
    console.error("Database query error", error);
    throw error;
  } finally {
    if (connection)
      connection.release();
  }
}
async function load() {
  const userInfos = await getUserTable();
  return {
    post: {
      userInfos: JSON.stringify(userInfos)
    }
  };
}
export {
  load
};
