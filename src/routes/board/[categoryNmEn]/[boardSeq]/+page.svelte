<script>
    import {goto} from "$app/navigation";
    export let data;
    console.log(data)

    $: boardSeq = data.board.boardSeq;
    let userId = 'test1';
    let content;
    let pCommentSeq;
    let lvl;
    async function testUp() {
        const param = {
            boardSeq,
            userId
        };
        console.log(param);
        try {
            const response = await fetch('/api/board/up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param),
                credentials: 'include'
            });

            console.log(response);
            if (response.ok) {
                console.log('연동 성공');
                console.log(JSON.stringify(data));
                const token = await response.json();
                // 토큰을 저장하거나 필요한 후속 작업 수행
                goto('/home')
            } else {
                // 로그인 실패 처리
                alert('ERROR: 추천에 실패했습니다.')
            }
        } catch (error) {
            // 에러 처리
        }
    }

    async function commentWrite() {
        const param = {
            boardSeq,
            userId,
            content,
            pCommentSeq,
            lvl
        };
        console.log(param);
        try {
            const response = await fetch('/api/board/comment/write', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param),
                credentials: 'include'
            });

            console.log(response);
            if (response.ok) {
                console.log('연동 성공');
                console.log(JSON.stringify(data));
                const token = await response.json();
                // 토큰을 저장하거나 필요한 후속 작업 수행
                goto('/home')
            } else {
                // 로그인 실패 처리
                alert('ERROR: 댓글 작성을 실패했습니다.')
            }
        } catch (error) {
            // 에러 처리
        }
    }

    function commentReply(commentId) {
        /*<form on:submit={commentWrite}>
            <div class="comment-li-reply">
                <input type="text" name="content" class="form-control" id="" placeholder="" bind:value={content}>
                    <button type="submit" class="comment-input-btn">등록</button>
            </div>
        </form>*/
    }

    function boardList(categoryNmEn) {
        const url = `/board/${categoryNmEn}`;
        window.location.href = url; //
    }


</script>

<section class="py-5">
    <form>
<!--    <input type="hidden" value="{data.userId}" name="boardSeq"> 추후 id와 관련한 로직 추가후 진행-->
        <div class="container px-4 px-lg-5 mt-5">
            <div>
                <div class="board-wrapper">
                    <div class="board-header">
                        <h3 class="fw-bold" on:click={boardList(data.board.categoryNmEn)}>{data.board.categoryNm}</h3>
                    </div>
                    <div class="board-title">
                        <div>
                            <p class="fw-bold">{data.board.title}</p>
                        </div>
                        <div>
                            <span class="board-header-input-id">작성자 : {data.board.inputId}</span>
                            <span class="board-header-li">조회 {data.board.hits}</span>
                            <span class="board-header-li">{data.board.inputDt}</span>
                        </div>
                    </div>
                    <div class="board-content">
                        <p>{data.board.content}</p>
                    </div>
                </div>
                <div class="btn-container up-btn">
                    <a type="button" class="btn btn-outline-primary" on:click={testUp}>추천[{data.board.up}]</a>
                </div>
                <div class="comment">
                    <div>
                        <p>댓글 {data.commentList.length}</p>
                        <ul>
                            {#each data.commentList as comment}
                                {#if comment.lvl === '0'}
                                    <li on:click={commentReply}>
                                        <span class="comment-input-id">{comment.inputId}</span>
                                        <span class="comment-content"> {comment.content}</span>
                                        <span class="comment-input-dt">{comment.inputDt}</span>
                                        <!-- 답글달기 클릭시 form 생성 -->
                                    </li>
                                {:else}
                                    <li class="comment-li-reply">
                                        <div></div>
                                        <span class="comment-input-id">{comment.inputId}</span>
                                        <span class="comment-content">{comment.content}</span>
                                        <span class="comment-input-dt">{comment.inputDt}</span>
                                    </li>
                                {/if}
                            {/each}
                        </ul>
                    </div>


                    <form on:submit={commentWrite}>
                        <div class="mb-3">
                            <input type="text" name="content" class="form-control" id="exampleFormControlInput1" placeholder="" bind:value={content}>
                            <button type="submit" class="comment-input-btn">등록</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </form>
</section>

<style>
    .btn-container.up-btn {
        text-align: center;
    }

    .board-header-li {
        font-size: smaller;
        font-weight: lighter;
        float: right;
        margin-right: 20px;
    }

    .mb-3 {
        display: flex;
        align-items: flex-start;

    }

    .mb-3 input {
        margin-right: 10px;
    }

    .comment-input-btn {
        width: 75px;
        height: 38px;
    }

    .comment-input-dt {
        float: right;
        color: #777
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        border-top: 1px solid #eee;
        padding-top: 9px; /* 줄과 텍스트 사이의 간격을 설정할 수 있습니다. */
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor : pointer;

    }

    .comment-content {

    }

    .comment-input-id {
        color: #777;
        margin-right: 5%;
        display: inline-block;
        width: 9%;
    }

    .board-content {
        margin-top: 30px;
        height: 500px;
    }

    .board-header {
        border-bottom: 1px solid darkgrey;
        margin-bottom: 10px;
    }

    .board-header-input-id {
        font-size: smaller;
        color: #333
    }

    .board-title {
        border-bottom: 1px solid darkgrey;
        padding-bottom: 10px;
    }

    h3.fw-bold {
        cursor: pointer;
    }

    .comment-li-reply{
        margin-left: 3%;
        background: #eee;
        padding: 2px;
        display: flex;
        justify-content: space-between;
    }

    .comment-input-dt {
        margin-left: auto; /* margin-left 값을 자동으로 설정하여 오른쪽 끝으로 이동 */
    }


</style>
