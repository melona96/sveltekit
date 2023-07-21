import pool from "/src/lib/db/db.js";

export async function load(req) {
    const client =  await pool.connect();
    try {
        const param = req.params.slug;
        console.log(param)
        const res = await client.query('SELECT * FROM dc_board WHERE category_cd = $1', [param]);
        return {
            item: res.rows
        }
    } catch(err) {
        console.error(err);
    } finally {

    }
}