// Admin paroli
const adminPassword = 'admin123';

function checkPassword() {
  const enteredPassword = document.getElementById("password").value;

  if (enteredPassword === adminPassword) {
    // Parol to'g'ri bo'lsa, admin panelga o'tish
    window.location.href = 'admin-dashboard.html'; // Admin panel sahifasi
  } else {
    alert('Noto\'g\'ri parol! Iltimos, qaytadan urunib ko\'ring.');
  }
}
