<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { LayoutData } from "./$types";
  import { getContext } from "svelte";

  export let data: LayoutData;
  const store = getContext<
    Writable<{
      contacts: string;
      created_at: string;
      id: number;
      image: string | null;
      name: string;
      owners: string;
    }>
  >("store");

  $: store.set(data.store)
</script>

<slot />
