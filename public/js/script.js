// // Insert Clock
// (function insertClock() {
//   const clock = document.createElement("p");
//   clock.textContent = new Date().toLocaleTimeString();
//   clock.classList.add("clock");
//   document.body.insertAdjacentElement("afterbegin", clock);
// })();

// // Clock function
// (function clock() {
//   setInterval(() => {
//     document.querySelector(
//       ".clock"
//     ).textContent = `${new Date().toLocaleTimeString()}`;
//   }, 1000);
// })();

if (document.querySelector(".year")) {
  document.querySelector(".year").innerHTML = new Date().getFullYear();
}
