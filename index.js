
export function addOne(value) {
  return ++value;
}

function buttonClicked(){
  const counterDisplay = document.getElementById("counter");
  counterDisplay.textContent = addOne(parseInt(counterDisplay.textContent));
}
