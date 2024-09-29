<script lang="ts">
    import Page from "$lib/components/Page.svelte";
    import { team_member_info as team_member } from "$lib/utils/team_member";

    export let backgroundClass = 'bg-amber-100';
</script>

<Page id="team" {backgroundClass}>
    <div class="text-center my-4 text-4xl font-bold text-red-700">
        Meet our team
    </div>
    <div class="row">
        {#each team_member as {name, img, position}, i}
        <div class="polaroid">
            <div class="photo">
                <img src="{img}" alt="board image">
            </div>
            <div class="info">
                <div class="name">{name}</div>
                <div class="position">{position}</div>
            </div>
        </div>
        {/each}
    </div>
</Page>

<style>
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
    }

    .polaroid {
        width: 256px;
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin: 10px;
        text-align: center;
      
        overflow: hidden;
        font-family: 'Lucida Handwriting', cursive;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .polaroid:hover {
        transform: scale(1.45); /* Slightly scale up the card */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Increase shadow for lifting effect */
        z-index: 10; /* Ensure the hovered card is above others */
    }

    .polaroid .photo {
        padding: 15px; 
        background: #fff;
    }

    .polaroid img {
        width: 100%;
        display: block;
        border-radius: 5px; 
        transition: transform 0.3s ease-in-out; /* Smooth transition for image zoom */
    }

    .polaroid:hover img {
        transform: scale(1.1); /* Zoom into the image */
    }

    .polaroid .info {
        padding: 10px;
        color: black;
    }

    .name  {
        font-weight: 600;
    }
    .position  {
        font-weight: 400;
    }
</style>
