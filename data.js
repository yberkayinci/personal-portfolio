/* =========================================================================
   PORTFOLYO İÇERİĞİ  —  Tüm metinleri buradan düzenleyebilirsin.
   Her alan { tr: "...", en: "..." } biçimindedir (iki dilli).
   GitHub projeleri otomatik çekilir; öne çıkan projeleri aşağıda
   "featuredRepos" listesinden seçebilirsin.
   ========================================================================= */

const SITE = {
  /* ---------- Profil ---------- */
  profile: {
    name: "Yunus Berkay İnci",
    github: "yberkayinci",                       // GitHub kullanıcı adı
    email: "berkayinci25@gmail.com",
    location: { tr: "Ankara, Türkiye", en: "Ankara, Turkey" },
    linkedin: "https://linkedin.com/in/yunusberkayinci",
    githubUrl: "https://github.com/yberkayinci",
    scholar: "",                                  // Google Scholar profili (varsa)
    orcid: "",                                    // ORCID (varsa)
    cv: "assets/Yunus_Berkay_Inci_CV.pdf",       // Sitedeki CV indirme bağlantısı (PDF)
    title: {
      tr: "Çok Yönlü Yazılım Mühendisi",
      en: "Multidisciplinary Software Engineer"
    },
    // Hero bölümündeki dönen yazılar (typing efekti)
    roles: {
      tr: ["Yapay Zekâ & LLM Mühendisi", "Full-Stack Geliştirici", "Veri Bilimci", "Bilgisayarlı Görü Araştırmacısı", "AIoT Sistem Tasarımcısı"],
      en: ["AI & LLM Engineer", "Full-Stack Developer", "Data Scientist", "Computer Vision Researcher", "AIoT Systems Designer"]
    },
    tagline: {
      tr: "Yapay zekâyı ölçeklenebilir mimarilere ve gerçek dünyadaki sistemlere entegre ediyorum.",
      en: "I embed artificial intelligence into scalable architectures and real-world systems."
    }
  },

  /* ---------- Hakkımda ---------- */
  about: {
    tr: `Üretken Yapay Zekâ (LLM/NLP) iş akışlarını kurumsal uygulamalara entegre etme ve veri bilimi için sağlam makine öğrenmesi modelleri geliştirme konusunda tutkulu, çok disiplinli bir Yazılım Mühendisiyim. Yapay zekâ yeteneklerini ölçeklenebilir Full-Stack mimarilere ve IoT sistemlerine entegre etme uzmanlığına sahibim. Teknik çok yönlülüğü analitik düşünce, çevik iş birliği ve proaktif liderlikle birleştiriyorum.`,
    en: `I am a multidisciplinary Software Engineer passionate about embedding Generative AI (LLM/NLP) workflows into enterprise applications and developing robust Machine Learning models for actionable data science insights. I specialize in integrating AI capabilities into scalable Full-Stack architectures and IoT systems, combining technical versatility with analytical thinking, agile collaboration, and proactive leadership.`,
    highlights: [
      { value: "0.99", label: { tr: "AUC — Hiperspektral Anomali Tespiti", en: "AUC — Hyperspectral Anomaly Detection" } },
      { value: "61.14", label: { tr: "MAE — SOTA'yı geçen Kalabalık Analizi", en: "MAE — SOTA-beating Crowd Analysis" } },
      { value: "40+", label: { tr: "Modül — Kurumsal Denetim Sistemi", en: "Modules — Corporate Audit System" } },
      { value: "5+", label: { tr: "Yıl Mühendislik Deneyimi", en: "Years of Engineering Experience" } }
    ]
  },

  /* ---------- Eğitim ---------- */
  education: [
    {
      degree: { tr: "Yazılım Mühendisliği (Lisans, B.Sc.)", en: "B.Sc. in Software Engineering" },
      school: { tr: "Ankara Yıldırım Beyazıt Üniversitesi", en: "Ankara Yıldırım Beyazıt University" },
      detail: { tr: "Onur Öğrencisi · %100 İngilizce eğitim · Beklenen mezuniyet: Haziran 2026", en: "Honor Student · 100% English Instruction · Expected graduation: June 2026" },
      place: { tr: "Ankara, Türkiye", en: "Ankara, Turkey" }
    }
  ],

  /* ---------- Deneyim ---------- */
  experience: [
    {
      role: { tr: "Full-Stack Geliştirici (LLM & RAG Odaklı)", en: "Full-Stack Developer (LLM & RAG Focus)" },
      company: "4Dimension Information Technology & Consulting Inc.",
      date: { tr: "Ara 2025 – Günümüz · Proje Bazlı · Ankara", en: "Dec 2025 – Present · Project Based · Ankara" },
      points: {
        tr: [
          "Laravel 11, Vue.js 3 (Composition API) ve Inertia.js ile 40+ dinamik modüllü uçtan uca Kurumsal İç Denetim & Risk Yönetim Sistemi tasarladım.",
          "Hukuki mevzuatta semantik arama için Python ve Vektör Veritabanları ile RAG mimarisi kurarak denetçilerin araştırma süresini azalttım.",
          "Geçmiş veriye dayalı risk kapsamı tahmini yapan, yapay zekâ destekli Yıllık Denetim Planlama modülü geliştirdim.",
          "Dinamik Risk Isı Haritaları, Gantt Şemaları ve gerçek zamanlı sohbet benzeri arayüz gibi karmaşık etkileşimli bileşenler oluşturdum."
        ],
        en: [
          "Architected an end-to-end Corporate Internal Audit & Risk Management System using Laravel 11, Vue.js 3 (Composition API) and Inertia.js, managing 40+ dynamic modules.",
          "Designed a RAG architecture with Python and Vector Databases enabling semantic search across legal regulations, reducing auditors' research time.",
          "Implemented an AI-driven Annual Audit Planning module optimizing resource allocation and risk coverage predictions from historical data.",
          "Built complex interactive frontend components including Dynamic Risk Heatmaps, Gantt Charts and a real-time chat-like interface."
        ]
      },
      stack: ["Laravel", "Vue.js", "Inertia.js", "PostgreSQL", "LangChain", "Docker", "Redis"]
    },
    {
      role: { tr: "Yazılım Mühendisi", en: "Software Engineer" },
      company: "Bilicisoft Information & Defense Technologies",
      date: { tr: "Ağu 2024 – Şub 2025 · Yarı Zamanlı · Ankara", en: "Aug 2024 – Feb 2025 · Part-Time · Ankara" },
      points: {
        tr: [
          "AhtopIT Yapay Zekâ Destekli ITSM (TÜBİTAK Destekli): Otomatik olay yanıtı için LLM tabanlı NLP sohbet botu geliştirdim; ekran kayıtlarını analiz eden bilgisayarlı görü algoritmaları (Python, OpenCV) uyguladım.",
          "TOBB ETÜ Satınalma & Envanter Sistemi: .NET Core, Angular, MySQL ile full-stack uygulama tasarladım; talep tahmini için istatistiksel modelleme yaptım.",
          "Serdivan Belediyesi Sistemi: .NET ve Angular ile dijital arşiv çözümü geliştirdim; görüntü işleme ile otomatik İmar Planı Karşılaştırma Aracı oluşturdum."
        ],
        en: [
          "AhtopIT AI-Powered ITSM (TÜBİTAK Supported): Developed an LLM-driven NLP chatbot for automated incident response; implemented computer vision algorithms (Python, OpenCV) to analyze screen recordings.",
          "TOBB ETU Purchasing & Inventory System: Designed a full-stack app with .NET Core, Angular, MySQL; performed statistical modeling for demand forecasting.",
          "Serdivan Municipality System: Engineered a digital archive solution with .NET and Angular; built an automated Zoning Plan Comparison Tool using image processing."
        ]
      },
      stack: ["LLM/NLP", "OpenCV", ".NET Core", "Angular", "MySQL"]
    },
    {
      role: { tr: "Veri Bilimci", en: "Data Scientist" },
      company: { tr: "Ankara Yıldırım Beyazıt Üniversitesi – BİT Daire Başkanlığı", en: "Ankara Yıldırım Beyazıt University – IT Department" },
      date: { tr: "Haz 2023 – Ara 2024 · Yarı Zamanlı · Ankara", en: "Jun 2023 – Dec 2024 · Part-Time · Ankara" },
      points: {
        tr: [
          "Üniversite teknoloji varlıkları için yapay zekâ destekli Envanter Talep Tahmin Sistemi geliştirdim.",
          "TensorFlow/Keras ile derin öğrenme algoritmaları (LSTM/RNN) uygulayarak donanım ihtiyaçlarını ve olası eksiklikleri önceden tahmin ettim.",
          "Matplotlib ve Seaborn ile otomatik istatistiksel raporlar ve görselleştirmeler oluşturdum."
        ],
        en: [
          "Developed an AI-driven Inventory Demand Forecasting System to optimize procurement across university tech assets.",
          "Implemented Deep Learning (LSTM/RNN) with TensorFlow/Keras to forecast hardware requirements and detect shortages before they occur.",
          "Created automated statistical reports and visualizations with Matplotlib and Seaborn."
        ]
      },
      stack: ["TensorFlow", "Keras", "LSTM/RNN", "Pandas", "Seaborn"]
    },
    {
      role: { tr: "Yazılım Mühendisi Stajyeri", en: "Software Engineer Intern" },
      company: "VBT Yazılım A.Ş.",
      date: { tr: "Haz 2024 – Ağu 2024 · Hibrit · İstanbul", en: "Jun 2024 – Aug 2024 · Hybrid · Istanbul" },
      points: {
        tr: [
          "Java (Backend) ve Angular (Frontend) ile ölçeklenebilir full-stack projelerde çalışarak RESTful API'ler ve duyarlı arayüzler geliştirdim; SQL ile ilişkisel veritabanı şemaları tasarladım.",
          ".NET Core, Flutter (Mobil), Figma (UI/UX) konularında çapraz fonksiyonel bilgi edindim ve bankacılık/finans sistemlerini analiz ettim."
        ],
        en: [
          "Worked on scalable full-stack projects using Java (Backend) and Angular (Frontend), building RESTful APIs and responsive UIs; designed relational DB schemas with SQL.",
          "Gained cross-functional knowledge in .NET Core, Flutter (Mobile), Figma (UI/UX) and analyzed banking & finance systems."
        ]
      },
      stack: ["Java", "Angular", "REST", "SQL", "Flutter"]
    }
  ],

  /* ---------- Akademik / Öne Çıkan Projeler ---------- */
  academicProjects: [
    {
      title: { tr: "Yapay Zekâ Destekli Hiperspektral Anomali Tespiti", en: "AI-Driven Hyperspectral Anomaly Detection" },
      tag: { tr: "Bitirme Projesi & Lisans Araştırması", en: "Senior Capstone & Undergraduate Research" },
      desc: {
        tr: "Uzaktan algılama için hibrit derin öğrenme mimarileri üzerine araştırma. GAN'leri LAD-PCA ile birleştiren 'Hibrit Tespit Hattı' ile 103+ bantlı spektral veride ~0.99 AUC elde ederek RX/Local-RX gibi geleneksel dedektörleri geçtim. TÜBİTAK 2209-A için akademik makale yazımı.",
        en: "Research on hybrid deep-learning architectures for remote sensing. Built a 'Hybrid Detection Pipeline' fusing GANs with LAD-PCA, achieving ~0.99 AUC on 103+ band spectral data, outperforming traditional detectors (RX, Local-RX). Authoring papers for TÜBİTAK 2209-A."
      },
      stack: ["MATLAB", "Python", "GANs", "Autoencoders", "PCA", "HSI"]
    },
    {
      title: { tr: "SOTA'yı Geçen Kalabalık Analizi & Multimodal XAI Ajanı", en: "SOTA-Beating Crowd Analysis & Multimodal XAI Agent" },
      tag: { tr: "Sayısal Görüntü İşleme Projesi", en: "Digital Image Processing Project" },
      desc: {
        tr: "ShanghaiTech Part A veri setinde 61.14 MAE (orijinal CSRNet: 68.2) ile SOTA'yı aştım. Dilated Convolutions (CSRNet) ile CBAM dikkat mekanizmalarını birleştiren hibrit model; Qwen-VL & Qwen-Chat ile çift modelli multimodal XAI ajanı geliştirdim. MSE+SSIM+Optimal Transport hibrit kayıp fonksiyonu.",
        en: "Surpassed SOTA with 61.14 MAE on ShanghaiTech Part A (original CSRNet: 68.2). Hybrid model combining Dilated Convolutions (CSRNet) with CBAM attention; built a dual-model multimodal XAI agent with Qwen-VL & Qwen-Chat. Hybrid loss (MSE, SSIM, Optimal Transport)."
      },
      stack: ["Python", "PyTorch", "Hybrid CNNs", "Qwen-VL", "CUDA"]
    },
    {
      title: { tr: "NYC Citi Bike Talep Tahmini & Hava Durumu Etki Analizi", en: "NYC Citi Bike Demand Forecasting & Weather Impact" },
      tag: { tr: "Veri Bilimi / ML", en: "Data Science / ML" },
      desc: {
        tr: "Milyonlarca yolculuk kaydını gerçek zamanlı hava verisiyle birleştiren ölçeklenebilir ML hattı. Saatlik kullanım tahmininde 0.98 R² ile Random Forest; 2025 talep senaryoları ve filo kapasite planlaması. Zirve saatlerin (08:00 & 18:00) tespiti.",
        en: "Scalable ML pipeline integrating millions of trip records with real-time weather. Random Forest with 0.98 R² for hourly ridership; simulated 2025 demand and fleet planning. Identified peak commuting windows (8 AM & 6 PM)."
      },
      stack: ["Python", "Pandas", "Scikit-Learn", "AWS S3", "Open-Meteo"]
    },
    {
      title: { tr: "Kendini Onaran AIoT Ağ İzleyici & Edge LLM Ajanı", en: "Self-Healing AIoT Network Monitor & Edge LLM Agent" },
      tag: { tr: "AIoT / Edge AI", en: "AIoT / Edge AI" },
      desc: {
        tr: "Kuantize Yerel LLM (Phi-4) ile gerçek zamanlı telemetriyi analiz edip otonom onarım yapan ağ sorun giderme sistemi. ESP32 sensörleri + Python denetleyici ile uçtan uca AIoT hattı; Ollama tabanlı 'Edge Network SRE' ajanı; çift yönlü MQTT ve Streamlit canlı panosu.",
        en: "Autonomous network troubleshooting using a quantized Local LLM (Phi-4) to analyze telemetry and execute self-healing. End-to-end AIoT pipeline with ESP32 + Python; Ollama-based 'Edge Network SRE' agent; bi-directional MQTT and a live Streamlit dashboard."
      },
      stack: ["Python", "MQTT", "Ollama (Phi-4)", "ESP32", "Streamlit"]
    }
  ],

  /* ---------- Yetenekler ---------- */
  skills: [
    {
      group: { tr: "Programlama Dilleri", en: "Programming Languages" },
      items: ["Python", "C#", "C++", "C", "PHP", "JavaScript (ES6+)", "Java", "SQL"]
    },
    {
      group: { tr: "Üretken Yapay Zekâ & NLP", en: "Generative AI & NLP" },
      items: ["LLMs", "RAG", "LangChain", "Ollama", "Vector DBs", "Prompt Engineering"]
    },
    {
      group: { tr: "Bilgisayarlı Görü & ML", en: "Computer Vision & ML" },
      items: ["PyTorch", "TensorFlow/Keras", "OpenCV", "YOLO", "CNNs", "GANs", "Scikit-learn", "Pandas", "LSTM"]
    },
    {
      group: { tr: "Full-Stack Geliştirme", en: "Full-Stack Development" },
      items: ["Laravel 11", "Vue.js 3", "Inertia.js", ".NET Core", "Angular", "Node.js", "REST APIs"]
    },
    {
      group: { tr: "IoT, Güvenlik & DevOps", en: "IoT, Security & DevOps" },
      items: ["Arduino", "ESP32", "MQTT", "Edge AI", "OWASP Top 10", "JWT/OAuth2", "Docker", "AWS", "Git/Actions", "Linux"]
    }
  ],

  /* ---------- Yayınlar ---------- */
  publications: [
    {
      authors: "Y. B. İnci, T. A. Gök, N. E. Özturan, Y. Çakıcı",
      title: { tr: "\"Kentsel Hiperspektral Görüntülemede Üretken Çekişmeli Ağların Klasik Anomali Dedektörlerine Etkisinin Değerlendirilmesi\"", en: "\"Evaluating the Impact of Generative Adversarial Networks on Classical Anomaly Detectors in Urban Hyperspectral Imagery\"" },
      venue: { tr: "Uluslararası Üsküdar Bilimsel Araştırmalar Kongresi (ISARC), İstanbul · Şubat 2026 · Sözlü Sunum", en: "International Üsküdar Scientific Research Congress (ISARC), Istanbul · Feb 2026 · Oral Presentation" }
    }
  ],

  /* ---------- Liderlik & Gönüllülük ---------- */
  leadership: [
    {
      role: { tr: "Üniversite Temsilcisi & Aktif Üye", en: "University Representative & Active Member" },
      org: { tr: "Türkiye Bilişim Derneği (TBD)", en: "Informatics Association of Turkey (TBD)" },
      date: { tr: "Oca 2024 – Günümüz", en: "Jan 2024 – Present" },
      desc: { tr: "Üniversite ile Türkiye'nin en köklü bilişim derneği arasında ana irtibat; ulusal etkinliklerde (TBD Kamu-BİB, Bilişim Kurultayı) öğrenci katılımını koordine etme.", en: "Primary liaison between university and Turkey's longest-established IT association; coordinating student participation in national events (TBD Kamu-BİB, Bilişim Kurultayı)." }
    },
    {
      role: { tr: "Kurucu & Genel Sekreter", en: "Founder & General Secretary" },
      org: { tr: "AYBÜ Yazılım Mühendisliği Kulübü (ASEC)", en: "AYBU Software Engineering Club (ASEC)" },
      date: { tr: "Kas 2024 – Günümüz", en: "Nov 2024 – Present" },
      desc: { tr: "Üniversitenin ilk yazılım mühendisliği topluluğunu kurdum; teknik atölyeler, kodlama kampları ve kariyer zirveleri düzenledim.", en: "Founded the university's first Software Engineering community; organized technical workshops, coding bootcamps and career summits." }
    }
  ],

  /* ---------- Diller ---------- */
  languages: [
    { name: { tr: "Türkçe", en: "Turkish" }, level: { tr: "Ana Dil", en: "Native" }, pct: 100 },
    { name: { tr: "İngilizce", en: "English" }, level: { tr: "Profesyonel (ABD Deneyimi)", en: "Professional (USA Experience)" }, pct: 90 },
    { name: { tr: "Almanca", en: "German" }, level: { tr: "A1", en: "A1" }, pct: 25 }
  ],

  /* ---------- Öne çıkan GitHub repoları (isteğe bağlı) ----------
     Bu listedeki repolar projeler bölümünde en başta gösterilir.       */
  featuredRepos: [
    "RegexEngine",
    "Petlebi.com-DataScraper",
    "Breast-Cancer-Prediction-Comparative-Study",
    "TextToSpeechConverter"
  ]
};

/* ---------- Arayüz metinleri (menü, başlıklar vb.) ---------- */
const I18N = {
  nav: {
    home:    { tr: "Ana Sayfa", en: "Home" },
    about:   { tr: "Hakkımda", en: "About" },
    skills:  { tr: "Yetenekler", en: "Skills" },
    experience: { tr: "Deneyim", en: "Experience" },
    projects:{ tr: "Projeler", en: "Projects" },
    research:{ tr: "Akademi", en: "Research" },
    play:    { tr: "Oyun", en: "Play" },
    contact: { tr: "İletişim", en: "Contact" }
  },
  hero: {
    greeting: { tr: "Merhaba, ben", en: "Hi, I'm" },
    cta1: { tr: "Projelerimi Gör", en: "View My Work" },
    cta2: { tr: "İletişime Geç", en: "Get in Touch" },
    scroll: { tr: "Kaydır", en: "Scroll" },
    open: { tr: "İşe açığım", en: "Open to work" }
  },
  sections: {
    about:   { tr: "Hakkımda", en: "About Me" },
    skills:  { tr: "Teknik Yetenekler", en: "Technical Skills" },
    experience: { tr: "Deneyim & Eğitim", en: "Experience & Education" },
    projects:{ tr: "Projeler", en: "Projects" },
    research:{ tr: "Akademik Çalışmalar", en: "Academic & Research" },
    play:    { tr: "Mola Ver — Mini Oyun", en: "Take a Break — Mini Game" },
    contact: { tr: "İletişime Geç", en: "Let's Connect" }
  },
  labels: {
    education: { tr: "Eğitim", en: "Education" },
    experience: { tr: "İş Deneyimi", en: "Work Experience" },
    publications: { tr: "Yayınlar", en: "Publications" },
    leadership: { tr: "Liderlik & Gönüllülük", en: "Leadership & Volunteering" },
    languages: { tr: "Diller", en: "Languages" },
    featured: { tr: "Öne Çıkanlar", en: "Featured" },
    allProjects: { tr: "Tüm GitHub Projeleri", en: "All GitHub Projects" },
    viewGithub: { tr: "GitHub'da Gör", en: "View on GitHub" },
    loading: { tr: "Projeler GitHub'dan yükleniyor…", en: "Loading projects from GitHub…" },
    stars: { tr: "yıldız", en: "stars" },
    downloadCv: { tr: "CV İndir", en: "Download CV" },
    contactText: { tr: "Yeni fırsatlara, iş birliklerine ve araştırma projelerine açığım. Bir kahve içip konuşalım!", en: "Open to new opportunities, collaborations and research projects. Let's grab a coffee and talk!" },
    gameInstr: { tr: "Veri paketlerini (●) topla, hatalardan (✖) kaç. Fareyle veya ← → tuşlarıyla oyna.", en: "Collect data packets (●), dodge bugs (✖). Play with your mouse or ← → keys." },
    gameStart: { tr: "Başla", en: "Start" },
    gameScore: { tr: "Skor", en: "Score" },
    gameBest: { tr: "Rekor", en: "Best" },
    gameOver: { tr: "Oyun Bitti!", en: "Game Over!" },
    gameRetry: { tr: "Tekrar Oyna", en: "Play Again" }
  },
  footer: {
    built: { tr: "Tutkuyla kodlandı", en: "Built with passion" },
    rights: { tr: "Tüm hakları saklıdır.", en: "All rights reserved." }
  }
};
