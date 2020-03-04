const button = document.querySelector("button");
const output = document.querySelector(".output");
const tipVat = 0.15;

button.innerHTML = "Hello";
//// Add event listener
button.addEventListener("click", function() {
  const cost = document.querySelector("input");
  let tip = (cost.value * tipVat).toFixed(2);
  //   let temp = "<h1>You should tip $" + tip + " on $" + cost.value + "</h1>";
  let temp = `<h1> You should top $${tip} on  $${cost.value}</h1>`;
  output.innerHTML = temp;
});
