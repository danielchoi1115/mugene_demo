<script>
  import {
    clickOutside,
    getThemeFromLocalStorage,
    setThemeToLocalStorage,
  } from "src/lib/interaction";
  import ProfileMenu from "./ProfileMenu.svelte";
  import NotificationMenu from "./NotificationMenu.svelte";
  export let isDark;
  let isProfileMenuOpen = false;
  let isNoficiationMenuOpen = false;
  let handler = {
    toggleProfileMenu() {
      isProfileMenuOpen = !isProfileMenuOpen;
    },
    closeProfileMenu() {
      isProfileMenuOpen = false;
    },
    toggleNotificationMenu() {
      isNoficiationMenuOpen = !isNoficiationMenuOpen;
    },
    closeNotificationMenu() {
      isNoficiationMenuOpen = false;
    },
    toggleTheme() {
      isDark = !isDark;
      setThemeToLocalStorage(isDark);
    },
  };
</script>

<header class="z-0 py-4 bg-white dark:bg-gray-800 rounded-t-2xl">
  <div
    class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
  >
    <a
      class="justify-center flex mx-auto pl-10 text-lg font-bold text-gray-800 dark:text-gray-200"
      href="#"
    >
      MuGene
    </a>
    <!-- Mobile hamburger
    <button
      class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
      on:click={() => handler.toggleSideMenu()}
      aria-label="Menu"
    >
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button> -->
    <!-- Search input -->

    <ul class="flex items-center flex-shrink-0 space-x-6">
      <!-- Theme toggler -->
      <li class="flex">
        <button
          class="rounded-md focus:outline-none focus:shadow-outline-purple"
          on:click={() => handler.toggleTheme()}
          aria-label="Toggle color mode"
        >
          {#if isDark}
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
          {:else}
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          {/if}
        </button>
      </li>
      <!-- Notifications menu -->
      <li
        class="relative"
        use:clickOutside={() => handler.closeNotificationMenu()}
      >
        <button
          class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
          on:click={() => handler.toggleNotificationMenu()}
          aria-label="Notifications"
          aria-haspopup="true"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
            />
          </svg>
          <!-- Notification badge -->
          <span
            aria-hidden="true"
            class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
          />
        </button>
        <template x-if="isNotificationsMenuOpen" />
        {#if isNoficiationMenuOpen}
          <NotificationMenu />
        {/if}
      </li>
      <!-- Profile menu -->
      <li class="relative" use:clickOutside={() => handler.closeProfileMenu()}>
        <button
          class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
          on:click={() => handler.toggleProfileMenu()}
          aria-label="Account"
          aria-haspopup="true"
        >
          <img
            class="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=aa3a807e1bbdfd4364d1f449eaa96d82"
            alt=""
            aria-hidden="true"
          />
        </button>
        {#if isProfileMenuOpen}
          <!-- <template> -->
          <ProfileMenu />
          <!-- </template> -->
        {/if}
      </li>
    </ul>
  </div>
</header>
