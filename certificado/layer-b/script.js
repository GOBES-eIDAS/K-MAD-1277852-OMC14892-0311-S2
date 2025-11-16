// Realtime banner
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


// Beskyt mod direkte adgang (kræver Layer A godkendelse)
if (!sessionStorage.getItem("access_granted")) {
  window.location.href = "../../certificado_Layer/layer-a/";
}


// Validering step-for-step
const steps = [
  "Conectando con servidores GOBES-eIDAS…",
  "Descargando documento criptográfico…",
  "Verificando hash SHA-256…",
  "Validando integridad PKCS#7…",
  "Confirmando autenticidad del certificado…",
  "Sincronizando trazabilidad documental…",
  "Validación completada."
];

let i = 0;

function runValidation() {
  const box = document.getElementById("status-line");
  box.textContent = steps[i];
  i++;

  if (i < steps.length) {
    setTimeout(runValidation, 2000);
  } else {
    // Vent 2 sekunder og gå til Layer C
    setTimeout(() => {
      window.location.href = "../layer-c/";
    }, 2000);
  }
}

setTimeout(runValidation, 2000);
