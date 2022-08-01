<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const click = () => {
    dispatch("click");
  };
  export let value = "";
  export let disabled = false;
</script>

<div class="mb-6 mt-2">
  <button
    class="flex text-center items-center justify-between w-full h-14 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple disabled:bg-gray-500"
    on:click={click}
    {disabled}
  >
    {value}
    <span class="w-5 h-5 bg-purple-300 rounded-md" aria-hidden="true">+</span>
  </button>
</div>
