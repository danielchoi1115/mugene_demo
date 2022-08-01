<script>
  import { onMount } from "svelte";
  import SavedParameter from "./SavedParameter.svelte";
  import { Checkbox } from "../../items/index";
  import Searchbar from "../../items/Searchbar.svelte";
  import {
    addSavedParameters,
    deleteSavedParameters,
    clearSavedParameters,
    addReport,
  } from "src/lib/stores";
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import {
    backIn,
    sineIn,
    sineOut,
    backOut,
    expoIn,
    expoOut,
  } from "svelte/easing";
  import { flip } from "svelte/animate";
  import Chips from "../../items/Chips.svelte";
  import Radiobox from "../../items/Radiobox.svelte";
  import SequenceTyper from "./SequenceTyper.svelte";
  import OptionBox from "./OptionBox.svelte";
  import AddButton from "src/components/items/AddButton.svelte";
  import HashtagTyper from "./HashtagTyper.svelte";

  let transition = {
    duration: 200,
    y: -5,
    easing: sineIn,
  };

  export let savedParameters, lastParameterId, lastReportId, snackbar;
  let options = [];
  let mhc = "hla_a";
  let sequenceOption = "select_sequence";
  let selectedSeqences = [];
  let isInputValid = false;
  let reportName = "";
  let hashtags = [];
  let seqTyper_selectedRegion = "five_cap";
  let seqTyper_sequenceInput = {
    five_cap: "",
    five_utr: "",
    coding: "",
    three_utr: "",
    tail: "",
  };
  let seqTyper_text = "";

  function addParameterSelection() {
    let newSelection = {
      id: lastParameterId + 1,
      sequences: selectedSeqences,
      MHC: mhc,
      options: options,
      savedTime: new Date(),
    };
    addSavedParameters(newSelection);
  }

  function checkInputValid() {
    if (selectedSeqences.length > 0) {
      isInputValid = true;
    } else {
      isInputValid = false;
    }
  }

  function removeSelection(sequenceId) {
    let filtered = selectedSeqences.filter(function (ele) {
      return ele.sequenceId != sequenceId;
    });
    selectedSeqences = filtered;
  }

  function runPrediction() {
    let sequenceList = [];
    for (const parameter of savedParameters) {
      for (const sequence of parameter.sequences) {
        sequenceList.push({
          sequence: sequence,
          MHC: parameter.MHC,
          options: parameter.options,
          overall_score: null,
          score_immuno: null,
          score_degradablity: null,
          half_life: null,
          binding: null,
        });
      }
    }

    addReport({
      id: lastReportId + 1,
      requestId: Math.random().toString(16).slice(2),
      status: "pending",
      reportName:
        reportName.replace(/\s/g, "") !== "" ? reportName : "Untitled",
      hashtags: hashtags,
      requester: "Jacob02",
      requestedTime: new Date(),
      generatedTime: null,
      processTime: 24,
      results: sequenceList,
    });
    snackbar.setSnackbarLabel("Your model has been successfully requested!");
    snackbar.open();
    clearAllInput();
  }

  function clearAllInput() {
    clearSavedParameters();
    selectedSeqences = [];
    seqTyper_selectedRegion = "five_cap";
    sequenceOption = "select_sequence";
    seqTyper_sequenceInput = {
      five_cap: "",
      five_utr: "",
      coding: "",
      three_utr: "",
      tail: "",
    };
    seqTyper_text = "";
    mhc = "hla_a";
    reportName = "";
    hashtags = [];
  }
  $: selectedSeqences && checkInputValid();

  let firstbox_height = "h-60";
  $: selectedSeqences.length && set_firstbox_height();
  $: sequenceOption && set_firstbox_height();

  function set_firstbox_height() {
    if (selectedSeqences.length != 0) {
      firstbox_height = "h-full";
    } else {
      if (sequenceOption === "select_sequence") {
        firstbox_height = "h-60";
      } else {
        firstbox_height = "h-76";
      }
    }
  }
  function getTextWidth(text, font) {
    // re-use canvas object for better performance
    const canvas =
      // @ts-ignore
      getTextWidth.canvas ||
      // @ts-ignore
      (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }
  function getCssStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
  }
  function getCanvasFont(el = document.body) {
    const fontWeight = getCssStyle(el, "font-weight") || "normal";
    const fontSize = getCssStyle(el, "font-size") || "16px";
    const fontFamily = getCssStyle(el, "font-family") || "Times New Roman";

    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }

  let titleWidth;
  function calTitleWidth() {
    var width = getTextWidth(
      reportName,
      getCanvasFont(document.getElementById(`report-name-inputbox`))
    );
    titleWidth = `${width + 24}px`;
  }
  $: reportName && calTitleWidth();
</script>

<div class="grid justify-center gap-6 mt-10 grid-cols-3">
  <div
    class="w-full flex-row items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 transition-height ease-in-out duration-300 
    {firstbox_height}"
  >
    <div>
      <div class="text-base text-left text-purple-700 dark:text-purple-200">
        <input
          id="report-name-inputbox"
          type="text"
          placeholder="Untitled"
          class="py-1 px-3 rounded-lg outline-none font-semibold text-black placeholder:text-gray-500 transition-width duration-100 ease-in-out dark:bg-gray-800 hover:bg-purple-100 focus:bg-purple-200 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:bg-opacity-80 dark:text-purple-100 dark:placeholder:text-gray-400"
          style="width: {titleWidth}; min-width: 5.6rem; max-width: 100%"
          bind:value={reportName}
          on:blur={calTitleWidth}
        />
        <div class="mt-1">
          <!-- <input type="text" value="" placeholder="#hashtags" /> -->
          <HashtagTyper bind:hashtags />
        </div>
      </div>
    </div>
    <div class="flex my-3">
      <svg
        width="600"
        height="1"
        viewBox="0 0 400 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mx-auto"
      >
        <line
          x1="0.0383301"
          y1="0.75"
          x2="400"
          y2="0.75"
          stroke="#545454"
          stroke-width="0.5"
        />
      </svg>
    </div>
    <div class="flex-row bg-white rounded-lg shadow-xs p-3 dark:bg-gray-800">
      <div class="inline-flex flex">
        <Radiobox
          text={"Sequence Selection"}
          value={"select_sequence"}
          bind:group={sequenceOption}
        />
      </div>
      <div class="inline-flex flex">
        <Radiobox
          text={"or Input Own Sequence"}
          value={"own_sequence"}
          bind:group={sequenceOption}
        />
      </div>
    </div>
    {#if sequenceOption === "select_sequence"}
      <div
        class="mt-2 transition-all duration-300"
        in:scale={{ duration: 200, delay: 200, easing: expoOut }}
        out:scale={{ duration: 200, easing: expoIn }}
      >
        <Searchbar bind:selectedSeqences />
      </div>
    {:else if sequenceOption === "own_sequence"}
      <div
        class="transition-all duration-300"
        in:scale={{ duration: 200, delay: 200, easing: expoOut }}
        out:scale={{ duration: 200, easing: expoIn }}
      >
        <SequenceTyper
          bind:selectedSeqences
          bind:selectedRegion={seqTyper_selectedRegion}
          bind:sequenceInput={seqTyper_sequenceInput}
          bind:text={seqTyper_text}
        />
      </div>
    {/if}
    {#if selectedSeqences.length > 0}
      <div class="my-2 flex">
        <p
          class="pl-2 text-sm text-left text-gray-700 font-semibold dark:text-gray-200 mb-1 mt-4"
        >
          Selected Sequences
        </p>
      </div>
    {/if}
    <!-- <div class="grid grid-cols-2 flex-row flex-col gap-2"> -->
    {#each selectedSeqences as sequence (sequence.sequenceId)}
      <div
        class="p-1 flex inline-flex"
        in:scale={{ duration: 200, easing: expoOut }}
        out:scale={{ duration: 200, easing: expoIn }}
        animate:flip={{ duration: 200 }}
      >
        <Chips
          text={sequence.filename}
          removable
          on:close={() => removeSelection(sequence.sequenceId)}
        />
      </div>
    {/each}
    <!-- </div> -->
  </div>
  {#if selectedSeqences.length != 0 || savedParameters.length != 0}
    <div class="flex-row items-center w-full" transition:fly={transition}>
      <OptionBox
        bind:options
        bind:isInputValid
        bind:mhc
        on:click={() => addParameterSelection()}
      />
    </div>
  {/if}
  {#if savedParameters.length > 0}
    <!-- Saved Parameters -->
    <div class="flex-row  items-center w-full" transition:fly={transition}>
      <div
        class="w-full flex-row h-9/10 items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 "
      >
        <div>
          <p
            class="pl-2 text-md text-center font-semibold text-purple-700 dark:text-purple-200"
          >
            Saved Parameters
          </p>
        </div>
        <div class="flex my-3">
          <svg
            width="400"
            height="1"
            viewBox="0 0 400 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto"
          >
            <line
              x1="0.0383301"
              y1="0.75"
              x2="400"
              y2="0.75"
              stroke="#545454"
              stroke-width="0.5"
            />
          </svg>
        </div>
        <div
          class="w-full mt-4 rounded-lg shadow-xs"
          style="overflow-y: scroll;
          overflow-y: overlay; -ms-overflow-style: none; max-height: 27rem"
        >
          <div class="w-full overflow-y-hidden">
            <table class="w-full wrap" id="saved-parameter-container">
              <thead>
                <tr
                  class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                >
                  <th class="px-1 py-3" />
                  <th class="px-4 py-3">Sequence</th>
                  <th class="px-4 py-3">Saved Time</th>
                </tr>
              </thead>
              <tbody class="divide-y dark:divide-gray-700 ">
                {#each savedParameters as { id, sequences, savedTime } (id)}
                  <tr
                    class=" text-gray-700 dark:text-gray-400 bg-white dark:bg-gray-800"
                    animate:flip={{ duration: 300 }}
                    in:fly={{
                      duration: 300,
                      y: -5,
                      easing: sineIn,
                    }}
                    out:scale={{
                      duration: 300,
                      easing: sineOut,
                    }}
                  >
                    <SavedParameter
                      {id}
                      {sequences}
                      parameterSavedTime={savedTime}
                      on:remove={() => deleteSavedParameters(id)}
                    />
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {#if savedParameters.length > 0}
        <div transition:fade={{ duration: 200 }}>
          <AddButton on:click={() => runPrediction()} value="Run Prediction" />
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  ::-webkit-scrollbar {
    color: rgba(184, 130, 255, 0);
    width: 8px; /* 스크롤바의 너비 */
    overflow: visible;
  }
  ::-webkit-scrollbar-thumb {
    overflow: visible;
    background: rgba(144, 97, 249, 0.8); /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(184, 130, 255, 0.1); /*스크롤바 뒷 배경 색상*/
  }
</style>
