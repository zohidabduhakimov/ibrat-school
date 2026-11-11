/**
 * IBRAT SCHOOL — ASOSIY JAVASCRIPT VA i18n KO'P TILLILIK TIZIMI (MAIN.JS)
 * Muallif: Antigravity AI
 * Tillar: O'zbekcha (UZ), Ruscha (RU), Inglizcha (EN) — to'liq ishlaydi!
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. i18n LUG'ATI VA KO'P TILLILIK TIZIMI (UZ / RU / EN)
  // ==========================================================================
  const translations = {
    uz: {
      top_schedule: "Dushanba – Shanba: 09:00 – 18:00 (Darslar 09:00 da boshlanadi)",
      top_address: "Yangiyer sh., Loyihachilar ko'chasi 2-uy",
      nav_home: "Bosh sahifa",
      nav_about: "Maktab haqida",
      nav_admissions: "Qabul",
      nav_programs: "Dasturlar",
      nav_news: "Yangiliklar",
      nav_contact: "Aloqa",
      btn_admission: "Qabul ochiq",
      hero_badge: "2026–2027 o'quv yili uchun qabul ochiq! (0–9-sinflar)",
      hero_title: "IBRAT SCHOOL — Kelajak yetakchilarini tarbiyalaymiz",
      hero_desc: "0–9-sinflar uchun dushanbadan shanbagacha yuqori sifatli akademik ta'lim, chuqurlashtirilgan matematika, xalqaro Cambridge ingliz tili, IT va mustahkam axloqiy tarbiya maskani.",
      hero_btn_apply: "Ariza topshirish",
      hero_btn_about: "Maktab bilan tanishing",
      hero_feat1_title: "Dushanba – Shanba",
      hero_feat1_desc: "Darslar soat 09:00 da boshlanadi",
      hero_feat2_title: "3 mahal issiq taom",
      hero_feat2_desc: "Dietolog nazoratida",
      hero_feat3_title: "100% xavfsiz kampus",
      hero_feat3_desc: "24/7 qo'riqlash xizmati",
      stat_students: "Baxtli o'quvchilar",
      stat_olympiad: "Xalqaro olimpiada g'oliblari",
      stat_teachers: "Tajribali ustozlar",
      stat_university: "OTMga grant bilan kirish",
      features_badge: "Nega aynan IBRAT SCHOOL?",
      features_title: "Farzandingiz uchun mukammal ta'lim va tarbiya",
      features_desc: "Har bir o'quvchining ichki iqtidorini ro'yobga chiqarish va ularni jahon miqyosida raqobatbardosh qilib voyaga yetkazish bizning asosiy burchimizdir.",
      feat_math_title: "Chuqurlashtirilgan Matematika",
      feat_math_desc: "Singapur metodikasi, mantiqiy masalalar va xalqaro olimpiadalarga individual tayyorgarlik kursi.",
      feat_english_title: "Ingliz tili (Cambridge & IELTS)",
      feat_english_desc: "Xorijiy ustozlar (Native speakers) darslari va yuqori IELTS natijalari.",
      feat_it_title: "IT, Dasturlash va AI",
      feat_it_desc: "Python dasturlash tili, kompyuter savodxonligi, veb-dasturlash va sun'iy intellekt vositalari.",
      feat_sport_title: "Sport va Salomatlik",
      feat_sport_desc: "Yopiq suzish havzasi, futbol maydoni, shaxmat maktabi va har kuni tibbiy ko'rik.",
      uni_badge: "Bizning faxrimiz",
      uni_title: "Bitiruvchilarimiz qabul qilingan universitetlar",
      news_badge: "Maktab hayoti",
      news_title: "So'nggi yangiliklar va e'lonlar",
      news_desc: "IBRAT SCHOOL jamoasining erishgan yutuqlari va maktabdagi yangiliklar.",
      reviews_badge: "Ota-onalar fikri",
      reviews_title: "Ota-onalar IBRAT SCHOOL haqida nima deydi?",
      reviews_desc: "Eng katta mukofotimiz — farzandlar quvonchi va ota-onalar ishonchi.",
      cta_badge: "Qabul 2026–2027",
      cta_title: "Farzandingiz kelajagiga bugun to'g'ri poydevor qo'ying",
      cta_desc: "Onlayn ariza qoldiring yoki bizga qo'ng'iroq qiling: +998 (94) 702-44-56",
      cta_btn_apply: "Onlayn ariza topshirish",
      cta_btn_telegram: "Telegram kanalimiz",
      footer_about_text: "Har bir o'quvchining ichki salohiyatini ochishga va ularni dunyo miqyosidagi yuksak marralarga tayyorlashga mo'ljallangan zamonaviy maktab.",
      footer_links_title: "Tezkor havolalar",
      footer_programs_title: "Ta'lim dasturlari",
      footer_contact_title: "Bog'lanish",
      modal_title: "IBRAT SCHOOL — Qabul arizasi",
      modal_btn_submit: "Arizani yuborish",
      success_title: "Rahmat, arizangiz qabul qilindi!",
      success_desc: "Sizning ma'lumotlaringiz IBRAT SCHOOL qabul komissiyasiga yetib bordi. Tez orada mutaxassisimiz +998 (94) 702-44-56 orqali siz bilan bog'lanadi.",
      ai_greeting: "Assalomu alaykum! Men IBRAT SCHOOL sun'iy intellekt maslahatchisiman. Sizga qanday yordam bera olaman?"
    },
    ru: {
      top_schedule: "Понедельник – Суббота: 09:00 – 18:00 (Уроки начинаются в 09:00)",
      top_address: "г. Янгиер, ул. Лойихачилар, дом 2",
      nav_home: "Главная",
      nav_about: "О школе",
      nav_admissions: "Приём",
      nav_programs: "Программы",
      nav_news: "Новости",
      nav_contact: "Контакты",
      btn_admission: "Приём открыт",
      hero_badge: "Открыт приём на 2026–2027 учебный год! (0–9 классы)",
      hero_title: "IBRAT SCHOOL — Воспитываем лидеров будущего",
      hero_desc: "Качественное академическое образование с понедельника по субботу для 0–9 классов: углубленная математика, международный английский Cambridge, IT и духовно-нравственное воспитание.",
      hero_btn_apply: "Подать заявку",
      hero_btn_about: "Узнать о школе",
      hero_feat1_title: "Понедельник – Суббота",
      hero_feat1_desc: "Уроки начинаются в 09:00",
      hero_feat2_title: "3-разовое горячее питание",
      hero_feat2_desc: "Под контролем диетолога",
      hero_feat3_title: "100% безопасный кампус",
      hero_feat3_desc: "Круглосуточная охрана 24/7",
      stat_students: "Счастливых учеников",
      stat_olympiad: "Победителей олимпиад",
      stat_teachers: "Опытных педагогов",
      stat_university: "Поступление на грант",
      features_badge: "Почему именно IBRAT SCHOOL?",
      features_title: "Идеальная среда обучения и воспитания",
      features_desc: "Наша главная задача — раскрыть таланты каждого ребенка и подготовить его к успеху на международном уровне.",
      feat_math_title: "Углубленная Математика",
      feat_math_desc: "Сингапурская методика, логические задачи и индивидуальная подготовка к олимпиадам.",
      feat_english_title: "Английский (Cambridge & IELTS)",
      feat_english_desc: "Уроки с носителями языка (Native speakers) и высокие баллы на экзаменах IELTS.",
      feat_it_title: "IT, Программирование и ИИ",
      feat_it_desc: "Язык Python, компьютерная грамотность, веб-разработка и инструменты искусственного интеллекта.",
      feat_sport_title: "Спорт и Здоровье",
      feat_sport_desc: "Крытый бассейн, футбольное поле, шахматная школа и ежедневный медицинский осмотр.",
      uni_badge: "Наша гордость",
      uni_title: "Университеты, куда поступили выпускники",
      news_badge: "Школьная жизнь",
      news_title: "Свежие новости и объявления",
      news_desc: "Достижения команды IBRAT SCHOOL и ключевые события нашей школы.",
      reviews_badge: "Отзывы родителей",
      reviews_title: "Что говорят родители об IBRAT SCHOOL?",
      reviews_desc: "Наша лучшая награда — счастливые дети и благодарные родители.",
      cta_badge: "Приём 2026–2027",
      cta_title: "Заложите надежный фундамент будущего вашего ребенка",
      cta_desc: "Оставьте онлайн-заявку или позвоните нам: +998 (94) 702-44-56",
      cta_btn_apply: "Подать онлайн-заявку",
      cta_btn_telegram: "Наш Telegram-канал",
      footer_about_text: "Современная школа, созданная для раскрытия потенциала каждого ученика и подготовки к высоким мировым достижениям.",
      footer_links_title: "Быстрые ссылки",
      footer_programs_title: "Программы обучения",
      footer_contact_title: "Контакты",
      modal_title: "IBRAT SCHOOL — Заявка на приём",
      modal_btn_submit: "Отправить заявку",
      success_title: "Спасибо, ваша заявка принята!",
      success_desc: "Ваши данные поступили в приёмную комиссию IBRAT SCHOOL. Наш специалист свяжется с вами по номеру +998 (94) 702-44-56.",
      ai_greeting: "Здравствуйте! Я ИИ-консультант IBRAT SCHOOL. Чем я могу вам помочь?"
    },
    en: {
      top_schedule: "Monday – Saturday: 09:00 – 18:00 (Lessons start at 09:00)",
      top_address: "Yangiyer city, Loyihachilar str. 2",
      nav_home: "Home",
      nav_about: "About Us",
      nav_admissions: "Admissions",
      nav_programs: "Programs",
      nav_news: "News",
      nav_contact: "Contact",
      btn_admission: "Admissions Open",
      hero_badge: "Admissions open for 2026–2027 academic year! (Grades 0–9)",
      hero_title: "IBRAT SCHOOL — Nurturing Future Leaders",
      hero_desc: "High-quality academic education Monday through Saturday for grades 0–9: advanced mathematics, Cambridge English, IT, and strong moral character building.",
      hero_btn_apply: "Apply for Admission",
      hero_btn_about: "Learn About School",
      hero_feat1_title: "Monday – Saturday",
      hero_feat1_desc: "Classes start at 09:00 AM",
      hero_feat2_title: "3 Healthy Meals Daily",
      hero_feat2_desc: "Monitored by dietitians",
      hero_feat3_title: "100% Secure Campus",
      hero_feat3_desc: "24/7 Security Service",
      stat_students: "Happy Students",
      stat_olympiad: "Olympiad Champions",
      stat_teachers: "Experienced Faculty",
      stat_university: "University Scholarships",
      features_badge: "Why Choose IBRAT SCHOOL?",
      features_title: "The Perfect Environment for Growth and Learning",
      features_desc: "Our mission is to unleash every student's innate potential and prepare them to compete and lead globally.",
      feat_math_title: "Advanced Mathematics",
      feat_math_desc: "Singapore math methods, logic puzzles, and personalized training for Olympiads.",
      feat_english_title: "Cambridge English & IELTS",
      feat_english_desc: "Taught by Native speakers with proven high IELTS exam outcomes.",
      feat_it_title: "IT, Programming & AI",
      feat_it_desc: "Python coding, computer literacy, modern web skills, and AI tools.",
      feat_sport_title: "Sports & Wellness",
      feat_sport_desc: "Indoor swimming pool, football pitch, chess club, and daily medical checks.",
      uni_badge: "Our Pride",
      uni_title: "Top Universities Our Graduates Entered",
      news_badge: "School Life",
      news_title: "Latest News & Events",
      news_desc: "Key achievements and updates from the IBRAT SCHOOL community.",
      reviews_badge: "Parent Testimonials",
      reviews_title: "What Parents Say About IBRAT SCHOOL",
      reviews_desc: "Our greatest reward is happy students and trusting families.",
      cta_badge: "Admissions 2026–2027",
      cta_title: "Build a Strong Foundation for Your Child's Future",
      cta_desc: "Submit an online application or call us directly: +998 (94) 702-44-56",
      cta_btn_apply: "Apply Online Now",
      cta_btn_telegram: "Join Telegram Channel",
      footer_about_text: "A modern private school designed to unlock every student's potential and guide them toward global excellence.",
      footer_links_title: "Quick Links",
      footer_programs_title: "Academic Programs",
      footer_contact_title: "Get in Touch",
      modal_title: "IBRAT SCHOOL — Admission Application",
      modal_btn_submit: "Submit Application",
      success_title: "Thank You, Your Application Has Been Received!",
      success_desc: "Your details have reached the IBRAT SCHOOL admissions office. Our team will contact you shortly at +998 (94) 702-44-56.",
      ai_greeting: "Hello! I am the IBRAT SCHOOL AI Assistant. How can I assist you today?"
    }
  };

  // Tilni almashtirish funksiyasi
  function setLanguage(lang) {
    if (!translations[lang]) lang = 'uz';
    localStorage.setItem('ibrat_site_lang', lang);

    // Barcha tugmalardagi active sinfni yangilash
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Barcha [data-i18n] elementlarni tarjima qilish
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Placeholderlar bo'lsa
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });
  }

  // Saqlangan tilni yuklash
  const savedLang = localStorage.getItem('ibrat_site_lang') || 'uz';
  setLanguage(savedLang);

  // Til tugmalari bosilganda
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-lang');
      setLanguage(selectedLang);
      showToast(selectedLang === 'uz' ? "Sayt tili: O'zbekcha" : selectedLang === 'ru' ? "Язык сайта: Русский" : "Language: English");
    });
  });

  // ==========================================================================
  // 2. MOBIL MENYU (HAMBURGER)
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // ==========================================================================
  // 3. ANIMATSIYALI RAQAMLAR (COUNTERS)
  // ==========================================================================
  const counterElements = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  const animateCounters = () => {
    counterElements.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const stepTime = 30;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString() + (counter.getAttribute('data-suffix') || '');
        }
      }, stepTime);
    });
  };

  if (counterElements.length > 0) {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersAnimated) {
            animateCounters();
            countersAnimated = true;
          }
        });
      }, { threshold: 0.2 });
      observer.observe(statsSection);
    } else {
      animateCounters();
    }
  }

  // ==========================================================================
  // 4. OTA-ONALAR FIKRLARI SLAYDERI
  // ==========================================================================
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');
  let currentSlide = 0;
  let sliderInterval = null;

  if (slides.length > 0) {
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
      });
    }

    const showSlide = (index) => {
      slides.forEach(s => s.classList.remove('active'));
      const dots = document.querySelectorAll('.slider-dot');
      dots.forEach(d => d.classList.remove('active'));

      if (index >= slides.length) currentSlide = 0;
      else if (index < 0) currentSlide = slides.length - 1;
      else currentSlide = index;

      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    };

    const goToSlide = (index) => {
      showSlide(index);
      resetAutoSlide();
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        resetAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        resetAutoSlide();
      });
    }

    const startAutoSlide = () => {
      sliderInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 6000);
    };

    const resetAutoSlide = () => {
      clearInterval(sliderInterval);
      startAutoSlide();
    };

    startAutoSlide();
  }

  // ==========================================================================
  // 5. O'QUV DASTURLARI TABLARI
  // ==========================================================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabButtons.length > 0 && tabPanes.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        button.classList.add('active');
        const activePane = document.getElementById(targetTab);
        if (activePane) activePane.classList.add('active');
      });
    });
  }

  // ==========================================================================
  // 6. FAQ AKORDEONI
  // ==========================================================================
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBody = otherItem.querySelector('.accordion-body');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 30 + 'px';
      } else {
        item.classList.remove('active');
        body.style.maxHeight = null;
      }
    });
  });

  // ==========================================================================
  // 7. GALEREYA VA USTOZLAR FILTRI VA LIGHTBOX
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Ustozlar filtri (Teacher filter)
  const teacherFilterBtns = document.querySelectorAll('.teacher-filter-btn');
  const teacherCards = document.querySelectorAll('.teacher-card-item');
  if (teacherFilterBtns.length > 0 && teacherCards.length > 0) {
    teacherFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        teacherFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');
        teacherCards.forEach(card => {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  if (galleryItems.length > 0 && lightbox && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightbox.classList.add('active');
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // 8. TEZKOR QABUL MODALI
  // ==========================================================================
  const quickAdmissionBtns = document.querySelectorAll('.open-admission-modal');
  const quickAdmissionModal = document.getElementById('admissionModal');
  const modalCloseBtns = document.querySelectorAll('.close-modal');

  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    const box = modal.querySelector('.modal-box');
    if (box) box.scrollTop = 0;
  };

  const closeAllModals = () => {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.classList.remove('modal-open');
  };

  if (quickAdmissionBtns.length > 0 && quickAdmissionModal) {
    quickAdmissionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(quickAdmissionModal);
      });
    });
  }

  if (modalCloseBtns.length > 0) {
    modalCloseBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeAllModals();
      });
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeAllModals();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // ==========================================================================
  // 9. TELEGRAM BOT INTEGRATSIYASI VA FORMALARNI YUBORISH
  // ==========================================================================
  const TELEGRAM_CONFIG = {
    token: '9278043820:AAGWMNnAZzRlP9-aDdGSVj7um_g08uDIzuY',
    chatId: '8767361789'
  };

  function escapeHtml(text) {
    if (!text) return '';
    return text.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  async function sendTelegramMessage(text) {
    const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.token}/sendMessage`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CONFIG.chatId,
          text: text,
          parse_mode: 'HTML'
        })
      });
      return await response.json();
    } catch (err) {
      console.warn('JSON POST orqali yuborishda xatolik, URL fallback sinab ko\'rilmoqda:', err);
      try {
        const fallbackUrl = `https://api.telegram.org/bot${TELEGRAM_CONFIG.token}/sendMessage?chat_id=${TELEGRAM_CONFIG.chatId}&text=${encodeURIComponent(text)}&parse_mode=HTML`;
        const res = await fetch(fallbackUrl);
        return await res.json();
      } catch (e) {
        console.error('Telegram botga yuborish imkoni bo\'lmadi:', e);
        return { ok: false, error: e };
      }
    }
  }

  const successModal = document.getElementById('successModal');
  const forms = document.querySelectorAll('form.ajax-form, #admissionForm, #contactForm, #quickAdmissionForm');

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = form.querySelectorAll('[required]');
      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ef4444';
        } else {
          input.style.borderColor = '#e2e8f0';
        }
      });

      if (!isValid) {
        showToast('Iltimos, barcha majburiy maydonlarni to\'ldiring!');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Yuborilmoqda...';
      }

      const now = new Date();
      const timeStr = now.toLocaleDateString('uz-UZ') + ', ' + now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
      const pageTitle = document.title ? document.title.split('—')[0].trim() : 'IBRAT SCHOOL';

      let telegramText = '';

      if (form.id === 'contactForm') {
        const nameInput = form.querySelector('input[type="text"]');
        const phoneInput = form.querySelector('input[type="tel"]');
        const messageInput = form.querySelector('textarea');

        const senderName = nameInput ? nameInput.value.trim() : 'Noma\'lum';
        const senderPhone = phoneInput ? phoneInput.value.trim() : 'Kiritilmagan';
        const senderMsg = messageInput ? messageInput.value.trim() : 'Xabar matni yo\'q';

        telegramText = `✉️ <b>YANGI MUROJAAT / SAVOL</b>\n` +
          `━━━━━━━━━━━━━━━━━━\n` +
          `👤 <b>Ism:</b> ${escapeHtml(senderName)}\n` +
          `📞 <b>Telefon:</b> ${escapeHtml(senderPhone)}\n` +
          `💬 <b>Xabar:</b>\n${escapeHtml(senderMsg)}\n` +
          `━━━━━━━━━━━━━━━━━━\n` +
          `🌐 <b>Sahifa:</b> ${escapeHtml(pageTitle)}\n` +
          `⏰ <b>Vaqti:</b> ${timeStr}`;
      } else {
        // admissionForm yoki quickAdmissionForm
        const textInputs = form.querySelectorAll('input[type="text"]');
        const childName = textInputs[0] ? textInputs[0].value.trim() : 'Kiritilmagan';
        const dateInput = form.querySelector('input[type="date"]');
        const birthDate = dateInput ? dateInput.value.trim() : 'Kiritilmagan';
        const selectElem = form.querySelector('select');
        let classLevel = 'Tanlanmagan';
        if (selectElem && selectElem.selectedIndex >= 0) {
          classLevel = selectElem.options[selectElem.selectedIndex].text;
        }
        const parentName = textInputs[1] ? textInputs[1].value.trim() : 'Kiritilmagan';
        const phoneInput = form.querySelector('input[type="tel"]');
        const parentPhone = phoneInput ? phoneInput.value.trim() : 'Kiritilmagan';
        const commentInput = form.querySelector('textarea');
        const comment = commentInput && commentInput.value.trim() ? commentInput.value.trim() : 'Izoh qoldirilmagan';

        telegramText = `🎓 <b>YANGI QABUL ARIZASI!</b>\n` +
          `━━━━━━━━━━━━━━━━━━\n` +
          `👶 <b>Bolaning F.I.SH:</b> ${escapeHtml(childName)}\n` +
          `📅 <b>Tug'ilgan sanasi:</b> ${escapeHtml(birthDate)}\n` +
          `🏫 <b>Topshirayotgan sinfi:</b> ${escapeHtml(classLevel)}\n` +
          `👨‍👩‍👦 <b>Ota-onasining F.I.SH:</b> ${escapeHtml(parentName)}\n` +
          `📞 <b>Telefon raqam:</b> ${escapeHtml(parentPhone)}\n` +
          `📝 <b>Qo'shimcha izoh:</b> ${escapeHtml(comment)}\n` +
          `━━━━━━━━━━━━━━━━━━\n` +
          `🌐 <b>Sahifa:</b> ${escapeHtml(pageTitle)}\n` +
          `⏰ <b>Vaqti:</b> ${timeStr}`;
      }

      try {
        await sendTelegramMessage(telegramText);
      } catch (err) {
        console.error('Telegramga yuborishda xatolik:', err);
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }

      if (quickAdmissionModal) {
        quickAdmissionModal.classList.remove('active');
      }

      if (successModal) {
        openModal(successModal);
      } else {
        closeAllModals();
        alert("Rahmat! Arizangiz qabul qilindi va ma'muriyat Telegram botiga yetkazildi. Tez orada siz bilan bog'lanamiz.");
      }

      form.reset();
    });
  });

  // ==========================================================================
  // 10. TEPAGA QAYTISH TUGMASI (BACK TO TOP)
  // ==========================================================================
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 11. IBRAT AI MASLAHATCHISI (AI CHATBOT WIDGET)
  // ==========================================================================
  const aiChatBtn = document.getElementById('aiChatBtn');
  const aiChatWindow = document.getElementById('aiChatWindow');
  const aiCloseBtn = document.getElementById('aiCloseBtn');
  const aiChatForm = document.getElementById('aiChatForm');
  const aiInput = document.getElementById('aiInput');
  const aiMessages = document.getElementById('aiMessages');

  if (aiChatBtn && aiChatWindow) {
    aiChatBtn.addEventListener('click', () => {
      aiChatWindow.classList.toggle('active');
      if (aiChatWindow.classList.contains('active')) {
        if (aiInput) aiInput.focus();
      }
    });

    if (aiCloseBtn) {
      aiCloseBtn.addEventListener('click', () => {
        aiChatWindow.classList.remove('active');
      });
    }
  }

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('ai-quick-btn')) {
      const question = e.target.getAttribute('data-question') || e.target.textContent;
      handleUserMessage(question);
    }
  });

  if (aiChatForm && aiInput && aiMessages) {
    aiChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = aiInput.value.trim();
      if (!message) return;

      handleUserMessage(message);
      aiInput.value = '';
    });
  }

  function handleUserMessage(userText) {
    appendMessage(userText, 'user');
    const typingIndicator = showTypingIndicator();

    // Agar foydalanuvchi chatbotda telefon raqam qoldirsa, Telegram botga bildirishnoma yuborish
    const digitsOnly = userText.replace(/\D/g, '');
    if (digitsOnly.length >= 9 && (userText.includes('+998') || userText.includes('998') || digitsOnly.length === 9 || digitsOnly.length === 12)) {
      const pageTitle = document.title ? document.title.split('—')[0].trim() : 'IBRAT SCHOOL';
      const now = new Date();
      const timeStr = now.toLocaleDateString('uz-UZ') + ', ' + now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
      const botAlert = `🤖 <b>AI CHATBOTDA TELEFON RAQAM QOLDIRILDI!</b>\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `📞 <b>Telefon:</b> ${escapeHtml(userText.trim())}\n` +
        `💬 <b>Mijoz yozgan xabar:</b>\n${escapeHtml(userText)}\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `🌐 <b>Sahifa:</b> ${escapeHtml(pageTitle)}\n` +
        `⏰ <b>Vaqti:</b> ${timeStr}`;
      sendTelegramMessage(botAlert);
    }

    setTimeout(() => {
      if (typingIndicator && typingIndicator.parentNode) {
        typingIndicator.remove();
      }
      const aiReply = generateAiResponse(userText);
      appendMessage(aiReply, 'bot');
    }, 600 + Math.random() * 400);
  }

  function appendMessage(text, sender) {
    if (!aiMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('ai-message', sender === 'user' ? 'ai-msg-user' : 'ai-msg-bot');

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    msgDiv.innerHTML = `
      <div class="ai-bubble">${text}</div>
      <div class="ai-msg-time">${timeStr}</div>
    `;

    aiMessages.appendChild(msgDiv);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function showTypingIndicator() {
    if (!aiMessages) return null;
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('ai-typing');
    typingDiv.innerHTML = `
      <div class="ai-typing-dot"></div>
      <div class="ai-typing-dot"></div>
      <div class="ai-typing-dot"></div>
    `;
    aiMessages.appendChild(typingDiv);
    aiMessages.scrollTop = aiMessages.scrollHeight;
    return typingDiv;
  }

  // AI javoblar bazasi (Darslar 09:00 da, Yangiyer manzili, narxlar yo'q, robototexnika yo'q)
  function generateAiResponse(query) {
    const q = query.toLowerCase();

    // 1. O'qish kunlari va soati
    if (q.includes('kun') || q.includes('shanba') || q.includes('vaqt') || q.includes('jadval') || q.includes('dushanba') || q.includes('soat') || q.includes('9')) {
      return `📅 <b>IBRAT SCHOOL o'quv tartibi:</b><br>
      • Darslar: <b>Dushanbadan Shanbagacha (haftada 6 kun)</b><br>
      • Darslar boshlanish vaqti: <b>soat 09:00 da</b><br>
      • Darslar yakuni: <b>soat 18:00 gacha</b><br>
      • Kun tartibiga kiritilgan: asosiy fanlar, 3 mahal to'yimli issiq taom, darsdan keyingi mustaqil vazifalar va sport to'garaklari!`;
    }

    // 2. Qabul va ro'yxatdan o'tish
    if (q.includes('qabul') || q.includes('ariza') || q.includes('hujjat') || q.includes('imtihon') || q.includes('kirish') || q.includes('topshir')) {
      return `🎓 <b>IBRAT SCHOOL 2026–2027 o'quv yili uchun qabul ochiq!</b><br><br>
      <b>0–9-sinflar uchun</b> (0-sinf maktabga tayyorlov, 1–4-sinf boshlang'ich va 5–9-sinf o'rta maktab):<br>
      1️⃣ Onlayn ariza qoldirish<br>
      2️⃣ Matematika va ingliz tilidan bilim sinovi hamda suhbat<br>
      3️⃣ Hujjatlarni topshirish<br>
      4️⃣ Shartnoma imzolash<br><br>
      <button class="btn btn-primary btn-sm open-admission-modal" style="margin-top:6px; padding:6px 14px; font-size:0.8rem;">
        ✍️ Onlayn ariza topshirish
      </button>`;
    }

    // 2.5 Ustozlar va jamoa
    if (q.includes('ustoz') || q.includes('o\'qituvchi') || q.includes('oqituvchi') || q.includes('jamoa') || q.includes('rahbar') || q.includes('koordinator') || q.includes('hamshira')) {
      return `👨‍🏫 <b>IBRAT SCHOOL professional pedagogik jamoasi:</b><br><br>
      • <b>Sardorbek Quvvatov</b> — Maktabimizning bosh koordinatori<br>
      • <b>Maftuna Rahmonova</b> — 0-sinf (Maktabga tayyorlov) o'qituvchisi<br>
      • <b>Zulxumor Djurayeva</b> — 1-sinf o'qituvchisi (Sinf rahbari)<br>
      • <b>Shahnoza Shamsiddinova</b> — 2-sinf o'qituvchisi (Sinf rahbari)<br>
      • <b>Zuhra Bektemirova</b> — 3-sinf o'qituvchisi (Sinf rahbari)<br>
      • <b>Hanifa Rahmatova</b> — Boshlang'ich sinf o'qituvchisi<br>
      • <b>Umriya Qahhorova</b> — Boshlang'ich sinflar uchun yordamchi ustoz<br>
      • <b>Najmiddin Bektemirov</b> — Biologiya fani o'qituvchisi<br>
      • <b>Shaxriyor Odilov</b> — Jismoniy tarbiya fani o'qituvchisi<br>
      • <b>Shahzoda Xaripova</b> — Maktabimiz malakali hamshirasi<br>
      • <b>Cambridge English ustozlari</b> — Xalqaro sertifikatli ingliz tili mutaxassislari.<br><br>
      Barcha ustozlarimiz haqida batafsil <b>"Maktab haqida"</b> sahifasida ko'rishingiz mumkin!`;
    }

    // 3. To'lov / imtiyozlar haqida
    if (q.includes('narx') || q.includes('pul') || q.includes('to\'lov') || q.includes('tolov') || q.includes('qancha') || q.includes('kontrakt') || q.includes('sharoit')) {
      return `ℹ️ <b>O'qish shartlari va qulayliklar:</b><br>
      Maktabimizda o'quvchilar uchun 3 mahal sifatli issiq taom, darsliklar, uy vazifalarini maktabda bajarish, suzish, futbol va shaxmat mashg'ulotlari to'liq ta'minlangan.<br><br>
      <i>To'lov shartlari va chegirmalar bo'yicha batafsil ma'lumot olish uchun qabul komissiyamizga qo'ng'iroq qiling:</i> <b>+998 (94) 702-44-56</b>`;
    }

    // 4. Aloqa, telefon va manzil
    if (q.includes('telefon') || q.includes('nomer') || q.includes('aloqa') || q.includes('manzil') || q.includes('telegram') || q.includes('instagram') || q.includes('qayerda') || q.includes('yangiyer')) {
      return `📞 <b>Bog'lanish ma'lumotlari:</b><br>
      • <b>Telefon:</b> +998 (94) 702-44-56<br>
      • <b>Manzil:</b> Yangiyer sh., Loyihachilar ko'chasi 2-uy<br>
      • <b>Telegram:</b> <a href="https://t.me/ibrat_schools" target="_blank" style="color: #0284c7; text-decoration: underline;">@ibrat_schools</a><br>
      • <b>Instagram:</b> <a href="https://instagram.com/ibrat_schooll" target="_blank" style="color: #0284c7; text-decoration: underline;">@ibrat_schooll</a>`;
    }

    // 5. Chuqurlashtirilgan fanlar va to'garaklar
    if (q.includes('fan') || q.includes('ingliz') || q.includes('matematika') || q.includes('it') || q.includes('to\'garak') || q.includes('togarak') || q.includes('sport')) {
      return `📚 <b>Chuqurlashtirilgan fanlar:</b><br>
      • Matematika va mantiqiy fikrlash<br>
      • Cambridge English (Native speakers, IELTS tayyorgarlik)<br>
      • IT va Zamonaviy Dasturlash (Python, kompyuter savodxonligi)<br>
      • STEM amaliy laboratoriyalari<br><br>
      ⚽ <b>To'garaklar:</b> Shaxmat akademiyasi, yopiq havzada suzish, futbol, tasviriy san'at va notiqlik klubi.`;
    }

    // 6. Salomlashish
    if (q.includes('salom') || q.includes('assalom') || q.includes('privet') || q.includes('hello')) {
      return `Assalomu alaykum! <b>IBRAT SCHOOL</b> xususiy maktabining sun'iy intellekt maslahatchisi xizmatingizda! Darslarimiz soat 09:00 da boshlanadi. Sizga qanday yordam bera olaman?`;
    }

    return `Savolingiz uchun tashakkur! <b>IBRAT SCHOOL</b> — 0–9-sinflar uchun dushanbadan shanbagacha (darslar 09:00 dan) sifatli ta'lim beruvchi zamonaviy xususiy maktab. Qo'shimcha ma'lumot: <b>+998 (94) 702-44-56</b> yoki Telegram: <b>@ibrat_schools</b>`;
  }

  // Toast bildirishnoma
  function showToast(message) {
    let toast = document.getElementById('siteToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'siteToast';
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.backgroundColor = '#0b1f3a';
      toast.style.color = '#ffffff';
      toast.style.padding = '12px 24px';
      toast.style.borderRadius = '30px';
      toast.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
      toast.style.zIndex = '3000';
      toast.style.fontSize = '0.9rem';
      toast.style.fontWeight = '600';
      toast.style.transition = 'all 0.3s ease';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.display = 'block';

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => { toast.style.display = 'none'; }, 300);
    }, 2500);
  }

});
