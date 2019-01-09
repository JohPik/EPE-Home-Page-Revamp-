var container = document.querySelectorAll(".our-capability .container")
var back = document.querySelectorAll(".back");

// Toggle Class
function toggleClass(index){
  back[index].classList.toggle('flipped');
}

// Mouse Enter
container.forEach(
  function(elem, index) {
      elem.addEventListener("mouseenter", function() {
      toggleClass(index)
      })
  }
);

// Mouse Leave
container.forEach(
  function(elem, index) {
      elem.addEventListener("mouseleave", function() {
      toggleClass(index)
      })
  }
);
