<script>
  import ProjectsSidebar from "./sidebars/ProjectsSidebar.svelte";
  import FilesSidebar from "./sidebars/FilesSidebar.svelte";
  import ModelSidebar from "./sidebars/ModelSidebar.svelte";
  import ReportsSidebar from "./sidebars/ReportsSidebar.svelte";
  export let currentTab;
</script>

{#if currentTab === "projects"}
  <ProjectsSidebar />
{:else if currentTab === "files"}
  <FilesSidebar />
{:else if currentTab === "model"}
  <ModelSidebar />
{:else if currentTab === "reports"}
  <ReportsSidebar />
{/if}
