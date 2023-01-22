<script>
  import { onMount } from "svelte";
  import { account } from "../store";

  onMount(() => {
    account.update((n) => {
      n.username = "dick";
      return n;
    });
  });
</script>

<slot />
