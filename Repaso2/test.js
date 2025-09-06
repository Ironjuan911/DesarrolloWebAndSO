// En constantes añadimos los botones y el parrafo del HTML en base a su id
// para asi poder interactuar con estos en el script.

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const demo = document.getElementById("demo");

// Añadimos eventos a los botones para que al hacer click en estos se ejecute

btn1.addEventListener("click", function() {
    demo.textContent = "Mensaje enviado";
});

btn2.addEventListener("click", function() {
    demo.textContent = "";
});