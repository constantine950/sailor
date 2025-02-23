const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup-content");
const popupHide = document.querySelector(".popup-hide");
const onCloseDropDown = document.querySelector(".onClose");
const closeDropDown = document.querySelector(".close-dropdown");
const closeDeepDropDown = document.querySelector(".close-deep-dropdown");

popup.addEventListener("click", () => {
  popupContent.classList.toggle("hidden");
});

popupHide.addEventListener("click", () => {
  popupContent.classList.toggle("hidden");
});

onCloseDropDown.addEventListener("click", () => {
  if (!closeDropDown.classList.contains("hidden")) {
    closeDropDown.classList.add("hidden");
  }
  if (!closeDeepDropDown.classList.contains("hidden")) {
    closeDeepDropDown.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollUpBtn = document.getElementById("scrollUpBtn");

  function toggleScrollButton() {
    if (
      document.documentElement.scrollHeight > window.innerHeight &&
      window.scrollY > 200
    ) {
      scrollUpBtn.classList.remove("hidden");
    } else {
      scrollUpBtn.classList.add("hidden");
    }
  }

  toggleScrollButton();
  window.addEventListener("scroll", toggleScrollButton);
  window.addEventListener("resize", toggleScrollButton);

  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

class Dropdown {
  constructor(container) {
    (this.container = container),
      (this.trigger = container.querySelector(".trigger")),
      (this.content = container.querySelector(".content"));
  }
  init() {
    this.trigger.addEventListener("click", () => {
      if (this.content.classList.contains("hidden")) {
        this.content.classList.remove("hidden");
      } else {
        this.content.classList.add("hidden");
      }
    });
  }
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
