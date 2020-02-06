// var waypoint = new Waypoint({
//   element: document.getElementById('believe'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   }
// })

var inview = new Waypoint.Inview({
  element: $('#believe')[0],
  enter: function(direction) {
     $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
  },
  entered: function(direction) {
    $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
  },
  exit: function(direction) {
    $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
  },
  exited: function(direction) {
    $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
  },offset: {
    top: 67 // 67px

    // top: 67, // 67px
    // bottom: 100 // 100
  }
})
