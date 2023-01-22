<!-- <script>
  import { onMount } from "svelte";
  import { account } from "../store";

  console.log("page script start");
  console.log($account);
  onMount(() => {
    console.log("page onMount start");
    console.log($account);
    console.log(JSON.stringify($account));
    

    account.update((n) => {
      n.username = "asdf";
      return n;
    });

    console.log("page onMount finish");
  });

  console.log("page script finish");
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p> -->
