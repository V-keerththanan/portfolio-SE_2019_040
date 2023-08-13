document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const button = section.querySelector("h2");
        const content = section.querySelector("p, ul, .project");

        button.addEventListener("click", () => {
            content.classList.toggle("hide");
            if (!content.classList.contains("hide")) {
                content.classList.add("animate__animated", "animate__fadeIn");
            } else {
                content.classList.remove("animate__animated", "animate__fadeIn");
            }
        });
    });

    const aboutDetails = document.querySelector(".about-details");
    aboutDetails.classList.add("animate__animated", "animate__fadeInUp");

    const nameHeader = document.getElementById("animated-heading");
    nameHeader.innerHTML = nameHeader.textContent.replace(/\S/g, "<span class='animate-letter'>$&</span>");

    const animateLetters = document.querySelectorAll(".animate-letter");
    animateLetters.forEach((letter, index) => {
        letter.style.animation = `fadeInUp 2.5s ${index * 0.1}s ease-in-out both`;
    });
    const footerSection = document.querySelector(".footer-section");
    footerSection.classList.add("animate__animated", "animate__fadeIn");
    const footerEmail = document.querySelector(".footer-email");
    const footerPhone = document.querySelector(".footer-phone");
    
    setInterval(() => {
        footerEmail.classList.toggle("animate__fadeInLeft");
        footerPhone.classList.toggle("animate__fadeInRight");
    }, 2000);

  
});