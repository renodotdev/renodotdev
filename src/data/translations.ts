export type Language = "en" | "id";

export interface TranslationDictionary {
  // Navigation & Common
  nav_work: string;
  nav_services: string;
  nav_contact: string;
  nav_founder_bio: string;
  nav_start_project: string;
  nav_contact_reno: string;
  nav_return_studio: string;

  // Hero Section (Studio)
  hero_badge_studio: string;
  hero_badge_avail: string;
  hero_headline_html: string;
  hero_subheadline_html: string;
  hero_cta_start: string;
  hero_cta_work: string;
  hero_cta_wa: string;

  // Stats Bar (Studio)
  stat_1_val: string;
  stat_1_label: string;
  stat_1_sub: string;
  stat_2_val: string;
  stat_2_label: string;
  stat_2_sub: string;
  stat_3_val: string;
  stat_3_label: string;
  stat_3_sub: string;
  stat_4_val: string;
  stat_4_label: string;
  stat_4_sub: string;

  // Featured Work (Sobatoko)
  work_kicker: string;
  work_title: string;
  work_desc: string;
  work_badge_deploy: string;
  work_sobatoko_sub: string;
  work_sobatoko_feat1: string;
  work_sobatoko_feat2: string;
  work_sobatoko_feat3: string;
  work_btn_visit: string;
  work_status_ok: string;
  work_production_tag: string;

  // Next Project Invitation Card
  work_next_badge: string;
  work_next_heading: string;
  work_next_desc: string;
  work_next_cta_start: string;
  work_next_cta_wa: string;

  // Services & Capabilities
  services_kicker: string;
  services_title: string;
  services_desc: string;

  srv_1_badge: string;
  srv_1_title: string;
  srv_1_tagline: string;
  srv_1_desc: string;
  srv_1_item1: string;
  srv_1_item2: string;
  srv_1_item3: string;
  srv_1_item4: string;

  srv_2_badge: string;
  srv_2_title: string;
  srv_2_tagline: string;
  srv_2_desc: string;
  srv_2_item1: string;
  srv_2_item2: string;
  srv_2_item3: string;
  srv_2_item4: string;

  srv_3_badge: string;
  srv_3_title: string;
  srv_3_tagline: string;
  srv_3_desc: string;
  srv_3_item1: string;
  srv_3_item2: string;
  srv_3_item3: string;
  srv_3_item4: string;

  srv_inquire_cta: string;

  // Process Framework
  process_kicker: string;
  process_title: string;
  process_desc: string;

  prc_1_step: string;
  prc_1_dur: string;
  prc_1_title: string;
  prc_1_desc: string;
  prc_1_deliv_lbl: string;
  prc_1_deliv: string;

  prc_2_step: string;
  prc_2_dur: string;
  prc_2_title: string;
  prc_2_desc: string;
  prc_2_deliv_lbl: string;
  prc_2_deliv: string;

  prc_3_step: string;
  prc_3_dur: string;
  prc_3_title: string;
  prc_3_desc: string;
  prc_3_deliv_lbl: string;
  prc_3_deliv: string;

  // Contact Section
  contact_kicker: string;
  contact_title: string;
  contact_desc: string;
  contact_wa_title: string;
  contact_wa_sub: string;
  contact_email_title: string;
  contact_guar_title: string;
  contact_guar_1: string;
  contact_guar_2: string;
  contact_guar_3: string;

  // Contact Form
  cf_header: string;
  cf_reply_badge: string;
  cf_name_label: string;
  cf_name_placeholder: string;
  cf_email_label: string;
  cf_email_placeholder: string;
  cf_msg_label: string;
  cf_msg_placeholder: string;
  cf_submit_btn: string;
  cf_success_msg: string;
  cf_error_msg: string;

  // Footer
  footer_desc_html: string;
  footer_open: string;
  footer_col_studio: string;
  footer_col_founder: string;
  footer_link_work: string;
  footer_link_services: string;
  footer_link_start: string;
  footer_link_profile: string;
  footer_link_exp: string;
  footer_link_courses: string;

  // ── Profile Page Specific Keys ──
  p_nav_about: string;
  p_nav_experience: string;
  p_nav_work: string;
  p_nav_contact: string;
  p_banner_tag: string;
  p_banner_back: string;
  p_hero_badge: string;
  p_hero_title: string;
  p_hero_subtitle: string;
  p_hero_bio_html: string;
  p_hero_btn_contact: string;
  p_hero_btn_exp: string;
  p_hero_btn_studio: string;
  p_hero_role_tag: string;
  p_hero_loc: string;
  p_stat_1_val: string;
  p_stat_1_lbl: string;
  p_stat_2_val: string;
  p_stat_2_lbl: string;
  p_stat_3_val: string;
  p_stat_3_lbl: string;
  p_stat_4_val: string;
  p_stat_4_lbl: string;
  p_exp_kicker: string;
  p_exp_title: string;
  p_exp_desc: string;
  p_stack_title: string;
  p_work_kicker: string;
  p_work_title: string;
  p_work_desc: string;
  p_course_badge: string;
  p_course_watch: string;
  p_sobatoko_badge: string;
  p_sobatoko_desc: string;
  p_contact_kicker: string;
  p_contact_title: string;
  p_contact_desc: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    // Navigation
    nav_work: "Work",
    nav_services: "What We Do",
    nav_contact: "Contact",
    nav_founder_bio: "About Reno",
    nav_start_project: "Start a Project",
    nav_contact_reno: "Say Hello",
    nav_return_studio: "← Studio",

    // Hero Section
    hero_badge_studio: "renodotdev studio",
    hero_badge_avail: "Open for new projects",
    hero_headline_html: `We build mobile apps, web systems & <span class="text-gradient">smart AI tools</span>.`,
    hero_subheadline_html: `An independent software studio run by <strong class="text-white">Della Reno Rinaldi</strong>. With 8+ years building production apps at Opaper and Astro, I work directly with founders and teams to ship fast, reliable software. Honest collaboration, zero junior handoffs.`,
    hero_cta_start: "Start a Project",
    hero_cta_work: "See Our Work",
    hero_cta_wa: "Chat on WhatsApp",

    // Stats Bar
    stat_1_val: "8+ Years",
    stat_1_label: "In Production",
    stat_1_sub: "Shipping apps used by thousands of daily users",
    stat_2_val: "1-on-1",
    stat_2_label: "Direct With Reno",
    stat_2_sub: "You work directly with me — no account managers",
    stat_3_val: "Cross-Platform",
    stat_3_label: "iOS, Android & Web",
    stat_3_sub: "React Native, Next.js, and modern cloud tech",
    stat_4_val: "Weekly",
    stat_4_label: "Working Demos",
    stat_4_sub: "Try real test builds on your own phone every week",

    // Featured Work
    work_kicker: "Featured Work",
    work_title: "Sobatoko — POS & Store Platform",
    work_desc: "A complete retail and cashier system built from the ground up: fast sales, real-time inventory, hardware receipt printing, and digital storefronts.",
    work_badge_deploy: "Live in Production",
    work_sobatoko_sub: "An end-to-end POS, inventory, and online store platform built for retail & F&B owners. Designed, engineered, and deployed live by renodotdev.",
    work_sobatoko_feat1: "Full-stack architecture built on Next.js and PostgreSQL for instant response times",
    work_sobatoko_feat2: "Real-time stock sync across multiple cashier counters and branch locations",
    work_sobatoko_feat3: "Plug-and-play Bluetooth & LAN thermal receipt printer support",
    work_btn_visit: "Visit Sobatoko.com",
    work_status_ok: "Live Status: OK",
    work_production_tag: "Production Web & Mobile POS",

    // Next Project Invitation
    work_next_badge: "Got a product in mind?",
    work_next_heading: "Let's build your next project together.",
    work_next_desc: "I keep client capacity intentionally small (1–2 projects at a time) so you get full focus, quick replies, and fast delivery. Tell me what you're thinking, and let's see how we can make it happen.",
    work_next_cta_start: "Start a Project",
    work_next_cta_wa: "Chat on WhatsApp",

    // Services & Capabilities
    services_kicker: "What We Do",
    services_title: "How we can help you build",
    services_desc: "Whether you're starting from a napkin sketch or upgrading an existing product, here’s where we do our best work.",

    srv_1_badge: "Mobile Apps",
    srv_1_title: "Mobile App Engineering",
    srv_1_tagline: "Smooth, native feel with 60 FPS performance",
    srv_1_desc: "Cross-platform apps built with React Native and Expo. Offline-friendly, hooked into hardware like receipt printers and scanners, and published straight to the App Store and Google Play.",
    srv_1_item1: "One clean codebase for both iPhone and Android",
    srv_1_item2: "Works smoothly offline and syncs back when online",
    srv_1_item3: "Hardware integrations (Bluetooth/LAN printers, scanners)",
    srv_1_item4: "App Store & Google Play setup and launch assistance",

    srv_2_badge: "Web & SaaS",
    srv_2_title: "Web Platforms & SaaS",
    srv_2_tagline: "Clean dashboards, fast websites, and solid backends",
    srv_2_desc: "From custom backoffice portals to customer-facing web apps. Built with Next.js, Astro, TypeScript, and PostgreSQL for speed, good SEO, and zero headache maintenance.",
    srv_2_item1: "Custom portals, admin panels, and client dashboards",
    srv_2_item2: "Fast, secure APIs and clean database schemas",
    srv_2_item3: "Payments and notifications (Midtrans, Stripe, WhatsApp alerts)",
    srv_2_item4: "Speed-optimized and search engine friendly",

    srv_3_badge: "AI-Powered",
    srv_3_title: "AI-Powered Features",
    srv_3_tagline: "Practical AI that solves real problems, not just hype",
    srv_3_desc: "We add useful AI capabilities directly into your software — smart search, document parsing, automated workflows, and LLM integrations. Backed by solid code and automated tests, not fragile vibe coding.",
    srv_3_item1: "Direct integrations with OpenAI, Anthropic, or Gemini",
    srv_3_item2: "Structured data extraction (turning messy docs into clean tables)",
    srv_3_item3: "Smart search and retrieval across your own data",
    srv_3_item4: "Rigorous testing so outputs stay reliable and predictable",

    srv_inquire_cta: "Talk about this",

    // Process Framework
    process_kicker: "How We Work",
    process_title: "Simple, transparent, and no surprises",
    process_desc: "You get clear milestones, direct access to Reno on WhatsApp, and working progress to test on your own phone every week.",

    prc_1_step: "01",
    prc_1_dur: "Week 1",
    prc_1_title: "Scope & Plan",
    prc_1_desc: "We sit down (virtually), outline exactly what needs to be built, and map out the technical plan so there are no surprises on scope or budget.",
    prc_1_deliv_lbl: "What you get:",
    prc_1_deliv: "Clear blueprint & delivery timeline",

    prc_2_step: "02",
    prc_2_dur: "Weeks 2 – 5",
    prc_2_title: "Weekly Build Sprints",
    prc_2_desc: "We build in fast, focused cycles. Every week, you receive a test build on TestFlight or staging web so you can see and feel real progress.",
    prc_2_deliv_lbl: "What you get:",
    prc_2_deliv: "Weekly working builds to test on your phone",

    prc_3_step: "03",
    prc_3_dur: "Week 6+",
    prc_3_title: "Launch & Handover",
    prc_3_desc: "We push to production, help get your app approved on the stores, and hand over the complete code. You own 100% of everything we create.",
    prc_3_deliv_lbl: "What you get:",
    prc_3_deliv: "Live product & 100% code ownership",

    // Contact Section
    contact_kicker: "Get in Touch",
    contact_title: "Let's talk about your idea",
    contact_desc: "Have a project in mind or just want to bounce some technical thoughts? Reno is here to help. I'll get back to you within 24 hours.",
    contact_wa_title: "WhatsApp Reno",
    contact_wa_sub: "Fastest way to get in touch",
    contact_email_title: "Direct Email",
    contact_guar_title: "What working together looks like:",
    contact_guar_1: "Free 30-min friendly chat to scope out your needs",
    contact_guar_2: "Clear milestones, fair pricing, and no surprise add-ons",
    contact_guar_3: "You own 100% of the code, designs, and data from day one",

    // Contact Form
    cf_header: "Send a quick note",
    cf_reply_badge: "Replies within 24 hours",
    cf_name_label: "Your Name or Company",
    cf_name_placeholder: "What should we call you?",
    cf_email_label: "Your Email",
    cf_email_placeholder: "Where can we reply?",
    cf_msg_label: "What would you like to build?",
    cf_msg_placeholder: "Tell us a bit about your idea, target platforms (iOS, Android, Web), or any timeline you have in mind...",
    cf_submit_btn: "Send Message →",
    cf_success_msg: "Thanks for reaching out! Your note is received, and Reno will get back to you shortly.",
    cf_error_msg: "Oops, something went wrong sending the form. Please message Reno directly on WhatsApp or email renodotdev@gmail.com.",

    // Footer
    footer_desc_html: `An independent software studio run by <strong>Della Reno Rinaldi</strong>. Building fast mobile apps, websites, and smart AI tools with senior craftsmanship and zero fluff.`,
    footer_open: "Taking on new client projects • Malang & Remote Worldwide",
    footer_col_studio: "Studio",
    footer_col_founder: "About Reno",
    footer_link_work: "Featured Work (Sobatoko)",
    footer_link_services: "What We Do",
    footer_link_start: "Start a Project",
    footer_link_profile: "Founder Story",
    footer_link_exp: "Career Experience (Opaper, Astro)",
    footer_link_courses: "Video Courses (BuildWithAngga)",

    // Profile Page Specific
    p_nav_about: "About",
    p_nav_experience: "Experience",
    p_nav_work: "Work & Teaching",
    p_nav_contact: "Contact",
    p_banner_tag: "Della Reno Rinaldi • Founder of renodotdev",
    p_banner_back: "← Studio & Case Studies",
    p_hero_badge: "Available for advisory & select projects",
    p_hero_title: "Della Reno Rinaldi",
    p_hero_subtitle: "Senior Frontend & Mobile Engineer • Studio Founder",
    p_hero_bio_html: "Hey! I'm <strong class=\"text-white\">Reno</strong>. I’ve spent the last 8+ years building mobile apps and web platforms used by thousands of daily users. I specialize in React Native, Next.js, and practical AI tools — with a strong focus on smooth 60 FPS performance and honest, direct collaboration.",
    p_hero_btn_contact: "Say Hello →",
    p_hero_btn_exp: "View Experience",
    p_hero_btn_studio: "Visit Studio →",
    p_hero_role_tag: "Senior Engineer • Studio Founder",
    p_hero_loc: "Malang, Indonesia • Remote Worldwide",
    p_stat_1_val: "8+ Years",
    p_stat_1_lbl: "In Production",
    p_stat_2_val: "React Native",
    p_stat_2_lbl: "Core Focus",
    p_stat_3_val: "Opaper & Astro",
    p_stat_3_lbl: "Prior Senior Roles",
    p_stat_4_val: "Instructor",
    p_stat_4_lbl: "BuildWithAngga",
    p_exp_kicker: "Career Track Record",
    p_exp_title: "Where I've worked & what I built",
    p_exp_desc: "Real production software shipped for high-growth tech companies, cashier POS systems, and fast e-commerce.",
    p_stack_title: "Tech Stack & Daily Tools",
    p_work_kicker: "Teaching & Featured Work",
    p_work_title: "Courses, open-source & side builds",
    p_work_desc: "Sharing practical engineering knowledge and building real tools that solve problems.",
    p_course_badge: "Video Course",
    p_course_watch: "Watch on BuildWithAngga →",
    p_sobatoko_badge: "Live Flagship Project",
    p_sobatoko_desc: "A full retail POS and store platform with hardware thermal printer integration, built from scratch.",
    p_contact_kicker: "Say Hello",
    p_contact_title: "Let's connect",
    p_contact_desc: "Whether you have an interesting mobile app idea, need React Native advice, or want to discuss a project, I’m always happy to chat.",
  },

  id: {
    // Navigation
    nav_work: "Karya",
    nav_services: "Layanan",
    nav_contact: "Kontak",
    nav_founder_bio: "Tentang Reno",
    nav_start_project: "Mulai Proyek",
    nav_contact_reno: "Hubungi Reno",
    nav_return_studio: "← Studio",

    // Hero Section
    hero_badge_studio: "renodotdev studio",
    hero_badge_avail: "Siap bantu proyek baru",
    hero_headline_html: `Bikin aplikasi mobile, website & <span class="text-gradient">fitur AI yang beneran jalan</span>.`,
    hero_subheadline_html: `Studio software independen bersama <strong class="text-white">Della Reno Rinaldi</strong>. Berpengalaman 8+ tahun bangun aplikasi di Opaper dan Astro, saya bantu founder & tim bikin software yang cepat dan reliable. Komunikasi langsung, santai tapi rapi, tanpa perantara.`,
    hero_cta_start: "Mulai Proyek",
    hero_cta_work: "Lihat Karya Kami",
    hero_cta_wa: "Ngobrol di WhatsApp",

    // Stats Bar
    stat_1_val: "8+ Tahun",
    stat_1_label: "Pengalaman Nyata",
    stat_1_sub: "Bikin aplikasi yang dipakai ribuan pengguna setiap hari",
    stat_2_val: "Langsung",
    stat_2_label: "Bareng Reno",
    stat_2_sub: "Diskusi & eksekusi langsung bareng saya, tanpa oper ke junior",
    stat_3_val: "Multi-Platform",
    stat_3_label: "iOS, Android & Web",
    stat_3_sub: "React Native, Next.js, dan teknologi cloud modern",
    stat_4_val: "Tiap Pekan",
    stat_4_label: "Bisa Dicoba",
    stat_4_sub: "Test langsung build aplikasi di HP kamu tiap minggu",

    // Featured Work
    work_kicker: "Karya Terbaru",
    work_title: "Sobatoko — Aplikasi Kasir & Toko Online",
    work_desc: "Sistem kasir dan toko ritel lengkap yang dibangun dari nol: POS cepat, stok real-time, print struk thermal, dan toko online.",
    work_badge_deploy: "Aktif Beroperasi",
    work_sobatoko_sub: "Sistem POS, manajemen stok, dan katalog online untuk pemilik bisnis ritel & F&B. Dirancang, di-code, dan dirilis penuh oleh renodotdev.",
    work_sobatoko_feat1: "Arsitektur full-stack pakai Next.js & PostgreSQL biar loading super enteng",
    work_sobatoko_feat2: "Sinkronisasi stok real-time antar mesin kasir dan banyak cabang toko",
    work_sobatoko_feat3: "Langsung konek ke printer struk thermal via Bluetooth & kabel LAN",
    work_btn_visit: "Kunjungi Sobatoko.com",
    work_status_ok: "Status: Aktif Beroperasi",
    work_production_tag: "Web & Mobile POS Produksi",

    // Next Project Invitation
    work_next_badge: "Punya ide aplikasi atau web?",
    work_next_heading: "Yuk, kita wujudkan produk berikutnya bareng.",
    work_next_desc: "Saya sengaja batasi kapasitas cuma 1–2 proyek sekaligus biar bisa fokus penuh, komunikasinya cepat, dan beres tepat waktu. Ceritain idemu, yuk kita diskusikan solusinya.",
    work_next_cta_start: "Mulai Proyek",
    work_next_cta_wa: "Ngobrol di WhatsApp",

    // Services & Capabilities
    services_kicker: "Layanan Kami",
    services_title: "Apa yang bisa kami bantu bangun",
    services_desc: "Mulai dari ide awal di coretan kertas sampai upgrade produk yang sudah jalan, ini fokus utama kami.",

    srv_1_badge: "Aplikasi Mobile",
    srv_1_title: "Pengembangan Aplikasi Mobile",
    srv_1_tagline: "Tampilan mulus, responsif, dan nyaman dipakai (60 FPS)",
    srv_1_desc: "Aplikasi cross-platform pakai React Native & Expo. Tetap jalan lancar saat offline, bisa connect ke printer struk & scanner, plus dibantu sampai lolos ke App Store dan Play Store.",
    srv_1_item1: "Satu codingan rapi buat iOS dan Android sekaligus",
    srv_1_item2: "Bisa dipakai offline, data otomatis sinkron saat ada internet",
    srv_1_item3: "Integrasi hardware (printer Bluetooth/LAN, scanner barcode)",
    srv_1_item4: "Dibantu rilis ke App Store & Google Play sampai beres",

    srv_2_badge: "Web & SaaS",
    srv_2_title: "Website & Dashboard SaaS",
    srv_2_tagline: "Dashboard rapi, website ngebut, dan backend yang kokoh",
    srv_2_desc: "Mulai dari dashboard internal admin sampai website untuk pelanggan. Dibuat pakai Next.js, Astro, TypeScript, dan PostgreSQL biar kencang, aman, dan gampang dirawat.",
    srv_2_item1: "Portal khusus, panel admin, dan dashboard interaktif",
    srv_2_item2: "API aman dan struktur database yang rapi",
    srv_2_item3: "Integrasi pembayaran & notifikasi (Midtrans, Stripe, WhatsApp)",
    srv_2_item4: "Loading cepat dan ramah mesin pencari (SEO)",

    srv_3_badge: "Fitur AI",
    srv_3_title: "Fitur Berbasis AI",
    srv_3_tagline: "AI praktis yang beneran berguna, bukan cuma gaya-gayaan",
    srv_3_desc: "Menambahkan kecerdasan buatan langsung ke aplikasi kamu — pencarian pintar, baca dokumen otomatis, alur kerja cerdas, hingga integrasi LLM. Dibuat dengan standar software engineering yang rapi, bukan asal jalan.",
    srv_3_item1: "Koneksi langsung ke AI model (OpenAI, Anthropic, Gemini)",
    srv_3_item2: "Ekstraksi data otomatis (ubah teks/dokumen jadi data terstruktur)",
    srv_3_item3: "Pencarian pintar berbasis konteks (vector search)",
    srv_3_item4: "Pengujian ketat agar respon AI konsisten dan akurat",

    srv_inquire_cta: "Tanya soal ini",

    // Process Framework
    process_kicker: "Cara Kerja",
    process_title: "Simpel, transparan, dan tanpa ribet",
    process_desc: "Jadwal pengerjaan jelas, komunikasi langsung sama Reno di WhatsApp, dan kamu bisa nyoba hasil perkembangannya tiap minggu.",

    prc_1_step: "01",
    prc_1_dur: "Minggu 1",
    prc_1_title: "Bedah Kebutuhan & Rencana",
    prc_1_desc: "Kita diskusi santai memetakan apa saja yang mau dibangun, fitur utamanya, dan teknologinya, supaya scope dan budget jelas dari awal.",
    prc_1_deliv_lbl: "Hasilnya:",
    prc_1_deliv: "Blueprint teknis & jadwal rilis yang pasti",

    prc_2_step: "02",
    prc_2_dur: "Minggu 2 – 5",
    prc_2_title: "Sprint Pengerjaan Tiap Minggu",
    prc_2_desc: "Pengembangan bertahap dan teratur. Tiap minggu ada versi baru yang bisa langsung kamu install di HP atau buka di link staging untuk dicoba.",
    prc_2_deliv_lbl: "Hasilnya:",
    prc_2_deliv: "Build aplikasi yang bisa kamu coba tiap minggu",

    prc_3_step: "03",
    prc_3_dur: "Minggu 6+",
    prc_3_title: "Rilis & Serah Terima",
    prc_3_desc: "Aplikasi siap live ke server produksi, didampingi masuk ke App Store/Play Store, dan seluruh source code diserahkan penuh jadi milik kamu.",
    prc_3_deliv_lbl: "Hasilnya:",
    prc_3_deliv: "Aplikasi live & hak milik kode 100% milikmu",

    // Contact Section
    contact_kicker: "Hubungi Kami",
    contact_title: "Yuk, diskusikan idemu",
    contact_desc: "Punya rencana proyek baru atau sekadar mau tanya-tanya soal teknologi yang cocok? Reno siap bantu. Biasanya saya balas dalam waktu kurang dari 24 jam.",
    contact_wa_title: "Chat WhatsApp Reno",
    contact_wa_sub: "Paling cepat buat ngobrol santai",
    contact_email_title: "Email Langsung",
    contact_guar_title: "Kenyamanan kerja bareng kami:",
    contact_guar_1: "Konsultasi awal 30 menit santai tanpa komitmen apa-apa",
    contact_guar_2: "Timeline jelas, biaya transparan, tanpa biaya tersembunyi",
    contact_guar_3: "Kamu punya hak penuh atas seluruh kode dan aset dari hari pertama",

    // Contact Form
    cf_header: "Kirim pesan singkat",
    cf_reply_badge: "Dibalas dalam 24 jam",
    cf_name_label: "Nama atau Perusahaan",
    cf_name_placeholder: "Nama panggilanmu...",
    cf_email_label: "Alamat Email",
    cf_email_placeholder: "Email untuk kami balas...",
    cf_msg_label: "Apa yang ingin kamu bangun?",
    cf_msg_placeholder: "Ceritakan sedikit soal idemu, platform yang dituju (iOS, Android, Web), atau target waktu rilis...",
    cf_submit_btn: "Kirim Pesan →",
    cf_success_msg: "Terima kasih! Pesanmu sudah masuk, Reno akan segera membalas ya.",
    cf_error_msg: "Waduh, ada kendala saat mengirim. Yuk langsung chat Reno via WhatsApp atau email ke renodotdev@gmail.com.",

    // Footer
    footer_desc_html: `Studio software independen oleh <strong>Della Reno Rinaldi</strong>. Membangun aplikasi mobile kencang, website rapi, dan fitur AI cerdas tanpa birokrasi.`,
    footer_open: "Menerima proyek baru • Malang & Remote di mana saja",
    footer_col_studio: "Studio",
    footer_col_founder: "Tentang Reno",
    footer_link_work: "Karya Unggulan (Sobatoko)",
    footer_link_services: "Layanan Kami",
    footer_link_start: "Mulai Proyek",
    footer_link_profile: "Tentang Reno",
    footer_link_exp: "Pengalaman Karir (Opaper, Astro)",
    footer_link_courses: "Video Tutorial (BuildWithAngga)",

    // Profile Page Specific
    p_nav_about: "Tentang",
    p_nav_experience: "Pengalaman",
    p_nav_work: "Karya & Kelas",
    p_nav_contact: "Kontak",
    p_banner_tag: "Della Reno Rinaldi • Founder renodotdev",
    p_banner_back: "← Studio & Portofolio",
    p_hero_badge: "Terbuka untuk konsultasi & proyek terpilih",
    p_hero_title: "Della Reno Rinaldi",
    p_hero_subtitle: "Senior Mobile & Frontend Engineer • Founder Studio",
    p_hero_bio_html: "Halo! Saya <strong class=\"text-white\">Reno</strong>. Selama 8+ tahun terakhir, saya fokus membangun aplikasi mobile dan platform web yang dipakai ribuan pengguna setiap hari. Spesialisasi saya di React Native, Next.js, dan integrasi AI praktis — dengan fokus pada performa mulus 60 FPS dan komunikasi kerja yang jujur serta santai.",
    p_hero_btn_contact: "Hubungi Reno →",
    p_hero_btn_exp: "Lihat Pengalaman",
    p_hero_btn_studio: "Kunjungi Studio →",
    p_hero_role_tag: "Senior Engineer • Founder Studio",
    p_hero_loc: "Malang, Indonesia • Remote di mana saja",
    p_stat_1_val: "8+ Tahun",
    p_stat_1_lbl: "Pengalaman Nyata",
    p_stat_2_val: "React Native",
    p_stat_2_lbl: "Fokus Utama",
    p_stat_3_val: "Opaper & Astro",
    p_stat_3_lbl: "Perusahaan Sebelumnya",
    p_stat_4_val: "Pengajar",
    p_stat_4_lbl: "BuildWithAngga",
    p_exp_kicker: "Rekam Jejak Karir",
    p_exp_title: "Pengalaman kerja & apa yang saya bangun",
    p_exp_desc: "Pengalaman nyata merilis software produksi untuk startup teknologi, sistem kasir POS, dan aplikasi e-commerce cepat.",
    p_stack_title: "Teknologi & Tools Harian",
    p_work_kicker: "Kelas & Karya Pilihan",
    p_work_title: "Video kursus, open-source & proyek sampingan",
    p_work_desc: "Berbagi ilmu engineering praktis dan membangun produk nyata yang bermanfaat.",
    p_course_badge: "Video Kursus",
    p_course_watch: "Tonton di BuildWithAngga →",
    p_sobatoko_badge: "Proyek Unggulan Studio",
    p_sobatoko_desc: "Platform kasir (POS) dan toko online ritel lengkap dengan integrasi printer Bluetooth, dibangun dari nol.",
    p_contact_kicker: "Hubungi Saya",
    p_contact_title: "Yuk ngobrol atau diskusi santai",
    p_contact_desc: "Punya ide proyek, butuh masukan arsitektur mobile apps, atau mau diskusi santai? Pintu selalu terbuka untuk ngobrol.",
  },
};
