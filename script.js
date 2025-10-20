document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form elements
  const form = e.target;
  const name = form.querySelector("#name");
  const email = form.querySelector("#email");
  const subject = form.querySelector("#subject");
  const message = form.querySelector("#message");

  // Simple validation
  let isValid = true;

  // Reset previous validation
  [name, email, subject, message].forEach((field) => {
    field.classList.remove("is-valid", "is-invalid");
  });

  // Check each field
  if (name.value.trim() === "") {
    name.classList.add("is-invalid");
    isValid = false;
  } else {
    name.classList.add("is-valid");
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    email.classList.add("is-invalid");
    isValid = false;
  } else {
    email.classList.add("is-valid");
  }

  if (subject.value === "") {
    subject.classList.add("is-invalid");
    isValid = false;
  } else {
    subject.classList.add("is-valid");
  }

  if (message.value.trim() === "") {
    message.classList.add("is-invalid");
    isValid = false;
  } else {
    message.classList.add("is-valid");
  }

  // If valid, show success message
  if (isValid) {
    alert("Message sent successfully! (This is a demo)");
    form.reset();
    [name, email, subject, message].forEach((field) => {
      field.classList.remove("is-valid");
    });
  }
});

// Navigation active state handler
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            
            function updateActiveLink() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            }

            window.addEventListener('scroll', updateActiveLink);
            updateActiveLink();
        });

// Hero Section Dynamic Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    const shouldDelete = isDeleting;
    const currentText = currentRole.substring(0, charIndex);
    
    typedTextSpan.textContent = currentText;

    if (!shouldDelete && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (shouldDelete && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000);
});