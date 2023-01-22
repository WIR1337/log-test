<script>
  import { objFirst, objSecond } from "../../store";
  console.log("objFirst : ", $objFirst);
  console.log("objSecond : ", $objSecond);

  objFirst.update((n) => {
    n.name = "Dmitry";
    return n;
  });
  console.log($objFirst);

  function addvalue() {
    objSecond.update((n) => {
      n.name = "Alex";
      return n;
    });
  }
let obj = {}
console.log('OBJ : ', obj);
obj.a = 1


</script>

<div>ObjFirst : {JSON.stringify($objFirst)}</div>
<div>ObjSecond : {JSON.stringify($objSecond)}</div>

<button on:click={() => addvalue()}>ObjSecnod</button>
