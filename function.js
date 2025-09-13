const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main-content");
const desktopBtn = document.querySelector("#desktop-btn");
const mobileBtn = document.querySelector("#mobile-btn");

// Desktop button = toggle
desktopBtn.onclick = function () {
  if (window.innerWidth > 643) {  // Desktop
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
  } else {  // Mobile
    sidebar.classList.remove("active"); // acts as close button
  }
};

// Mobile open button = open
mobileBtn.onclick = function () {
  sidebar.classList.add("active");
};




//  DIALOGS

const dialog1 =document.querySelector("#dialog1");
document.querySelector("#open-popup1").addEventListener("click", function(){
    dialog1.showModal();
});
dialog1.querySelector(".close-btn").addEventListener("click", function(){
    dialog1.close();
});

//dialog 2 v

const dialog2 =document.querySelector("#dialog2");
document.querySelector("#open-popup2").addEventListener("click", function(){
    dialog2.showModal();
});
dialog2.querySelector(".close-btn").addEventListener("click", function(){
    dialog2.close();
});

//dialog 3 v

const dialog3 =document.querySelector("#dialog3");
document.querySelector("#open-popup3").addEventListener("click", function(){
    dialog3.showModal();
});
dialog3.querySelector(".close-btn").addEventListener("click", function(){
    dialog3.close();
});

//dialog 4 v

const dialog4 =document.querySelector("#dialog4");
document.querySelector("#open-popup4").addEventListener("click", function(){
    dialog4.showModal();
});
dialog4.querySelector(".close-btn").addEventListener("click", function(){
    dialog4.close();
});
//dialog 5 v

const dialog5 =document.querySelector("#dialog5");
document.querySelector("#open-popup5").addEventListener("click", function(){
    dialog5.showModal();
});
dialog5.querySelector(".close-btn").addEventListener("click", function(){
    dialog5.close();
});
//dialog 6 v

const dialog6 =document.querySelector("#dialog6");
document.querySelector("#open-popup6").addEventListener("click", function(){
    dialog6.showModal();
});
dialog6.querySelector(".close-btn").addEventListener("click", function(){
    dialog6.close();
});
//dialog 7 v

const dialog7 =document.querySelector("#dialog7");
document.querySelector("#open-popup7").addEventListener("click", function(){
    dialog7.showModal();
});
dialog7.querySelector(".close-btn").addEventListener("click", function(){
    dialog7.close();
});
//dialog 8 v

const dialog8 =document.querySelector("#dialog8");
document.querySelector("#open-popup8").addEventListener("click", function(){
    dialog8.showModal();
});
dialog8.querySelector(".close-btn").addEventListener("click", function(){
    dialog8.close();
});
