function submitForm() {
    let frm = document.querySelector('form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
 }

 const scrollBar = document.querySelector(".work-child-2");
 let buttonRight = document.getElementById('arrow1');
 let buttonLeft2 = document.getElementById('arrow2');

buttonLeft2.onclick = function () {
  if (window.screen.width>1000){
    document.querySelector('.work-child-2').scrollLeft +=500;
  }  
  else if (window.screen.width > 500){
  document.querySelector('.work-child-2').scrollLeft +=250;
  }
  else document.querySelector('.work-child-2').scrollLeft +=100
};

buttonRight.onclick = function () {
  if (window.screen.width>1000){
    document.querySelector('.work-child-2').scrollLeft -=500;
  }  
  else if (window.screen.width > 500){
  document.querySelector('.work-child-2').scrollLeft -=250;
  }
  else document.querySelector('.work-child-2').scrollLeft -=100
};

// function submitForm() {
//     let frm = document.querySelector('form')[0];
//     frm.submit(); // Submit the form
//     location.reload();
//  }

 window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

function scrollBarPosition(){
  if (scrollBar.scrollLeft == 0) {
    buttonRight.style.display = "none"
  }
  else if (scrollBar.scrollLeft > 0)  {
    buttonRight.style.display = "block" 
  } 
if(screen.width<700){
  if ((scrollBar.scrollLeft/scrollBar.scrollWidth)>.45) {
    buttonLeft2.style.display = "none"
  } else {
    buttonLeft2.style.display = "block"
  }
}
if(screen.width>=700){
  if ((scrollBar.scrollLeft/scrollBar.scrollWidth)>.4) {
    buttonLeft2.style.display = "none"
  } else {
    buttonLeft2.style.display = "block"
  }
}
}

 console.log(scrollBar.scrollLeft)

scrollBar.addEventListener("scroll", (event) => {
  scrollBarPosition()
});

let prevScrollPos = window.pageYOffset;
window.addEventListener('load', mobileNavDisplay)
window.addEventListener('resize', mobileNavDisplay)

function mobileNavDisplay(){
  // current scroll position
  const currentScrollPos = window.pageYOffset;
 if (window.scrollY == 0 && screen.width>600) {
    document.querySelector('.show').style.display = "none"
    document.querySelector('.hide').style.display = "flex"
    document.querySelector('.mobile').style.display = "none"

  } else if (window.scrollY !== 0 && screen.width>600) {
    document.querySelector('.show').style.display = "flex"
    document.querySelector('.mobile').style.display = "none"
    document.querySelector('.hide').style.display = "none"
    

  } else if (screen.width<=600) {
    document.querySelector('.mobile').style.display = "flex"
    document.querySelector('.show').style.display = "none"
    document.querySelector('.hide').style.display = "none"
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', mobileNavDisplay);

function myFunction() {
  var x = document.querySelector(".navigation-bottom");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    document.querySelector(".nav-top").style.bottom = "3%"
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}