const mysql = require('mysql2/promise');
const config = require('../config.js');

const dbauth={
    host: config.ServerDB,
    user: config.UserDB,
    password: config.PasswordDB,
    database: config.Database,
    port: config.PortDB,
    waitForconection:true,
    connectionLimit: 10,
    queueLimit:0 
}

async function getConnection(){
    const pool=mysql.createPool(dbauth);
    return pool;
}

module.exports=getConnection;