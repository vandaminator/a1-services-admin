<script lang="ts">
  import type { PageData } from "./$types";

  // export let data: PageData;
</script>

<h1 class="text-4xl font-bold mb-5">Create new Store</h1>

<form action="/?newStore" method="POST">
  <label for="name">Name: </label>
  <input type="text" id="name" />
  
  <label for="contacts">Contacts: </label>
  <input type="text" id="contacts" />

  <label for="owner-email"> Owner email </label>
  <input type="text" id="owner-email" />

  <!-- <label for="image"> Image </label>
  <input type="file" id="image" /> -->

  <button class="btn variant-filled-primary w-full font-semibold">Submit</button>
</form>

<style>
    input {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }
</style>