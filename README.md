# Yunus Berkay İnci — Kişisel Portfolyo

Modern, iki dilli (TR/EN), koyu + neon temalı, etkileşimli kişisel portfolyo sitesi.
Saf HTML/CSS/JS ile yazıldı — **kurulum gerektirmez**, `index.html`'e çift tıklayarak açabilirsin.

## ✨ Özellikler
- 🌐 **İki dilli** (Türkçe / İngilizce) — sağ üstteki TR/EN düğmesi
- 🎬 **Sinematik açılış (preloader)** + film grain, hareketli gradyan bloblar
- 🖼️ **Hero fotoğrafı** — Times Square / Claude panosu, neon çerçeve + yüzen etiketler + 3D tilt
- 🌌 **Etkileşimli sinir ağı arkaplanı** — fareyle tepki veren parçacıklar
- ⌨️ Yazı animasyonu, scroll-reveal, sayaç (count-up), manyetik butonlar, parallax, özel imleç
- 🏷️ Sonsuz kayan **teknoloji şeridi (marquee)**
- 🐙 **GitHub projeleri otomatik** — `github.com/yberkayinci` reposundan canlı çekilir
- 🎮 **Mini oyun** — "Veri Yakalayıcı" (fare veya ← → tuşları)
- 📱 Tamamen **responsive** (mobil hamburger menü)
- 🔬 Akademik bölüm: CV'deki en iyi projeler, yayınlar, liderlik
- 📄 **CV indirme** (PDF) — `assets/Yunus_Berkay_Inci_CV.pdf`

## 🖼️ Varlıklar (`assets/`)
- `yunus-hero.jpg` — hero portre fotoğrafı (kaynak: WhatsApp foto, optimize edildi)
- `yunus-square.jpg` — kare kırpım (yedek/avatar için)
- `Yunus_Berkay_Inci_CV.pdf` — indirilebilir CV
Fotoğrafı değiştirmek için `assets/yunus-hero.jpg` dosyasını değiştir.

## 📝 İçeriği Düzenleme
Tüm metinler tek dosyada: **`data.js`**. Her alan `{ tr: "...", en: "..." }` biçimindedir.
- Kişisel bilgi: `SITE.profile`
- Deneyim / eğitim / yetenekler / yayınlar: ilgili diziler
- Öne çıkan GitHub repoları: `SITE.featuredRepos` listesi
- Menü/başlık metinleri: `I18N`

## 🚀 Yayınlama (ücretsiz)
**Seçenek 1 — GitHub Pages**
1. Bu klasörü `yberkayinci/personal-portfolio` reposuna yükle.
2. Settings → Pages → Branch: `main` / `root` → Save.
3. Site `https://yberkayinci.github.io/personal-portfolio` adresinde yayında.

**Seçenek 2 — Netlify / Vercel**: Klasörü sürükle-bırak, anında yayında.

## 📂 Dosyalar
| Dosya | İçerik |
|-------|--------|
| `index.html` | Sayfa iskeleti |
| `styles.css` | Koyu + neon tema |
| `main.js` | Animasyon, i18n, GitHub, oyun |
| `data.js` | **Tüm içerik (buradan düzenle)** |

## 🔧 Yerel önizleme
İstersen basit bir sunucuyla:
```bash
npx serve .
```
Veya doğrudan `index.html`'i tarayıcıda aç.
