function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Gather form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const message = document.getElementById("message").value;

    // EmailJS configuration
    emailjs.init("PUBLIC_KEY");//user_id or public key

    // Email data
    const emailData = {
        firstName,
        lastName,
        contactNumber,
        message,
    };

    // Send the email
    emailjs.send("service_id", "template_id", emailData) //service_id and template_id
        .then(function (response) {
            alert("Message sent successfully!");
        })
        .catch(function (error) {
            alert("Failed to send the message. Please try again later.");
            console.error("EmailJS error:", error);
        });
});
