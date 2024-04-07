


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
      
    /*  else {   // To apply the class multiple times if the condition is true 
              entry.target.classList.remove('show');
      } */
    });
});
  
const hiddenElements = document.querySelectorAll('.hidden');
console.log('Hidden Elements:', hiddenElements);
hiddenElements.forEach((el) => observer.observe(el))

// Scroll to top button //

let mybutton = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 2000) {
    mybutton.style.transition = "0.5s";
    mybutton.style.bottom = "2rem";

    
  } else {
    mybutton.style.bottom = "-5rem";
  }
  
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}