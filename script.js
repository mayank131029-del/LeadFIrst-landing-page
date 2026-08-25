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

