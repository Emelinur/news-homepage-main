const menuOpen=document.querySelector(".menuOpen");
const menuOverlay=document.querySelector(".menu-overlay")
const menu=document.querySelector(".menu")
const menuList=document.querySelector(".menu-list")
const menuClose=document.querySelector(".menuClose")
menuOpen.addEventListener("click",()=>{
  menuOpen.style.display="none";
  menuClose.style.display="flex";
  menuOverlay.style.display="flex";
menu.style.display="flex";
menuList.style.display="flex";

  console.log("tıklandı")
})
