// Video qo'shish funksiyasi
document.getElementById("addVideoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formaning default xatti-harakatini to'xtatish
  
    // Video nomi va linkini olish
    const videoTitle = document.getElementById("videoTitle").value;
    const videoLink = document.getElementById("videoLink").value;
  
    if (videoTitle && videoLink) {
      // Video nomi va linki to'liq kiritilgan bo'lsa, video qo'shish
      const newVideo = {
        title: videoTitle,
        link: videoLink
      };
  
      // Qo'shilgan videolarni saqlash (localStorage yoki serverga yuborish)
      let videos = JSON.parse(localStorage.getItem("videos")) || []; // LocalStorage'dan videolarni olish
      videos.push(newVideo); // Yangi video qo'shish
      localStorage.setItem("videos", JSON.stringify(videos)); // Videolarni qayta saqlash
  
      alert("Video muvaffaqiyatli qo'shildi!");
  
      // Formani tozalash
      document.getElementById("addVideoForm").reset();
    } else {
      alert("Iltimos, video nomini va linkini to'liq kiriting!");
    }
  });
  