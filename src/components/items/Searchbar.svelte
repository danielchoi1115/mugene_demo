<script>
  import {
    selectTextOnFocus,
    blurOnEscape,
    clickOutside,
    onEscape,
  } from "src/lib/interaction";
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { backIn, sineIn, sineOut, backOut } from "svelte/easing";
  import { sequences } from "src/lib/stores";
  import SearchbarListItem from "./SearchbarListItem.svelte";
  let searchbarText = "";

  let searchbarPreviewOpen = false;
  let transition = {
    duration: 150,
    easing: sineIn,
    x: 5,
    y: 10,
    opacity: 0.2,
  };
  let matchingItems = [];

  export let selectedSeqences = [];

  function searchItems() {
    searchbarPreviewOpen = true;
    matchingItems = sequences.filter(function (ele) {
      return ele.filename.includes(searchbarText);
    });
  }
  function hidePreview() {
    searchbarPreviewOpen = false;
  }
  function toggleSelection(item) {
    let filtered = selectedSeqences.filter(function (ele) {
      return ele.sequenceId != item.sequenceId;
    });
    // selectedSeqences에 이미 선택된 아이템이 있을 경우 삭제, 없다면 추가
    if (
      selectedSeqences.length > 0 &&
      filtered.length < selectedSeqences.length
    ) {
      selectedSeqences = filtered;
    } else {
      selectedSeqences = [...selectedSeqences, item];
    }
  }
</script>

<!-- <div>{JSON.stringify(matchingItems)}</div> -->
<div use:clickOutside={() => hidePreview()} use:onEscape={() => hidePreview()}>
  <div
    class="relative w-full max-w-2xl focus-within:text-purple-500 dark:text-gray-200 dark:focus-within:text-purple-500"
  >
    <div class="absolute inset-y-0 flex items-center pl-2">
      <svg
        class="w-4 h-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <input
      class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-white border-1 rounded-xl dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
      type="text"
      placeholder="Search for Datasets"
      aria-label="Search"
      bind:value={searchbarText}
      use:blurOnEscape
      on:input={() => searchItems()}
      on:focus={() => searchItems()}
    />
    <!-- on:blur={() => hidePreview()}
      use:selectTextOnFocus
      use:blurOnEscape -->
    {#if searchbarPreviewOpen}
      <div
        class="mt-1 relative"
        id="searchbar-container"
        transition:fly={transition}
      >
        <ul
          id="searchbar-list"
          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-y-scroll focus:outline-none sm:text-sm dark:bg-gray-800 transition-all duration-200"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <!--
      Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

      Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
    -->
          {#if matchingItems.length == 0}
            <span class="font-normal ml-3 block truncate"> No result... </span>
          {/if}
          {#each matchingItems as item}
            <SearchbarListItem
              bind:selectedSeqences
              {item}
              on:click={() => toggleSelection(item)}
            />
            <!--
        Checkmark, only display for selectedSeqences option.

        Highlighted: "text-white", Not Highlighted: "text-indigo-600"
      -->
          {/each}
          <!-- More items... -->
        </ul>
      </div>
    {/if}
  </div>
</div>

<style>
  #searchbar-list::-webkit-scrollbar {
    color: rgba(184, 130, 255, 0);
    width: 8px; /* 스크롤바의 너비 */
    overflow: visible;
  }
  #searchbar-list::-webkit-scrollbar-thumb {
    overflow: visible;
    background: rgba(144, 97, 249, 0.8); /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  #searchbar-list::-webkit-scrollbar-track {
    background: rgba(184, 130, 255, 0.1); /*스크롤바 뒷 배경 색상*/
  }
</style>
