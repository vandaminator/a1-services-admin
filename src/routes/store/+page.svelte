<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main class="space-y-4">
  <h1 class="text-3xl font-bold">Stores</h1>
  <div class="space-y-4">
    {#each data.stores as s}
      <div class="border border-primary-500 p-3">
        <h2>{s.name}</h2>
        <a href={`/${s.owners}`} class="">Go to Store</a>
      </div>
    {/each}
  </div>
</main>
