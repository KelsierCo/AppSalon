const { Pool } = require('pg')

const pool = new Pool({
    host: "172.17.0.2",
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'salon_db'
})

pool.connect().then(db => console.log('conectado')).catch(err => console.err(err));

module.exports = pool;
