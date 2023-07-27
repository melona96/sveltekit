<script>
    import {goto} from "$app/navigation";
    export let data;

    $: boardSeq = data.boardSeq;
    let userId = 'test1';
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
</script>

<section class="py-5">
    <form>
        <input type="hidden" name="boardSeq" bind:value={data.boardSeq}>
<!--    <input type="hidden" value="{data.userId}" name="boardSeq"> 추후 id와 관련한 로직 추가후 진행-->
        <div class="container px-4 px-lg-5 mt-5">
            <div class="card-body p-4">
                <div class="text-center">
                    <p>{data.categoryNm}</p>
                    <h5 class="fw-bolder">{data.title}</h5>
                    {data.content}
                    <p>조회수 [{data.hits}]</p>
                </div>
                <div class="btn-container up-btn">
                    <a type="button" class="btn btn-outline-primary" on:click={testUp}>추천[{data.up}]</a>
                </div>
            </div>
        </div>
    </form>
</section>

<style>
    .btn-container.up-btn {
        text-align: center;
    }
</style>
