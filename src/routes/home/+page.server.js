import pool from "/src/lib/db/db.js";

export async function load(req) {
    const client =  await pool.connect();
    try {
        const res = await client.query('SELECT * FROM tk_restaurant ORDER BY restaurant_id');
        return {
            item: res.rows
        };
    } catch(err) {
        console.error(err);
    } finally {

    }
}