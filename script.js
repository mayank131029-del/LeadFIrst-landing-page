window.addEventListener("resize", () => {

  document.title = window.innerWidth
})

document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const currentItem = question.parentElement;
      const currentAnswer = currentItem.querySelector('.faq-answer');

      // Check if the clicked item is already open
      const isOpen = currentItem.classList.contains('active');

      // (Optional) Close all other open FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').style.maxHeight = null;
      });

      // If it wasn't open before, open it now
      if (!isOpen) {
        currentItem.classList.add('active');
        currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
      }
    });
  });
});



const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));

document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', () => {
    // If user scrolls down more than 300px, show the button
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Smooth scroll to top when clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
    
    const wrapper = document.getElementById("marquee-wrapper");
    const track = document.getElementById("marquee-track");

    if (wrapper && track) {
        // 1. Clone the content automatically for a seamless loop
        track.innerHTML += track.innerHTML;

        let position = 0;
        let speed = 0.8; // Change this to make it faster or slower (e.g., 0.5 or 2)
        let isPaused = false;

        function animateMarquee() {
            if (!isPaused) {
                position -= speed;
                
                // 2. When it scrolls halfway (the length of the original content), reset to 0
                if (Math.abs(position) >= track.scrollWidth / 2) {
                    position = 0;
                }
                
                // 3. Apply the movement
                track.style.transform = `translateX(${position}px)`;
            }
            
            // 4. Request the next frame for smooth 60fps animation
            requestAnimationFrame(animateMarquee);
        }

        // 5. (Optional) Pause the scroll when the user hovers over it
        wrapper.addEventListener("mouseenter", () => isPaused = true);
        wrapper.addEventListener("mouseleave", () => isPaused = false);

        // Start the loop
        animateMarquee();
    }
});

