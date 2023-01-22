<!-- <script>
  import { onMount } from "svelte";
  import { account } from "../../store";

  console.log($account);

  account.update((n) => {
    n.username = "dick228";
    return n;
  });

  setTimeout(() => {
    console.log("time");
    account.update((n) => {
      n.username = "228";
      return n;
    });
  }, 1000);
</script> -->
<script>
  import { text } from "../../store";
  console.log(text);

  text.update((n) => "QweAsd");
</script>

<div>dick</div>
<div>{$text}</div>
