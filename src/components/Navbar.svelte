<script>
  import { fade } from "svelte/transition";
  import { expoOut } from "svelte/easing";
  import { transConst } from "src/lib/interaction";
  export let currentTab = "files";
//   let tabs = ["projects", "files", "model", "reports"];

  function setCurrentTab(value) {
    currentTab = value;
  }
</script>

<ul
  class="grid gap-6 pt-2 grid-cols-4 bg-white shadow-md dark:bg-gray-800 px-20 "
>
  <!-- projects -->
  <button class="relative px-6 py-3" on:click={() => setCurrentTab("projects")}>
    {#if currentTab === "projects"}
      <span
        class="absolute inset-x-0 bottom-0 h-1 mx-10 bg-purple-600 rounded-t-lg"
        aria-hidden="true"
        transition:fade={{
          delay: transConst.delay,
          duration: transConst.duration,
          easing: expoOut,
        }}
      />
    {/if}
    <div
      class="inline-flex justify-center items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
      <span class="ml-4">Projects</span>
    </div>
  </button>
  <!-- files -->
  <button class="relative px-6 py-3" on:click={() => setCurrentTab("files")}>
    {#if currentTab === "files"}
      <span
        class="absolute inset-x-0 bottom-0 h-1 mx-10 bg-purple-600 rounded-t-lg"
        aria-hidden="true"
        transition:fade={{
          delay: transConst.delay,
          duration: transConst.duration,
          easing: expoOut,
        }}
      />
    {/if}
    <div
      class="inline-flex justify-center items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
      <span class="ml-4">Files</span>
    </div>
  </button>
  <!-- model -->
  <button class="relative px-6 py-3" on:click={() => setCurrentTab("model")}>
    {#if currentTab === "model"}
      <span
        class="absolute inset-x-0 bottom-0 h-1 mx-10 bg-purple-600 rounded-t-lg"
        aria-hidden="true"
        transition:fade={{
          delay: transConst.delay,
          duration: transConst.duration,
          easing: expoOut,
        }}
      />
    {/if}
    <div
      class="inline-flex justify-center items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
      <span class="ml-4">Model</span>
    </div>
  </button>
  <!-- reports -->
  <button class="relative px-6 py-3" on:click={() => setCurrentTab("reports")}>
    {#if currentTab === "reports"}
      <span
        class="absolute inset-x-0 bottom-0 h-1 mx-10 bg-purple-600 rounded-t-lg"
        aria-hidden="true"
        transition:fade={{
          delay: transConst.delay,
          duration: transConst.duration,
          easing: expoOut,
        }}
      />
    {/if}
    <div
      class="inline-flex justify-center items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
      <span class="ml-4">Reports</span>
    </div>
  </button>
</ul>
