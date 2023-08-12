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
});