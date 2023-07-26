<script>
    export let data;
    console.log(data);
</script>
<section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">

        {#each data.item as row}
            <div class="col mb-5">
                <div class="card h-100">
                    <!-- Product image-->
                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- 식당명-->
                            <h5 class="fw-bolder">{row.title}</h5>
                            <!-- 카테고리 -->
                            {row.content}
                        </div>
                    </div>
                </div>
            </div>
        {/each}

    </div>
</section>
