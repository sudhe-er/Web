document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // For demonstration purposes, simply log the values to the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Here you can send the form data to your server using AJAX or any other method
        // For now, let's just display an alert
        alert("Form submitted successfully!");
        
        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
});


window.addEventListener('scroll', function() {
  var navbar = document.getElementById('container-navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
