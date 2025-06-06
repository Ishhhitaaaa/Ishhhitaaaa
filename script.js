// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Modal for menu items
const menuCards = document.querySelectorAll('.menu-card');
const modal = document.getElementById('menu-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-button');

// Sample descriptions (add all 12 as needed)
const coffeeDescriptions = {
  1: {
    title: "Masala Chai Latte",
    desc: "A spiced fusion of black tea, milk, and Indian masalas for a warm kick."
  },
  // Add coffeeDescriptions[2], [3], ..., [12] here
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

// Scroll animation for menu cards
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
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
// ✅ Initialize EmailJS with your public key
emailjs.init("PsISJI0Nr_nRNKiiv");

// ✅ Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  emailjs.sendForm('service_hn6xfod', 'template_f1atZrn', this)
    .then(() => {
      alert("Message sent successfully! ☕️ We’ll get back to you soon.");
      this.reset(); // Clear the form after sending
    }, (error) => {
      alert("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    });
});
const options = { 
  year: 'numeric', month: 'long', day: 'numeric', 
  hour: 'numeric', minute: 'numeric', hour12: true 
};
document.getElementById('time').value = now.toLocaleString('en-US', options);"
    
