const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();

  if (nombre === "" || correo === "" || password === "") {
  mensaje.style.color = "red";
  mensaje.textContent = "Todos los campos son obligatorios";
  return;
}

if (!correo.includes("@")) {
  mensaje.style.color = "red";
  mensaje.textContent = "Correo no válido";
  return;
}

mensaje.style.color = "green";
mensaje.textContent = "Registro exitoso";
});
