<script>
  import { createEventDispatcher } from "svelte";
  export let position = "self";
  export let key = "";
  export let value = "";
  export let group;

  const dispatch = createEventDispatcher();
  const click = () => {
    dispatch("click");
  };
  let colors;

  function setColor() {
    if (key === group) {
      colors =
        "bg-purple-600 hover:bg-purple-700 active:bg-purple-600 dark:bg-purple-500 ";
    } else {
      if (value === "") {
        colors =
          "bg-gray-400 hover:bg-gray-500 active:bg-gray-600 dark:bg-gray-400 dark:hover:bg-gray-500 dark:active:bg-gray-600";
      } else {
        colors =
          "bg-purple-400 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-300 dark:hover:bg-purple-500 dark:active:bg-purple-600";
      }
    }
  }
  $: group && setColor();
</script>

<button
  class="justify-center items-center h-10 w-10 border border-transparent focus:outline-none focus:shadow-outline-purple transition ease-in-out duration-200 
  {colors} "
  class:rounded-l-xl={position === "left"}
  class:rounded-r-xl={position === "right"}
  class:rounded-lg={position === "self"}
  on:click={click}
>
  {#if key === group}
    <p
      class="text-white dark:text-gray-800 font-semibold text-sm text-center justify-center"
    >
      •••
    </p>
  {/if}
</button>
