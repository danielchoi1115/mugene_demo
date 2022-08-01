<script>
  import { createEventDispatcher } from "svelte";
  import Checkbox from "src/components/items/Checkbox.svelte";
  import AddButton from "src/components/items/AddButton.svelte";
  import Radiobox from "src/components/items/Radiobox.svelte";
  export let options, isInputValid, mhc;

  const dispatch = createEventDispatcher();
  const click = () => {
    dispatch("click");
  };
</script>

<div
  class="w-full h-9/10 flex-row items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
>
  <div class="my-2">
    <p
      class="pl-2 text-sm text-left text-gray-700 font-semibold dark:text-gray-200 mb-1"
    >
      MHC Class
    </p>
    <div class="flex-row bg-white rounded-lg shadow-xs p-3 dark:bg-gray-800">
      <div class="inline-flex flex">
        <Radiobox text={"HLA-A"} value={"hla_a"} bind:group={mhc} />
      </div>
      <div class="inline-flex flex">
        <Radiobox text={"HLA-B"} value={"hla_b"} bind:group={mhc} />
      </div>
      <div class="inline-flex flex">
        <Radiobox text={"HLA-DR"} value={"hla_dr"} bind:group={mhc} />
      </div>
    </div>
  </div>
  <div class="my-2">
    <p
      class="pl-2 text-sm text-left text-gray-700 font-semibold dark:text-gray-200 mb-1"
    >
      mRNA Delivery Mode
    </p>
    <div class="flex-row bg-white rounded-lg shadow-xs p-3 dark:bg-gray-800">
      <div class="inline-flex flex">
        <Checkbox
          text={"Intramuscular Injection"}
          value={"intramuscular_injection"}
          bind:group={options}
        />
      </div>

      <div class="inline-flex flex">
        <Checkbox
          text={"Hypodermic Injection"}
          value={"hypodermic_injection"}
          bind:group={options}
        />
      </div>
      <svg
        class="w-5 h-5 mx-auto mt-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
  <div class="my-2">
    <div class="inline-flex items-center">
      <p
        class="pl-2 text-sm text-left text-gray-700 font-semibold dark:text-gray-200 mb-1"
      >
        mRNA Cargo Type
      </p>
      <p
        class="pl-2 text-xs text-left text-gray-400 font-medium dark:text-gray-400 mb-1"
      >
        (optional)
      </p>
    </div>
    <div class="flex-row bg-white rounded-lg shadow-xs p-3 dark:bg-gray-800">
      <div class="inline-flex flex">
        <Checkbox
          text={"Cationic Lipid-mediated"}
          value={"cationic_lipid_mediated"}
          bind:group={options}
        />
      </div>
      <svg
        class="w-5 h-5 mx-auto mt-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
  <div class="my-2">
    <div class="inline-flex items-center">
      <p
        class="pl-2 text-sm text-left text-gray-700 font-semibold dark:text-gray-200 mb-1"
      >
        Modificationse
      </p>
      <p
        class="pl-2 text-xs text-left text-gray-400 font-medium dark:text-gray-400 mb-1"
      >
        (optional)
      </p>
    </div>
    <div class="flex-row bg-white rounded-lg shadow-xs p-3 dark:bg-gray-800">
      <div class="inline-flex flex">
        <Checkbox
          text={"Uridine to m1Ψ"}
          value={"uridine_to_m1"}
          bind:group={options}
        />
      </div>
      <svg
        class="w-5 h-5 mx-auto mt-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</div>
<AddButton
  on:click={click}
  disabled={!isInputValid}
  value="Save Selected Parameters"
/>
