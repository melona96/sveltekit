import pool from "/src/lib/db/db.js";

export async function load(req) {
    const client =  await pool.connect();
    try {
        const param = req.params.slug;
        console.log(param)
        const res = await client.query('SELECT * FROM tk_restaurant WHERE restaurant_id = $1 ORDER BY restaurant_id', [param]);
        return {
            item: res.rows
        }
    } catch(err) {
        console.error(err);
    } finally {

    }
}