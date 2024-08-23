<script lang="ts">
  import Page from "$lib/components/Page.svelte";
  import Text from "$lib/components/Text.svelte";
  import { primaryBackground } from "$lib/utils/constants";

  export let backgroundClass = primaryBackground;


</script>

<Page id="about" title=" " {backgroundClass}>
  <Text>
    <div
    class="flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover page lg:bg-fixed"
     >
    <div class="text-center">
        <h1 class="text-6xl m-6  font-light">About us </h1>
        <p class="text-2xl m-2">   Coming soon</p> <br> 
  
    </div>
  
      
  </Text>
</Page>
<style>


.about-container {
      position: relative;
      background-color: #252628; 
      background-position-x: right; 
      border-radius: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
      color:rgb(154, 213, 250);
  }
  .about-title {
       font-size: 3.0rem;
       font-weight: 650;
       padding-left:3rem;
      padding-top:10px;
       color:rgb(215, 219, 223);
   }
   
   .about-subtitle {
       width: 90%;
       font-weight: 500;
       font-size: 1.5rem;
       line-height: 2rem;
       color:rgb(215, 219, 223);
   }
 
 img{
  border-radius: 50%;
  margin-left:2rem;
  float:left;
  margin-right:15px;
  border-color:#858789;
  border-width: 4px;
 }
</style>