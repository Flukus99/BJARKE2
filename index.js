const icon=document.querySelector(".icon-menu");
const menu=document.querySelector(".menu-colapse");
const hoverload=document.querySelector(".hoverload");
icon.addEventListener("click",poner);
function poner() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
    hoverload.classList.remove("hoverload-active");
  }
  else {

    menu.classList.add("is-active")
    hoverload.classList.add("hoverload-active");
  }
}
