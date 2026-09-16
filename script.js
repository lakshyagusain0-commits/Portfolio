document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });


    sections.forEach(function (section) {
        observer.observe(section);
    });


    console.log("Portfolio loaded successfully!");

});
