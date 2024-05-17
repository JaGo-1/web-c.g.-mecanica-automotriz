const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const l1 = document.querySelector("#link-1");
const l2 = document.querySelector("#link-2");
const l3 = document.querySelector("#link-3");

open.addEventListener("click", () => {
  nav.classList.add("nav-visible");
});

function closeNav() {
  nav.classList.remove("nav-visible");
}

close.addEventListener("click", closeNav);
l1.addEventListener("click", closeNav);
l2.addEventListener("click", closeNav);
l3.addEventListener("click", closeNav);
