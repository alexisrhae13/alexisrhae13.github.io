document.addEventListener("DOMContentLoaded", function () {
  // Ensure that DOM is fully loaded
  document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    // Ensure road container element exists before trying to add the class
    const roadContainer = document.querySelector(".road-container");

    if (roadContainer && scrollPosition > 200) {
      roadContainer.classList.add("show-roads");
    }
  });
});
document.querySelector("#about-btn").addEventListener("click", function() {
    document.querySelector("#needle-north").style.transform = "rotate(0deg)";
    document.querySelector("#needle-east").style.transform = "rotate(90deg)";
    document.querySelector("#needle-south").style.transform = "rotate(180deg)";
    document.querySelector("#needle-west").style.transform = "rotate(270deg)";
});

document.querySelector("#gis-btn").addEventListener("click", function() {
    document.querySelector("#needle-north").style.transform = "rotate(0deg)";
    document.querySelector("#needle-east").style.transform = "rotate(90deg)";
    document.querySelector("#needle-south").style.transform = "rotate(180deg)";
    document.querySelector("#needle-west").style.transform = "rotate(270deg)";
});

document.querySelector("#experience-btn").addEventListener("click", function() {
    document.querySelector("#needle-north").style.transform = "rotate(180deg)";
    document.querySelector("#needle-east").style.transform = "rotate(270deg)";
    document.querySelector("#needle-south").style.transform = "rotate(0deg)";
    document.querySelector("#needle-west").style.transform = "rotate(90deg)";
});

document.querySelector("#contact-btn").addEventListener("click", function() {
    document.querySelector("#needle-north").style.transform = "rotate(90deg)";
    document.querySelector("#needle-east").style.transform = "rotate(0deg)";
    document.querySelector("#needle-south").style.transform = "rotate(270deg)";
    document.querySelector("#needle-west").style.transform = "rotate(180deg)";
});