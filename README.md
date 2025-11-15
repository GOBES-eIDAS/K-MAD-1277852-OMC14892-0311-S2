CERTIFICADO · K-MAD-1277852-OMC14892-0311-S2

Repositorio oficial para la validación estructurada del Certificado Médico–Legal Transfronterizo.

---

## 📄 Descripción

Este repositorio contiene la estructura técnica, visual y criptográfica del certificado clínico–forense emitido en el marco del Reglamento (UE) 2011/24 y conforme al sistema GOB·ES · eIDAS.  
Incluye:

- Validación visual escalonada en 3 capas (Layers A, B y C)
- Animaciones .lottie y .gif como elementos visuales de desbloqueo
- Control de acceso progresivo con JavaScript (no accesible vía URL directa)
- Certificado PDF con metadatos embebidos
- JSON de validación en tiempo real
- Sistema de despliegue offline/online vía GitHub Pages

---

## 🗂️ Estructura del proyecto

```
/
├── index.html                  # Layer A (Página de acceso)
├── layer-b.html               # Layer B (Capa intermedia protegida)
├── layer-c.html               # Layer C (Certificado final)
├── assets/                    # Archivos multimedia y certificados
│   ├── unlocked.lottie
│   ├── loading-circle.gif
│   ├── certificado.pdf
│   ├── validated.json
│   └── ...
├── css/                       # Estilos (si aplica)
├── js/                        # Scripts (si aplica)
└── README.md
```

---

## 🛡️ Seguridad y flujo de acceso

- 🔐 Los usuarios deben pasar por Layer A para acceder a B y C.
- 🚫 Accesos directos vía URL están bloqueados con redirección automática.
- 📲 Autenticación ligera vía `sessionStorage` con control secuencial.
- 🔄 Animaciones `.lottie` indican validación / desbloqueo.

---

## 📦 Assets

Todos los archivos `.lottie`, `.json`, `.pdf`, `.jpg` y `.gif` se encuentran en la carpeta `/assets/`, y son requeridos para la validación visual y funcional del certificado.

---

## 🚀 Deploy

- **Online:** GitHub Pages (`https://GOBES-eIDAS.github.io/K-MAD-1277852-OMC14892-0311-S2/`)
- **Offline:** Validación offline a través de QR embebido, JSON, XML y PDF/A-2b con hash SHA-256

---

## ⚖️ Jurisdicción

Este certificado está emitido bajo la jurisdicción del Reino de España y es válido en toda la Unión Europea conforme a:

- Reglamento (UE) Nº 2011/24
- Reglamento eIDAS 910/2014
- Ley 44/2003 de Ordenación de Profesiones Sanitarias (España)
