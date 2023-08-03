export async function load({fetch, params}) {
    console.log(params);
    const param = params;
    try {
        const response = await fetch('/api/board/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
            // credentials: 'include'
        });

        if (response.ok) {
            console.log('연동 성공');
            const data = await response.json();
            return data;
        } else {
            // 로그인 실패 처리
            console.log('연동 실패')
        }
    } catch (error) {
        // 에러 처리
    }
}