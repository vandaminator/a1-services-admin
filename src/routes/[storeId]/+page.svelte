<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";

  // export let data: PageData;
  const { storeId } = $page.params;

  // console.log(data)
</script>

<main class="grid grid-cols-2 gap-4">
  <a
    href={`${storeId}/order`}
    class="btn bg-gradient-to-br variant-gradient-primary-tertiary btn-xl"
    >Orders</a
  >
  <a
    href={`${storeId}/product`}
    class="btn bg-gradient-to-br variant-gradient-primary-tertiary btn-xl"
    >Product</a
  >
  <a
    href={`${storeId}/user`}
    class="btn bg-gradient-to-br variant-gradient-primary-tertiary btn-xl"
    >User</a
  >
</main>
