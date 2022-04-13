const bars = document.querySelector(".navbar-mobile");
// https://clipboardjs.com/
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
// https://blog.erikfigueiredo.com.br/area-de-transferencia-copiar-e-colar-com-javascript-dica-rapida/#:~:text=Ctrl%2BC%20%7C%20Ctrl%2BV%20com%20JS!
// https://www.delftstack.com/pt/howto/javascript/javascript-copy-to-clipboard/
// https://www.youtube.com/watch?v=K7r2-hBydBE
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
