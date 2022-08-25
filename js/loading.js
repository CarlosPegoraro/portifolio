var i = setInterval(function () {
    
    clearInterval(i);

    //document.getElementById("loading").style.display = "none";
    document.getElementById("body").style.overflow = "scroll";
    //document.getElementById("body").style.backgroundImage = "url(/image/background/background.jpg)";
    document.getElementById("loading").style.display = "none";
    document.getElementById("page").style.display = "inline";

}, 4000);