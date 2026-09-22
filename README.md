# To'y Taklifnomasi (Wedding Invitation Template)

Mobil qurilmalarga moslashgan, chiroyli, bir sahifalik to'y taklifnomasi.
Kun sanoq (countdown), fon musiqasi, rasmlar galereyasi va xarita bilan.

## Qanday ochish

`index.html` faylini istalgan brauzerda oching, yoki papkani biror
statik hosting (GitHub Pages, Netlify, Vercel va h.k.) ga yuklang.

## Hamma narsani qayerdan o'zgartiraman?

**Faqat bitta faylni oching: `js/config.js`.**
HTML yoki CSS ga tegishning hojati yo'q.

| Nima o'zgartirmoqchisiz          | `config.js` dagi maydon                          |
|-----------------------------------|---------------------------------------------------|
| Kelin-kuyov ismlari                | `groomName`, `brideName`                          |
| To'y sanasi/vaqti (countdown)      | `weddingDate` (format: `YYYY-MM-DDTHH:MM:SS`)      |
| Ko'rinadigan sana/vaqt matni        | `displayDate`, `displayTime`                      |
| Taklif matni                       | `inviteTitle`, `inviteSubtitle`, `welcomeMessage` |
| To'yxona nomi va manzili           | `venueName`, `venueAddress`                       |
| Xarita (Google Maps)               | `mapEmbedUrl`, `mapDirectionsUrl`                 |
| Bosh (hero) rasm                   | `heroImage`                                       |
| Kelin-kuyov rasmi                  | `coupleImage`                                     |
| Galereya rasmlari                  | `gallery: [...]`                                  |
| Fon musiqasi                       | `musicFile`, `musicAutoplay`                      |
| Pastki qism matni                  | `footerMessage`, `footerNames`                    |

## Rasmlarni almashtirish

1. O'z rasmingizni `assets/images/` papkasiga qo'ying (masalan `hero.jpg`).
2. `js/config.js` faylida tegishli qatorni yangilang, masalan:
   ```js
   heroImage: "assets/images/hero.jpg",
   ```
3. Galereya uchun massivga istalgancha rasm qo'shishingiz yoki
   o'chirishingiz mumkin:
   ```js
   gallery: [
     "assets/images/gallery-1.jpg",
     "assets/images/gallery-2.jpg"
   ]
   ```

Hozircha `assets/images/` ichida chiroyli oltin ranguli **placeholder**
(vaqtincha) rasmlar bor — ular sizning haqiqiy rasmlaringiz bilan
almashtirilguncha sayt chiroyli ko'rinishda turadi.

## Musiqani almashtirish

1. mp3 faylni `assets/music/` papkasiga qo'ying.
2. `js/config.js` da `musicFile` yo'lini yangilang:
   ```js
   musicFile: "assets/music/song.mp3",
   ```

### Nega musiqa sahifa ochilishi bilan o'zi yoqilmaydi?

Barcha zamonaviy brauzerlar (Chrome, Safari, Firefox) ovozli faylni
foydalanuvchi hech narsa bosmasdan turib avtomatik ishga tushirishni
**taqiqlaydi** — bu texnik cheklov, saytdagi xatolik emas va uni hech
qanday kod bilan aylanib o'tib bo'lmaydi.

Shuning uchun sahifa ochilganda avval chiroyli **"Taklifnomani ochish"**
qopqoq (cover) ekrani chiqadi. Mehmon shu tugmani bosgan zahoti — bu
haqiqiy bosish (klik) hisoblanganidan — musiqa 100% ishonchli tarzda
boshlanadi. Bu — real hayotdagi barcha to'y-sayt shablonlarida
qo'llaniladigan standart yechim. Tugma matnini xohlasangiz
`index.html` dagi `#openBtn` ichida o'zgartirishingiz mumkin.

O'ng pastdagi doira tugma orqali istalgan payt musiqani
yoqish/o'chirish mumkin.

## Manzil/xaritani o'zgartirish

1. [Google Maps](https://maps.google.com) da joyingizni toping.
2. **Ulashish → Xaritani joylashtirish (Share → Embed a map)** ni tanlang.
3. Berilgan HTML kodidan faqat `src="..."` ichidagi havolani ko'chirib,
   `config.js` dagi `mapEmbedUrl` ga joylashtiring.
4. "Yo'nalish olish" tugmasi uchun oddiy joy havolasini
   `mapDirectionsUrl` ga qo'ying.

## Netlify'ga yuklab, havolani "spam"dek ko'rinmasligini ta'minlash

Telegram, WhatsApp, Instagram kabi ilovalar havolani oldindan ko'rish
(preview) kartasiga aylantiradi — sarlavha, qisqa matn va rasm bilan.
Bu ma'lumotlar `index.html` faylining `<head>` qismidagi **Open Graph**
teglaridan olinadi (ular JavaScript orqali emas, oldindan tayyor
holda yozilishi kerak, chunki bu ilovalar sahifani ochib JS
ishlatmaydi — faqat xom HTML'ni o'qiydi).

1. Loyihani Netlify'ga yuklang (masalan, `netlify.com` da papkani
   sudrab tashlash orqali — "drag and drop deploy"). Sizga
   `https://random-name-1234.netlify.app` kabi manzil beriladi
   (yoki o'z domeningizni ulashingiz mumkin).
2. `index.html` faylini oching va yuqori qismidagi (`<head>` ichidagi)
   quyidagi qatorlarda **`SIZNING-SAYT-MANZILINGIZ`** so'zini haqiqiy
   domeningizga almashtiring:
   ```html
   <meta property="og:image" content="https://SIZNING-SAYT-MANZILINGIZ.netlify.app/assets/images/og-cover.jpg">
   <meta property="og:url" content="https://SIZNING-SAYT-MANZILINGIZ.netlify.app/">
   <meta name="twitter:image" content="https://SIZNING-SAYT-MANZILINGIZ.netlify.app/assets/images/og-cover.jpg">
   ```
3. Ism yoki sanani o'zgartirsangiz, o'sha yerdagi `og:title` va
   `og:description` matnlarini ham qo'lda yangilang (bular `config.js`
   dan avtomatik olinmaydi — sababi yuqorida tushuntirilgan).
4. Preview rasmini (`assets/images/og-cover.jpg`) ham yangilamoqchi
   bo'lsangiz, ikkita yo'l bor:
   - **Oddiy:** o'zingiz tayyorlagan chiroyli rasmni (tavsiya: 1200×630
     o'lcham) xuddi shu nom bilan `assets/images/og-cover.jpg` ga
     almashtiring.
   - **Avtomatik:** `generate_og_image.py` skriptidagi ism/sana
     o'zgaruvchilarini tahrirlab, terminalda qayta ishga tushiring:
     ```
     python3 generate_og_image.py
     ```
5. Havola to'g'ri ko'rinayotganini tekshirish uchun
   [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   yoki Telegram'da o'zingizga link yuborib ko'ring.

## Fayl tuzilishi

```
Invitation/
├── index.html            ← sahifa tuzilishi + ijtimoiy tarmoq (OG) teglari
├── css/style.css          ← dizayn (odatda tegilmaydi)
├── js/
│   ├── config.js          ← ★ SIZ SHU YERNI TAHRIRLAYSIZ
│   └── script.js           ← logika (odatda tegilmaydi)
├── generate_og_image.py   ← preview rasmini qayta yaratish uchun skript
└── assets/
    ├── images/             ← rasmlaringiz (shu jumladan og-cover.jpg) shu yerga
    └── music/               ← musiqa fayli shu yerga
```

## Xususiyatlar

- To'liq mobil moslashuvchan (responsive) dizayn
- "Taklifnomani ochish" qopqoq ekrani — musiqani ishonchli boshlaydi
- Kun/soat/daqiqa/soniya bo'yicha kun sanoq (countdown)
- Fon musiqasi (yoqish/o'chirish tugmasi bilan)
- Rasmlar galereyasi (bosilganda kattalashtirib ko'rish — lightbox)
- Google Xarita va "yo'nalish olish" tugmasi
- Skroll qilganda paydo bo'ladigan silliq animatsiyalar
- Ijtimoiy tarmoqlarda (Telegram/WhatsApp) chiroyli preview karta
