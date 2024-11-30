// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Get target section ID
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, // Offset to ensure header doesn't cover content
      behavior: "smooth",
    });
  });
});

// Form Validation (basic)
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    e.preventDefault(); // Prevent form submission
    alert("Please fill out all fields!");
  } else if (!validateEmail(email)) {
    e.preventDefault();
    alert("Please enter a valid email address!");
  }
});

// Simple email validation function
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Scroll to Top Button (optional)
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "↑";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "20px";
scrollToTopBtn.style.padding = "10px";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.backgroundColor = "#007bff";
scrollToTopBtn.style.color = "white";
scrollToTopBtn.style.borderRadius = "5px";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.display = "none"; // Initially hidden

document.body.appendChild(scrollToTopBtn);

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
