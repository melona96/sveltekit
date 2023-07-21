<script>
    let userId = '';
    let pwd = '';
    let addr = '';
    async function testJoin() {
        const info = {
            userId,
            pwd,
            addr
        };
        try {
            console.log(info)
            const response = await fetch('/api/user/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info),
                credentials: 'include'
            });

            console.log(response);
            if (response.ok) {
                console.log('연동 성공');
                const token = await response.json();
                // 토큰을 저장하거나 필요한 후속 작업 수행
            } else {
                // 로그인 실패 처리
                console.log('연동 실패')
            }
        } catch (error) {
            // 에러 처리
        }
    }
</script>

<div class="container-login">
    <div class="d-flow justify-content-center">
        <div class="d-flex justify-content-center">
            <div class="login-dev">
                <form class="login-form" on:submit={testJoin}>
                    <div class="p-5 input-form-div">
                        <div class="input-group mb-3">
                            <input type="text" name="userId" id="join-id-input" class="form-control" placeholder="아이디" autocomplete="off" bind:value={userId}>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" name="pwd" id="join-passwd-input" class="form-control" placeholder="비밀번호" bind:value={pwd}>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" name="addr" id="join-addr-input" class="form-control" placeholder="주소" bind:value={addr}>
                        </div>
                        <button class="btn btn-dark text-center mt-2" id="login-button" type="submit">
                            가입하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<style>
    .container-login {
        width: auto;
        height: 500px;
    }

    .btn.btn-dark.text-center.mt-2 {
        width: 100%;
    }
</style>

