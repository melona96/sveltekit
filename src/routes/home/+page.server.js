import pool from "/src/lib/db/db.js";



/*export async function load(req) {
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
}*/

export async function load({fetch}) {
    const info = "test!!!"
    try {
        console.log(info)
        const response = await fetch('/api/board/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info),
            // credentials: 'include'
        });

        if (response.ok) {
            console.log('연동 성공');
            const token = await response.json();
            return {
                item : token
            };
        } else {
            // 로그인 실패 처리
            console.log('연동 실패')
        }
    } catch (error) {
        // 에러 처리
    }
}