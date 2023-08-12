document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const button = section.querySelector("h2");
        const content = section.querySelector("p, ul, .project");

        button.addEventListener("click", () => {
            content.classList.toggle("hide");
        });
    });
});
