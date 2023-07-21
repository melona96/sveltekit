<script>
    export let data;
    console.log(data);
</script>
<style>
    p.fw-bolder {
        color: #29367c;
    }
</style>


<!-- Section-->
<section class="py-5">
    <div class="container px-4 px-lg-5 mt-3">
        <p class="fw-bolder">최근 게시글</p>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {#each data.item as row}
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." style="height: 40%"/>
                        <!-- Product details-->
                        <div class="card-body p-5">
                            <div class="text-center">
                                <!-- 식당명-->
                                <h5 class="fw-bolder"><a href="/board/{row.category_nm_en}/{row.board_seq}">{row.title}</a></h5>
                                <!-- 카테고리 -->
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <!--<div class="text-center">
                                    <p>{row.category_nm}</p>
                                    <p>[{row.input_dt}]</p>-->
                            <div class="text-center">
                                <p>{row.category_nm}</p>
                                <p>[10:51]</p>
                            </div>

                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>





