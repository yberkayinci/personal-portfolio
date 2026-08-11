/* =========================================================================
   PORTFOLYO İÇERİĞİ  —  Tüm metinleri buradan düzenleyebilirsin.
   Her alan { tr: "...", en: "..." } biçimindedir (iki dilli).
   GitHub projeleri canlı olarak API'den çekilir; öne çıkanları
   aşağıdaki "featuredRepos" listesinden seçebilirsin.
   ========================================================================= */

const SITE = {
  /* ---------- Profil ---------- */
  profile: {
    name: "Yunus Berkay İnci",
    github: "yberkayinci",                       // GitHub kullanıcı adı
    email: "berkayinci25@gmail.com",
    location: { tr: "Ankara, Türkiye", en: "Ankara, Türkiye" },
    linkedin: "https://linkedin.com/in/yunusberkayinci",
    githubUrl: "https://github.com/yberkayinci",
    scholar: "",                                  // Google Scholar profili (varsa)
    orcid: "",                                    // ORCID (varsa)
    title: {
      tr: "Yazılım Mühendisi · Uygulamalı Yapay Zekâ",
      en: "Software Engineer · Applied AI"
    },
    // Hero bölümündeki dönen yazılar (typing efekti)
    roles: {
      tr: ["LLM & RAG Sistemleri", "Çok Ajanlı Yapay Zekâ", "Full-Stack Mimari", "Bilgisayarlı Görü", "Edge AI & AIoT"],
      en: ["LLM & RAG Systems", "Multi-Agent AI", "Full-Stack Architecture", "Computer Vision", "Edge AI & AIoT"]
    },
    tagline: {
      tr: "Uygulamalı yapay zekâ sistemlerini uçtan uca kuruyorum — kurum içinde çalışan yerel LLM'ler, çok ajanlı mimariler ve üretime çıkan full-stack ürünler.",
      en: "I ship applied-AI systems end to end — fully on-premise LLMs, multi-agent architectures and full-stack products that reach production."
    },
    availability: {
      tr: "Araştırma iş birliklerine ve yeni projelere açığım",
      en: "Open to research collaborations and new projects"
    },
    // Hero fotoğrafının altındaki not
    photoCaption: { tr: "New York · Times Square", en: "New York · Times Square" }
  },

  /* ---------- Şu an ne yapıyorum ---------- */
  now: [
    {
      label: { tr: "Araştırma", en: "Research" },
      text: {
        tr: "UPCT (İspanya) · EU destekli ADDIM projesinde LLM çok ajanlı sistemler",
        en: "UPCT (Spain) · LLM multi-agent systems on the EU-funded ADDIM project"
      }
    },
    {
      label: { tr: "Mühendislik", en: "Engineering" },
      text: {
        tr: "4Dimension · Kamu için tamamen yerel (on-premise) LLM/RAG platformu",
        en: "4Dimension · Fully on-premise LLM/RAG platform for the public sector"
      }
    },
    {
      label: { tr: "Akademi", en: "Academia" },
      text: {
        tr: "AYBÜ · Yazılım Mühendisliği yüksek lisansı (tezli)",
        en: "AYBU · M.Sc. in Software Engineering (thesis program)"
      }
    }
  ],

  /* ---------- Hakkımda ---------- */
  about: {
    tr: `Uygulamalı yapay zekâ sistemlerini fikirden üretime taşıyan bir yazılım mühendisi ve yüksek lisans araştırmacısıyım. Kamu sektöründe, dışarıya hiçbir veri çıkmadan çalışan tamamen yerel (on-premise) bir LLM/RAG platformunu üretime aldım; şu anda asistan robotlar için yerel LLM tabanlı çok ajanlı orkestrasyon üzerine çalışıyorum. İki uluslararası konferans bildirisinin yazarı ve TÜBİTAK 2209-A araştırma bursu sahibiyim. Python/FastAPI, Laravel/Vue ve Java/.NET tarafında full-stack; derin öğrenme, bilgisayarlı görü ve veri bilimi tarafında araştırmacı olarak rahatım.`,
    en: `I am a software engineer and M.Sc. researcher who takes applied-AI systems from idea to production. I shipped a fully on-premise LLM/RAG platform for the public sector where no institutional data ever leaves the environment, and I currently work on local-LLM multi-agent orchestration for assistive robotics. I am the author of two international conference papers and the holder of a TÜBİTAK 2209-A research grant — comfortable across the full stack (Python/FastAPI, Laravel/Vue, Java/.NET) and equally at home in deep learning, computer vision and data science.`,
    highlights: [
      { value: "0.99",  label: { tr: "AUC · Hiperspektral anomali tespiti", en: "AUC · Hyperspectral anomaly detection" } },
      { value: "97.5%", label: { tr: "Hit@5 · Hibrit RAG erişimi", en: "Hit@5 · Hybrid RAG retrieval" } },
      { value: "61.14", label: { tr: "MAE · SOTA'yı geçen kalabalık analizi", en: "MAE · SOTA-beating crowd analysis" } },
      { value: "2",     label: { tr: "Uluslararası konferans bildirisi", en: "International conference papers" } }
    ]
  },

  /* ---------- Eğitim ---------- */
  education: [
    {
      degree: { tr: "Yazılım Mühendisliği Yüksek Lisansı (Tezli)", en: "M.Sc. in Software Engineering (Thesis)" },
      school: { tr: "Ankara Yıldırım Beyazıt Üniversitesi", en: "Ankara Yıldırım Beyazıt University" },
      date:   { tr: "Eyl 2026 – Günümüz · Beklenen: Haz 2028", en: "Sep 2026 – Present · Expected: Jun 2028" },
      detail: { tr: "Araştırma alanı: LLM tabanlı çok ajanlı sistemler ve uygulamalı yapay zekâ.", en: "Research area: LLM-based multi-agent systems and applied AI." }
    },
    {
      degree: { tr: "Erasmus+ Lisansüstü Staj Programı (ERAP) · 26 AKTS", en: "Erasmus+ Postgraduate Traineeship Programme (ERAP) · 26 ECTS" },
      school: { tr: "Universidad Politécnica de Cartagena (UPCT) — EUT+, İspanya", en: "Universidad Politécnica de Cartagena (UPCT) — EUT+, Spain" },
      date:   { tr: "Eyl 2026 – Şub 2027", en: "Sep 2026 – Feb 2027" },
      detail: { tr: "Altı aylık EUT+ araştırma stajı; UPCT İspanyolca programı ile dil seviyesi B1'e taşındı.", en: "Six-month EUT+ research traineeship; Spanish language programme carried to B1." }
    },
    {
      degree: { tr: "Yazılım Mühendisliği Lisansı — Onur Öğrencisi", en: "B.Sc. in Software Engineering — Honor Student" },
      school: { tr: "Ankara Yıldırım Beyazıt Üniversitesi", en: "Ankara Yıldırım Beyazıt University" },
      date:   { tr: "Mezuniyet: Haz 2026 · %100 İngilizce", en: "Graduated Jun 2026 · 100% English instruction" },
      detail: { tr: "Bitirme projesi: yapay zekâ destekli hiperspektral anomali tespiti — TÜBİTAK 2209-A destekli.", en: "Senior capstone: AI-driven hyperspectral anomaly detection — funded by TÜBİTAK 2209-A." }
    }
  ],

  /* ---------- Deneyim ---------- */
  experience: [
    {
      role: { tr: "Yapay Zekâ & Full-Stack Yazılım Mühendisi (LLM/RAG)", en: "AI & Full-Stack Software Engineer (LLM/RAG)" },
      company: "4Dimension Information Technology and Consulting Inc.",
      date: { tr: "Ara 2025 – Günümüz · Proje bazlı · Ankara", en: "Dec 2025 – Present · Project-based · Ankara" },
      points: {
        tr: [
          "Türkiye kamu sektörü iç denetimi için, ücretli API bağımlılığı olmayan ve kurum verisi ortamdan hiç çıkmayan tamamen yerel bir LLM/RAG platformunu üretime aldım (KVKK ve veri mahremiyeti uyumlu).",
          "Çok dilli e5 + ChromaDB + BM25 ve Reciprocal Rank Fusion ile hibrit erişim, üzerine cross-encoder yeniden sıralama tasarladım: %97.5 Hit@5; yerel Ollama/Qwen 2.5 ile alıntı doğrulamalı üretim ve %93 çapraz doğrulama başarımlı çevrimdışı scikit-learn yedeği.",
          "Denetçi düzeltmelerinden beslenen, onay kapılı 'human-in-the-loop' aktif öğrenme akışı ve kaynak/risk dağılımını optimize eden yapay zekâ destekli yıllık denetim planlama modülü geliştirdim.",
          "FastAPI yapay zekâ servisini Laravel 12 + Vue 3 ile RBAC korumalı proxy ve SSE akışı üzerinden entegre ettim: 11 üretim ekranında 40+ uç nokta — alıntı temelli sohbet, mevzuat arama, risk/test danışmanları ve Gantt görünümleri."
        ],
        en: [
          "Shipped a fully on-premise LLM/RAG platform for Turkish public-sector internal audit with zero paid-API dependency and no institutional data leaving the environment (KVKK & data-privacy compliant).",
          "Designed hybrid retrieval with multilingual-e5, ChromaDB, BM25 and Reciprocal Rank Fusion plus cross-encoder reranking, reaching 97.5% Hit@5; local Ollama/Qwen 2.5 generation with claim-level citation validation and a 93%-accuracy offline scikit-learn fallback.",
          "Implemented an approval-gated, human-in-the-loop active-learning workflow from auditor corrections, plus an AI-driven annual audit planning module for resource allocation and risk coverage.",
          "Integrated the FastAPI AI service with Laravel 12 + Vue 3 through an RBAC-gated proxy and SSE streaming — 40+ endpoints across 11 production pages: citation-grounded chat, regulation search, risk/test advisors and Gantt views."
        ]
      },
      stack: ["FastAPI", "LangChain", "Ollama", "ChromaDB", "Laravel 12", "Vue 3", "PostgreSQL", "Docker", "Redis"]
    },
    {
      role: { tr: "Araştırma Stajyeri — LLM Çok Ajanlı Sistemler & Edge AI", en: "Research Intern — LLM Multi-Agent Systems & Edge AI" },
      company: "Universidad Politécnica de Cartagena (UPCT) — EUT+",
      date: { tr: "Şub 2026 – Günümüz · Erasmus+ · Cartagena, İspanya", en: "Feb 2026 – Present · Erasmus+ · Cartagena, Spain" },
      points: {
        tr: [
          "AB destekli ADDIM projesinde (NextGenerationEU/PRTR), bir süpervizör ajanın görevleri robot, ortam ve etkileşim ajanlarına dağıttığı LangChain tabanlı çok ajanlı sistem üzerinde çalışıyorum.",
          "Intel NUC üzerinde Ollama ile çevrimdışı çalışan Llama 3.1 8B modelini, sosyal robot ve Zigbee akıllı ev ağıyla MQTT üzerinden entegre ettim.",
          "Prompt zincirleme ile görev ayrıştırma ve güvenlik mekanizmaları (LLM'den bağımsız durum, onay döngüleri, eyleme geçmeden doğrulama) geliştirdim.",
          "Canlı ortamda %95.09 doğruluğa ulaşan çift çözünürlüklü TCNN-LSTM aktivite tanıma hattını kurguladım."
        ],
        en: [
          "Working on the EU-funded ADDIM project (NextGenerationEU/PRTR): a LangChain multi-agent system where a supervisor agent delegates to specialised robot, environment and interaction agents.",
          "Integrated an offline Llama 3.1 8B model served by Ollama on an Intel NUC with a social robot and a Zigbee smart-home network over MQTT.",
          "Contributed prompt-chaining task decomposition and safety mechanisms — LLM-decoupled state, confirmation loops and validation before actuation.",
          "Built a dual-resolution TCNN-LSTM activity-recognition pipeline reaching 95.09% accuracy in live deployments."
        ]
      },
      stack: ["LangChain", "Llama 3.1", "Ollama", "MQTT", "Zigbee", "TCNN-LSTM", "Python"]
    },
    {
      role: { tr: "Freelance Full-Stack Geliştirici", en: "Freelance Full-Stack Developer" },
      company: { tr: "Serbest · Work & Travel Programı, ABD", en: "Self-employed · Work & Travel Program, United States" },
      date: { tr: "Haz 2025 – Eki 2025 · ABD", en: "Jun 2025 – Oct 2025 · United States" },
      points: {
        tr: [
          "Küçük ölçekli işletmeler için İngilizce yürütülen portfolyo ve e-ticaret uygulamaları geliştirdim; gereksinim analizinden yayına ve yayın sonrası desteğe kadar tüm süreci tek başıma yönettim."
        ],
        en: [
          "Delivered portfolio and e-commerce applications for small-business clients in English, owning requirements, implementation, deployment and post-launch support."
        ]
      },
      stack: ["JavaScript", "PHP", "REST", "SQL"]
    },
    {
      role: { tr: "Yazılım Mühendisi", en: "Software Engineer" },
      company: "Bilicisoft Information and Defense Technologies",
      date: { tr: "Ağu 2024 – Şub 2025 · Yarı zamanlı · Ankara", en: "Aug 2024 – Feb 2025 · Part-time · Ankara" },
      points: {
        tr: [
          "AhtopIT Yapay Zekâ Destekli ITSM (TÜBİTAK destekli): olay yanıtını otomatikleştiren LLM tabanlı sohbet botu ve ekran kayıtlarından hata örüntüsü çıkaran OpenCV hatları geliştirdim.",
          "TOBB ETÜ Satınalma & Envanter Sistemi: .NET Core/Angular/MySQL uygulaması kurdum; talep tahmini için istatistiksel modelleme yaptım.",
          "Serdivan Belediyesi: .NET/Angular dijital arşiv çözümü ve imar planları arasındaki farkları görselleştiren görüntü işleme aracı geliştirdim."
        ],
        en: [
          "AhtopIT AI-Powered ITSM (TÜBİTAK-supported): developed an LLM-based incident-response chatbot and OpenCV pipelines for screen-recording analysis and error-pattern detection.",
          "TOBB ETÜ Purchasing & Inventory System: built a .NET Core/Angular/MySQL application with statistical modeling for demand forecasting.",
          "Serdivan Municipality: engineered a .NET/Angular digital archive and an image-processing tool visualizing discrepancies between zoning plans."
        ]
      },
      stack: ["LLM/NLP", "OpenCV", ".NET Core", "Angular", "MySQL"]
    },
    {
      role: { tr: "Yazılım Mühendisi Stajyeri", en: "Software Engineer Intern" },
      company: "VBT Yazılım A.Ş.",
      date: { tr: "Haz 2024 – Ağu 2024 · Hibrit · İstanbul", en: "Jun 2024 – Aug 2024 · Hybrid · Istanbul" },
      points: {
        tr: [
          "Kurumsal Java/Angular uygulamalarında REST API'ler, duyarlı arayüzler ve optimize SQL şemaları üzerinde tam yazılım yaşam döngüsü (SDLC) deneyimi kazandım; .NET Core, Flutter ve bankacılık sistemleriyle çapraz temas kurdum."
        ],
        en: [
          "Completed a full-SDLC internship on enterprise Java/Angular applications across REST APIs, responsive interfaces and optimized SQL schemas, with exposure to .NET Core, Flutter and enterprise banking systems."
        ]
      },
      stack: ["Java", "Angular", "REST", "SQL", "Flutter"]
    },
    {
      role: { tr: "Veri Bilimci", en: "Data Scientist" },
      company: { tr: "Ankara Yıldırım Beyazıt Üniversitesi — BİT Daire Başkanlığı", en: "Ankara Yıldırım Beyazıt University — IT Department" },
      date: { tr: "Haz 2023 – Ara 2024 · Yarı zamanlı · Ankara", en: "Jun 2023 – Dec 2024 · Part-time · Ankara" },
      points: {
        tr: [
          "TensorFlow/Keras ile LSTM/RNN tabanlı talep tahmin modelleri geliştirerek üniversite teknoloji varlıklarında satın alma stratejisini ve bütçe dağılımını destekledim.",
          "Varlık yaşam döngüsü, envanter talebi ve amortisman için otomatik istatistiksel raporlama kurdum."
        ],
        en: [
          "Developed LSTM/RNN demand forecasts with TensorFlow/Keras for university technology assets, supporting procurement strategy and budget allocation.",
          "Automated statistical reporting for asset lifecycle, inventory demand and depreciation."
        ]
      },
      stack: ["TensorFlow", "Keras", "LSTM/RNN", "Pandas", "Seaborn"]
    }
  ],

  /* ---------- Akademik / Araştırma projeleri ---------- */
  academicProjects: [
    {
      title: { tr: "Yapay Zekâ Destekli Hiperspektral Anomali Tespiti", en: "AI-Driven Hyperspectral Anomaly Detection" },
      tag: { tr: "TÜBİTAK 2209-A · Bitirme projesi", en: "TÜBİTAK 2209-A · Senior capstone" },
      desc: {
        tr: "GAN temsillerini LAD-PCA ile birleştiren hibrit tespit hattı; 103+ spektral bantta ~0.99 AUC ile klasik RX ve Local-RX dedektörlerini ve 8+ karşılaştırma yöntemini geride bıraktı. İki uluslararası konferans bildirisiyle yayımlandı.",
        en: "A hybrid detection pipeline fusing GAN representations with LAD-PCA, reaching ~0.99 AUC over 103+ spectral bands and outperforming classical RX / Local-RX detectors across 8+ benchmarked methods. Published as two international conference papers."
      },
      stack: ["MATLAB", "Python", "GAN", "PCA", "Fractional Fourier", "HSI"]
    },
    {
      title: { tr: "ADDIM · Asistan Robotlar için Çok Ajanlı LLM Orkestrasyonu", en: "ADDIM · Multi-Agent LLM Orchestration for Assistive Robotics" },
      tag: { tr: "AB destekli araştırma · UPCT", en: "EU-funded research · UPCT" },
      desc: {
        tr: "Süpervizör ajanın görevleri robot, ortam ve etkileşim ajanlarına dağıttığı LangChain mimarisi. Intel NUC üzerinde çevrimdışı Llama 3.1 8B, MQTT ile sosyal robot ve Zigbee ev ağı entegrasyonu; eyleme geçmeden doğrulama ve onay döngüleriyle güvenlik katmanı.",
        en: "A LangChain architecture where a supervisor agent delegates to robot, environment and interaction agents. Offline Llama 3.1 8B on an Intel NUC, MQTT integration with a social robot and a Zigbee home network, plus a safety layer of validation-before-actuation and confirmation loops."
      },
      stack: ["LangChain", "Llama 3.1", "Ollama", "MQTT", "Zigbee", "TCNN-LSTM"]
    },
    {
      title: { tr: "Kalabalık Yoğunluğu Tahmini & Multimodal XAI Ajanı", en: "Crowd Density Estimation & Multimodal XAI Agent" },
      tag: { tr: "Bilgisayarlı görü araştırması", en: "Computer vision research" },
      desc: {
        tr: "ShanghaiTech Part A üzerinde 61.14 MAE ile CSRNet temel çizgisini (68.2) geçtim. CBAM dikkat mekanizması, hibrit MSE/SSIM/Optimal Transport kaybı ve Qwen-VL + Qwen-Chat ile çift modelli açıklanabilirlik ajanı.",
        en: "Beat the CSRNet baseline with 61.14 MAE on ShanghaiTech Part A (CSRNet: 68.2) using CBAM attention and a hybrid MSE/SSIM/Optimal Transport loss, paired with a dual-model Qwen-VL + Qwen-Chat explainability agent."
      },
      stack: ["PyTorch", "Hybrid CNN", "CBAM", "Qwen-VL", "CUDA"]
    },
    {
      title: { tr: "Kendini Onaran AIoT Ağ İzleyici & Edge LLM Ajanı", en: "Self-Healing AIoT Network Monitor & Edge LLM Agent" },
      tag: { tr: "Edge AI / AIoT", en: "Edge AI / AIoT" },
      desc: {
        tr: "Telemetriyi analiz edip kök neden çıkaran ve otomatik onarım tetikleyen, tamamen çevrimdışı çalışan uç ajanı: çift yönlü MQTT hattı, kuantize yerel LLM (Phi-4) ve canlı Streamlit sağlık panosu.",
        en: "A fully offline edge agent for telemetry analysis, root-cause diagnosis and automated recovery through a bidirectional MQTT pipeline, a quantized local LLM (Phi-4) and a live Streamlit health dashboard."
      },
      stack: ["Python", "MQTT", "Ollama (Phi-4)", "ESP32", "Streamlit"]
    }
  ],

  /* ---------- Yetenekler ---------- */
  skills: [
    {
      group: { tr: "Diller & Veritabanları", en: "Languages & Databases" },
      items: ["Python", "Java", "C#", "C++", "C", "PHP", "JavaScript (ES6+)", "SQL (PostgreSQL/MySQL)", "MATLAB"]
    },
    {
      group: { tr: "Üretken Yapay Zekâ & LLM", en: "Generative AI & LLM" },
      items: ["LLM orkestrasyonu", "Çok ajanlı sistemler", "LangChain", "Tool-calling ajanlar", "RAG", "Ollama / Llama 3.1 / Qwen", "ChromaDB", "Qdrant", "pgvector", "BM25 + cross-encoder reranking", "Prompt engineering"]
    },
    {
      group: { tr: "Makine Öğrenmesi & Görü", en: "Machine Learning & Vision" },
      items: ["PyTorch", "TensorFlow/Keras", "scikit-learn", "OpenCV", "CNN", "LSTM / TCNN", "GAN"]
    },
    {
      group: { tr: "Backend & Web", en: "Backend & Web" },
      items: ["FastAPI", "Laravel 12", "Vue.js 3", "Inertia.js", ".NET Core", "Angular", "Node.js", "REST API", "SSE", "Mikroservisler", "RBAC"]
    },
    {
      group: { tr: "Platform & Araçlar", en: "Platform & Tools" },
      items: ["Docker", "Redis", "AWS S3/EC2", "Git / GitHub Actions", "Linux / Bash", "MQTT", "ESP32", "JWT / OAuth2", "OWASP Top 10", "Jira", "Postman"]
    }
  ],

  /* ---------- Yayınlar ---------- */
  publications: [
    {
      authors: "Y. B. İnci, T. A. Gök, Y. Çakıcı, N. E. Özturan, F. Küçük",
      title: {
        tr: "\"GAN-Driven Fractional Fourier Transform for Hyperspectral Anomaly Detection\"",
        en: "\"GAN-Driven Fractional Fourier Transform for Hyperspectral Anomaly Detection\""
      },
      venue: {
        tr: "10. ISPEC Modern Bilimsel Araştırmalar Uluslararası Kongresi, Madrid · Nisan 2026",
        en: "10th ISPEC International Congress on Modern Scientific Research, Madrid · Apr 2026"
      }
    },
    {
      authors: "Y. B. İnci, T. A. Gök, N. E. Özturan, Y. Çakıcı",
      title: {
        tr: "\"Evaluating the Impact of Generative Adversarial Networks on Classical Anomaly Detectors in Urban Hyperspectral Imagery\"",
        en: "\"Evaluating the Impact of Generative Adversarial Networks on Classical Anomaly Detectors in Urban Hyperspectral Imagery\""
      },
      venue: {
        tr: "Uluslararası Üsküdar Bilimsel Araştırmalar Kongresi (ISARC), İstanbul · Şubat 2026 · Sözlü sunum",
        en: "International Üsküdar Scientific Research Congress (ISARC), Istanbul · Feb 2026 · Oral presentation"
      }
    }
  ],

  /* ---------- Ödüller & Sertifikalar ---------- */
  honors: [
    { tr: "TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Desteği (2026)", en: "TÜBİTAK 2209-A Undergraduate Research Grant (2026)" },
    { tr: "Erasmus+ Lisansüstü Araştırma Stajı — UPCT / EUT+, İspanya (2026–2027)", en: "Erasmus+ Postgraduate Research Traineeship — UPCT / EUT+, Spain (2026–2027)" },
    { tr: "İHA-1 Pilot Lisansı (SHGM)", en: "UAV Pilot License (IHA-1, SHGM)" },
    { tr: "KOSGEB Uygulamalı Girişimcilik Eğitimi", en: "KOSGEB Entrepreneurship Training" },
    { tr: "Elements of AI — Helsinki Üniversitesi", en: "Elements of AI — University of Helsinki" },
    { tr: "NLP, Bilgisayarlı Görü ve Web Tabanlı CBS — BTK Akademi", en: "NLP, Computer Vision and Web-Based GIS — BTK Akademi" }
  ],

  /* ---------- Liderlik & Gönüllülük ---------- */
  leadership: [
    {
      role: { tr: "Kurucu & Genel Sekreter", en: "Founder & General Secretary" },
      org: { tr: "AYBÜ Yazılım Mühendisliği Kulübü (ASEC)", en: "AYBU Software Engineering Club (ASEC)" },
      date: { tr: "Kas 2024 – Günümüz", en: "Nov 2024 – Present" },
      desc: {
        tr: "Üniversitenin ilk yazılım mühendisliği topluluğunu kurdum; teknik atölyeler, kodlama kampları ve kariyer zirveleri düzenledim.",
        en: "Founded the university's first software engineering community; organized technical workshops, coding bootcamps and career summits."
      }
    },
    {
      role: { tr: "Üniversite Temsilcisi & Aktif Üye", en: "University Representative & Active Member" },
      org: { tr: "Türkiye Bilişim Derneği (TBD)", en: "Informatics Association of Türkiye (TBD)" },
      date: { tr: "Oca 2024 – Günümüz", en: "Jan 2024 – Present" },
      desc: {
        tr: "Üniversite ile Türkiye'nin en köklü bilişim derneği arasında ana irtibat; ulusal etkinliklerde (Kamu-BİB, Bilişim Kurultayı) öğrenci katılımını koordine ediyorum.",
        en: "Primary liaison between the university and Türkiye's longest-established IT association; coordinating student participation in national events (Kamu-BİB, Bilişim Kurultayı)."
      }
    }
  ],

  /* ---------- Diller ---------- */
  languages: [
    { name: { tr: "Türkçe",    en: "Turkish" }, level: { tr: "Ana dil", en: "Native" }, pct: 100 },
    { name: { tr: "İngilizce", en: "English" }, level: { tr: "Profesyonel çalışma yetkinliği (ABD deneyimi)", en: "Professional working proficiency (USA experience)" }, pct: 90 },
    { name: { tr: "İspanyolca", en: "Spanish" }, level: { tr: "B1 · Orta", en: "B1 · Intermediate" }, pct: 50 },
    { name: { tr: "Almanca",   en: "German" }, level: { tr: "A1 · Başlangıç", en: "A1 · Beginner" }, pct: 25 }
  ],

  /* ---------- Öne çıkan GitHub repoları ----------
     Bu listedeki repolar "Seçilmiş projeler" bölümünde en başta gösterilir.
     İsimler GitHub'daki repo adlarıyla birebir aynı olmalı.                */
  featuredRepos: [
    "turkish-official-gazette-academic-alerts",
    "oci-capacity-hunter",
    "RegexEngine",
    "Breast-Cancer-Prediction-Comparative-Study",
    "Petlebi.com-DataScraper",
    "GithubProjectFetcher"
  ],

  /* Marquee (kayan şerit) içeriği */
  marquee: ["Applied AI", "LLM Orchestration", "Multi-Agent Systems", "RAG", "LangChain", "Ollama", "PyTorch", "Computer Vision", "FastAPI", "Laravel", "Vue.js", ".NET", "Docker", "MQTT · Edge AI", "Data Science"]
};

/* ---------- Arayüz metinleri (menü, başlıklar vb.) ---------- */
const I18N = {
  nav: {
    home:    { tr: "Başlangıç", en: "Home" },
    about:   { tr: "Hakkımda", en: "About" },
    skills:  { tr: "Yetenekler", en: "Skills" },
    experience: { tr: "Özgeçmiş", en: "Résumé" },
    projects:{ tr: "Projeler", en: "Projects" },
    research:{ tr: "Araştırma", en: "Research" },
    play:    { tr: "Oyun", en: "Play" },
    contact: { tr: "İletişim", en: "Contact" }
  },
  hero: {
    cta1: { tr: "Projelerimi gör", en: "See my work" },
    cta2: { tr: "İletişime geç", en: "Get in touch" },
    scroll: { tr: "Kaydır", en: "Scroll" }
  },
  sections: {
    about:   { tr: "Hakkımda", en: "About" },
    skills:  { tr: "Teknik yetkinlikler", en: "Technical skills" },
    experience: { tr: "Deneyim & eğitim", en: "Experience & education" },
    projects:{ tr: "Projeler", en: "Projects" },
    research:{ tr: "Araştırma & yayınlar", en: "Research & publications" },
    play:    { tr: "Mola", en: "Interlude" },
    contact: { tr: "İletişim", en: "Contact" }
  },
  labels: {
    now: { tr: "Şu anda", en: "Currently" },
    education: { tr: "Eğitim", en: "Education" },
    experience: { tr: "Deneyim", en: "Experience" },
    publications: { tr: "Yayınlar", en: "Publications" },
    honors: { tr: "Ödüller & sertifikalar", en: "Honors & certifications" },
    leadership: { tr: "Liderlik & gönüllülük", en: "Leadership & volunteering" },
    languages: { tr: "Diller", en: "Languages" },
    featured: { tr: "Seçilmiş projeler", en: "Selected projects" },
    allProjects: { tr: "GitHub'daki tüm depolar", en: "All GitHub repositories" },
    liveNote: { tr: "Bu bölüm GitHub API'sinden canlı çekilir — yeni bir depo açtığında burada kendiliğinden görünür.", en: "This section is pulled live from the GitHub API — a new repository shows up here on its own." },
    viewGithub: { tr: "Depoyu aç", en: "Open repo" },
    liveDemo: { tr: "Canlı", en: "Live" },
    loading: { tr: "GitHub'dan yükleniyor…", en: "Loading from GitHub…" },
    showMore: { tr: "Tümünü göster", en: "Show all" },
    showLess: { tr: "Daha az göster", en: "Show less" },
    allFilter: { tr: "Tümü", en: "All" },
    repos: { tr: "genel depo", en: "public repos" },
    stars: { tr: "toplam yıldız", en: "total stars" },
    langs: { tr: "farklı dil", en: "languages used" },
    lastPush: { tr: "son commit", en: "last push" },
    updated: { tr: "güncellendi", en: "updated" },
    ago: {
      today: { tr: "bugün", en: "today" },
      day:   { tr: "gün önce", en: "days ago" },
      month: { tr: "ay önce", en: "months ago" },
      year:  { tr: "yıl önce", en: "years ago" }
    },
    ctaTitle: { tr: "Bir fikri birlikte üretime taşıyalım.", en: "Let's take an idea to production together." },
    ctaText: { tr: "Yapay zekâ projeleri, araştırma iş birlikleri ve full-stack geliştirme için yazabilirsin. Genelde 24 saat içinde dönüş yapıyorum.", en: "Reach out for AI projects, research collaborations and full-stack development. I usually reply within 24 hours." },
    ctaMail: { tr: "E-posta gönder", en: "Send an email" },
    ctaWork: { tr: "Çalışmalarımı incele", en: "Browse my work" },
    contactText: { tr: "Yeni fırsatlara, araştırma iş birliklerine ve ilginç problemlere açığım.", en: "Open to new opportunities, research collaborations and interesting problems." },
    gameInstr: { tr: "Veri paketlerini topla, hatalardan kaç. Fare veya ← → tuşlarıyla oyna.", en: "Collect data packets, dodge the bugs. Play with your mouse or ← → keys." },
    gameStart: { tr: "Başla", en: "Start" },
    gameScore: { tr: "Skor", en: "Score" },
    gameBest: { tr: "Rekor", en: "Best" },
    gameOver: { tr: "Oyun bitti", en: "Game over" },
    gameRetry: { tr: "Tekrar oyna", en: "Play again" },
    themeLight: { tr: "Aydınlık tema", en: "Light theme" },
    themeDark: { tr: "Karanlık tema", en: "Dark theme" }
  },
  footer: {
    built: { tr: "Saf HTML, CSS ve JavaScript ile yazıldı", en: "Handwritten in plain HTML, CSS and JavaScript" },
    rights: { tr: "Tüm hakları saklıdır.", en: "All rights reserved." },
    source: { tr: "Kaynak kodu", en: "Source code" }
  }
};
