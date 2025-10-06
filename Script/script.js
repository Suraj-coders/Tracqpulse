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


setInterval(nextTestimonial, 4000);

document.addEventListener("DOMContentLoaded", function() {
    const dotItems = document.querySelectorAll(".itemDot");
    const cirItems = document.querySelectorAll(".CirItem");
    const dotCircle = document.querySelector(".dotCircle"); 
    let rotationInterval;
    let isTransitioning = false;

   
    cirItems[0].classList.add("active");
    dotItems[0].classList.add("active");

    function changeTab(index) {
        if (isTransitioning) return;
        isTransitioning = true;

       
        dotItems.forEach(dot => dot.classList.remove("active"));
        cirItems.forEach(cir => cir.classList.remove("active"));

      
        dotItems[index].classList.add("active");
        cirItems[index].classList.add("active");

      
        const totalItems = dotItems.length;
        const rotateDeg = -(index * (360 / totalItems));
        dotCircle.style.transform = `rotate(${rotateDeg}deg)`;
        dotCircle.style.transition = 'transform 1s ease-in-out';

        
        dotItems.forEach((item, i) => {
            const counterRotateDeg = (i * (360 / totalItems)) + rotateDeg;
            item.style.transform = `translate(-50%, -50%) rotate(${counterRotateDeg}deg) translateX(180px) rotate(${counterRotateDeg * -1}deg)`;
            item.style.transition = 'transform 1s ease-in-out';
        });

        
        setTimeout(() => {
            isTransitioning = false;
        }, 500); 
    }

    function startAutoRotation() {
        let currentTab = 0;
        rotationInterval = setInterval(() => {
            currentTab = (currentTab + 1) % dotItems.length;
            changeTab(currentTab);
        }, 5000);
    }

    startAutoRotation();

    dotItems.forEach((item, index) => {
        item.addEventListener("click", () => {
           
            clearInterval(rotationInterval);

         
            changeTab(index);

            setTimeout(startAutoRotation, 5000);
        });
    });
});