var slideIndex = 0;
        slajdy();
        
    function slajdy() {
        var i;
        var x = document.querySelectorAll(".slajd");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(slajdy, 3000); // Change image every 3 seconds
    }


    
        /* alert("Miłego dnia!!"); */
    
    









































































































    function hujek(){
        
    }


    
    