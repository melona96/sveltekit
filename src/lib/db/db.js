const { Pool } = require('pg');

const pool = new Pool({
    user: 'melona',
    host: 'localhost',
    database: 'tokyo',
    password: 'xkdlald1',
    port: 5432, // Change to your PostgreSQL port
});

module.exports = pool;