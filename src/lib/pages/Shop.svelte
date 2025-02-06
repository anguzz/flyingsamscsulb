<script>
  import { onMount } from 'svelte';

  let scriptLoaded = false;

  export let backgroundClass = 'bg-white';
  import Page from "$lib/components/Page.svelte";

  onMount(() => {
    // Inject Stripe's script if not already injected
    if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
      const script = document.createElement('script');
      script.src = "https://js.stripe.com/v3/buy-button.js";
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => scriptLoaded = true;
    } else {
      scriptLoaded = true;
    }
  });

</script>

<Page id="Shop"  {backgroundClass}> 
  <div class="text-center">
  <h1 class="text-5xl m-6 font-medium text-red-600">  Support us </h1>


  <!-- once more catalog options become available need to make this an object grid -->
<stripe-buy-button
  buy-button-id="buy_btn_1QpL8NCMuPKEpglmL9av9m5W"
  publishable-key="pk_live_51QntQlCMuPKEpglmLRqRuyEkPBuQK9OVPQEMCxnCuBIA3057dZ2c0i4fe7M2MCtJhO5eCT8X6Fl97rXYRBlbxYRH00Xr7gbEDp"
>
</stripe-buy-button>



<h1 class="text-3xl m-6 font-light text-red-600">  More items coming soon </h1>

</div>
</Page>
