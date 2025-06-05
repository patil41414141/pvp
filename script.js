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







  












  