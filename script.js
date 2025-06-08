// === WARTET, BIS DIE SEITE GELADEN IST ===
document.addEventListener("DOMContentLoaded", function () {

    // === SCROLL-ANIMATION: Wenn der Benutzer runterscrollt, werden Sektionen eingeblendet ===
    const sections = document.querySelectorAll("section"); // Holt alle <section>-Elemente
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Wenn sichtbar → füge Klasse hinzu (siehe CSS)
        }
      });
    }, {
      threshold: 0.1 // Bereich, ab wann der Effekt greift (10 % sichtbar)
    });
  
    sections.forEach(section => {
      observer.observe(section); // Beobachte jede Section
    });
  
    // === FORMULAR-VALIDIERUNG & FEEDBACK ===
    const form = document.getElementById("contactForm"); // Holt das Formular
    const feedback = document.getElementById("formFeedback"); // Feedback-Absatz unter dem Button
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Verhindert automatisches Neuladen der Seite beim Absenden
  
      // Werte auslesen
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Grundprüfung: Alle Felder müssen ausgefüllt sein
      if (!name || !email || !message) {
        feedback.textContent = "Bitte fülle alle Felder aus!";
        feedback.style.color = "red";
        return;
      }
  
      // Erfolgsmeldung
      feedback.textContent = "Vielen Dank, Joel! Deine Nachricht wurde (simuliert) gesendet.";
      feedback.style.color = "green";
  
      // Optional: Formular zurücksetzen
      form.reset();
    });
  
  });

 
  