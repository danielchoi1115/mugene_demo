<script>
  export let selected = false;

  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { backIn, sineIn, sineOut, backOut } from "svelte/easing";
  let transition = {
    speed: 150,
    duration: 150,
    easing: sineIn,
  };
</script>

{#if selected}
  <div
    class="text-purple-600 dark:text-purple-400 absolute inset-y-0 right-0 flex items-center pr-4"
    transition:scale={transition}
  >
    <!-- Heroicon name: solid/check -->
    <svg
      class="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
{/if}
