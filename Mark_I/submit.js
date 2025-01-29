document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("Contact-Form-MarkI");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Aetheria Essence recibio el mensaje");

        form.reset();
    });
});