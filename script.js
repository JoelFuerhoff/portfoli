// Wartet bis die Seite komplett geladen ist
document.addEventListener("DOMContentLoaded", () => {
  // Formular-Validierung
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Verhindert das automatische Absenden

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "Bitte fülle alle Felder aus!";
      feedback.style.color = "red";
      return;
    }

    // Einfache Email-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "Bitte gib eine gültige E-Mail-Adresse ein!";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent = `Vielen Dank, ${name}! Deine Nachricht wurde (simuliert) gesendet.`;
    feedback.style.color = "green";

    form.reset();
  });

  // Dark Mode Toggle & LocalStorage
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Dark Mode Status aus localStorage lesen und anwenden
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggle.checked = true;
  }

  // Umschalten des Dark Modes
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
