<script lang="ts">
  import type { ActionData, PageData } from "./$types";

  let email = "";
  let password = "";
  export let form: ActionData;
  // export let data: PageData;
</script>

<form
  class={`flex flex-col gap-3 ${form?.success ? "hidden" : ""}`}
  method="post"
  action="?/login"
>
  <label class="label" for="email">
    <span>Email</span>
    <input
      class="input p-3"
      id="email"
      name="email"
      type="email"
      bind:value={email}
    />
  </label>

  <label class="label" for="password">
    <span>Password</span>
    <input
      class="input p-3"
      id="password"
      name="password"
      type="password"
      bind:value={password}
    />
  </label>

  <button class="btn variant-filled-primary mt-9" type="submit">Login</button>
</form>

{#if form?.success && form.isA1}
  <div class="flex items-center flex-col gap-9">
    <h1 class="text-4xl">Hello A1</h1>
    <a
      class="btn bg-gradient-to-br variant-gradient-tertiary-secondary mx-auto text-3xl"
      href="/store">Go to stores</a
    >
  </div>
{:else if form?.success}
  <div class="flex items-center flex-col gap-9">
    <h1 class="text-4xl">Hello {email}</h1>
    <a
      class="btn bg-gradient-to-br variant-gradient-tertiary-secondary mx-auto text-3xl"
      href={`${form.uid}/dashboard`}>Go to store</a
    >
  </div>
{/if}
