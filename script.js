function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const contactNumber = document.getElementById("contactNumber").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!firstName || !lastName || !contactNumber || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    emailjs.init("VV6Uf_Cobbg3Cqv6g");

    const emailData = {
        firstName,
        lastName,
        contactNumber,
        message,
    };

    console.log("Sending email with data:", emailData);

    emailjs.send("service_87r48zh", "template_7cjv26m", emailData)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Message sent successfully!");
        })
        .catch(function(error) {
            console.error("EmailJS error details:", error);
            alert("Failed to send the message. Please try again later.");
        });
});
