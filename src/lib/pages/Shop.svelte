<script>
  import Page from "$lib/components/Page.svelte";
  import { shop_cards } from "$lib/utils/shop.ts";
  import ShopCard from "$lib/components/ShopCard.svelte";
  export let backgroundClass = 'bg-white';
</script>

<Page id="Shop" {backgroundClass}>
  <div class="text-center mb-8">
    <h1 class="text-3xl m-6 font-light text-red-600">More items coming soon</h1>
  </div>

  <!-- Grid layout for the cards -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each shop_cards as item}
      <ShopCard {item} />
    {/each}
  </div>
</Page>
