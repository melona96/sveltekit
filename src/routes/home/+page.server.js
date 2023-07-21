import pool from "/src/lib/db/db.js";

export async function load(req) {
    const client =  await pool.connect();
    try {
        const res = await client.query('select a.*, b.category_nm, b.category_nm_en from dc_board a, dc_category b where a.category_cd = b .category_cd  order by board_seq limit 8;');
        return {
            item: res.rows
        };
    } catch(err) {
        console.error(err);
    } finally {

    }
}