document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup");
  const popupContent = document.querySelector(".popup-content");
  const popupHide = document.querySelector(".popup-hide");
  const onCloseDropDown = document.querySelector(".onClose");
  const closeDropDown = document.querySelector(".close-dropdown");
  const closeDeepDropDown = document.querySelector(".close-deep-dropdown");
  const aboutPopup = document.querySelector(".about-popup");
  const deepAbout = document.querySelector(".deepAbout");
  const scrollUpBtn = document.getElementById("scrollUpBtn");

  // Function to toggle visibility
  const toggleVisibility = (element) => {
    if (element) element.classList.toggle("hidden");
  };

  // Dropdown class
  class Dropdown {
    constructor(container) {
      this.container = container;
      this.trigger = container.querySelector(".trigger");
      this.content = container.querySelector(".content");
    }

    init() {
      if (this.trigger && this.content) {
        this.trigger.addEventListener("click", () =>
          toggleVisibility(this.content)
        );
      }
    }
  }

  // Initialize all dropdowns
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    new Dropdown(dropdown).init();
  });

  // Open and close the popup
  popup?.addEventListener("click", () => toggleVisibility(popupContent));

  popupHide?.addEventListener("click", () => {
    toggleVisibility(popupContent);
    [aboutPopup, deepAbout].forEach((el) => el?.classList.add("hidden"));
  });

  onCloseDropDown?.addEventListener("click", () => {
    [closeDropDown, closeDeepDropDown].forEach((el) =>
      el?.classList.add("hidden")
    );
  });

  // Scroll-to-top button functionality
  const toggleScrollButton = () => {
    if (scrollUpBtn) {
      if (
        document.documentElement.scrollHeight > window.innerHeight &&
        window.scrollY > 200
      ) {
        scrollUpBtn.classList.remove("hidden");
      } else {
        scrollUpBtn.classList.add("hidden");
      }
    }
  };

  toggleScrollButton();
  window.addEventListener("scroll", toggleScrollButton);
  window.addEventListener("resize", toggleScrollButton);

  scrollUpBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
