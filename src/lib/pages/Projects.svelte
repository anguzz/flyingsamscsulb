<script lang="ts">
  import { primaryBackground } from "$lib/utils/constants";
  import Page from "$lib/components/Page.svelte";
 
  import Dropdown from '$lib/components/Dropdown.svelte';
  import CollapsibleCard from 'svelte-collapsible-card'


  import {projects} from '../utils/projects';

	let innerWidth = 0
	let innerHeight = 0
	$: mobile = innerWidth < 1080;

  export let backgroundClass = primaryBackground;
</script>

<Page id="projects" title="Projects" {backgroundClass}>

 

    <ul>
	
      { #each projects as project }
        <li>
          <CollapsibleCard>
            <div slot='header' class='header'>
              <div class='names'>
                <h2>{ project.heading }</h2>
              </div>
            </div>
            <div slot='body' class='body'>
              { project.content } <br><br>
   
              <a href={project.link} class="link-text" target="_blank" rel="noopener noreferrer">
               <div class = "image-container">
                <div class="image-hover"> 
                 <img src={project.image} alt="image here" width=900 > 
                </div>
                </div>   
                <br><br>
              </div>
          
        
          </CollapsibleCard>
        </li>
      { /each }
    
    </ul>


</Page>

<style>

 #bg{
    background-color: #0f0f10;
       }
 ul {
		list-style: none;
		padding: 0;
		margin: 0 auto;
		width:90%;
		color:  #ffffff;
		font-size: 1.5rem;
    font-weight:bold;
    background-color:#1f1f20;
    border-radius: 10px;
    
	}
	
	li {
		margin-bottom: 0em;
    border-radius: 10px; 
    border-bottom: 1px solid #6b6f71;

	}
	
	.header {
		padding: 0.3em;
		display: flex;
    background-color: #252628;
    border-radius: 10px;
    
	}
  .header:hover{
    background-color: #1d1e1f;
  }
 
  

	.names {
		padding: 0 0 0 1em;
		display: flex;
		flex-direction: column;
		justify-content: center;

	}
	
	h2 {
		margin: 0;
		width: 100%;
    
	}
	
	p {
		margin: 0;
	}
	
	.body {
    padding: 0 0 0 0em;
    text-align: center;
    display: block;
    padding-top: 20px;
	}
  .image-container
  {
      display: flex;
      justify-content: center;
      
  }
  .image-hover:hover{
    box-shadow: 5px 10px 15px #e7e8e9;
    border-radius:10px;
	}



</style>
