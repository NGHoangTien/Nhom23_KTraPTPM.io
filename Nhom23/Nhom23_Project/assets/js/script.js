document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (sectionTop < screenHeight - 100 && !section.classList.contains("visible")) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.classList.add("visible"); // Đánh dấu section đã hiển thị
            }
        });
    }

    // Thiết lập mặc định cho section
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    fadeInOnScroll();
    window.addEventListener("scroll", fadeInOnScroll);
});
