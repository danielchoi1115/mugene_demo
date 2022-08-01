<script>
  import Snackbar, { Actions, Label } from "@smui/snackbar";
  import Button from "@smui/button";
  import IconButton from "@smui/icon-button";

  let snackbar;
  let snackbarLabel = "";
  let reason = "nothing yet";
  let action = "nothing yet";

  function handleClosedStacked(e) {
    reason = e.detail.reason ?? "Undefined.";
  }
  export const operations = {
    setSnackbarLabel(text) {
      snackbarLabel = text;
    },
    open() {
      snackbar.open();
    },
  };
</script>

<Snackbar
  variant="stacked"
  bind:this={snackbar}
  on:SMUISnackbar:closed={handleClosedStacked}
  timeoutMs={5000}
  surface$class="bg-white dark:bg-gray-800 flex justify-between items-center bg-clip-padding border-b border-gray-200"
>
  <!-- <div
    class="bg-white flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200"
  > -->
  <div
    class="p-4 flex text-gray-700 dark:text-gray-200 font-light text-base  transition "
  >
    {snackbarLabel}
  </div>
  <Actions>
    <button
      class="px-3 py-1 mr-1 mt-2 text-purple-500 hover:bg-purple-100 rounded-md dark:text-purple-100 dark:bg-purple-500 font-light mdc-snackbar__action"
      >Close</button
    >
  </Actions>
  <!-- </div> -->
</Snackbar>
