<script>
    export let data;
    console.log(data);

    function boardDetail(category_nm_en, board_seq) {
        const url = `/board/${category_nm_en}/${board_seq}`;
        window.location.href = url; //
    }
</script>
<style>
    tr {
        cursor : pointer;
    }

    tr:hover {
        background-color: #f2f2f2;
    }
</style>


<!-- Section-->
<section class="py-5">
    <div class="container px-4 px-lg-5 mt-3">
        <table class="table">
            <thead class="table-light">
                <tr>
                    <th>제목</th>
                    <th>카테고리</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                    <th>추천</th>
                </tr>
            </thead>
            <tbody>
                {#each data.item as row}
                    <tr on:click={boardDetail(row.category_nm_en,row.board_seq)}>
                        <td>
                            {row.title}
                        </td>
                        <td>
                            {row.category_nm}
                        </td>
                        <td>
                            {row.input_id}
                        </td>
                        <td>
                            10:51<!--[{row.input_dt}]-->
                        </td>
                        <td>
                            {row.hits}
                        </td>
                        <td>
                            {row.up}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

</section>