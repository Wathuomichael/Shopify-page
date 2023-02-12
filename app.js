const originalHeader = document.querySelector(".original-header");
const newHeader = document.querySelector(".new-header");

window.onscroll = function () {
  if (window.pageYOffset > originalHeader.offsetTop) {
    originalHeader.style.display = "none";
    newHeader.style.display = "flex";
  } else {
    originalHeader.style.display = "flex";
    newHeader.style.display = "none";
  }
};

const closeButtons = document.querySelectorAll(".close");
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}

document.querySelectorAll(".collapse").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
