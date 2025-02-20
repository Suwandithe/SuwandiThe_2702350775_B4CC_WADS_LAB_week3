var typed = new Typed("#typed-text",{
    strings: ["Welcome to my porfolio!!"],
    smartBackspace : true,
    typeSpeed : 100,
    backSpeed : 100,
    loop :true,
    loopCount: Infinity,
    startDelay: 1000

});



document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds   
        once: false, 
      
    });
    
});
