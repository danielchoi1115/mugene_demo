<script>
  import TyperButton from "./TyperButton.svelte";
  export let selectedSeqences;
  export let selectedRegion, sequenceInput, text;

  let placeholder = "Type Sequence of Cap Region";
  let isAllInputFilled = false;
  $: sequenceInput && checkAllInputFilled();
  $: selectedRegion && setPlaceholder();

  function setPlaceholder() {
    if (selectedRegion === "five_cap") {
      placeholder = "Type Sequence of '5-Cap Region";
    } else if (selectedRegion === "five_utr") {
      placeholder = "Type Sequence of '5-UTR Region";
    } else if (selectedRegion === "coding") {
      placeholder = "Type Sequence of Coding Region";
    } else if (selectedRegion === "three_utr") {
      placeholder = "Type Sequence of '3-UTR Region";
    } else if (selectedRegion === "tail") {
      placeholder = "Type Sequence of Tail Region";
    }
  }
  function setRegion(value) {
    selectedRegion = value;
    text = sequenceInput[selectedRegion];
    document.getElementById("sequenceInputField").focus();
  }
  function checkAllInputFilled() {
    for (let [key, value] of Object.entries(sequenceInput)) {
      if (value === "") {
        isAllInputFilled = false;
        return;
      }
    }
    isAllInputFilled = true;
  }
  function setSequenceInput() {
    sequenceInput[selectedRegion] = text;
  }

  function addSelection() {
    let newSelection = {
      ...{
        sequenceId: Math.random().toString(16).slice(2),
        dir: "-",
        filename: "custom sequence",
        addedDate: new Date(),
      },
      ...sequenceInput,
    };
    selectedSeqences = [...selectedSeqences, newSelection];

    sequenceInput = {
      five_cap: "",
      five_utr: "",
      coding: "",
      three_utr: "",
      tail: "",
    };
    selectedRegion = "five_cap";
    text = "";
  }
</script>

<div class="grid justify-center items-center mx-auto grid-cols-9 my-4">
  <p
    class="text-purple-700 dark:text-purple-300 font-semibold text-sm text-center justify-center"
  >
    3' –
  </p>

  <TyperButton
    bind:group={selectedRegion}
    bind:value={sequenceInput.five_cap}
    key="five_cap"
    on:click={() => setRegion("five_cap")}
  />

  <p
    class="text-purple-700 dark:text-purple-300 font-semibold text-sm text-center justify-center"
  >
    –––
  </p>
  <TyperButton
    bind:group={selectedRegion}
    key="five_utr"
    bind:value={sequenceInput.five_utr}
    position="left"
    on:click={() => setRegion("five_utr")}
  />
  <TyperButton
    bind:group={selectedRegion}
    key="coding"
    bind:value={sequenceInput.coding}
    position="middle"
    on:click={() => setRegion("coding")}
  />
  <TyperButton
    bind:group={selectedRegion}
    key="three_utr"
    bind:value={sequenceInput.three_utr}
    position="right"
    on:click={() => setRegion("three_utr")}
  />
  <p
    class="text-purple-700 dark:text-purple-300 font-semibold text-sm text-center justify-center"
  >
    –––
  </p>
  <TyperButton
    bind:group={selectedRegion}
    key="tail"
    bind:value={sequenceInput.tail}
    on:click={() => setRegion("tail")}
  />
  <p
    class="text-purple-700 dark:text-purple-300 font-semibold text-sm text-center justify-center"
  >
    – 5'
  </p>
</div>

<div class=" mt-4 flex justify-center">
  <div class="flex flex-row w-full focus-within:text-purple-500">
    <input
      class="flex w-3/4 pl-2 pr-2 text-sm text-gray-500 placeholder-gray-600 overflow-y-scroll bg-white border-1 rounded-l-xl dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
      type="text"
      id="sequenceInputField"
      {placeholder}
      bind:value={text}
      aria-label="Search"
      on:input={() => setSequenceInput()}
    />
    <button
      class="w-1/4 justify-center items-center text-center content-center mx-auto items-center justify-between text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-500 border border-transparent rounded-r-xl active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple disabled:bg-gray-500 transition ease-in-out duration-300"
      on:click={() => addSelection()}
      disabled={!isAllInputFilled}
    >
      Save
    </button>
  </div>
</div>
