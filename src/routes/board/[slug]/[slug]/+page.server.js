import pool from "/src/lib/db/db.js";

export async function load(req) {
    const client =  await pool.connect();
    try {
        const param = req.params.slug;
        console.log(param)
        await client.query('UPDATE dc_board SET hits = hits + 1 WHERE board_seq = $1', [param]);
        const res = await client.query('SELECT a.*, b.category_nm, b.category_nm_en FROM dc_board a, dc_category b WHERE a.category_cd = b.category_cd and a.board_seq = $1', [param]);
        return {
            item: res.rows
        }
    } catch(err) {
        console.error(err);
    } finally {

    }
}