document.getElementById("openMenu").onclick = () =>
  document.getElementById("menu").classList.add("active");

document.getElementById("closeMenu").onclick = () =>
  document.getElementById("menu").classList.remove("active");


window.addEventListener("scroll", () => {
    const header = document.querySelector(".homepage header");
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
    
 AOS.init({
        duration: 1200,
        easing: "ease-out-back",
        once: true
    });


// swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // alert
  let popupShown = false;

window.addEventListener("scroll", function () {

  if (!popupShown && window.scrollY > 3000) {
    document.querySelector(".avada-popup-overlay").classList.add("show");
    popupShown = true;
  }
});

document.querySelector(".close-btn").onclick = () => {
  document.querySelector(".avada-popup-overlay").classList.remove("show");
};

// btn back
function checkScroll() {
    var btn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
    setTimeout(checkScroll, 100); 
  }
  checkScroll();

  document.getElementById("backToTop").onclick = function () {
    document.documentElement.scrollTop = 0;
  }; 



const icon = document.getElementById("personalIcon");
const form = document.getElementById("popupForm");
const overlay = document.getElementById("popupOverlay");
const sendBtn = document.getElementById("sendBtn");

icon.onclick = function () {
  form.style.display = "block";
  overlay.style.display = "block";

  setTimeout(() => {
    form.style.transform = "translate(-50%, -50%) scale(1)";
  }, 10);
};


function closeForm() {
  form.style.transform = "translate(-50%, -50%) scale(0.7)";
  
  setTimeout(() => {
    form.style.display = "none";
    overlay.style.display = "none";
  }, 200);
}


overlay.onclick = function () {
  closeForm();
};

sendBtn.onclick = function () {
  closeForm();
};



