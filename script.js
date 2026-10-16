// QUICK CUSTOMIZATION: change these values to personalize the page.
const CONFIG = {
  herName: "Sara",
  yourName: "Ahmed"
};

document.getElementById("herName").textContent = CONFIG.herName;
document.getElementById("signatureName").textContent = CONFIG.yourName;

const openButton = document.getElementById("openLetter");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

openButton.addEventListener("click", () => {
  if (openButton.classList.contains("opened")) return;
  openButton.classList.add("opened");
  openButton.querySelector(".open-label").textContent = "for you ♡";
  window.setTimeout(() => {
    intro.classList.add("fade-away");
    mainContent.classList.remove("hidden");
    mainContent.classList.add("appear");
    window.setTimeout(() => {
      intro.style.display = "none";
      document.body.classList.add("letter-open");
      window.scrollTo({top: 0, behavior: "smooth"});
    }, 550);
  }, 700);
});

document.getElementById("readAgain").addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});

// Tapping a photo opens it larger; tap outside or press Escape to close.
document.querySelectorAll(".polaroid img").forEach((img) => {
  img.tabIndex = 0;
  img.setAttribute("role", "button");
  img.setAttribute("aria-label", "View photo larger");
  img.addEventListener("click", () => {
    if (!img.naturalWidth) return;
    const overlay = document.createElement("div");
    overlay.className = "photo-lightbox";
    overlay.innerHTML = '<button class="lightbox-close" aria-label="Close photo">×</button><img alt="">';
    overlay.querySelector("img").src = img.src;
    overlay.querySelector("img").alt = img.alt;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.addEventListener("click", (event) => { if (event.target === overlay || event.target.closest(".lightbox-close")) close(); });
    document.addEventListener("keydown", function esc(event) {
      if (event.key === "Escape") { close(); document.removeEventListener("keydown", esc); }
    });
  });
});
