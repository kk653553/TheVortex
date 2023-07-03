const navToggle = document.querySelector('#navToggle');
const navClose = document.querySelector('#navClose');
const sidebar = document.querySelector('.sidebar');

navToggle.addEventListener("click",function() {
  if(navToggle.classList.contains("fa-bars")) 
  {
    navToggle.classList.replace("fa-bars","fa-times")
  }
  
  else {
    navToggle.classList.replace("fa-times","fa-bars");
  }
  
  sidebar.classList.toggle("showSidebar")
});

// Glow Effect

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 2000, fill: "forwards" });
}
