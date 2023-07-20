<script>
    let userId = '';
    let pwd = '';
    async function testLogin() {
        const info = {
            userId,
            pwd
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
                <form class="login-form" on:submit={testLogin}>
                    <div class="p-5 input-form-div">
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-dark"><i class="bi bi-person-plus-fill text-white"></i></span>
                            <input type="text" name="userId" id="login-id-input" class="form-control" placeholder="아이디" autocomplete="off" bind:value={userId}>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-dark"><i class="bi bi-key-fill text-white"></i></span>
                            <input type="password" name="pwd" id="login-passwd-input" class="form-control" placeholder="비밀번호" bind:value={pwd}>
                        </div>
                        <button class="btn btn-dark text-center mt-2" id="login-button" type="submit">
                            로그인
                        </button>
                        <p class="text-center mt-5">계정이 없으신가요?
                            <span class="text-dark login-text">
                                <a href="/join">회원가입</a>
                            </span>
                        </p>
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

