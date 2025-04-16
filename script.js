// Qidiruv funksiyasi
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchQuery = searchInput.value.toLowerCase();
  const videoCards = document.querySelectorAll(".video-card");

  videoCards.forEach(function (card) {
    const videoTitle = card.querySelector("h4").textContent.toLowerCase();
    if (videoTitle.includes(searchQuery)) {
      card.style.display = "block"; // Agar qidiruvga mos kelsa, ko'rsatish
    } else {
      card.style.display = "none"; // Aks holda yashirish
    }
  });
});


function addVideoToPage(title, url) {
    const container = document.getElementById("video-list"); // qidiruv osti
    const recommended = document.getElementById("recommended-videos"); // tavsiya
  
    const videoBlock = document.createElement("div");
    videoBlock.className = "video-box";
    videoBlock.innerHTML = `
      <video src="${url}" controls></video>
      <p>${title}</p>
      <button onclick="editVideo(this)">✏️ Edit</button>
      <button onclick="deleteVideo(this)">🗑 O‘chirish</button>
    `;
  
    // Ikkala joyga ham qo‘shamiz
    container.appendChild(videoBlock.cloneNode(true));
    recommended.appendChild(videoBlock);
  }

  let editingBox = null;

function addVideoToPage(title, url) {
  const container = document.getElementById("video-list");
  const recommended = document.getElementById("recommended-videos");

  const videoBlock = document.createElement("div");
  videoBlock.className = "video-box";
  videoBlock.innerHTML = `
    <video src="${url}" controls></video>
    <p>${title}</p>
    <button onclick="editVideo(this)">✏️ Edit</button>
    <button onclick="deleteVideo(this)">🗑 O‘chirish</button>
  `;

  const cloneBlock = videoBlock.cloneNode(true);

  container.appendChild(videoBlock);
  recommended.appendChild(cloneBlock);
}

function deleteVideo(button) {
  button.parentElement.remove();
}

function editVideo(button) {
  editingBox = button.parentElement;
  const title = editingBox.querySelector("p").textContent;
  const url = editingBox.querySelector("video").getAttribute("src");

  document.getElementById("editTitle").value = title;
  document.getElementById("editURL").value = url;
  document.getElementById("editModal").style.display = "flex";
}

function saveEdit() {
  const newTitle = document.getElementById("editTitle").value;
  const newURL = document.getElementById("editURL").value;

  editingBox.querySelector("p").textContent = newTitle;
  editingBox.querySelector("video").src = newURL;

  closeModal();
}

function closeModal() {
  document.getElementById("editModal").style.display = "none";
}


window.onload = function () {
  displayVideos(); // Videolarni ko'rsatish
  displayRecommendedAnime(); // Tavsiya etilgan animelarni ko'rsatish
};

// Qidiruvni amalga oshirish
function searchVideos() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const videoContainer = document.getElementById("video-list");
  const videos = JSON.parse(localStorage.getItem("videos")) || [];

  videoContainer.innerHTML = ""; // Qidiruvdan oldin eski natijalarni tozalash

  if (input.trim() === "") return;

  const filtered = videos.filter(v => v.title.toLowerCase().includes(input));
  filtered.forEach(video => {
    const el = document.createElement("div");
    el.classList.add("video-item");
    el.innerHTML = `
      <h3>${video.title}</h3>
      <a href="${video.link}" target="_blank">Ko‘rish</a>
    `;
    videoContainer.appendChild(el);
  });
}

// Videolarni ko'rsatish
function displayVideos() {
  const container = document.getElementById("video-list");
  const videos = JSON.parse(localStorage.getItem("videos")) || [];
  
  container.innerHTML = ""; // Avvalgi videolarni tozalash

  videos.forEach(video => {
    const el = document.createElement("div");
    el.classList.add("video-item");
    el.innerHTML = `
      <h3>${video.title}</h3>
      <a href="${video.link}" target="_blank">Ko‘rish</a>
    `;
    container.appendChild(el);
  });
}

// Tavsiya etilgan animelarni ko'rsatish
function displayRecommendedAnime() {
  const container = document.getElementById("recommendedAnimeContainer");
  const videos = JSON.parse(localStorage.getItem("videos")) || [];
  
  container.innerHTML = ""; // Tavsiya etilganlarni tozalash

  // So'nggi 4 ta video tavsiya etilganlar sifatida ko'rsatiladi
  videos.slice(-4).forEach(video => {
    const el = document.createElement("div");
    el.classList.add("anime-item");
    el.innerHTML = `
      <h3>${video.title}</h3>
      <iframe src="${video.link}" width="100%" height="200" frameborder="0" allowfullscreen></iframe>
    `;
    container.appendChild(el);
  });
}


//main

window.onload = function () {
    displayVideos(); // Videolarni ko'rsatish
    displayRecommendedAnime(); // Tavsiya etilgan animelarni ko'rsatish
  };
  
  // Qidiruvni amalga oshirish
  function searchVideos() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const videoContainer = document.getElementById("video-list");
    const videos = JSON.parse(localStorage.getItem("videos")) || [];
  
    videoContainer.innerHTML = ""; // Qidiruvdan oldin eski natijalarni tozalash
  
    if (input.trim() === "") return;
  
    const filtered = videos.filter(v => v.title.toLowerCase().includes(input));
    filtered.forEach(video => {
      const el = document.createElement("div");
      el.classList.add("video-item");
      el.innerHTML = `
        <h3>${video.title}</h3>
        <a href="${video.link}" target="_blank">Ko‘rish</a>
      `;
      videoContainer.appendChild(el);
    });
  }
  
  // Videolarni ko'rsatish
  function displayVideos() {
    const container = document.getElementById("video-list");
    const videos = JSON.parse(localStorage.getItem("videos")) || [];
    
    container.innerHTML = ""; // Avvalgi videolarni tozalash
  
    videos.forEach(video => {
      const el = document.createElement("div");
      el.classList.add("video-item");
      el.innerHTML = `
        <h3>${video.title}</h3>
        <a href="${video.link}" target="_blank">Ko‘rish</a>
      `;
      container.appendChild(el);
    });
  }
  
  // Tavsiya etilgan animelarni ko'rsatish
  function displayRecommendedAnime() {
    const container = document.getElementById("recommendedAnimeContainer");
    const videos = JSON.parse(localStorage.getItem("videos")) || [];
    
    container.innerHTML = ""; // Tavsiya etilganlarni tozalash
  
    // So'nggi 4 ta video tavsiya etilganlar sifatida ko'rsatiladi
    videos.slice(-4).forEach(video => {
      const el = document.createElement("div");
      el.classList.add("anime-item");
      el.innerHTML = `
        <h3>${video.title}</h3>
        <iframe src="${video.link}" width="100%" height="200" frameborder="0" allowfullscreen></iframe>
      `;
      container.appendChild(el);
    });
  }
  