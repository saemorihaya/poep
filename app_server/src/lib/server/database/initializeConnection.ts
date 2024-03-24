import mysql from "mysql2/promise";

export const connectionPool = mysql.createPool({
    host: 'host.docker.internal',
    user: 'root',
    password: 'poep123',
    database: 'poep',
    port: 33161,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
