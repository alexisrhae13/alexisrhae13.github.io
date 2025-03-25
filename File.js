document.addEventListener("DOMContentLoaded", function () {
  // Ensure that DOM is fully loaded before attaching event listeners

  // Scroll listener for showing roads and scale bar adjustment
  document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    // Ensure road container element exists before trying to add the class
    const roadContainer = document.querySelector(".road-container");

    if (roadContainer && scrollPosition > 200) {
      roadContainer.classList.add("show-roads");
    }

    // Adjust scale indicator based on scroll position (example range 0 - 100ft)
    const scaleIndicator = document.querySelector("#scale-indicator");
    if (scaleIndicator) {
      const scaleValue = Math.min(Math.max(scrollPosition, 0), 100); // Ensure it's between 0 and 100
      scaleIndicator.style.left = `${scaleValue}%`;
    }
  });

  // Event listener for About Me anchor
  document.querySelector("#about-btn").addEventListener("click", function() {
    document.querySelector("#needle-north").style.transform = "rotate(0deg)";
    document.querySelector("#needle-east").style.transform = "rotate(90deg)";
    document.querySelector("#needle-south").style.transform = "rotate(180deg)";
    document.querySelector("#needle-west").style.transform = "rotate(270deg)";
  });

  // Event listener for GIS anchor
  document.querySelector("#gis-btn").addEventListener("click", function() {
    document.querySelector("#needle-north").style.transform = "rotate(0deg)";
    document.querySelector("#needle-east").style.transform = "rotate(90deg)";
    document.querySelector("#needle-south").style.transform = "rotate(180deg)";
    document.querySelector("#needle-west").style.transform = "rotate(270deg)";
  });

  // Event listener for Past Gigs anchor
  document.querySelector("#experience-btn").addEventListener("click", function() {
    document.querySelector("#needle-north").style.transform = "rotate(180deg)";
    document.querySelector("#needle-east").style.transform = "rotate(270deg)";
    document.querySelector("#needle-south").style.transform = "rotate(0deg)";
    document.querySelector("#needle-west").style.transform = "rotate(90deg)";
  });

  // Event listener for Contact anchor
  document.querySelector("#contact-btn").addEventListener("click", function() {
    document.querySelector("#needle-north").style.transform = "rotate(90deg)";
    document.querySelector("#needle-east").style.transform = "rotate(0deg)";
    document.querySelector("#needle-south").style.transform = "rotate(270deg)";
    document.querySelector("#needle-west").style.transform = "rotate(180deg)";
  });
});