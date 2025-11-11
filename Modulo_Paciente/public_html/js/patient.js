document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("consultaForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const symptoms = document.getElementById("symptoms").value.trim();

      if (symptoms === "") {
        Swal.fire({
          icon: "warning",
          title: "Campos incompletos",
          text: "Por favor, describe tus síntomas antes de enviar.",
          confirmButtonColor: "#0077cc",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Consulta registrada",
        text: "Tu solicitud ha sido enviada correctamente.",
        confirmButtonColor: "#0077cc",
      }).then(() => {
        form.reset();
      });
    });
  }
});

// Ocultar el loader al cargar la página
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});
