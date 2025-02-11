<script>
  import Page from "$lib/components/Page.svelte";
  import { shop_cards } from "$lib/utils/shop.ts";
  import ShopCard from "$lib/components/ShopCard.svelte";
  export let backgroundClass = 'bg-white';
  let img_therapy = 'img_therapy.png';</script>

<Page id="Shop" {backgroundClass}>
  

  <img src={img_therapy} alt="Centered Image" width = 600
  style="
    display: block; 
    margin: 0 auto; 
    max-width: 100%; 
    height: auto;
  ">

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each shop_cards as item}
      <ShopCard {item} />
    {/each}
  </div>

  <div class="text-center mb-8">
    <h1 class="text-3xl m-6 font-light text-red-600">More items coming soon</h1>
  </div>
</Page>
