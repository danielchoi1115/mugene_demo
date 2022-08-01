<script>
  export let text = "";
  export let group = undefined;
  export let value = undefined;
  export let checked = false;
  let class_checked =
    "opacity-60 flex w-60 pl-2 text-gray-400 dark:text-gray-400 font-semibold text-sm mx-auto transition";
  let class_unchecked =
    "flex w-60 pl-2 text-gray-700 dark:text-gray-200 font-semibold text-sm  transition";
</script>

<label class={group !== value ? class_checked : class_unchecked}>
  <input
    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer dark:checked:bg-purple-400 dark:checked:border-purple-400"
    type="radio"
    {value}
    {checked}
    bind:group
  />
  {text}
</label>
