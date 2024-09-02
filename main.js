

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


/* SCRIPT FOR THE CHANGING OF THE LANGUAGE */
document.getElementById('language-select').addEventListener('change', function() {
  const selectedLanguage = this.value;
  loadTranslations(selectedLanguage);
});

function loadTranslations(language) {
  fetch(`locales/${language}.json`)
      .then(response => response.json())
      .then(translations => {
          updateLanguage(translations);
      })
      .catch(error => console.error('Error loading translations:', error));
}

function updateLanguage(translations) {
  document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      const keys = key.split('.');
      let translation = translations;
      keys.forEach(k => {
          translation = translation[k];
      });
     
      // Replace \n with <br> to create line breaks
      if (translation) {
        translation = translation.replace(/\n/g, '<br>');
    }

    element.innerHTML = translation; // Use innerHTML to render HTML elements like <br>
    
  });
}

// Set default language
loadTranslations('en');

// Script for the responsive navbar
function responsiveNav() {
    const navContainer = document.getElementById("navbar-container");
    const hamburgerButton = document.getElementById("hamburger-button");

    // Ensure the initial state of the navbar is hidden
    navContainer.classList.remove("show-nav");

    hamburgerButton.addEventListener("click", () => {
        navContainer.classList.toggle("show-nav");
      
    });
}

// Call the function to set up the event listener
document.addEventListener("DOMContentLoaded", responsiveNav);