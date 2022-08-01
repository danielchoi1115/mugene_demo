<script>
  import { onMount } from "svelte";

  export let hashtags = [];
  function getIndex(id) {
    var pos = -1;
    hashtags.forEach(function (tag, i) {
      if (tag.id == id) pos = i;
      return;
    });
    return pos;
  }
  function deleteTag(id) {
    hashtags = hashtags.filter(function (tag) {
      return tag.id != id;
    });
  }
  function buttonHandler(e, id) {
    if (e.keyCode == 37) {
      moveFocus(id, "left");
    } else if (e.keyCode == 39) {
      moveFocus(id, "right");
    } else if ([8, 46].includes(e.keyCode)) {
      moveFocus(id, "delete");
      deleteTag(id);
    }
  }
  function inputTextHandler(e) {
    // 8 = backspace, 37 = Left arrow, 46 = delete
    if ([8, 37, 46].includes(e.keyCode) && hashtagText === "") {
      if (hashtags.length == 0) return;
      focusOn(`hashtag_${hashtags[hashtags.length - 1].id}`);
    } else if (e.keyCode == 39 && hashtagText === "") {
      if (hashtags.length == 0) return;

      focusOn(`hashtag_${hashtags[0].id}`);
    } else if ([9, 13].includes(e.keyCode) && hashtagText !== "") {
      e.preventDefault();
      addTag();
      clearText();
      if (hashtags.length < 3) {
        focusOn(`hashtag_input_box`);
      }
    }
    setTagFocus();
  }
  function addTag() {
    if (isValid()) {
      var text = hashtagText.startsWith("#")
        ? `${hashtagText}`
        : `#${hashtagText}`;
      hashtags = [...hashtags, { id: getNextId(), value: text }];
    }
    clearText();
  }
  function addTagOnLeave() {
    if (hashtagText !== "") {
      addTag();
      clearText();
      setTagFocus();
    }
  }
  function isValid() {
    let valid = true;

    hashtags.forEach(function (tag, i) {
      if (tag.value == hashtagText) {
        valid = false;
        return;
      }
    });
    return valid;
  }
  function clearText() {
    hashtagText = "";
  }
  function getNextId() {
    if (hashtags.length == 0) return 0;
    return hashtags[hashtags.length - 1].id + 1;
  }
  function moveFocus(id, operation) {
    var currentIndex = getIndex(id);
    var nextPos = getNextPos(currentIndex, operation);
    if (nextPos == -1 || nextPos == hashtags.length) {
      document.getElementById(`hashtag_input_box`).focus();
      return;
    }
    focusOn(`hashtag_${hashtags[nextPos].id}`);
  }
  function getNextPos(currentIndex, operation) {
    if (operation === "left") {
      return currentIndex - 1;
    } else if (operation === "right") {
      return currentIndex + 1;
    } else if (operation === "delete") {
      if (currentIndex < hashtags.length - 1) {
        return currentIndex;
      } else if (currentIndex == hashtags.length - 1) {
        return currentIndex - 1;
      } else if (currentIndex == 0) {
        return currentIndex + 1;
      }
    }
  }
  function focusOn(id) {
    document.getElementById(id).focus();
  }
  function setTagFocus() {
    if (hashtagText === "") {
      disabled = false;
    } else {
      disabled = true;
    }
  }
  function setInputVisible() {
    if (hashtags.length == 3) {
      inputVisible = false;
    } else inputVisible = true;
  }

  let inputVisible = true;
  let hashtagText = "";
  let disabled = false;
  $: hashtagText && setTagFocus();
  $: hashtags && setInputVisible();

  onMount(async () => {
    var item = document.getElementById("hashtag-typer-container");
    window.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });
  });
</script>

<div class="flex ml-2" id="hashtag-typer-container">
  <!-- <input type="text" class="fake" on:keydown|preventDefault={onKeyDown} /> -->
  {#each hashtags as { id, value } (id)}
    <button
      class="mx-0.5 bg-purple-500 focus:bg-purple-700 dark:bg-purple-500 dark:focus:bg-purple-600 px-3 py-1 rounded-xl text-xs text-white font-light border-none outline-none focus:outline-none transition-color duration-200 max-h-6"
      style="white-space:nowrap;"
      on:keydown={(event) => buttonHandler(event, id)}
      id="hashtag_{id}"
      {disabled}>{value}</button
    >
    <!-- on:click|preventDefault={() => conditionedFocus(id)} -->
  {/each}
  {#if inputVisible}
    <input
      class="ml-1 outline-none w-full text-base font-normal dark:bg-gray-800"
      type="text"
      placeholder="#"
      id="hashtag_input_box"
      on:keydown={inputTextHandler}
      on:keyup={(e) => {
        const { target } = e;
        if (target) {
          // @ts-ignore
          target.value = hashtagText;
        }
        setTagFocus();
      }}
      on:blur={addTagOnLeave}
      bind:value={hashtagText}
    />
  {/if}
</div>

<style>
  #hashtag-typer-container {
    overflow-x: scroll;
    overflow-x: overlay;
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>
