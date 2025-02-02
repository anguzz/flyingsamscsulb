<script>
  import { onMount } from 'svelte';

  let scriptLoaded = false;


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

<stripe-buy-button
  buy-button-id="buy_btn_1Qnw2lCMuPKEpglmUatI0C6Y"
  publishable-key="pk_test_51QntQlCMuPKEpglmnQm26phRWDgBUQxdlFMxB1G6K3qQ1S8I6t5JFFXQM3pJVsCySdschxwmY1TEYZJ4C9lWLtPl007wtPPZjT"
>
</stripe-buy-button>

<style>



</style>