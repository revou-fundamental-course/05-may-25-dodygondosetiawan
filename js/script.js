document.addEventListener("DOMContentLoaded", function () {
  // 🔸 Toggle Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-link");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // 🔸 Auto Slide Banner dengan pseudo-element
  const images = [
    'css/img/pandawa.png',
    'css/img/coklat-keju.png',
    'css/img/selay-coklat.png'
  ];

  let currentIndex = 0;
  const titleEl = document.querySelector(".title");

  if (titleEl) {
    const style = document.createElement("style");
    document.head.appendChild(style);

    function updateBackground() {
      const currentImage = images[currentIndex];
      const nextIndex = (currentIndex + 1) % images.length;
      const nextImage = images[nextIndex];

      style.textContent = `
        .title::before {
          background-image: url('${currentImage}');
          opacity: 1;
        }
        .title::after {
          background-image: url('${nextImage}');
          opacity: 1;
        }
      `;

      setTimeout(() => {
        style.textContent = `
          .title::before {
            background-image: url('${nextImage}');
            opacity: 1;
          }
          .title::after {
            background-image: url('${nextImage}');
            opacity: 0;
          }
        `;
        currentIndex = nextIndex;
      }, 1000); // 1 detik transisi
    }

    updateBackground();
    setInterval(updateBackground, 3000); // ganti tiap 3 detik
  }

  // 🔸 Form Request Rasa
  const form = document.getElementById("request-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("request-name").value.trim();
      const rasa = document.getElementById("request-rasa").value.trim();

      if (nama === "" || rasa === "") {
        alert("Mohon isi semua field.");
        return;
      }

      document.getElementById("harga-output").textContent =
        `Terima kasih, ${nama}. Kami akan pertimbangkan rasa "${rasa}"!`;

      this.reset();
    });
  }

  // 🔸 Klik menu favorit
  const menuLinks = document.querySelectorAll(".menu-info");
  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const namaRasa = this.querySelector("h4").textContent;
      alert(`Kamu memilih memesan: ${namaRasa}`);
    });
  });

  // 🔸 Klik daftar menu lain
  const menuCards = document.querySelectorAll(".menu-card");
  menuCards.forEach(card => {
    card.addEventListener("click", function () {
      const rasa = this.querySelector("h4").textContent;
      alert(`Kamu memilih memesan: ${rasa}`);
    });
  });

  // 🔸 Scroll ke menu saat klik ikon keranjang
  const cartIcon = document.getElementById("cartIcon");
  const menuSection = document.getElementById("rasa-baru");

  if (cartIcon && menuSection) {
    cartIcon.addEventListener("click", function () {
      menuSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});