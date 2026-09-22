/* =========================================================================
   TO'Y TAKLIFNOMASI — logic
   Barcha matn/rasm/musiqa js/config.js faylidan olinadi.
   ========================================================================= */

(function () {
  const cfg = window.weddingConfig || {};
  document.body.classList.add("locked");

  /* ---------- Populate text & images from config ---------- */
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
  };

  setText("groomNameHero", cfg.groomName);
  setText("brideNameHero", cfg.brideName);
  setText("heroDate", cfg.displayDate);
  setText("inviteTitle", cfg.inviteTitle);
  setText("inviteSubtitle", cfg.inviteSubtitle);
  setText("welcomeMessage", cfg.welcomeMessage);
  setText("detailDate", cfg.displayDate);
  setText("detailTime", cfg.displayTime);
  setText("venueName", cfg.venueName);
  setText("venueAddress", cfg.venueAddress);
  setText("footerMessage", cfg.footerMessage);
  setText("footerNames", cfg.footerNames);
  setText("coverGroom", cfg.groomName);
  setText("coverBride", cfg.brideName);
  setText("coverDate", cfg.displayDate);
  document.title = `${cfg.groomName || ""} & ${cfg.brideName || ""} — To'y taklifnomasi`;

  const heroBg = document.getElementById("heroBg");
  if (heroBg && cfg.heroImage) heroBg.style.backgroundImage = `url('${cfg.heroImage}')`;

  const coupleImg = document.getElementById("coupleImg");
  if (coupleImg && cfg.coupleImage) coupleImg.src = cfg.coupleImage;

  const mapFrame = document.getElementById("mapFrame");
  if (mapFrame && cfg.mapEmbedUrl) mapFrame.src = cfg.mapEmbedUrl;

  const directionsBtn = document.getElementById("directionsBtn");
  if (directionsBtn && cfg.mapDirectionsUrl) directionsBtn.href = cfg.mapDirectionsUrl;

  /* ---------- Gallery ---------- */
  const galleryGrid = document.getElementById("galleryGrid");
  const gallery = Array.isArray(cfg.gallery) ? cfg.gallery : [];
  if (galleryGrid) {
    gallery.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Rasm ${i + 1}`;
      img.dataset.index = i;
      galleryGrid.appendChild(img);
    });
  }

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  let currentIndex = 0;

  function openLightbox(index) {
    if (!gallery.length) return;
    currentIndex = index;
    lightboxImg.src = gallery[currentIndex];
    lightbox.classList.add("open");
  }
  function closeLightbox() { lightbox.classList.remove("open"); }
  function showRelative(delta) {
    currentIndex = (currentIndex + delta + gallery.length) % gallery.length;
    lightboxImg.src = gallery[currentIndex];
  }

  if (galleryGrid) {
    galleryGrid.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG") openLightbox(Number(e.target.dataset.index));
    });
  }
  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev")?.addEventListener("click", () => showRelative(-1));
  document.getElementById("lightboxNext")?.addEventListener("click", () => showRelative(1));
  lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showRelative(-1);
    if (e.key === "ArrowRight") showRelative(1);
  });

  /* ---------- Countdown ---------- */
  function updateCountdown() {
    const target = new Date(cfg.weddingDate).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    const pad = (n) => String(n).padStart(2, "0");
    setText("cd-days", pad(days));
    setText("cd-hours", pad(hours));
    setText("cd-minutes", pad(minutes));
    setText("cd-seconds", pad(seconds));
  }
  if (cfg.weddingDate) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ---------- Background music ---------- */
  const audio = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  if (audio && cfg.musicFile) audio.src = cfg.musicFile;

  function startMusic() {
    if (!audio || !audio.src) return;
    audio.play().then(() => {
      musicToggle?.classList.add("playing");
    }).catch(() => {
      /* Browser blocked playback even on a user gesture — user can still
         press the floating music button manually. */
    });
  }

  musicToggle?.addEventListener("click", () => {
    if (!audio.src) return;
    if (audio.paused) {
      startMusic();
    } else {
      audio.pause();
      musicToggle.classList.remove("playing");
    }
  });

  /* ---------- Cover / opening screen ----------
     A real click is a genuine user gesture, so calling audio.play()
     synchronously inside this handler reliably passes every browser's
     autoplay policy (true silent autoplay on page load is not possible
     in any modern browser). */
  const cover = document.getElementById("cover");
  document.getElementById("openBtn")?.addEventListener("click", () => {
    if (cfg.musicAutoplay !== false) startMusic();
    cover?.classList.add("cover-hidden");
    document.body.classList.remove("locked");
  });

  /* ---------- Scroll-to-reveal animation ---------- */
  const animatedEls = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  animatedEls.forEach((el) => observer.observe(el));

  /* ---------- Smooth scroll from hero arrow ---------- */
  document.getElementById("scrollDown")?.addEventListener("click", () => {
    document.querySelector(".countdown-section")?.scrollIntoView({ behavior: "smooth" });
  });
})();
