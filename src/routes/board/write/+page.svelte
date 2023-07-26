<script>
    import {goto} from "$app/navigation"; // goto 함수로 자체적

    let title;
    let content;

    async function testWrite() {
        const data = {
            title,
            content
        };
        try {
            console.log(data)
            const response = await fetch('/api/board/write', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });

            console.log(response);
            if (response.ok) {
                console.log('연동 성공');
                const token = await response.json();
                // 토큰을 저장하거나 필요한 후속 작업 수행
                goto('/home')
            } else {
                // 로그인 실패 처리
                console.log('연동 실패')
            }
        } catch (error) {
            // 에러 처리
        }
    }

</script>


<div class="container px-4 px-lg-5 mt-3">
    <form on:submit={testWrite}>
        <div class="mb-3">
            <input type="text" name="title" class="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요." bind:value={title}>
        </div>
        <div class="mb-3">
            <textarea class="summernote" name="editordata" placeholder="내용을 입력하세요." bind:value={content}></textarea>
        </div>
        <div id="summernote">Hello Summernote</div>

        <div>
            <button class="btn btn-outline-secondary" type="submit">작성</button>
        </div>
    </form>
    <br>
</div>