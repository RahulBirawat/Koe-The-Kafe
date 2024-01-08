let openBreadModal = document.querySelector(".bread");
let openCheeseModal = document.querySelector(".cheese");
let openCoffeeModal = document.querySelector(".coffee");
let closeModal1 = document.querySelector(".closeModal1");
let closeModal2 = document.querySelector(".closeModal2");
let closeModal3 = document.querySelector(".closeModal3");
const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
const modal3 = document.querySelector("#modal3");

openBreadModal.addEventListener("click", () => {
  modal1.showModal();
});
closeModal1.addEventListener("click", () => {
  modal1.close();
});
openCheeseModal.addEventListener("click", () => {
  modal2.showModal();
});
closeModal2.addEventListener("click", () => {
  modal2.close();
});
openCoffeeModal.addEventListener("click", () => {
  modal3.showModal();
});
closeModal3.addEventListener("click", () => {
  modal3.close();
});
