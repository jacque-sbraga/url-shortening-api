const bars = document.querySelector(".navbar-mobile");

const handleMenu = (event) => {
    const navbar = document.querySelector(".navbar");
    const isActive = navbar.classList.contains("active");
    console.log(event)
   
    if(event.type === "touchstart"){
        event.preventDefault();
    }
    
    event.currentTarget.setAttribute("aria-expanded", isActive? false : true)
    navbar.classList.toggle("active");
}

bars.addEventListener("click", handleMenu);
bars.addEventListener("touchstart", handleMenu, { passive: false })
