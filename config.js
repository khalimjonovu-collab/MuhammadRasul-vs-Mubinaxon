/* =========================================================================
   TO'Y TAKLIFNOMASI SOZLAMALARI (WEDDING INVITATION CONFIG)
   -------------------------------------------------------------------------
   Saytdagi BARCHA matn, rasm, musiqa va manzilni shu yerda o'zgartirasiz.
   Boshqa fayllarni (HTML/CSS/JS) ochish shart emas.
   ========================================================================= */

window.weddingConfig = {

  /* ---------- KELIN-KUYOV ISMLARI ---------- */
  groomName: "Muhammad Rasul",
  brideName: "Mubinaxon",

  /* ---------- SANA VA VAQT ----------
     Countdown (kun sanoq) shu sanagacha ishlaydi.
     Format: "YYYY-MM-DDTHH:MM:SS"  (24 soatlik vaqt) */
  weddingDate: "2026-10-08T17:00:00",

  /* Bosh sahifada ko'rinadigan sana/vaqt matni (istalgan formatda yozishingiz mumkin) */
  displayDate: "08-oktabr, 2026-yil",
  displayTime: "17:00",
  displayWeekday: "Payshanba",

  /* ---------- TAKLIF MATNI ---------- */
  inviteTitle: "Bizning to'yimizga",
  inviteSubtitle: "Marhamat qilib tashrif buyurishingizni so'raymiz",
  welcomeMessage:
    "Hayotimizning eng baxtli kunida yonimizda bo'lishingizni, quvonchimizga sherik bo'lishingizni chin dildan xohlaymiz.",
  parentsMessage: "",

  /* ---------- TO'YXONA / MANZIL ---------- */
  venueName: "\"GULSHAN\" to'yxonasi",
  venueAddress: "Andijon tumani., Do'stlik MFY, Gulshan ko'chasi, 7-uy",

  /* Google Xarita manzili qanday olinadi:
     1) Google Maps'da joyni toping -> "Share" -> "Embed a map" -> HTML kodidan
        src="..." ichidagi havolani shu yerga qo'ying (mapEmbedUrl).
     2) "Yo'nalish olish" tugmasi uchun oddiy Google Maps havolasini
        mapDirectionsUrl ga qo'ying (masalan, joy nomini qidiruv linki). */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.5977267327205!2d72.3184598638929!3d40.72117316769558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc9336479cb781%3A0xef4b9d41fa34288d!2sGulshan%20to'yxonasi!5e1!3m2!1sru!2s!4v1790069808449!5m2!1sru!2s",
  mapDirectionsUrl: "https://maps.app.goo.gl/7STWYM2HP1YBNg4t7",

  /* ---------- RASMLAR ----------
     Rasmlaringizni "assets/images/" papkasiga qo'ying va nomini shu yerga yozing.
     Masalan: heroImage: "assets/images/hero.jpg" */
  heroImage: "assets/images/hero.jpg",
  coupleImage: "assets/images/couple.jpg",

  /* Galereya uchun istalgancha rasm qo'shishingiz mumkin (massivga qator qo'shib) */
  gallery: [
    "assets/images/rasm-1.jpg",
    "assets/images/rasm-2.jpg",
    "assets/images/rasm-3.jpg",
    "assets/images/rasm-4.jpg"
  ],

  /* ---------- MUSIQA ----------
     Fon musiqasini "assets/music/" papkasiga qo'ying (mp3 format tavsiya etiladi)
     va nomini shu yerga yozing. Masalan: "assets/music/song.mp3" */
  musicFile: "assets/music/song.mp3",
  musicAutoplay: true,

  /* ---------- YAKUNIY QISM ---------- */
  footerMessage: "Sizni kutamiz!",
  footerNames: "Aziz & Malika"
};
