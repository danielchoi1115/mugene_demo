<script>
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  export let open, reportData;
  let response = "Nothing yet.";

  function closeHandler(e) {
    switch (e.detail.action) {
      case "close":
        response = "Closed without response.";
        break;
      case "close":
        response = "closed.";
        break;
      case "accept":
        response = "Accepted.";
        break;
    }
  }
</script>

<!-- reportName: report.reportName,
requester: "jacob02",
hashtags: report.hashtags,
results: report.results, -->
<Dialog
  bind:open
  fullscreen
  aria-labelledby="fullscreen-title"
  aria-describedby="fullscreen-content"
  on:SMUIDialog:closed={closeHandler}
  surface$class="bg-white dark:bg-gray-800"
>
  <Header>
    <Title id="fullscreen-title" class="mt-0">
      <div class="flex-col mb-10">
        <p class="font-semibold mb-3 text-gray-700 dark:text-gray-300">
          Preview of {reportData.reportName}
        </p>
        <div class="flex flex-row text-center justify-start gap-2 my-auto">
          <div
            class="flex text-xs py-1 text-gray-600 dark:text-gray-400 border border-none"
          >
            @{reportData.requester}
          </div>
          {#each reportData.hashtags as hashtag}
            <p
              class="flex bg-purple-500 px-3 py-1 rounded-xl text-xs text-white border border-none"
            >
              {hashtag.value}
            </p>
          {/each}
        </div>
      </div>
    </Title>
    <IconButton action="close" class="material-icons bg-white">close</IconButton
    >
  </Header>
  <Content id="fullscreen-content">
    <div class="flex flex-row gap-4">
      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr
                class="text-xs font-semibold text-center tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
              >
                <th class="px-4 py-3">Sequence</th>
                <th class="px-4 py-3">Overall Scoring</th>
                <th class="px-4 py-3">Immunogenicity</th>
                <th class="px-4 py-3">Degradability</th>
                <th class="px-4 py-3">Novelty</th>
                <th class="px-4 py-3">View Graph</th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
            >
              {#each reportData.results as result}
                <tr class="text-gray-700 dark:text-gray-400">
                  <td class="px-4 py-3">
                    <div class="flex items-center text-sm">
                      <!-- Avatar with inset shadow -->
                      <div class="w-full ">
                        <div class="flex-col">
                          <p class="font-semibold">
                            {result.sequence.filename}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-sm text-center">
                    {(30 + Math.round(Math.random() * 70)) / 100}
                  </td>
                  <td class="px-4 py-3 text-sm text-center">
                    {(30 + Math.round(Math.random() * 70)) / 100}
                  </td>
                  <td class="px-4 py-3 text-sm text-center">
                    {(30 + Math.round(Math.random() * 70)) / 100}</td
                  >
                  <td class="px-4 py-3 text-sm text-center"
                    >{(30 + Math.round(Math.random() * 70)) / 100}
                  </td>
                  <td class="justify-center text-center mx-auto">
                    <button
                      class="mx-auto px-3 text-xs py-1 my-auto justify-center text-center font-semibold leading-tight transition-colors duration-150 border border-transparent rounded-xl text-purple-700 bg-purple-100 rounded-full dark:bg-purple-700 dark:text-purple-100 active:bg-purple-400 hover:bg-purple-300 focus:outline-none focus:shadow-outline-purple"
                    >
                      Graph
                    </button>
                  </td>
                </tr>{/each}
            </tbody>
          </table>
        </div>
        <div
          class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
        >
          <span class="flex items-center col-span-3">
            Showing {reportData.results.length} of {reportData.results.length}
          </span>
          <span class="col-span-2" />
          <!-- Pagination -->
          <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul class="inline-flex items-center">
                <li>
                  <button
                    class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg
                      class="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                  >
                    1
                  </button>
                </li>
                <!-- <li>
                  <button
                    class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                  >
                    2
                  </button>
                </li>
                <li>
                  <span class="px-3 py-1">...</span>
                </li>
                <li>
                  <button
                    class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                  >
                    4
                  </button>
                </li>
                <li>
                  <button
                    class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                  >
                    5
                  </button>
                </li> -->
                <li>
                  <button
                    class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg
                      class="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  </Content>
  <Actions>
    <button
      class="px-3 py-1 mr-1 mt-2 text-purple-500 hover:bg-purple-100 rounded-md dark:text-purple-100 dark:bg-purple-500 font-light mdc-dialog__button mdc-ripple-upgraded"
      data-mdc-dialog-action="close">Close</button
    >
  </Actions>
</Dialog>
