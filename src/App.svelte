<script lang="ts">
  import Sidebar from "./components/Sidebar.svelte";
  import MuHeader from "./components/Header.svelte";
  // import Asides from "./components/Asides.svelte";
  import Navbar from "./components/Navbar.svelte";
  import BodyContainer from "./components/BodyContainer.svelte";
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { getThemeFromLocalStorage } from "src/lib/interaction";

  import { shared_data } from "src/lib/stores";
  import { onDestroy } from "svelte";
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  import PreviewModal from "./components/items/PreviewModal.svelte";

  let currentTab = "model";
  let isSideMenuOpen = true;
  let isModalOpen = false;
  let previewData = {
    reportName: "",
    requester: "",
    hashtags: [],
    results: [],
  };
  let isDark = getThemeFromLocalStorage();

  let savedParameters, reports, lastParameterId, lastReportId;

  const unsubscribe = shared_data.subscribe((value) => {
    lastReportId = value.lastReportId;
    lastParameterId = value.lastParameterId;
    reports = value.reports;
    savedParameters = value.savedParameters;
  });
  onDestroy(unsubscribe);

  function handleOpenModal(event) {
    previewData = event.detail.reportData;
    isModalOpen = true;
  }
</script>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />

<html class:dark={isDark} lang="en">
  <body class="bg-purple-300 pb-14">
    <div class="py-2" />
    <div
      class="flex h-screen-90 bg-gray-50 dark:bg-gray-900 mt-10 mx-10 rounded-2xl"
      class:overflow-hidden={isSideMenuOpen}
    >
      <Sidebar bind:currentTab />
      <!-- <Asides /> -->
      <div class="flex flex-col flex-1 w-full">
        <MuHeader bind:isDark />
        <Navbar bind:currentTab />
        <main class="h-full overflow-y-auto">
          <BodyContainer
            bind:currentTab
            bind:savedParameters
            bind:lastParameterId
            bind:lastReportId
            bind:reports
            on:openModal={handleOpenModal}
          />
        </main>
      </div>
    </div>

    <PreviewModal bind:open={isModalOpen} bind:reportData={previewData} />
  </body>
</html>
