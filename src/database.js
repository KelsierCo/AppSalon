const { Pool } = require('pg')
const { db } = require('./config')

const pool = new Pool({
    host: db.host,
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.database
})

pool.connect().then(db => console.log('conectado')).catch(err => console.err(err));

module.exports = pool;
