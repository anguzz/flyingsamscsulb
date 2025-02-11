<script>
    import { onMount } from 'svelte';
    

    export let item;
    
    // Your Stripe publishable key:
    export let stripe_pk = "pk_live_51QntQlCMuPKEpglmLRqRuyEkPBuQK9OVPQEMCxnCuBIA3057dZ2c0i4fe7M2MCtJhO5eCT8X6Fl97rXYRBlbxYRH00Xr7gbEDp";
  
    let scriptLoaded = false;
  
    // Simple "carousel" state
    /**
   * @type {string | any[]}
   */
    let images = [];
    let activeImageIndex = 0;
  
    onMount(() => {
      // Prepare images for the mini-carousel
      images = [item.img1, item.img2, item.img3].filter(Boolean);
  
      // If Stripe script isn't in the DOM yet, inject it
      if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
        const script = document.createElement('script');
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        document.head.appendChild(script);
        script.onload = () => (scriptLoaded = true);
      } else {
        scriptLoaded = true;
      }
    });
  
    function showImage(index) {
      activeImageIndex = index;
    }
  </script>
  
  <!-- This container is just the "card" styling. The *grid* will live in the parent (shop.svelte). -->
  <div class="border border-gray-300 p-4 rounded shadow flex flex-col items-center">
    
    <!-- Main image area -->
    <div class="w-full flex items-center justify-center mb-4">
      {#if images.length > 0}
        <img
          class="max-w-full h-auto object-contain rounded"
          src={images[activeImageIndex]}
          alt={item.name}
        />
      {/if}
    </div>
  
    <!-- Thumbnails -->
    {#if images.length > 1}
      <div class="flex space-x-2 mb-4">
        {#each images as img, idx}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img
            src={img}
            alt={item.name}
            class="w-16 h-16 object-cover cursor-pointer border-2 {idx === activeImageIndex ? 'border-blue-500' : 'border-transparent'}"
            on:click={() => showImage(idx)}
          />
        {/each}
      </div>
    {/if}
  
    {#if scriptLoaded}
      <stripe-buy-button
        buy-button-id={item.button_id}
        publishable-key={stripe_pk}
      >
      </stripe-buy-button>
    {/if}
  </div>
  