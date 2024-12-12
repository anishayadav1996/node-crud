import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_crud',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


export default db;