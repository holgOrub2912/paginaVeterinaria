document.addEventListener("DOMContentLoaded",()=>{
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const welcomeMessage = document.getElementById("welcomeMessage");
    const btnCita = document.getElementById("btn-solicitarCita");
    const btnExamen = document.getElementById("btn-solicitarExamen");
    const calendarContainer = document.getElementById("calendarContainer");
    const fechaInput = document.getElementById("fecha");
    const confirmarBtn = document.getElementById("confirmarBtn");
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
    const logoutBtn = document.getElementById("logoutBtn");

    if (usuario) {
        welcomeMessage.textContent = `Bienvenido, ${usuario.nombre}`;
    } else {
        alert("Debes iniciar sesión primero.");
        window.location.href = "./login.html";
    }

    let tipoSolicitud = "";

    // Mostrar calendario para pedir cita
    btnCita.addEventListener("click", () => {
        tipoSolicitud = "cita";
        calendarContainer.classList.remove("hidden");
        mensajeConfirmacion.textContent = "";
    });

    // Mostrar calendario para pedir examen
    btnExamen.addEventListener("click", () => {
        tipoSolicitud = "examen";
        calendarContainer.classList.remove("hidden");
        mensajeConfirmacion.textContent = "";
    });

    // Confirmar selección 
    confirmarBtn.addEventListener("click", () => {
        if (fechaInput.value) {
            mensajeConfirmacion.textContent = `✅ ${usuario.nombre}, tu ${tipoSolicitud} ha sido agendada para el ${fechaInput.value}.`;
            calendarContainer.classList.add("hidden");
        } else {
            alert("Por favor, selecciona una fecha.");
        }
    });

     logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("usuario");
        window.location.href = "./index.html";
    });


})