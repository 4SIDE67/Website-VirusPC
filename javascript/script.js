// Tetapkan tahun automatik di footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// =====================
// Kuiz Ringkas (Halaman Utama)
// =====================
const quizContainer = document.getElementById("quiz");
const submitQuizBtn = document.getElementById("submitQuiz");
const quizResult = document.getElementById("quizResult");

if (quizContainer && submitQuizBtn && quizResult) {
  const questions = [
    {
      text: "Komputer tiba-tiba sangat perlahan walaupun hanya buka satu program.",
      isVirusSign: true,
    },
    {
      text: "Anda baru pasang game yang berat dan grafik tinggi.",
      isVirusSign: false,
    },
    {
      text: "Banyak pop-up iklan pelik muncul walaupun browser ditutup.",
      isVirusSign: true,
    },
    {
      text: "Kawan anda terima mesej pelik dari akaun media sosial anda tanpa anda hantar.",
      isVirusSign: true,
    },
  ];

  function renderQuiz() {
    questions.forEach((q, index) => {
      const item = document.createElement("div");
      item.className = "quiz-item";
      item.innerHTML = `
        <p><strong>Soalan ${index + 1}:</strong> ${q.text}</p>
        <div class="quiz-options">
          <label><input type="radio" name="q${index}" value="yes"> Ya</label>
          <label><input type="radio" name="q${index}" value="no"> Tidak</label>
        </div>
      `;
      quizContainer.appendChild(item);
    });
  }

  // Reading Progress Bar
window.onscroll = function() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  
  let bar = document.getElementById("progressBar");
  if (bar) {
    bar.style.width = scrolled + "%";
  }
};

  function checkQuiz() {
    let score = 0;
    let answeredAll = true;

    questions.forEach((q, index) => {
      const selected = document.querySelector(
        `input[name="q${index}"]:checked`
      );
      if (!selected) {
        answeredAll = false;
        return;
      }
      const answerYes = selected.value === "yes";
      if (answerYes === q.isVirusSign) {
        score++;
      }
    });

    if (!answeredAll) {
      quizResult.textContent = "Sila jawab semua soalan dahulu.";
      quizResult.style.color = "#f97316";
      return;
    }

    quizResult.textContent = `Markah anda: ${score} / ${questions.length}`;
    quizResult.style.color = score === questions.length ? "#22c55e" : "#e5e7eb";
  }

  submitQuizBtn.addEventListener("click", checkQuiz);
  renderQuiz();
}

const passInput = document.getElementById("passInput");
const strengthFill = document.getElementById("strengthFill");
const strengthText = document.getElementById("strengthText");

if (passInput) {
  passInput.addEventListener("input", () => {
    const val = passInput.value;
    let strength = 0;
    
    if (val.length > 5) strength++; // Panjang
    if (val.length > 10) strength++; // Panjang lagi
    if (/[A-Z]/.test(val)) strength++; // Huruf besar
    if (/[0-9]/.test(val)) strength++; // Nombor
    if (/[^A-Za-z0-9]/.test(val)) strength++; // Simbol

    let width = (strength / 5) * 100;
    let color = "red";
    let text = "Lemah";

    if (strength > 2) { color = "orange"; text = "Sederhana"; }
    if (strength > 4) { color = "#22c55e"; text = "Kuat"; }

    strengthFill.style.width = width + "%";
    strengthFill.style.background = color;
    strengthText.textContent = `Status: ${text}`;
    strengthText.style.color = color;
  });
}

// =====================
// Simulasi Virus (Halaman Simulasi)
// =====================
const simScreen = document.getElementById("simScreen");
const simStatus = document.getElementById("simStatus");
const simDescribe = document.getElementById("simDescribe");
const simDesktop = document.getElementById("simDesktop");
const simLog = document.getElementById("simLog");
const simButtons = document.querySelectorAll(".sim-btn");
const simReset = document.getElementById("simReset");
const guideBtn = document.getElementById("guideBtn");

// Elemen tambahan: emel phishing, login, browser mini
const simEmail = document.getElementById("simEmail");
const simLogin = document.getElementById("simLogin");
const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const loginBtn = document.getElementById("loginBtn");

const browserAddress = document.getElementById("browserAddress");
const browserGo = document.getElementById("browserGo");
const browserView = document.getElementById("browserView");

if (
  simScreen &&
  simStatus &&
  simDescribe &&
  simDesktop &&
  simLog &&
  simEmail &&
  simLogin &&
  loginUser &&
  loginPass &&
  loginBtn &&
  browserAddress &&
  browserGo &&
  browserView
) {
  let simIntervalIds = [];
  let spywareActive = false; // untuk keylogger
  let browserHijackActive = false; // untuk adware/hijack

  function clearSimIntervals() {
    simIntervalIds.forEach((id) => clearInterval(id));
    simIntervalIds = [];
  }

  function resetDesktopFiles() {
    simDesktop.innerHTML = "";
    const files = [
      "dokumen_penting.docx",
      "gambar_percutian.jpg",
      "akaun_belanjawan.xlsx",
      "nota_sekolah.pdf",
    ];
    files.forEach((name) => {
      const div = document.createElement("div");
      div.className = "sim-file";
      div.dataset.name = name;
      div.textContent = name;
      simDesktop.appendChild(div);
    });
  }

  function resetSim() {
    clearSimIntervals();
    resetDesktopFiles();
    simLog.innerHTML = "";
    simDescribe.textContent =
      "Pilih mana-mana jenis virus di sebelah kiri untuk memulakan simulasi, atau gunakan Mode Panduan untuk lihat aliran serangan yang biasa.";
    simStatus.innerHTML =
      '<span class="status-safe">Status: SELAMAT</span>';
    spywareActive = false;
    browserHijackActive = false;
    browserAddress.value = "https://google.com";
    browserView.innerHTML =
      "<p><strong>google.com</strong> sepatutnya dipaparkan di sini. Taip alamat lain di bar alamat.</p>";
  }

  function log(message) {
    const time = new Date().toLocaleTimeString();
    const line = document.createElement("div");
    line.textContent = `[${time}] ${message}`;
    simLog.appendChild(line);
    simLog.scrollTop = simLog.scrollHeight;
  }

  function setStatusDanger(text) {
    simStatus.innerHTML = `<span class=\"status-danger\">Status: ${text}</span>`;
  }

  function randomFileElement() {
    const files = simDesktop.querySelectorAll(".sim-file");
    if (!files.length) return null;
    const index = Math.floor(Math.random() * files.length);
    return files[index];
  }

  function simulate(type) {
    resetSim();
    switch (type) {
      case "file": {
        simDescribe.textContent =
          "Simulasi Virus Fail: menjangkiti fail boleh laku dan perlahan-lahan merosakkan dokumen.";
        setStatusDanger("TERJANGKIT (VIRUS FAIL)");
        log("Virus fail mula aktif apabila pengguna membuka program yang dijangkiti.");
        const id = setInterval(() => {
          const file = randomFileElement();
          if (!file) return;
          file.classList.add("sim-file-infected");
          file.textContent = file.dataset.name + ".infected";
          log(`Fail '${file.dataset.name}' telah dijangkiti.`);
        }, 1500);
        simIntervalIds.push(id);
        break;
      }
      case "worm": {
        simDescribe.textContent =
          "Simulasi Worm: merebak pantas melalui rangkaian dan menggandakan dirinya.";
        setStatusDanger("TERJANGKIT (WORM)");
        log("Worm memasuki rangkaian dan mula menggandakan diri tanpa tindakan pengguna.");
        const id = setInterval(() => {
          const clone = document.createElement("div");
          clone.className = "sim-file sim-worm";
          clone.textContent = "worm.exe";
          simDesktop.appendChild(clone);
          log("Satu salinan worm.exe baru muncul di sistem.");
        }, 1000);
        simIntervalIds.push(id);
        break;
      }
      case "trojan": {
        simDescribe.textContent =
          "Simulasi Trojan: kelihatan seperti program biasa tetapi membuka pintu belakang.";
        setStatusDanger("TERJANGKIT (TROJAN)");
        log("Pengguna memasang 'Game_Percuma_Setup.exe' yang sebenarnya trojan.");
        const fake = document.createElement("div");
        fake.className = "sim-file sim-trojan";
        fake.textContent = "Game_Percuma_Setup.exe";
        simDesktop.appendChild(fake);
        setTimeout(() => {
          log("Trojan diam-diam membuka sambungan ke pelayan penyerang...");
          log("Data kata laluan dan tetapan sistem mula dikumpul.");
        }, 1200);
        break;
      }
      case "ransom": {
        simDescribe.textContent =
          "Simulasi Ransomware: mengenkripsi fail dan meminta wang tebusan.";
        setStatusDanger("TERKUNCI (RANSOMWARE)");
        log("Ransomware diaktifkan melalui lampiran emel mencurigakan.");
        const files = simDesktop.querySelectorAll(".sim-file");
        files.forEach((file, index) => {
          setTimeout(() => {
            file.classList.add("sim-file-locked");
            file.textContent = "LOCKED_" + file.dataset.name;
            log(`Fail '${file.dataset.name}' telah dikunci.`);
          }, 700 * (index + 1));
        });
        setTimeout(() => {
          const note = document.createElement("div");
          note.className = "sim-ransom-note";
          note.innerHTML =
            "Semua fail anda telah dikunci. Bayar 1 Bitcoin untuk mendapatkan kunci. (SIMULASI SAHAJA)";
          simDesktop.appendChild(note);
          log("Nota tebusan muncul pada skrin pengguna.");
        }, 700 * (files.length + 1));
        break;
      }
      case "spyware": {
        simDescribe.textContent =
          "Simulasi Spyware/Keylogger: merekod aktiviti dan kekunci yang ditekan.";
        setStatusDanger("TERJANGKIT (SPYWARE)");
        log("Spyware dipasang bersama aplikasi cetak rompak.");
        spywareActive = true;
        const id = setInterval(() => {
          log("[SPYWARE] Menghantar data terkumpul ke pelayan penyerang.");
        }, 4000);
        simIntervalIds.push(id);
        break;
      }
      case "adware": {
        simDescribe.textContent =
          "Simulasi Adware / Browser Hijack: memaparkan banyak iklan dan menukar destinasi laman.";
        setStatusDanger("TERCEMAR (ADWARE)");
        log("Adware dipasang sebagai 'toolbar' tambahan dalam browser.");
        browserHijackActive = true;
        const id = setInterval(() => {
          const pop = document.createElement("div");
          pop.className = "sim-popup";
          pop.textContent = "Anda menang hadiah! Klik di sini (JANGAN PERCAYA)";
          simScreen.appendChild(pop);
          setTimeout(() => {
            pop.remove();
          }, 2500);
          log("Pop-up iklan palsu muncul di skrin.");
        }, 1300);
        simIntervalIds.push(id);
        break;
      }
    }
  }

  // Emel phishing actions
  if (simEmail) {
    simEmail.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      const action = target.dataset.emailAction;
      if (!action) return;

      if (action === "click-link") {
        log("[PILIHAN SALAH] Pengguna klik pautan dalam emel phishing.");
        log(
          "Pautan membawa ke laman login palsu yang kelihatan seperti laman bank sebenar."
        );
        browserAddress.value = "https://bank-malaysia-secure-login.com";
        browserView.innerHTML =
          "<p><strong>Laman login palsu</strong> memaparkan borang untuk mencuri ID dan kata laluan anda.</p>";
      } else if (action === "check-safely") {
        log("[PILIHAN BETUL] Pengguna semak emel secara selamat.");
        log(
          "Pengguna periksa alamat emel sebenar, ejaan pelik, dan tidak klik pautan sebarangan."
        );
      }
    });
  }

  // Login form + keylogger simulasi
  function handleLogin() {
    const user = loginUser.value.trim();
    const pass = loginPass.value;
    if (!user || !pass) {
      log("Sila isi username dan kata laluan untuk meneruskan (SIMULASI).");
      return;
    }
    if (spywareActive) {
      log(`[KEYLOGGER] Merekod percubaan login - Username: ${user}, Kata Laluan: ${pass}`);
      log(
        "Inilah yang berlaku jika PC dijangkiti keylogger: setiap login anda boleh dilihat penyerang."
      );
    } else {
      log(
        "Tiada spyware aktif dalam simulasi ini, tetapi di dunia sebenar anda tidak akan tahu jika keylogger telah dipasang."
      );
    }
  }

  loginBtn.addEventListener("click", handleLogin);

  // Browser mini + hijack
  function handleBrowserGo() {
    const url = browserAddress.value.trim();
    if (!url) return;

    if (browserHijackActive) {
      log(
        `[BROWSER HIJACK] Anda menaip '${url}', tetapi anda dibawa ke laman spam penuh iklan.`
      );
      browserView.innerHTML =
        "<p><strong>Laman spam/hijack</strong> dengan banyak iklan dan pop-up dipaparkan.</p>";
    } else {
      browserView.innerHTML = `<p>Memaparkan kandungan selamat untuk <strong>${url}</strong> (simulasi).</p>`;
      log(`Browser membuka laman: ${url} (SIMULASI).`);
    }
  }

  browserGo.addEventListener("click", handleBrowserGo);

  // Mode panduan langkah demi langkah
  if (guideBtn) {
    guideBtn.addEventListener("click", () => {
      resetSim();
      log("[PANDUAN] Langkah 1: Pengguna menerima emel phishing dengan mesej panik.");
      setTimeout(() => {
        log("[PANDUAN] Langkah 2: Pengguna klik pautan dalam emel dan dibawa ke laman palsu.");
        browserAddress.value = "https://bank-malaysia-secure-login.com";
        browserView.innerHTML =
          "<p><strong>Laman login palsu</strong> yang cuba meniru laman bank sebenar.</p>";
      }, 1500);
      setTimeout(() => {
        log(
          "[PANDUAN] Langkah 3: Pengguna masukkan ID dan kata laluan di laman palsu tersebut."
        );
      }, 3000);
      setTimeout(() => {
        log(
          "[PANDUAN] Langkah 4: Penyerang menggunakan maklumat tersebut untuk akses akaun sebenar pengguna."
        );
      }, 4500);
      setTimeout(() => {
        log(
          "[PANDUAN] Langkah 5: Cara elak - jangan klik pautan mencurigakan, taip sendiri alamat bank di browser dan semak URL."
        );
      }, 6000);
    });
  }

  // Trigger simulasi mengikut butang jenis virus
  if (simButtons.length) {
    simButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.sim;
        simulate(type);
      });
    });
  }

  if (simReset) {
    simReset.addEventListener("click", resetSim);
  }

  // Set persekitaran awal bila halaman dibuka
  resetSim();
}

// =====================
// Scroll to top button (global)
// =====================
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
