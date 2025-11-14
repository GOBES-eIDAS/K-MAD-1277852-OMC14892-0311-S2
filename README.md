# K-MAD-1277852-OMC14892-0311-S2  
**CERTIFICADO · Cross‑Border Medico‑Legal Certificate Validation System**

This repository hosts the official validation system for the medico‑legal certificate identified as **K‑MAD‑1277852‑OMC14892‑0311‑S2**.  
It enables controlled access, secure verification, and full structural inspection of the document’s authenticity, jurisdictional compliance, and medico‑legal integrity.

The system is structured into three interactive layers, each reflecting a key stage in the validation and verification process of international clinical–legal documentation.

---

## 1. System Structure  

### ▸ Validation Entry  
The process begins with a secure authentication interface triggered automatically when accessing the system via QR code or direct link. Access requires a verification code provided to authorised parties.

### ▸ Layer A — Language and Access Parameters  
Initial system layer responsible for language selection, jurisdictional profile loading, and pre‑validation of document origin parameters.

### ▸ Layer B — Metadata and Integrity Validation  
Performs internal logic verification, cryptographic integrity checks (e.g. SHA‑256), conformity with jurisdictional issuance standards, and validation of embedded identifiers.

### ▸ Layer C — Certificate Finalisation and Issuance Confirmation  
Displays the verified structure, certificate metadata, issuing authority credentials, and enables authorised download of the certified document in final format.

---

## 2. Core Functionalities  

- Access control and authentication  
- Jurisdictional structure rendering (Spain / EU)  
- Verification of digital fingerprints (SHA‑256)  
- Inspection of official document identifiers  
- Real‑time rendering of certificate layout and metadata  
- Document access upon validation success  

No operational component is simulated or placeholder‑based in the presentation; all elements reflect the structural reality of certificate validation.

---

## 3. Directory Structure
K-MAD-1277852-OMC14892-0311-S2/
│
├── index.html                  ← Entry point (validation gate)
├── CERTIFICATE/
│   ├── index.html              ← Language selection (Layer A)
│   ├── validate.html           ← Validation logic interface (Layer B)
│   ├── certificate.html        ← Final certificate metadata (Layer C)
│   ├── full_document.html      ← Official document view
│   ├── document.pdf            ← Certified medico‑legal PDF/A‑2b
│   └── assets/
│       ├── qr/
│       ├── css/
│       ├── js/
│       ├── logos/
│       └── lottie/
│
└── README.md
---

## 4. Validation Specifications  

- **Document ID:** K‑MAD‑1277852‑OMC14892‑0311‑S2  
- **Document No.:** 0421  
- **Issued under:** ICOMEM Nº 14892 · MEC Nº Q286962  
- **Cryptographic hash (SHA‑256):**  
  `82d36b0f0fd1e0f2c88f3deb502c20e2b54cd4f24b317405e593d36e0423e566`  
- **PDF Format:** ISO 19005‑2 (PDF/A‑2b)  
- **Validation Chain:** eIDAS · FNMT · Cl@ve · Autofirma  

All validation logic is embedded and presented as part of the document's secure lifecycle.

---

## 5. Compliance Frameworks  

This system is aligned with:

- **Regulation (EU) 2011/24** — Cross-border healthcare  
- **eIDAS Regulation (EU) 910/2014** — Digital identity & trust  
- **Ley 44/2003 (España)** — Ordenación de las profesiones sanitarias  
- **ISO/IEC 32000‑2** — PDF/A‑2 standard for long‑term archiving  
- **PKCS#7 / PAdES** — Document signing and authentication  

---

## 6. Access & Maintenance  

- Compatible with all modern mobile and desktop browsers  
- Designed for secure display on iPhone/iPad (Safari, Chrome)  
- Document and logic updates managed directly within the repository  
- No third‑party dependencies or external service calls required  

---

## Notice  
Access credentials are privately distributed.  
This system is not intended for public access without authorisation.  
The validation flow reflects the real operational structure of medico‑legal document control.
