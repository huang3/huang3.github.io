// window.onload = function() {
//   Particles.init({
//     selector: '#myCanvas',
//     color: '#0047AB',
//     connectParticles: true
//   });
// };

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
