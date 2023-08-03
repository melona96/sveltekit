<script>
    import {goto} from "$app/navigation"; // goto 함수로 자체적으로 redirect 제공
    import { onMount } from 'svelte';
    import Quill from "quill"; // WYSIWYG 에디터 npm install quill로 설치하고 import
    import {page} from "$app/stores";

    export let data;

    let quill;
    let title;
    let content;
    $: categoryNmEn = data.categoryNmEn

    async function testWrite() {
        content = quill.getText();
        const data = {
            title,
            content,
            categoryNmEn
        };
        try {
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
                console.log(JSON.stringify(data));
                const token = await response.json();
                // 토큰을 저장하거나 필요한 후속 작업 수행
                goto('/home')
            } else {
                // 로그인 실패 처리
                alert('ERROR: 글쓰기에 실패했습니다.')
            }
        } catch (error) {
            // 에러 처리
        }
    }

    onMount(() => {
        quill = new Quill('#editor', {
            theme: 'snow',  // 이 값을 변경하여 다른 테마를 선택할 수 있습니다.
            placeholder: '내용을 입력하세요.',
        });
    });

    async function slugTest() {
        console.log(page);
    }
</script>

<style>
    #editor {
        height: 650px;
    }
</style>

<div class="container px-4 px-lg-5 mt-3">
    <form on:submit={testWrite}>
        <input type="hidden" name="categoryCd" value="">
        <div class="mb-3">
            <input type="text" name="title" class="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요." bind:value={title}>
        </div>

        <div id="editor"></div>

        <div>
            <button class="btn btn-outline-secondary" type="submit">작성</button>
        </div>

    </form>
    <br>
</div>