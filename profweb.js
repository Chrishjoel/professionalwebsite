function menubar(){

    document.getElementById('navbar').classList.toggle('active');

}
var typed = new Typed('.type', {

    strings: ['','Think','Create','Present'],
    typeSpeed:100,
    backSpeed:70,
    loop:true,
  });
  
document.getElementById("create").addEventListener("click", function(){
    document.getElementById("form-overlay").style.display = "flex";
})

document.querySelector(".close-icon").addEventListener("click", function(){
    document.getElementById("form-overlay").style.display = "none";
})

