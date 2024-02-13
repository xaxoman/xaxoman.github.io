

// Website transitions on scroll using intersection observer

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

