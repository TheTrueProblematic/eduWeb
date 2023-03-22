$(document).ready(function () {
    const services = document.querySelectorAll(".service");
    const windowHeight = window.innerHeight;

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -windowHeight / 3 && rect.bottom <= (windowHeight * 4) / 3
        );
    }

    // Function to highlight elements in the viewport
    function highlightVisibleServices() {
        services.forEach((service) => {
            if (isInViewport(service)) {
                service.classList.add("highlight");
            } else {
                service.classList.remove("highlight");
            }
        });
    }

    // Initial check and highlight
    highlightVisibleServices();

    // Listen to scroll events and highlight elements accordingly
    window.addEventListener("scroll", () => {
        highlightVisibleServices();
    });

    // Add jQuery code to handle menu toggle
    $(".menu-toggle").click(function () {
        $(".menu").css("left", function (index, value) {
            return value === "0px" ? "-350px" : "0px";
        });
    });
});
