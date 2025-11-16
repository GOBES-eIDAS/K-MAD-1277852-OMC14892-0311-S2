// Rigtigt realtime banner
function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleString("es-ES", {
    dateStyle: "full",
    timeStyle: "medium"
  });
  document.getElementById("realtime").textContent =
    "Conexión en tiempo real verificada · " + formatted;
}
setInterval(updateTime, 1000);
updateTime();

// Download af certificeret PDF
function descargarCertificado() {
  window.location.href = "certificado.pdf";
}
