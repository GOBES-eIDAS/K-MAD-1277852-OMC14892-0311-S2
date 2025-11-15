# CERTIFICADO MÉDICO-LEGAL TRANSFRONTERIZO  
**Repositorio oficial: K-MAD-1277852-OMC14892-0311-S2**  
**Usuario: GOBES-eIDAS**

---

## Descripción

Repositorio validado de distribución clínica–jurídica para certificados médico-legales transfronterizos (España / Unión Europea), conforme a los estándares de:

- Reglamento (UE) n.º 2011/24
- eIDAS (Reglamento UE 910/2014)
- FNMT · Cl@ve · @firma · Autofirma
- Lex Artis Médica · Ley 41/2002 · Ley 44/2003
- ICD‑10 / ICD‑11 / DSM‑5 · ATC · CIE

---

## Estructura del Repositorio
/
├── index.html                 ← Landing page con acceso mediante código
├── layer-b.html              ← Validación intermedia
├── layer-c.html              ← Certificado completo (restringido)
├── README.md                 ← Este archivo
├── assets/                   ← Animaciones, imágenes y documentos
│   ├── unlocked.lottie       ← Animación de validación
│   ├── LoadTrecirklet.gif    ← Carga visual
│   ├── certificado.pdf       ← Documento PDF (capa protegida)
│   └── data.json             ← Metadata integrada (hash, firma, etc.)
├── css/
│   └── style.css             ← Estilos para todas las páginas
├── js/
│   └── script.js             ← Lógica de autenticación y bloqueo
---

## Seguridad

- **Códigos de acceso cifrados** requeridos para acceder a cada capa.
- **Validación QR** y firma digital (`PKCS#7`, `PAdES`, `X.509`)
- **Redirección automática**: No es posible acceder directamente a ninguna capa sin pasar por la anterior.

---

## Assets

Archivos `.lottie`, `.gif`, `.json`, `.pdf`, `.png`, `.jpg` y fuentes oficiales para uso en frontend y validación offline (OpenCV, iPhone, Android, print, etc.).

---

## Deploy

- **Versión online**: GitHub Pages
- **Versión offline**: Verificación embebida con QR, JSON, XML, y certificado con metadata (SHA-256, firma, código de documento).

---

## Estado

🟢 **Verificado – Original – Válido – Auténtico**  
🔐 Acceso restringido mediante doble autenticación (multicapa)

---

## Clínica responsable

**Clínica Clara del Rey**  
Madrid · España · Jurisdicción UE  
Sistema GOB·ES · eIDAS

---
