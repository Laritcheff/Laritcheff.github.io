let slides = document.querySelectorAll('#slides .slide');
        let currentSlide = 0;
        console.log(slides);

        function nextSlide() {
            slides[currentSlide].className = "slide";
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].className = 'slide showing';
        }
        setInterval(nextSlide, 1000);