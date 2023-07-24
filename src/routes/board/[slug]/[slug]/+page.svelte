<script>
    export let data;
    console.log(data);
</script>
<section class="py-5">

    <div class="container px-4 px-lg-5 mt-5">

        {#each data.item as row}
            <div class="card-body p-4">
                <div class="text-center">
                    <p>{row.category_nm}</p>
                    <h5 class="fw-bolder">{row.title}</h5>
                    {row.content}
                    <p>조회수 [{row.hits}]</p>
                </div>
            </div>
        {/each}

    </div>
</section>
