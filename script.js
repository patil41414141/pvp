// Open popup
 const popup = document.getElementById("popup");
    const enquiryBtn = document.getElementById("enquiryBtn");
    const closeBtn = document.getElementById("closeBtn");

    enquiryBtn.onclick = () => {
      popup.style.display = "block";
    };

    closeBtn.onclick = () => {
      popup.style.display = "none";
    };

    // Close the popup when clicking outside the popup-content
    window.onclick = (event) => {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    };




    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  document.getElementById('year').textContent = new Date().getFullYear();



//code for slide img

   const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll('.slide');
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove('active');
      index = index === 0 ? 1 : 0;
      slides[index].classList.add('active');
    }, 4000);
  });
    //view more
    document.getElementById("viewMoreBtn").addEventListener("click", function () {
        const hiddenCards = document.querySelectorAll(".project-card.hidden");
        hiddenCards.forEach(card => card.style.display = "block");
        this.style.display = "none"; // Hide button after expanding
    });


  //office


 let slideIndex = 0;
  const slides = document.querySelectorAll(".slider2 .slide");

  function showSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
    });

    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }

  // Initial display
  slides[slideIndex].classList.add("active");

  // Change slide every 3 seconds
  setInterval(showSlides, 3000);



















  




  












  
