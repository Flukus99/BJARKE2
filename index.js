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





//----------------------------------------------------SECCION DE FOTOGRAFIAS-----------------------------------------------

const $hoverload=document.querySelector(".hoverLoad");//LLMADO DEL HOVER BACKGROUND
const $imagen1=document.getElementById("imagen1");//LLAMADO DE LA IMAGEN 1
const $imageactive1=document.querySelector(".hover-imagen1");//LLAMADO DE LA IMAGEN DEL HOVER 1
const $imagen2=document.getElementById("imagen2");//LLAMADO DE LA IMAGEN 2
const $imageactive2=document.querySelector(".hover-imagen2"); //LLAMADO DE LA IMAGEN DEL HOVER 2
const $icon_close=document.querySelector(".icon-cross"); // LLAMADO DEL ICONO

$imagen1.addEventListener("click",()=>{
  activar($imageactive1);
  solucion($imageactive1);                  //ESCUCHADOR PARA ACTIVAR HOVER  CON IMAGEN 1
});                                         
$imagen2.addEventListener("click",()=>{
  activar($imageactive2);
  solucion($imageactive2);                  //ESCUCHADOR PARA ACTIVAR EL HOVER CON IMAGEN 2

});
//---------------------------------------------------FUNCION DE ABRIR Y CERAR EL HOVERLOAD--------------------------------
function activar(fotografia){
  $hoverload.classList.add("hoveractive");
  fotografia.classList.add("isactiveimg");      //FUNCION PARA AGREGAR CLASES A LOS ITEMS Y QUE ABRAN EL HOVER
  $icon_close.classList.add("isactiveimg");
}

function solucion(fotografia){
  $icon_close.addEventListener("click",()=>{        //FUNCION PARA REUTILIZAR LA FUNCION CERRAR Y PODER AGREGARLE
    cerrar(fotografia);
  });

}
 
 function cerrar(fotografia) {
  $hoverload.classList.remove("hoveractive");
  fotografia.classList.remove("isactiveimg");
  $icon_close.classList.remove("isactiveimg");
 }     
//----------------------------------------------------------------------------------------------------------------------
