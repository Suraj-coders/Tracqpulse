 const menuBtn = document.getElementById('menu-toggle');
 const mobileMenu = document.getElementById('mobile-menu');
    

 menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.contains('scale-y-100');
      
      if (open) {
        mobileMenu.classList.remove('scale-y-100','opacity-100','pointer-events-auto');
        mobileMenu.classList.add('scale-y-0','opacity-0','pointer-events-none');
        menuBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.remove('scale-y-0','opacity-0','pointer-events-none');
        mobileMenu.classList.add('scale-y-100','opacity-100','pointer-events-auto');
        menuBtn.setAttribute('aria-expanded', 'true');
      }
    });

    function toggleDropdown(which) {
      document.getElementById('dropdown-' + which).classList.toggle('hidden');
    }


let currentSlide = 0;
  const track = document.getElementById("testimonial-track");
  const slides = document.querySelectorAll("#testimonial-track .slide");
  const totalSlides = slides.length;

  // Set widths
  track.style.width = `${totalSlides * 100}%`;
  slides.forEach(slide => {
    slide.style.width = `${100 / totalSlides}%`;
  });

  function updateSlide() {
    track.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
  }

  function nextTestimonial() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  }

  function prevTestimonial() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

  // Auto-slide (slower: 6s instead of 4s)
  setInterval(nextTestimonial, 6000);
    