<script>
    export let data;

    function boardDetail(categoryNmEn, boardSeq) {
        const url = `/board/${categoryNmEn}/${boardSeq}`;
        window.location.href = url; //
    }

    function boardList(categoryNmEn) {
        const url = `/board/${categoryNmEn}`;
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

    th.board-title {
        text-align: center;
    }

    .board-comment-count {
        color: #777;
        font-size: smaller;
    }

    h1{
        cursor: pointer;
    }

</style>


<!-- Section-->
<section class="py-5">
    <div class="container px-4 px-lg-5 mt-3">
        <div>
            <h1 on:click={boardList(data.boardList[0].categoryNmEn)}>{data.boardList[0].categoryNm}</h1>
        </div>
        <div>
            <a class="btn btn-outline-secondary" href="/board/write" title="글쓰기">글쓰기</a>
        </div>
        <table class="table">
            <thead class="table-light">
            <tr>
                <th class="board-title">제목</th>
                <th>카테고리</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
                <th>추천</th>
            </tr>
            </thead>
            <tbody>
            {#if data != null}
                {#each data.boardList as board}
                    <tr on:click={boardDetail(board.categoryNmEn,board.boardSeq)}>
                        <td>
                            {board.title}
                            <span class="board-comment-count">[{board.commentCount}]</span>
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
            {/if}
            </tbody>
        </table>
    </div>

</section>

