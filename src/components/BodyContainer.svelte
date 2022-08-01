<script>
  import { Projects, Files, Model, Reports } from "src/components/pages/index";
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { expoIn } from "svelte/easing";
  export let currentTab,
    savedParameters,
    reports,
    lastParameterId,
    lastReportId;
  import { flip } from "svelte/animate";
  //   let transition = {
  //     delay: transConst.pageDelay,
  //     duration: transConst.pageDuration,
  //     easing: expoOut,
  //   };
  let transitionIn = { duration: 300, delay: 400 };
  let transitionOut = { duration: 400, easing: expoIn };
  let snackbar;
  import MuSnackbar from "src/components/items/MuSnackbar.svelte";
  let tabs = [
    { tabId: "projects", component: Projects },
    { tabId: "files", component: Files },
    { tabId: "model", component: Model },
    { tabId: "reports", component: Reports },
  ];
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const openModal = (event) => {
    dispatch("openModal", {
      reportData: event.detail.reportData
    });
  };
</script>

<!-- <div class="container px-6 mx-auto grid">
  {#each tabs as { tabId, component } (tabId)}
    {#if tabId === currentTab}
      <div in:scale={transitionIn} out:scale={transitionOut}>
        {#if tabId === "model"}
          <svelte:component
            this={component}
            bind:savedParameters
            bind:lastParameterId
          />
        {:else}
          <svelte:component this={component} />
        {/if}
      </div>
    {/if}
  {/each}
</div> -->
<MuSnackbar bind:operations={snackbar} />
<div class="container px-6 mx-auto grid">
  {#if currentTab === "projects"}
    <div in:scale={transitionIn} out:scale={transitionOut}>
      <Projects />
    </div>
  {:else if currentTab === "files"}
    <div in:scale={transitionIn} out:scale={transitionOut}>
      <Files />
    </div>
  {:else if currentTab === "model"}
    <div in:scale={transitionIn} out:scale={transitionOut}>
      <Model
        bind:savedParameters
        bind:lastParameterId
        bind:lastReportId
        bind:snackbar
      />
    </div>
  {:else if currentTab === "reports"}
    <div in:scale={transitionIn} out:scale={transitionOut}>
      <Reports bind:reports on:openModal={openModal} />
    </div>
  {/if}
</div>
