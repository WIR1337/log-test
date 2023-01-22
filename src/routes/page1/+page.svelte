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
  import { text, objTest, arrTest } from "../../store";

  console.log("text : ", $text);
  console.log("objTest : ", $objTest);
  console.log("arrTest : ", $arrTest);

  text.update((n) => "QweAsd");
  objTest.update((n) => {
    n.name = "Alex";
    return n;
  });
  arrTest.update((n) => {
    n.push(1);
    return n;
  });
</script>

<div>dick</div>
<div>{$text}</div>
<div>{JSON.stringify($objTest)}</div>
<div>{$arrTest}</div>
