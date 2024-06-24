<script>
    
    let members = 'members.png'
</script>

<div
    class="mt-12 flex w-full flex-col items-center justify-around gap-5 md:flex-row md:gap-0"
>
    <div
        class="flex max-w-[94%] flex-col items-center justify-center gap-2 text-center text-lg font-semibold italic  text-gray-700 dark:text-gray-300 md:max-w-[40%]"
    >
        <div
            class="relative mb-2 text-3xl font-bold text-error-500 dark:text-gray-200"
        >
            <div
            class="absolute mb-2 bg-clip-text text-3xl font-bold text-transparent blur-sm bg-secondary-500 dark:bg-secondary-500">
                 About us
            </div>
            <div class="relative"> About us</div>
        </div>
        <div>
            Flying samaritans
        </div>
        <div>
           write stuff here about the club <etc class=""></etc>
        </div>
        <div>
            more stuff 
        </div>
        <div>
            more stuff
        </div>
    </div>

    <div class="w-[95%] p-1 md:w-5/12">
        <div
            class="group relative block overflow-hidden rounded-lg border border-gray-800 transition-all duration-500"
        >
            <div
                class="absolute inset-0 z-[8] h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-40"
            />

            <div
                class="transition-all duration-500 group-hover:scale-105"
                title=""
            >
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="{members}" />
            </div>
            <div
                class="absolute -bottom-52 right-2 left-2 z-[9] rounded bg-slate-900 p-4 transition-all duration-500 group-hover:bottom-2"
            >
                <div
                    class="hover:text-primary-600 text-lg font-medium transition duration-500"
                >
                     members &hearts;
                </div>
                <p class="text-slate-400">
                    add a caption/date of members picture and when it was taken here
                </p>
            </div>
        </div>
    </div>
</div>
