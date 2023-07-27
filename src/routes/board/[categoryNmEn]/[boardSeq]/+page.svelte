<script>
    export let data;
    console.log(data);
</script>
<section class="py-5">

    <div class="container px-4 px-lg-5 mt-5">
        <div class="card-body p-4">
            <div class="text-center">
                <p>{data.categoryNm}</p>
                <h5 class="fw-bolder">{data.title}</h5>
                {data.content}
                <p>조회수 [{data.hits}]</p>
            </div>
            <div>
                추천
            </div>
            <div>
                비추천
            </div>
        </div>


    </div>
</section>
