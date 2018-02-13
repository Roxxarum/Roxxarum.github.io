//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
    heading = e.webkitCompassHeading;
    alpha = e.alpha;
    if(e.webkitCompassHeading) {
        compassHeading = e.webkitCompassHeading;
    }   else  { 
        compassHeading = e.alpha;
    }

    if(compassHeading < 10)
        {text_area.textContent = "N";}
    if(compassHeading < 20)
        {text_area.textContent = "nO";}
    if(compassHeading < 50)
        {text_area.textContent = "noR";}
    if(compassHeading < 60)
        {text_area.textContent = "norT";}
    if(compassHeading < 70)
        {text_area.textContent = "nortH";}
    if(compassHeading < 80)
        {text_area.textContent = "north";}
    if(compassHeading < 90)
        {text_area.textContent = "E";}
    if(compassHeading < 100)
        {text_area.textContent = "eA";}
    if(compassHeading < 120)
        {text_area.textContent = "eaS";}
    if(compassHeading < 130)
        {text_area.textContent = "easT";}
    if(compassHeading < 140)
        {text_area.textContent = "East";}
    if(compassHeading < 150)
        {text_area.textContent = "EAst";}
    if(compassHeading < 160)
        {text_area.textContent = "EASt";}
    if(compassHeading < 170)
        {text_area.textContent = "EAST";}
    if(compassHeading < 180)
        {text_area.textContent = "S";}
    if(compassHeading < 190)
        {text_area.textContent = "sO";}
    if(compassHeading < 200)
        {text_area.textContent = "soU";}
    if(compassHeading < 210)
        {text_area.textContent = "souT";}
    if(compassHeading < 220)
        {text_area.textContent = "soutH";}
    if(compassHeading < 230)
        {text_area.textContent = "South";}
    if(compassHeading < 240)
        {text_area.textContent = "SOuth";}
    if(compassHeading < 250)
        {text_area.textContent = "SOUth";}
    if(compassHeading < 260)
        {text_area.textContent = "SOUTH";}
    if(compassHeading < 270)
        {text_area.textContent = "W";}
    if(compassHeading < 280)
        {text_area.textContent = "wE";}
    if(compassHeading < 290)
        {text_area.textContent = "weS";}
    if(compassHeading < 300)
        {text_area.textContent = "wesT";}
    if(compassHeading < 310)
        {text_area.textContent = "West";}
    if(compassHeading < 320)
        {text_area.textContent = "WEst";}
    if(compassHeading < 330)
        {text_area.textContent = "WESt";}
    if(compassHeading < 340)
        {text_area.textContent = "WEST";}
    if(compassHeading < 350)
 

        
         
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


