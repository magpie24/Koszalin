
    document.addEventListener("DOMContentLoaded", function () {
        const burger = document.querySelector(".burger");
        const navUl = document.querySelector("ul");
    
        // Script for menu
        burger.addEventListener("click", function () {
            burger.classList.toggle("active");
            navUl.classList.toggle("active");
        });
    
        navUl.addEventListener("click", function (event) {
            if (event.target.tagName === "A") {
                burger.classList.remove("active");
                navUl.classList.remove("active");
            }
        });
    
        // Script for sticking the nav
        window.addEventListener('scroll', function(){
            var nav = document.querySelector('nav');
            nav.classList.toggle('sticky', window.scrollY > 0);
        });
    
        // Script for Scroll Top Button
        var scrollTopBtn = document.getElementById("scrollTopBtn");
    
        window.onscroll = function() {
            if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };
    
        scrollTopBtn.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

    document.getElementById('przesunButton').addEventListener('click', function() {
  // The buttons scrolls you down 300 px
  window.scrollBy(0, 300);
});
    
// Pobierz elementy do manipulacji
var morerLink = document.querySelector('.Morer .More');
       var container2 = document.querySelector('.container2');

//         // Ustaw obsługę zdarzenia kliknięcia na elemencie More
//         morerLink.addEventListener('click', function(event) {
//             event.preventDefault();

//             // Sprawdź aktualny stan widoczności
//             var isVisible = container2.style.display !== 'none';

//             // Zmiana stanu widoczności na przeciwny
//             container2.style.display = isVisible ? 'none' : 'block';

//             // Zmiana tekstu w zależności od stanu widoczności
//             morerLink.textContent = isVisible ? 'Read More' : 'Show Less';
//         });

        document.addEventListener('DOMContentLoaded', function() {
            var morerLink = document.querySelector('.Morer .More');
            var container2 = document.querySelector('.container2');

            morerLink.addEventListener('click', function(event) {
                event.preventDefault();
                var isVisible = container2.style.display !== 'none';

                container2.style.display = isVisible ? 'none' : 'flex';
                morerLink.textContent = isVisible ? 'Read More' : 'Show Less';
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
  const water = document.querySelector(".water");
  const overlay = document.querySelector(".overlay");

  water.addEventListener("mouseover", function () {
    overlay.style.opacity = "1";
  });

  water.addEventListener("mouseout", function () {
    overlay.style.opacity = "0";
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let currentIndex = 0;
    const totalSlides = document.querySelectorAll(".carousel img").length;
  
    function showSlide(index) {
      const newPosition = -index * 100 + "%";
      carousel.style.transform = "translateX(" + newPosition + ")";
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    }
  
    // Ustawienie interwału dla automatycznego przewijania co 3 sekundy
    const interval = setInterval(nextSlide, 3000);
  
    // Optional: Dodanie obsługi zdarzeń dla przycisków nawigacyjnych
    document.querySelector(".prev").addEventListener("click", function () {
      clearInterval(interval);
      prevSlide();
    });
  
    document.querySelector(".next").addEventListener("click", function () {
      clearInterval(interval);
      nextSlide();
    });
  });