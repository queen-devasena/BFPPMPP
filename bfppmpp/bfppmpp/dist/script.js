const buttons = document.querySelectorAll(".panel-buttons button");
const sections = document.querySelectorAll(".panel-section");
const panel = document.querySelector(".panel");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  panel.classList.add("is-active") :
  panel.classList.remove("is-active");
  panel.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});