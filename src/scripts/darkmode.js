export default(function(){
    if (localStorage.getItem("darkmode") === "true"){
        document.body.classList.add("darkmode__page")
    }
    if (!window.location.pathname.includes("settings")) return

    const CTA_BUTTON = document.querySelector(".darkmode__button") //CTA = CALL TO ACTION

    CTA_BUTTON.addEventListener("click", clickHandler)

    function clickHandler(){
        document.body.classList.toggle("darkmode__page")
         // hvis body har classen darkmod -> darkmode localstorget er true
         // hvis body har ikke her classen -> darkmode localstorget er false

        // tenary statement
        localStorage.getItem("darkmode") == "true" 
            ? localStorage.setItem("darkmode", "false") 
            : localStorage.setItem("darkmode", "true")
    }


})()