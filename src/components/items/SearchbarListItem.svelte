<script>
  import CheckIcon from "./CheckIcon.svelte";
  import CssIcon from "src/assets/icons/CssIcon.svelte";
  export let item, selectedSeqences;
  let selected = false;

  function contains() {
    let filtered = selectedSeqences.filter(function (ele) {
      return ele.sequenceId == item.sequenceId;
    });
    if (filtered.length > 0) {
      selected = true;
    } else {
      selected = false;
    }
  }
  $: selectedSeqences && contains();
</script>

<li
  class="text-gray-900 cursor-default select-none hover:bg-purple-300 relative py-2 pl-3 pr-9 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-600"
  id="listbox-option-0"
  role="option"
  class:bg-purple-200={selected}
  class:dark:bg-gray-700={selected}
  class:bg-while={!selected}
  on:click
>
  <div class="flex items-center">
    <CssIcon />
    <p class="ml-3 block truncate">
      {item.filename}
    </p>

    <p class="text-xs text-gray-600 dark:text-gray-400">
      {item.dir}
    </p>
  </div>

  <CheckIcon bind:selected />
</li>

<style>
</style>
