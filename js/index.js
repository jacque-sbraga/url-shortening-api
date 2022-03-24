const bars = document.querySelector(".navbar-mobile");

const handleMenu = () => {
    const navbar = document.querySelector(".navbar");
    const isVisible = navbar.classList.contains("showMenu");

    !isVisible?
    navbar.classList.add("showMenu")
    :navbar.classList.remove("showMenu");
}

bars.addEventListener("click", handleMenu);
