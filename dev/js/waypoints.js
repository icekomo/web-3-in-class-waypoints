// var waypoint = new Waypoint({
//   element: document.getElementById('believe'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   }
// })

var inviewBelieve = new Waypoint.Inview({
  element: $('#believe')[0],
  enter: function(direction) {
     // $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
     headerBarChange(direction, scrollDirection = "enter");
  },
  entered: function(direction) {
    // $.notify('Entered triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
        headerBarChange(direction , scrollDirection = "entered");
  },
  exit: function(direction) {
    // $.notify('Exit triggered with direction ' + direction,{     globalPosition: 'right middle', className:"info" })
        headerBarChange(direction , scrollDirection = "exit");
  },
  exited: function(direction) {
    // $.notify('Exited triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
    headerBarChange(direction , scrollDirection = "exited");
  },offset: {
    top: 67 // 67px
  }
})


var inviewBelieve = new Waypoint.Inview({
  element: $('#white-background-content')[0],
  enter: function(direction) {
     // $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
     headerBarChange(direction, scrollDirection = "enter");
  },
  entered: function(direction) {
    // $.notify('Entered triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
        headerBarChange(direction , scrollDirection = "entered");
  },
  exit: function(direction) {
    // $.notify('Exit triggered with direction ' + direction,{     globalPosition: 'right middle', className:"info" })
        headerBarChange(direction , scrollDirection = "exit");
  },
  exited: function(direction) {
    // $.notify('Exited triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
    headerBarChange(direction , scrollDirection = "exited");
  },offset: {
    top: 67 // 67px
  }
})

function headerBarChange(direction, scrollDirection){

    if(direction === "up" & scrollDirection === "enter"){
        gsap.to("header",{duration:0.5,backgroundColor:"#000"});
        // change the burger
        gsap.to(".lines",{duration:0.25, scale:0,stagger:0.15})
        gsap.to(".lines",{duration:0.25, scale:1, stroke:"#fff",stagger:0.15,delay:0.25})
    }else if(direction === "up"& scrollDirection === "entered"){
        gsap.to("header",{duration:0.25,backgroundColor:"#fff"});
        // change the burger
        gsap.to(".lines",{duration:0.25, scale:0,stagger:0.15})
        gsap.to(".lines",{duration:0.25, scale:1, stroke:"#D87337",stagger:0.15,delay:0.25})
    }else if(direction === "down"& scrollDirection === "exit"){
        gsap.to("header",{duration:0.25,backgroundColor:"#000"});
        // change the burger
        gsap.to(".lines",{duration:0.25, scale:0,stagger:0.15})
        gsap.to(".lines",{duration:0.25, scale:1, stroke:"#fff",stagger:0.15,delay:0.25})
    } else if(direction === "down"& scrollDirection === "exited"){
        gsap.to("header",{duration:0.25,backgroundColor:"#fff"});
        // change the burger
        gsap.to(".lines",{duration:0.25, scale:0,stagger:0.15})
        gsap.to(".lines",{duration:0.25, scale:1, stroke:"#D87337",stagger:0.15,delay:0.25})
    }

}
