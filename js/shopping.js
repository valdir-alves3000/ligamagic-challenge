document.addEventListener("DOMContentLoaded", shopping);

export function shopping() {
  let value = 1;
  const quantity = document.querySelector("#quantity");
  const plus = document.querySelector("#plus");
  const minus = document.querySelector("#minus");

  plus.addEventListener("click", increment);
  minus.addEventListener("click", decrement);

  function increment() {
    value++;
    updateQuantity();
  }

  function decrement() {
    if (value <= 0) return;
    value--;
    updateQuantity();
  }

  function updateQuantity() {
    quantity.textContent = value;
  }
}
