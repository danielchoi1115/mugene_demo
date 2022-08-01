<script>
  import CircularProgress from "@smui/circular-progress";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const click = () => {
    dispatch("click");
  };
  export let style = "default";
  export let value = "";
  export let progress = false;
  let styleset = {
    disabled:
      "text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 font-medium",
    default:
      "text-purple-700 bg-purple-100 rounded-full dark:bg-purple-700 dark:text-purple-100 font-medium",
    button:
      "text-purple-700 bg-purple-100 rounded-full dark:bg-purple-700 dark:text-purple-100 font-medium",
    pending:
      "text-orange-700 bg-orange-100 dark:bg-orange-600 dark:text-orange-100 font-medium",
    error:
      "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100 font-medium",
    in_progress:
      "text-blue-700 bg-blue-100 dark:bg-blue-500 dark:text-blue-100 font-medium",
    generated:
      "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 font-medium",
    hashtag: "bg-purple-500 text-white font-light",
  };

  let styleStr;
  function setStyleset() {
    if (style in styleset) {
      styleStr = styleset[style];
      return;
    }
    styleStr = styleset.default;
  }
  $: style && setStyleset();
</script>

{#if style === "button"}
  <button
    on:click={click}
    class="mx-auto px-3 text-xs py-1 my-auto text-center leading-tight rounded-full transition ease-in-out duration-300 
  {styleStr}"
  >
    {value}
    <!-- {#if progress}
    <CircularProgress style="height: 1rem; width: 1rem;" indeterminate />
  {/if} -->
  </button>
{:else if style != "hashtag"}
  <span
    class="mx-auto px-3 text-xs py-1 my-auto text-center leading-tight rounded-full transition ease-in-out duration-300 
  {styleStr}"
  >
    {value}
    <!-- {#if progress}
    <CircularProgress style="height: 1rem; width: 1rem;" indeterminate />
  {/if} -->
  </span>
{:else}
  <p
    class="flex bg-purple-500 px-3 py-1 rounded-xl text-xs text-white border border-none"
  >
    {value}
  </p>
{/if}
