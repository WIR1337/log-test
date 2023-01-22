<script>
  import { onMount } from "svelte";
  import { account } from "../store";

  onMount(() => {
    console.log($account);
    console.log(JSON.stringify($account));
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
