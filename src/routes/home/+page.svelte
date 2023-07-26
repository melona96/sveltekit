<script>
    export let data;
    console.log(JSON.stringify(data,null, 2));

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
        <div>
            <a class="btn btn-outline-secondary" href="/board/write" title="글쓰기">글쓰기</a>
        </div>
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
                {#each data.boardList as board}
                    <tr on:click={boardDetail(board.categoryNmEn,board.boardSeq)}>
                        <td>
                            {board.title}
                        </td>
                        <td>
                            {board.categoryNm}
                        </td>
                        <td>
                            {board.inputId}
                        </td>
                        <td>
                            {board.inputDt}
                        </td>
                        <td>
                            {board.hits}
                        </td>
                        <td>
                            {board.up}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

</section>