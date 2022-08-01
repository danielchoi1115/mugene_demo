<script>
  import Tags from "src/components/items/Tags.svelte";
  import { statusToString } from "src/lib/common";
  import { createEventDispatcher } from "svelte";

  export let report, offset;
  function convertGeneratedTime(generatedTime) {
    if (status === "pending" || status === "in_progress") {
      return "Not Yet Generated";
    } else if (status === "error") {
      return "error";
    } else {
      return new Date().toDateString();
    }
  }
  let status = report.status,
    generatedTime = convertGeneratedTime(report.generatedTime),
    previewStyle = setPreviewStyle(),
    statusStr = statusToString(report.status),
    progress = false;
  function isError() {
    let chance = Math.random();
    if (chance < 0.25) {
      return true;
    }
    return false;
  }

  (function loop() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 500 + offset;
    setTimeout(function () {
      updateData();
      console.log(`id: ${report.id}, status: ${status}`);
      if (status === "error" || status === "generated") {
        return;
      }
      offset = 0;
      loop();
    }, rand);
  })();
  function setPreviewStyle() {
    if (status === "generated") {
      return "button";
    } else {
      return "disabled";
    }
  }
  function updateData() {
    if (status === "pending") {
      if (isError()) {
        status = "error";
      } else {
        status = "in_progress";
        progress = true;
      }
    } else if (status === "in_progress") {
      if (isError()) {
        status = "error";
      } else {
        status = "generated";
      }
      progress = false;
    }

    previewStyle = setPreviewStyle();
    statusStr = statusToString(status);
    generatedTime = convertGeneratedTime(generatedTime);
  }
  const dispatch = createEventDispatcher();
  const openModal = () => {
    dispatch("openModal", {
      reportData: {
        reportName: report.reportName,
        requester: "jacob02",
        hashtags: report.hashtags,
        results: report.results,
      },
    });
  };
</script>

<tr class="text-gray-700 dark:text-gray-400">
  <td class="px-4 py-3">
    <div class="flex items-center text-sm">
      <!-- Avatar with inset shadow -->
      <div class="w-full grid grid-cols-2 gap-12">
        <div class="flex-col">
          <p class="font-medium">{report.reportName}</p>
          <div class="flex flex-row text-center justify-start gap-2 my-auto">
            <div
              class="flex text-xs py-1 text-gray-600 dark:text-gray-400 border border-none"
            >
              @{report.requester}
            </div>

            {#each report.hashtags as hashtag}
              <Tags value={hashtag.value} style={"hashtag"} />
            {/each}
          </div>
        </div>
        <Tags value={"Preview"} style={previewStyle} on:click={openModal} />
      </div>
    </div>
  </td>
  <td class="px-4 py-3 text-sm"> {report.results.length} </td>
  <td class="px-4 py-3 text-xs">
    <Tags value={statusStr} bind:style={status} bind:progress />
  </td>
  <td class="px-4 py-3 text-sm"> {generatedTime} </td>
  <td class="px-4 py-3">
    <div class="flex items-center space-x-4 text-sm">
      <button
        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
        aria-label="Edit"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          />
        </svg>
      </button>
      <button
        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
        aria-label="Delete"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </td>
</tr>
