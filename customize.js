/* Put photos in images/ and an MP3 in music/. Edit filenames below. */
const SITE_CUSTOM = {
  music: "our-song.mp3",
  photos: {
    photo1: "photo1.png", photo2: "photo1.png", photo3: "photo1.png", photo4: "photo1.png", photo5: "photo1.png",
    photo6: "photo1.png", photo7: "photo1.png", photo8: "photo1.png", photo9: "photo1.png", photo10: "photo1.png",
    photo11: "photo1.png", photo12: "photo1.png", photo13: "photo1.png", photo14: "photo1.png", photo15: "photo1.png",
    photo16: "photo1.png", photo17: "photo1.png", photo18: "photo1.png", photo19: "photo1.png", photo20: "photo1.png",
    photo21: "photo1.png", photo22: "photo1.png", photo23: "photo1.png", photo24: "photo1.png", photo25: "photo1.png"
  }
};
(function () {
  document.querySelectorAll("[data-photo]").forEach(slot => {
    const filename = SITE_CUSTOM.photos[slot.dataset.photo];
    if (!filename) return;
    const img = document.createElement("img");	
    img.className = "custom-photo"; img.src = "images/" + filename; img.alt = "Personal photo";
    img.onerror = () => { img.remove(); console.warn("Missing image: " + filename); };
    slot.replaceChildren(img);
  });
  const audio = document.getElementById("loveSong");
  const button = document.getElementById("musicControl");
  audio.src = SITE_CUSTOM.music ? "music/" + SITE_CUSTOM.music : "";
  if (!SITE_CUSTOM.music) button.hidden = true;
  button.addEventListener("click", async () => {
    try {
      if (audio.paused) { await audio.play(); button.textContent = "Ⅱ Pause our song"; }
      else { audio.pause(); button.textContent = "♫ Play our song"; }
    } catch (e) { button.textContent = "Tap to play ♫"; console.warn("Check the MP3 filename.", e); }
  });
})();