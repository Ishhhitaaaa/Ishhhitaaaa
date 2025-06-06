// 🌐 Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 📦 Modal for menu items
const menuCards = document.querySelectorAll('.menu-card');
const modal = document.getElementById('menu-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-button');

const coffeeDescriptions = {
  1: {
    title: "Masala Chai Latte",
    desc: "A spiced fusion of black tea, milk, and Indian masalas for a warm kick."
  },
  // You can add more descriptions like [2], [3], etc.
};

menuCards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-coffee');
    if (coffeeDescriptions[id]) {
      modalTitle.textContent = coffeeDescriptions[id].title;
      modalDesc.textContent = coffeeDescriptions[id].desc;
    } else {
      modalTitle.textContent = "Coffee Name";
      modalDesc.textContent = "Details coming soon!";
    }
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// 💫 Scroll animation for menu cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.menu-card').forEach(card => {
  observer.observe(card);
});

// 🍔 Hamburger toggle for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ✅ EmailJS Integration
(function () {
  emailjs.init("PsISJI0Nr_nRNKiiv"); // Your Public Key
})();

// ⏰ Auto-fill time field on page load
document.addEventListener("DOMContentLoaded", function () {
  const now = new Date();
  const formattedTime = now.toLocaleString();
  document.getElementById("time").value = formattedTime;
});

// 📤 Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_hn6xfod", "template_f1atZrn", this)
    .then(function () {
      alert("Message sent successfully! ☕️");
      document.getElementById("contact-form").reset();
    }, function (error) {
      console.error("Failed to send:", error);
      alert("Failed to send message. Please try again later.");
    });
});
