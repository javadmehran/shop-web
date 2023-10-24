'use strict'
let slideIndex = 1;
function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);
  let slides = [...document.querySelector(".slides").children];
  slides.forEach((e) => {
    e.classList.remove("active");
  });
  item.classList.add("active");
}
setInterval(() => {
  slideIndex += 1;
  if (slideIndex === 4) {
    slideIndex = 1;
  }

  setSlide(`slid${slideIndex}`, slideIndex);
}, 5000);
// -----------api--------------
const productApi=document.querySelector('#slider2')
fetch(`https://fakestoreapi.com/products`)
.then((res)=>res.json())
.then((data)=>{
  data.map(product=>{
    productApi.innerHTML +=`  <div class="shoping-card thumbnail1">   <div class="img-sec">
    <img class="pic-api" src="${product.image}" alt="">
    <a href="#"><h2>نمایش سریع</h2></a>
</div>
<div class="title">
    <p>${product.title}</p>

    <a href=""> <i class="far fa-light fa-heart"></i></a>
</div>
<div class="price">
    <h2> 1,249,000 تومان</h2>
</div>
<div class="buttons">
    <a href="#"><div>S</div></a>
    <a href="#"><div>M</div></a>
    <a href="#"><div>L</div></a>
    <a href="#"><div>XL</div></a>
</div>
</div>
`
  })
})


// ----------menu bar show ----------------
let sideNav3 = document.getElementById("menuBtn");
let myNav = document.querySelector('nav');
let slid= document.querySelector('.slider');

window.addEventListener('scroll', menuBar)

function menuBar() {
  const t = window.innerHeight * 0.1
  const Box = slid.getBoundingClientRect().bottom
  if (t > Box) {
    myNav.classList.add('show')
    
  } else {
    myNav.classList.remove('show')
   
  }
  
  const t1 = window.innerHeight * 0.1
  const Box2 = slid.getBoundingClientRect().top
  if (t  > Box2) {
   
    sideNav3.classList.add('removeMenu')
  } else {
  
   sideNav3.classList.remove('removeMenu')
  }

}

// ----------navbar-nav-center-ul-li-a------------

const aHover = document.querySelector("#hov-list");
const ulList = document.querySelector(".list-show");
const aHover2 = document.querySelector("#hov-list2");
const ulList2 = document.querySelector(".list-show2");
aHover.addEventListener("mouseover", () => {
  ulList.classList.add("show-list");
});
aHover.addEventListener("mouseout", () => {
  setTimeout(() => {
    ulList.classList.remove("show-list");
  }, 600);
});
ulList.addEventListener("mouseover", () => {
  ulList.classList.add("show-list2");
});
ulList.addEventListener("mouseout", () => {
  ulList.classList.remove("show-list2");
});

// ---2---
aHover2.addEventListener("mouseover", () => {
  ulList2.classList.add("show-list");
});
aHover2.addEventListener("mouseout", () => {
  setTimeout(() => {
    ulList2.classList.remove("show-list");
  }, 600);
  ulList2.addEventListener("mouseover", () => {
    ulList2.classList.add("show-list2");
  });
  ulList2.addEventListener("mouseout", () => {
    ulList2.classList.remove("show-list2");
  });
});


// ---------menu hamburger------
let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById('menuImg');
let sideNav = document.getElementById("sideNav");
sideNav.style.right = "-300px";
menuBtn.addEventListener("click", () => {
  if (sideNav.style.right == "-300px") {
    sideNav.style.right = "0";
  
    menu.setAttribute('src',"./imges/close.png")
  } else {
    sideNav.style.right = "-300px";
  
    menu.setAttribute('src',"./imges/Hamburger.png")
  }
});

// --------------scroll bar product-----------------
let thumbnail = document.getElementsByClassName("thumbnail");
let slider = document.querySelector("#slider");
let leftButton = document.querySelector("#left-slide");
let rightButton = document.querySelector("#right-slide");

leftButton.addEventListener("click", () => {
  slider.scrollLeft -= 125;
});
rightButton.addEventListener("click", () => {
  slider.scrollLeft += 125;
});
const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
  if (slider.scrollLeft > maxScrollLeft -3) {
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}
let play = setInterval(autoPlay, 50);

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  thumbnail[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoPlay, 50));
  });
}

// ----slider 2----
let slider2 = document.querySelector("#slider2");
let leftButton2 = document.querySelector("#left-slide2");
let rightButton2 = document.querySelector("#right-slide2");

leftButton2.addEventListener("click", () => {
  slider2.scrollLeft -= 125;
});
rightButton2.addEventListener("click", () => {
  slider2.scrollLeft += 125;
});
const maxScrollLeft2 = slider2.scrollWidth - slider2.clientWidth;

function autoPlay2() {
  if (slider2.scrollLeft > maxScrollLeft2 -3) {
    slider2.scrollLeft -= maxScrollLeft2;
  } else {
    slider2.scrollLeft += 1;
  }
}


let play2 = setInterval(autoPlay2, 50);

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("mouseover", () => {
    clearInterval(play2);
  });
  thumbnail[i].addEventListener("mouseout", () => {
    return (play2 = setInterval(autoPlay2, 50));
  });
}






// ----slider 3----
let slider3 = document.querySelector("#slider3");
let leftButton3 = document.querySelector("#left-slide3");
let rightButton3 = document.querySelector("#right-slide3");

leftButton3.addEventListener("click", () => {
  slider3.scrollLeft -= 125;
});
rightButton3.addEventListener("click", () => {
  slider3.scrollLeft += 125;
});
const maxScrollLeft3 = slider3.scrollWidth - slider3.clientWidth;

function autoPlay3() {
  if (slider3.scrollLeft > maxScrollLeft3 -3) {
    slider3.scrollLeft -= maxScrollLeft3;
  } else {
    slider3.scrollLeft += 1;
  }
}


let play3 = setInterval(autoPlay3, 50);

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("mouseover", () => {
    clearInterval(play3);
  });
  thumbnail[i].addEventListener("mouseout", () => {
    return (play3 = setInterval(autoPlay3, 50));
  });
}








// -------------- icon to-top---------------
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add('active');
  }else{
    toTop.classList.remove('active');
  }
});
// ---------------loader-----------
window.addEventListener('load',()=>{
  const loader=document.querySelector('.loader');
  loader.classList.add('hidden')
})
// --------show section---------------------------------
const showSec=document.querySelectorAll('.show2')
window.addEventListener('scroll',showCase)
function showCase(){
    const trigger=window.innerHeight*0.7
     showSec.forEach((section)=>{
        const secTop=section.getBoundingClientRect().top
        if(trigger>secTop) {
            section.classList.add("hidden2")
        }
     })
}
