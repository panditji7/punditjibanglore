// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Thank you for your message. We will get back to you soon!");
//     this.reset();
// });


function sendWhatsAppMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const whatsappNumber = '+918088676341';  // Replace with the actual WhatsApp number
    const whatsappMessage = `Name: ${name}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
}