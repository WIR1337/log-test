<script>
  import { onMount } from "svelte";
  import { account } from "../store";

  console.log("From layout 1", $account);
  console.log("layout script start");

  onMount(() => {
    console.log("layout onMount start");
    console.log("From layout2", $account);

    account.update((n) => {
      n.username = "dick";
      return n;
    });
    console.log("layout onMount finish");

    account.update((n) => {
      n.username = "qqqqq";
      return n;
    });
    console.log("From layout 3", $account);
  });

  console.log("layout script finish");
</script>

<slot />
