<script>
  import ReportTable from "./ReportTable.svelte";
  export let reports;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const openModal = (event) => {
    dispatch("openModal", {
      reportData: event.detail.reportData,
    });
  };
</script>

<div class="grid grid-cols-2 gap-6">
  <div class="mb-5 mt-10 flex justify-left flex-1">
    <div class="relative w-full max-w-2xl focus-within:text-purple-500">
      <div class="absolute inset-y-0 flex items-center pl-2">
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-white border-1 rounded-xl dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
        type="text"
        placeholder="Search for Reports"
        aria-label="Search"
      />
    </div>
  </div>
  <div class="mb-5 mt-10 flex justify-left flex-1">
    <div class="relative w-full max-w-2xl focus-within:text-purple-500">
      <div class="absolute inset-y-0 flex items-center pl-2">
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-white border-1 rounded-xl dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
        type="text"
        placeholder="Search for #Hashtags"
        aria-label="Search"
      />
    </div>
  </div>
</div>
<!-- Cards -->

<h2 class="my-6 text-xl font-semibold text-gray-700 dark:text-gray-200">
  Pending Reports
</h2>
<!-- Cards -->
<ReportTable bind:reports on:openModal={openModal} />
