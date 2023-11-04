let incBtn = document.querySelector(".btn-success");
let decBtn = document.querySelector(".btn-danger");
let h1 = document.querySelector("h1");

let counter = 0;
// let counter_2 = --counter;

// console.log(counter);
// console.log(counter_2);
// console.log(h1.innerHTML);

incBtn.addEventListener("click", () => {
  ++counter;
  h1.innerHTML = counter;
});
decBtn.addEventListener("click", () => {
  // counter = counter - 1;

  // counter -= 1;

  // counter--;
  // --counter;
  --counter;
  h1.innerHTML = counter;
});

// we have written a function inside a function call
