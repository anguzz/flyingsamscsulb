<script>
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<div>
  <div class="bg-red-950">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <a
          class="text-xl font-bold text-gray-100 md:text-2xl hover:text-red-300"
          href="https://www.instagram.com/flying_samaritans_csulb/"
          >Flying Sams CSULB
        </a>
        <!-- Mobile menu button -->
        <div on:click={toggleNavbar} class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-green-300 focus:outline-none focus:text-green-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu ? 'flex' : 'hidden'}"
      >
        <a class="text-gray-100 font-bold hover:text-red-300" href="#home">Home</a>
        <a class="text-gray-100 font-bold hover:text-red-300" href="#about">About</a>
        <a class="text-gray-100 font-bold hover:text-red-300" href="#calendar">Calendar</a>
        <a class="text-gray-100 font-bold hover:text-red-300" href="#team">Team</a>

      </div>
    </nav>
  </div>
</div>
