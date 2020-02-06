/* -------------------------------
    Burger Click
------------------------------ */

gsap.set("#outline",{drawSVG: "0%"});

var lineToX = gsap.timeline({paused:true});
lineToX.to("#burger-container",{duration: 0.25, rotate:-180},"twist")
.to("#top-line",{duration: 0.5, rotate:-45},"twist")
.to("#bottom-line",{duration: 0.5, rotate:45},"twist")
.to("#outline",{duration: 0.4, drawSVG: "100%"},"twist");

var xToLines = gsap.timeline({paused:true});
xToLines.to("#burger-container",{duration: 0.25, rotate:0},"twist")
.to("#top-line",{duration: 0.5, rotate:0, y:0},"twist")
.to("#bottom-line",{duration: 0.5, rotate:0,y:0},"twist")
.to("#outline",{duration: 0.4, drawSVG: "0%"},"twist")

$("#burger-container").on("click", burgerClick);

function burgerClick(){
    console.log("click");

    if(isNavVisible === false){
        lineToX.invalidate().restart();
        lineToX.play();
        // make the outline visible
        gsap.set("#outline",{alpha:1});
        // set this to true, so that the default mouseenter and mouselever DON'T work

        // slide over web site content
        gsap.to("main",{duration:0.25, x:-navigationWidth});

        // slide over navigaiton site content
        gsap.to("nav",{duration:0.25, x:-navigationWidth});

        isNavVisible = true;
    }else{
        xToLines.invalidate().restart();
        xToLines.play();

        // slide back web site content
        gsap.to("main",{duration:0.25, x:0});

        // slide over navigaiton site content
        gsap.to("nav",{duration:0.25, x:0})

        // set this to false, so that the default mouseenter and mouselever DO work
        isNavVisible = false;
    }
}
