<script lang="ts" context="module">

</script>

<script lang="ts">
  import SEO from "svelte-seo";
  //import Events from "$lib/pages/Events.svelte";
  import Shop from "$lib/pages/Shop.svelte";


/* basic colors at  https://tailwindcss.com/docs/customizing-colors   more at  https://hypercolor.dev/   */ 
  let primaryBackground = "bg-zinc-900 dark:bg-zinc-900";
  let neutralBackground = "bg-zinc-900 dark:bg-zinc-900";
</script>

<SEO
  title="Flying Samaritans CSULB"
  description="Official website of the Flying Samaritans California State University, Longbeach chapter"
  canonical="https://flyingsamscsulb.com/"
/>


<Shop  />



