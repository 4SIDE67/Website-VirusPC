# 🦠 VirusPC - Panduan & Simulasi Keselamatan Siber

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

**VirusPC** adalah sebuah laman web pendidikan interaktif yang bertujuan memberi kesedaran tentang keselamatan siber. Ia merangkumi info tentang jenis virus, tanda jangkitan, cara pencegahan, dan simulasi serangan dalam persekitaran yang selamat.

---

## 📸 Paparan (Screenshots)
*(Letak screenshot website kau kat sini nanti)*

---

## ✨ Ciri-Ciri Utama (Features)

Berdasarkan kod sumber, berikut adalah fungsi menarik dalam website ini:

### 1. 🎮 Simulasi Serangan Virus (`simulasi.html`)
Simulasi interaktif yang menunjukkan bagaimana malware bertindak tanpa merosakkan komputer sebenar:
*   **Virus Fail & Worm:** Demonstrasi fail merebak dan menggandakan diri.
*   **Ransomware:** Simulasi fail dikunci (encrypted) dan nota tebusan.
*   **Spyware/Keylogger:** Demonstrasi bagaimana input login direkod secara senyap.
*   **Adware/Browser Hijack:** Simulasi pop-up iklan dan lencongan browser.
*   **Phishing Demo:** Simulasi emel palsu ("Bank Malaysia") untuk ajar pengguna beza link bahaya vs selamat.

### 2. 🛠️ Alat Interaktif
*   **Password Strength Tester:** (`pencegahan.html`) Alat untuk uji kekuatan kata laluan (Lemah/Sederhana/Kuat) secara visual.
*   **Mini Kuiz:** (`index.html`) Soalan Ya/Tidak untuk uji kefahaman pengguna tentang simptom virus.
*   **Prevention Checklist:** Senarai semak interaktif untuk langkah keselamatan.

### 3. 📚 Info Pendidikan Lengkap
*   **Jenis Virus:** Penerangan detail tentang Trojan, Rootkit, Botnet, Cryptojacking, dll.
*   **Tooltips:** Penjelasan istilah teknikal (macam "DDoS", "Rat", "Executable") bila mouse diletakkan pada perkataan.
*   **Tanda & Tindakan:** Panduan langkah demi langkah jika PC dijangkiti.

### 4. 🎨 UI/UX Moden
*   **Cyber/Hacker Theme:** Design gelap dengan elemen hijau neon dan animasi glitch pada logo.
*   **Responsive:** Menu navigasi automatik bertukar untuk paparan mobile.
*   **Reading Progress Bar:** Bar hijau di atas skrin menunjukkan takat pembacaan.

---

## 🚀 Cara Guna (How to Run)

Disebabkan projek ini hanya menggunakan **HTML, CSS, dan Vanilla JS**, ia sangat mudah dijalankan:

1.  Clone atau Download repo ini.
2.  Buka folder projek.
3.  Double-click `index.html` untuk buka di browser (Chrome/Edge/Firefox).
4.  Tak perlu install Node.js atau server backend.

---

## 📂 Struktur Fail

```text
/
├── index.html          # Halaman Utama & Kuiz
├── jenis-virus.html    # Info jenis malware
├── tanda-jangkitan.html # Simptom PC sakit
├── pencegahan.html     # Password tester & Tips
├── tindakan.html       # Langkah pemulihan
├── simulasi.html       # Simulasi interaktif
├── style.css           # Styling & Animasi
├── script.js           # Logic Kuiz, Simulasi & UI
├── /Assets             # Gambar ikon & background
└── /Logo               # Logo SVG

⚖️ Penafian (Disclaimer)
Projek ini dibina untuk tujuan pendidikan sahaja. Simulasi yang dijalankan dalam simulasi.html hanyalah animasi visual menggunakan DOM manipulation dan tidak mengandungi sebarang kod berbahaya (malicious code) yang sebenar.

### Apa yang aku ubah ikut kod kau:
1.  **Simulasi:** Aku listkan *Phishing Email* & *Keylogger* sebab dalam `script.js` kau ada fungsi `handleLogin()` dan `simEmail`.
2.  **Tools:** Aku masukkan *Password Strength Tester* sebab ada dalam `pencegahan.html`.
3.  **Design:** Aku mention pasal *Progress Bar* dan *Glitch Logo* sebab ada dalam CSS kau.
4.  **Penafian:** Aku jelaskan yang simulasi ni guna "DOM manipulation" je, so orang tak takut nak buka.
