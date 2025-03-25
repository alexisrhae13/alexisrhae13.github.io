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
