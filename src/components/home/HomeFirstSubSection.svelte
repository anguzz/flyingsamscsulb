<script>
    
    let members = 'members.png'
</script>

<div
    class="mt-12 flex w-full flex-col items-center justify-around gap-5 md:flex-row md:gap-0"
>
    <div
        class="flex max-w-[94%] flex-col items-center justify-center gap-2 text-center text-lg font-semibold italic  text-gray-700 dark:text-gray-300 md:max-w-[40%]"
    >

       <!-- below responsible for formatting text next to image-->
        <div 
            class="relative mb-2 text-3xl font-bold text-primary-500 dark:text-primary-500" 
        >
            <div class="relative"> Flying samaritans CSULB </div>
        </div>

        <div>
           Non-profit organization dedicated to providing free quality healthcare   <etc class=""></etc>
        </div>
        <div class= "font-light">
            Tijuana Mexico 🇲🇽
        </div>
     
    </div>

    <div class="w-[95%] p-1 md:w-5/12">
        <div
            class="group relative block overflow-hidden rounded-lg border border-gray-800 transition-all duration-500"
        >
            <div
                class="absolute inset-0 z-[8] h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover"
            />

            <div
                class="transition-all duration-500 group-hover:scale-105"
                title=""
            >
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="{members}" />
            </div>
            <div
                class="absolute -bottom-52 right-2 left-2 z-[9] rounded bg-surface-400 p-4 transition-all duration-500 group-hover:bottom-2"
            >
             
                <p class="text-warning-500">
                    April Clinic 2024 &hearts;
                </p>
            </div>
        </div>
    </div>
</div>
