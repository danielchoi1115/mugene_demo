<script>
  export let text = "";
  export let group = undefined;
  export let value = undefined;
  export let checked = false;

  $: updateChekbox(group);
  $: updateGroup(checked);

  function updateChekbox(group) {
    checked = group.indexOf(value) >= 0;
  }

  function updateGroup(checked) {
    if (group != undefined) {
      const index = group.indexOf(value);
      if (checked) {
        if (index < 0) {
          group.push(value);
          group = group;
        }
      } else {
        if (index >= 0) {
          group.splice(index, 1);
          group = group;
        }
      }
    }
  }
</script>

<div
  class="form-check flex w-60 pl-2 text-gray-700 dark:text-gray-200 font-normal text-sm pl-5"
>
  <label>
    <input
      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-2 transition duration-150 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer dark:checked:bg-purple-400 dark:checked:border-purple-400"
      bind:checked
      {value}
      type="checkbox"
    />
    {text}
  </label>
</div>
