
var isNavVisible = false;

var navigationWidth = $("nav").width();

var navItems = ["#hero","#believe","#hero-2","#everything","#gallery","#circle"];

// listen for the window to resize and reset the nav width var
$( window ).resize(function() {
    console.log(navigationWidth);
    navigationWidth = $("nav").width();
});
