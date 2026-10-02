//  dont need more sites update names ok? rememeber bro
const siteData = [
  { name: "ABOUT",        color: "#6C63FF", url: "about.html" },
  { name: "BIO",          color: "#7B5CFA", url: "bio.html" },
  { name: "VALUES",       color: "#5B4FE8", url: "values.html" },
  { name: "PHILOSOPHY",   color: "#8A63F0", url: "philosophy.html" },
  { name: "PERSONALITY",  color: "#6E4FDB", url: "personality.html" },
  { name: "GOALS",        color: "#5A47C9", url: "goals.html" },
  { name: "MANIFESTO",    color: "#4B3AAE", url: "manifesto.html" },
  { name: "PROJECTS",     color: "#26C6DA", url: "projects.html" },
  { name: "PORTFOLIO",    color: "#1FA8BE", url: "portfolio.html" },
  { name: "ART",          color: "#E14FA0", url: "art.html" },
  { name: "MUSIC",        color: "#D63C8A", url: "music.html" },
  { name: "WRITING",      color: "#C9358B", url: "writing.html" },
  { name: "CODE",         color: "#17B8A6", url: "code.html" },
  { name: "VIDEOS",       color: "#F0549C", url: "videos.html" },
  { name: "ARCHIVE",      color: "#128C9E", url: "archive.html" },
  { name: "FAVORITES",    color: "#FFA733", url: "favorites.html" },
  { name: "TASTES",       color: "#FF9B1F", url: "tastes.html" },
  { name: "LIKES",        color: "#FFB84D", url: "likes.html" },
  { name: "DISLIKES",     color: "#E8871A", url: "dislikes.html" },
  { name: "STACK",        color: "#0FA3A3", url: "stack.html" },
  { name: "PLAYLIST",     color: "#E8459E", url: "playlist.html" },
  { name: "MEDIA",        color: "#B82E86", url: "media.html" },
  { name: "OPINIONS",     color: "#E63946", url: "opinions.html" },
  { name: "ESSAYS",       color: "#D62839", url: "essays.html" },
  { name: "NOTES",        color: "#C4262F", url: "notes.html" },
  { name: "REVIEWS",      color: "#EF4A4A", url: "reviews.html" },
  { name: "QUOTES",       color: "#B8232E", url: "quotes.html" },
  { name: "LORE",         color: "#A31E2A", url: "lore.html" },
  { name: "GAMES",        color: "#3FBF6B", url: "games.html" },
  { name: "READING",      color: "#2FA85A", url: "reading.html" },
  { name: "LEARNING",     color: "#4CD07E", url: "learning.html" },
  { name: "IDEAS",        color: "#35995A", url: "ideas.html" },
  { name: "WISHLIST",     color: "#F5A623", url: "wishlist.html" },
  { name: "INSPIRATION",  color: "#FFC266", url: "inspiration.html" },
  { name: "FAQ",          color: "#6C7A89", url: "faq.html" },
  { name: "STATS",        color: "#5A6B78", url: "stats.html" },
  { name: "CONTACT",      color: "#7C8C9A", url: "contact.html" },
  { name: "COLOPHON",     color: "#4E5C68", url: "colophon.html" }
];
const track = document.querySelector(".menu-track");
siteData.forEach((site) => {
  const card = document.createElement("div");
  card.classList.add("menu-item");
  card.textContent = site.name;
  card.style.backgroundColor = site.color;
  card.dataset.url = site.url;
  track.appendChild(card);
});
const items = document.querySelectorAll(".menu-item");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let currentIndex = 0;
const visibleRange = 2;
function updateDisplay() {
  items.forEach((item, index) => {
    let diff = index - currentIndex;
    if (diff > items.length / 2) diff -= items.length;
    if (diff < -items.length / 2) diff += items.length;
    if (Math.abs(diff) > visibleRange) {
      item.style.opacity = 0;
      item.style.pointerEvents = "none";
    } else {
      item.style.opacity = 1 - Math.abs(diff) * 0.3;
      item.style.pointerEvents = "auto";
    }
    const scale = diff === 0 ? 1.15 : 1 - Math.abs(diff) * 0.15;
    const spacing = 220;
    item.style.transform = `translateX(${diff * spacing}px) scale(${scale})`;
    item.style.zIndex = 10 - Math.abs(diff);
  });
}
updateDisplay();
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateDisplay();
});
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateDisplay();
});
items.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = item.dataset.url;
  });
});
