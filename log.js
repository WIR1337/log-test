let obj = { a: undefined, b: { x: undefined, y: { x: 2 } } };

console.log(JSON.stringify(obj, null, 2));

setTimeout(() => {
  obj.b.x = 1;
  obj.b.y.x = 20;
}, 2000);