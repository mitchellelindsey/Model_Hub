import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

// Adding a basic functionality for the search button
document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        // For now, we'll just alert the search query.
        // In a real application, you'd search the database and show relevant profiles.
        alert('You searched for: ' + query);
    }
});




// /* Styling for the 'How ModelHub Can Help You as a Creative' section */
document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // Hide all other dropdown contents
        document.querySelectorAll('.dropdown-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
            }
        });

        // Toggle the visibility of the current content
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});




// /* Container for the "Connect With Us" section */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add event listener for scrolling
document.addEventListener('scroll', function() {
    const connectSection = document.querySelector('.section__container.connect-with-us');
    if (isInViewport(connectSection)) {
        connectSection.classList.add('fade-in');
    }
});




// section to the Swiper for reviews -->
const swiper1 = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
       el: '.swiper-pagination',
       clickable: true,
       dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });



  // section to the subscription plan-->
  document.addEventListener('DOMContentLoaded', function() {
    const planButtons = document.querySelectorAll('.plan-button');
    const planContents = document.querySelectorAll('.plan-content');

    planButtons.forEach(button =>