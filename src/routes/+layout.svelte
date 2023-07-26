<header class="jumbotron text-center header">

</header>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-5">
        <a class="navbar-brand" href="/home">Playground</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav">
                <li class="nav-item dropdown">
                    <a aria-expanded="true" class="nav-link dropdown-toggle" href="#" title="구독 채널" data-toggle="dropdown" aria-haspopup="true">
                        구독<span class="d-none d-md-inline"> </span><span class="d-none d-md-inline">채널</span>
                    </a>
                    <div class="dropdown-menu left">
                        <a class="dropdown-item" href="#">구독중인 채널이 없습니다.</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a aria-expanded="true" class="nav-link dropdown-toggle" href="#" title="채널" data-toggle="dropdown" aria-haspopup="true">
                        주요<span class="d-none d-md-inline"> </span><span class="d-none d-md-inline">채널</span>
                    </a>
                    <div class="dropdown-menu left">
                        <a class="dropdown-item" href="/b/live">베스트 라이브</a>
                        <a class="dropdown-item" href="/b/replay">종합 심의대상</a>
                        <a class="dropdown-item" href="/b/breaking">종합 속보</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/b/notice">공지사항</a>
                        <a class="dropdown-item" href="/b/request">문의 게시판</a>
                        <a class="dropdown-item" href="/b/whyiblocked">채널 문의 게시판</a>

                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/api/board/list">
                        <span class="d-none d-xs-inline">테스트</span><span class="d-none d-md-inline"> </span>테스트
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link" aria-current="page" href="/home">메인메뉴</a></li>
                <li class="nav-item"><a class="nav-link" href="/login">로그인</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        드롭다운
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</nav>

<slot />

<!-- Footer-->
<footer class="py-5 bg-dark">
    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Kenny Commpany 2023</p></div>
</footer>
<!-- Bootstrap core JS-->
