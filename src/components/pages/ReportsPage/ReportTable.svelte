<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import ReportTableRow from "./ReportTableRow.svelte";
  export let reports;

  
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const openModal = (event) => {
    dispatch("openModal", {
      reportData: event.detail.reportData,
    });
  };
</script>

<div class="w-full overflow-hidden rounded-lg shadow-xs mb-10">
  <div class="w-full overflow-x-auto">
    <table class="w-full whitespace-no-wrap">
      <thead>
        <tr
          class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
        >
          <th class="px-4 py-3">Report</th>
          <th class="px-4 py-3">Sequences</th>
          <th class="px-4 py-3 pr-20">Status</th>
          <th class="px-4 py-3 pr-7">Generated Date</th>
          <th class="px-4 py-3">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
        {#each reports as report}
          <ReportTableRow
            {report}
            offset={(report.id - 1) * 4000}
            on:openModal={openModal}
          />
        {/each}
      </tbody>
    </table>
  </div>
</div>
