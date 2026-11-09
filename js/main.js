/**
 * ZIYO NUR XUSUSIY MAKTABI - ASOSIY JAVASCRIPT FAYLI (MAIN.JS)
 * Muallif: Antigravity AI
 * Tavsif: Mobil menyu, til almashtirish, animatsiyali raqamlar, fikrlar slayderi,
 *         tablar, FAQ akordeoni, galereya filtri, lightbox va forma yuborish logikasi.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. MOBIL MENYU (HAMBURGER MENU)
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

    // Menyu havolasi bosilganda mobil menyuni avtomatik yopish
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
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
  // 2. TIL ALMASHTIRGICH (UZ / RU / EN)
  // ==========================================================================
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      langButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const selectedLang = e.target.getAttribute('data-lang');
      
      // Haqiqiy loyihada bu yerda i18n kutubxonasi yoki alohida sahifalarga yo'naltirish bo'ladi
      showToast(`Sayt tili: ${selectedLang.toUpperCase()} ga almashtirildi`);
    });
  });

  // ==========================================================================
  // 3. ANIMATSIYALI RAQAMLAR (COUNTER ANIMATION)
  // ==========================================================================
  const counterElements = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  const animateCounters = () => {
    counterElements.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 soniya davomida
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
  // 4. OTA-ONALAR FIKRLARI SLAYDERI (TESTIMONIAL SLIDER)
  // ==========================================================================
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');
  let currentSlide = 0;
  let sliderInterval = null;

  if (slides.length > 0) {
    // Nuqtalarni (dots) dinamik yaratish
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
  // 5. O'QUV DASTURLARI TABLARI (PROGRAMS TABS)
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
  // 6. FAQ AKORDEONI (ACCORDION)
  // ==========================================================================
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const isActive = item.classList.contains('active');

      // Agar bittasini ochganda qolganini yopish kerak bo'lsa:
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
  // 7. GALEREYA FILTRI VA LIGHTBOX MODAL
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

  // Lightboxda ochish
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
  // 8. TEZKOR QABUL MODALI (GLOBAL ADMISSION MODAL)
  // ==========================================================================
  const quickAdmissionBtns = document.querySelectorAll('.open-admission-modal');
  const quickAdmissionModal = document.getElementById('admissionModal');
  const modalCloseBtns = document.querySelectorAll('.close-modal');

  if (quickAdmissionBtns.length > 0 && quickAdmissionModal) {
    quickAdmissionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        quickAdmissionModal.classList.add('active');
      });
    });
  }

  if (modalCloseBtns.length > 0) {
    modalCloseBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
          modal.classList.remove('active');
        });
      });
    });
  }

  // Modal tashqarisiga bosilganda yopish
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });

  // ==========================================================================
  // 9. FORMALARNI YUBORISH VA MINNATDORCHILIK MODALI
  // ==========================================================================
  const successModal = document.getElementById('successModal');
  const forms = document.querySelectorAll('form.ajax-form, #admissionForm, #contactForm, #quickAdmissionForm');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Sahifaning qayta yuklanishini to'xtatish

      // Oddiy maydonlarni tekshirish (Validation)
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

      // Agar ochiq modal bo'lsa (masalan tezkor ariza modali), uni yopamiz
      if (quickAdmissionModal) {
        quickAdmissionModal.classList.remove('active');
      }

      // Muvaffaqiyatli xabarni ko'rsatish
      if (successModal) {
        successModal.classList.add('active');
      } else {
        alert("Rahmat! Arizangiz muvaffaqiyatli qabul qilindi. Tez orada siz bilan bog'lanamiz.");
      }

      // Formani tozalash
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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

  // AI Chatni ochish / yopish
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

  // Tezkor savollar tugmalari (Quick Buttons)
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('ai-quick-btn')) {
      const question = e.target.getAttribute('data-question') || e.target.textContent;
      handleUserMessage(question);
    }
  });

  // Forma orqali xabar yuborish
  if (aiChatForm && aiInput && aiMessages) {
    aiChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = aiInput.value.trim();
      if (!message) return;

      handleUserMessage(message);
      aiInput.value = '';
    });
  }

  // Xabarni qabul qilish va AI javobini ishlab chiqish
  function handleUserMessage(userText) {
    appendMessage(userText, 'user');

    // AI "yozmoqda..." animatsiyasini ko'rsatish
    const typingIndicator = showTypingIndicator();

    setTimeout(() => {
      if (typingIndicator && typingIndicator.parentNode) {
        typingIndicator.remove();
      }
      const aiReply = generateAiResponse(userText);
      appendMessage(aiReply, 'bot');
    }, 700 + Math.random() * 500);
  }

  // Xabarni chatga qo'shish
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

  // Yozish animatsiyasi
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

  // AI javoblar bazasi va kalit so'zlar tahlili
  function generateAiResponse(query) {
    const q = query.toLowerCase();

    // 1. O'qish kunlari va jadval
    if (q.includes('kun') || q.includes('shanba') || q.includes('vaqt') || q.includes('jadval') || q.includes('dushanba')) {
      return `📅 <b>IBRAT SCHOOL o'quv tartibi:</b><br>
      • Darslar: <b>Dushanbadan Shanbagacha (haftada 6 kun)</b><br>
      • Soat: <b>08:00 dan 18:00 gacha</b><br>
      • Kun tartibi o'z ichiga oladi: asosiy fanlar, 3 mahal toza issiq ovqat, uy vazifalarini to'liq maktabda bajarish hamda sport va ijodiy to'garaklar!`;
    }

    // 2. Qabul va ro'yxatdan o'tish
    if (q.includes('qabul') || q.includes('ariza') || q.includes('hujjat') || q.includes('imtihon') || q.includes('kirish') || q.includes('topshir')) {
      return `🎓 <b>IBRAT SCHOOL 2026–2027 o'quv yili uchun qabul ochiq!</b><br><br>
      1–11-sinflar uchun qabul 4 bosqichda bo'ladi:<br>
      1️⃣ Onlayn ariza qoldirish<br>
      2️⃣ Matematika va ingliz tilidan bilim sinovi hamda suhbat<br>
      3️⃣ Hujjatlarni topshirish<br>
      4️⃣ Shartnoma imzolash<br><br>
      <button class="btn btn-primary btn-sm open-admission-modal" style="margin-top:6px; padding:6px 14px; font-size:0.8rem;">
        ✍️ Onlayn ariza topshirish
      </button>`;
    }

    // 3. Narxlar va to'lov
    if (q.includes('narx') || q.includes('pul') || q.includes('to\'lov') || q.includes('tolov') || q.includes('qancha') || q.includes('kontrakt')) {
      return `💰 <b>Ta'lim narxlari (oylik):</b><br>
      • <b>1–4-sinflar (Boshlang'ich):</b> 3 200 000 so'm<br>
      • <b>5–9-sinflar (O'rta):</b> 3 600 000 so'm<br>
      • <b>10–11-sinflar (Yuqori):</b> 3 900 000 so'm<br><br>
      <i>To'lov ichiga: 3 mahal issiq taom, Cambridge darsliklari, to'garaklar, tibbiy nazorat to'liq kiritilgan!</i>`;
    }

    // 4. Aloqa, telefon va manzil
    if (q.includes('telefon') || q.includes('nomer') || q.includes('aloqa') || q.includes('manzil') || q.includes('telegram') || q.includes('instagram') || q.includes('qayerda')) {
      return `📞 <b>Bog'lanish ma'lumotlari:</b><br>
      • <b>Telefon:</b> +998 (94) 702-44-56<br>
      • <b>Telegram:</b> <a href="https://t.me/ibrat_schools" target="_blank" style="color: #0284c7; text-decoration: underline;">@ibrat_schools</a><br>
      • <b>Instagram:</b> <a href="https://instagram.com/ibrat_schooll" target="_blank" style="color: #0284c7; text-decoration: underline;">@ibrat_schooll</a><br>
      • <b>Manzil:</b> Yangiyer sh., Loyihachilar ko'chasi 2-uy.`;
    }

    // 5. Chuqurlashtirilgan fanlar va to'garaklar
    if (q.includes('fan') || q.includes('ingliz') || q.includes('matematika') || q.includes('robot') || q.includes('to\'garak') || q.includes('togarak') || q.includes('sport')) {
      return `📚 <b>Chuqurlashtirilgan fanlar:</b><br>
      • Matematika va mantiq<br>
      • Cambridge English (Native speakers, IELTS tayyorgarlik)<br>
      • IT, Sun'iy intellekt va Robototexnika<br>
      • STEM amaliy laboratoriyalari<br><br>
      ⚽ <b>To'garaklar:</b> Shaxmat, yopiq havzada suzish, futbol, tasviriy san'at, teatr va notiqlik klubi.`;
    }

    // 6. Salomlashish
    if (q.includes('salom') || q.includes('assalom') || q.includes('privet') || q.includes('hello')) {
      return `Assalomu alaykum! <b>IBRAT SCHOOL</b> xususiy maktabining sun'iy intellekt maslahatchisi xizmatingizda! Sizni qabul, o'qish narxlari yoki darslar bo'yicha qanday ma'lumot qiziqtiradi?`;
    }

    // Umumiy / standart javob
    return `Savolingiz uchun tashakkur! <b>IBRAT SCHOOL</b> — bu 1–11-sinflar uchun dushanbadan shanbagacha sifatli ta'lim beruvchi zamonaviy maktab. Batafsil ma'lumot olish yoki qabulga yozilish uchun qo'ng'iroq qiling: <b>+998 (94) 702-44-56</b> yoki Telegram: <b>@ibrat_schools</b>`;
  }

  // ==========================================================================
  // TOAST BILDIRISHNOMA FUNKSIYASI (Yordamchi)
  // ==========================================================================
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
    }, 3000);
  }

});
