<script lang="ts" context="module">

</script>

<script lang="ts">
  import SEO from "svelte-seo";
  import Home from "$lib/pages/Home.svelte";
  //import Events from "$lib/pages/Events.svelte";
  import About from "$lib/pages/About.svelte";
  import Calendar from "$lib/pages/Calendar.svelte";
  import Board from "$lib/pages/Board.svelte"
  import Footer from "$lib/pages/Footer.svelte";

/* basic colors at  https://tailwindcss.com/docs/customizing-colors   more at  https://hypercolor.dev/   */ 
  let primaryBackground = "bg-zinc-900 dark:bg-zinc-900";
  let neutralBackground = "bg-zinc-900 dark:bg-zinc-900";
</script>

<SEO
  title="Flying Samaritans CSULB"
  description="Official website of the Flying Samaritans California State University, Longbeach chapter"
  canonical="https://flyingsamscsulb.com/"
/>

<Home />
<About  />

<Calendar  />