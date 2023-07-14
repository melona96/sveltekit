import pool from "/src/lib/db/db.js";

export async function get(req) {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM tk_restaurant');
        return {
            body: res.rows,
        };
    } catch(err) {
        console.error(err);
    } finally {
        client.release();
    }
}