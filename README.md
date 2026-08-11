# Yunus Berkay İnci — Kişisel Portfolyo

İki dilli (TR/EN), editoryal tasarımlı kişisel portfolyo sitesi.
Saf HTML/CSS/JS — derleme adımı, bağımlılık veya kurulum yok.

**Canlı:** https://yberkayinci.github.io/personal-portfolio/

## Tasarım
Koyu grafit zemin, fildişi tipografi ve tek bir dingin pirinç vurgu rengi üzerine kurulu
"editoryal gece" dili: serif başlıklar (Instrument Serif), Inter gövde metni, mono mikro
etiketler ve hairline (1px) ayraçlar. Parlayan neon efektler yerine yumuşak, difüz ışık.

- **Açık / koyu tema** — sistem tercihini izler, düğmeyle değiştirilir, seçim hatırlanır
- **İki dil** — TR/EN, tüm içerik `data.js` içinde, seçim hatırlanır
- **Ölçülü hareket** — açılış perdesi, maskeli başlık girişi, scroll-reveal (kademeli),
  sayaç animasyonu, imleci takip eden kart ışığı, manyetik butonlar, parallax, kayan şerit
- `prefers-reduced-motion` açıksa tüm animasyonlar kapanır
- Erişilebilirlik: içeriğe geç bağlantısı, klavye odak halkaları, WCAG AA kontrast oranları

## GitHub projeleri nasıl güncel kalıyor?
Projeler bölümü **derleme anında değil, sayfa açıldığında** GitHub REST API'sinden çekilir:

```
GET https://api.github.com/users/yberkayinci/repos?per_page=100&sort=updated
```

Yani yeni bir repo açtığında ya da bir açıklamayı değiştirdiğinde siteye hiç dokunmadan
içerik kendiliğinden güncellenir. Ayrıntılar:

- **Önbellek:** sonuç 30 dakika `localStorage`'a yazılır. Sayfa önce önbellekten anında
  çizilir, arka planda taze veri gelince yeniden çizilir (stale-while-revalidate).
  Bu, GitHub'ın kimliksiz istekler için koyduğu saatte 60 istek sınırını da korur.
- **Filtre:** fork'lar, arşivlenmiş depolar ve profil README deposu listeden düşülür.
- **Sıralama:** yıldız sayısı, eşitlikte son commit tarihi.
- **Öne çıkanlar:** `SITE.featuredRepos` listesindeki repo adları en üstte gösterilir;
  liste boşsa en çok yıldız alan 6 repo seçilir.
- **Canlı istatistikler:** depo sayısı, toplam yıldız, kullanılan dil sayısı ve son commit
  tarihi aynı yanıttan hesaplanır — ek istek yok.
- **Hata durumu:** API yanıt vermezse (ör. kota) doğrudan GitHub profiline bağlantı gösterilir.

Statik barındırmada (GitHub Pages) sunucu tarafı olmadığı için bu tarayıcı taraflı yaklaşım
en pratik çözüm. Kota ya da gizlilik bir sorun olursa alternatif, günde bir çalışan bir
GitHub Actions işiyle `repos.json` üretip onu okumak olurdu.

## İçeriği düzenleme
Tüm metinler tek dosyada: **`data.js`**. Her alan `{ tr: "...", en: "..." }` biçiminde.

| Alan | İçerik |
|------|--------|
| `SITE.profile` | Ad, unvan, e-posta, bağlantılar, hero yazıları |
| `SITE.now` | "Şu anda" satırları |
| `SITE.about` | Hakkımda metni + öne çıkan sayısal başarımlar |
| `SITE.experience` / `SITE.education` | Zaman çizelgeleri |
| `SITE.academicProjects` | Araştırma projeleri |
| `SITE.skills` | Yetenek grupları |
| `SITE.publications` / `SITE.honors` / `SITE.leadership` | Akademik bölüm |
| `SITE.featuredRepos` | Öne çıkacak GitHub repo adları |
| `I18N` | Menü, başlık ve arayüz metinleri |

## Dosyalar
| Dosya | İçerik |
|-------|--------|
| `index.html` | Sayfa iskeleti, meta etiketler, JSON-LD |
| `styles.css` | Tema değişkenleri, düzen, animasyonlar |
| `main.js` | i18n, tema, animasyonlar, GitHub verisi, mini oyun |
| `data.js` | **Tüm içerik (buradan düzenle)** |
| `assets/` | Logo ve fotoğraflar |

## Yerel önizleme
```bash
npx serve .
```
Veya `index.html`'i doğrudan tarayıcıda aç.

## Yayınlama
GitHub Pages: **Settings → Pages → Branch: `main` / root**.
`main` dalına her push'ta site kendiliğinden güncellenir.
