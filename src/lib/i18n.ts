export type Language = 'fr' | 'ar' | 'en';

export const translations = {
  fr: {
    // Header
    brand: "EL Marketeur TN",
    consultation: "Consultation",
    
    // Hero
    heroTitle: "Réservez votre consultation stratégique",
    heroSubtitle: "45 minutes pour transformer votre stratégie marketing digital",
    freeAudit: "Première consultation GRATUITE",
    duration: "45 min",
    
    // Services
    selectService: "Choisissez votre service",
    services: {
      paidAds: "Publicité Payante & Performance",
      paidAdsDesc: "Transformez les clics en ventes",
      paidAdsDetails: "Meta Ads • Google Ads • Funnels • Retargeting • Optimisation du ROAS",
      strategy: "Stratégie & Conseil",
      strategyDesc: "Clarté et direction de croissance",
      strategyDetails: "Stratégie marketing • Go-To-Market • Personas • Analyse concurrentielle",
      ecommerce: "E-commerce & Croissance Social Media",
      ecommerceDesc: "Faites évoluer les marques et les boutiques en ligne",
      ecommerceDetails: "Lancement de produits • Systèmes d'upsell • Stratégie de contenu • Croissance de communauté",
      webDev: "Développement Web",
      webDevDesc: "Sites rapides et orientés conversion",
      webDevDetails: "Landing Pages • WordPress • UX/UI • Intégration des paiements",
      content: "Création de Contenu",
      contentDesc: "Visuels à fort impact qui convertissent",
      contentDetails: "Reels • UGC • Créations publicitaires • Contenu de marque",
      seo: "SEO (Référencement naturel)",
      seoDesc: "Gagnez en visibilité. Générez des leads organiques",
      seoDetails: "SEO local • Optimisation on-page • Mots-clés • Suivi et reporting"
    },
    
    // Calendar
    selectDate: "Sélectionnez une date",
    selectTime: "Choisissez un créneau",
    noSlots: "Aucun créneau disponible pour cette date",
    
    // Form
    yourInfo: "Vos informations",
    fullName: "Nom complet",
    email: "Adresse email",
    phone: "Numéro de téléphone",
    
    // Validation
    required: "Ce champ est requis",
    invalidEmail: "Email invalide",
    invalidPhone: "Numéro de téléphone invalide",
    
    // Actions
    back: "Retour",
    continue: "Continuer",
    confirm: "Confirmer la réservation",
    
    // Confirmation
    thankYou: "Merci pour votre confiance !",
    confirmationTitle: "Votre réservation est confirmée",
    confirmationMessage: "Nous vous enverrons un email de confirmation avec tous les détails.",
    bookingDetails: "Détails de votre rendez-vous",
    service: "Service",
    date: "Date",
    time: "Heure",
    close: "Fermer",
    
    // Theme
    lightMode: "Mode clair",
    darkMode: "Mode sombre",
    
    // Footer
    allRights: "Tous droits réservés",
    
    // Errors
    slotTaken: "Ce créneau n'est plus disponible",
    bookingError: "Une erreur est survenue, veuillez réessayer"
  },
  ar: {
    // Header
    brand: "EL Marketeur TN",
    consultation: "استشارة",
    
    // Hero
    heroTitle: "احجز استشارتك الاستراتيجية",
    heroSubtitle: "45 دقيقة لتحويل استراتيجية التسويق الرقمي الخاصة بك",
    freeAudit: "الاستشارة الأولى مجانية",
    duration: "45 دقيقة",
    
    // Services
    selectService: "اختر خدمتك",
    services: {
      paidAds: "الإعلانات المدفوعة والأداء",
      paidAdsDesc: "حوّل النقرات إلى مبيعات",
      paidAdsDetails: "إعلانات ميتا • إعلانات جوجل • مسارات التحويل • إعادة الاستهداف • تحسين العائد على الإنفاق الإعلاني (ROAS)",
      strategy: "الاستراتيجية والاستشارات",
      strategyDesc: "وضوح في الرؤية واتجاه النمو",
      strategyDetails: "استراتيجية التسويق • خطط دخول السوق (Go-To-Market) • بناء الشخصيات (Personas) • تحليل المنافسين",
      ecommerce: "التجارة الإلكترونية والنمو عبر السوشيال ميديا",
      ecommerceDesc: "توسيع نطاق العلامات التجارية والمتاجر الإلكترونية",
      ecommerceDetails: "إطلاق المنتجات • أنظمة البيع الإضافي (Upsell) • استراتيجية المحتوى • تنمية المجتمع",
      webDev: "تطوير المواقع الإلكترونية",
      webDevDesc: "مواقع سريعة ومركزة على التحويل",
      webDevDetails: "صفحات الهبوط • ووردبريس • تجربة المستخدم/واجهة المستخدم (UX/UI) • دمج أنظمة الدفع",
      content: "إنشاء المحتوى",
      contentDesc: "مرئيات عالية التأثير تحفّز التحويل",
      contentDetails: "ريلز • محتوى من إنشاء المستخدمين (UGC) • تصاميم الإعلانات • محتوى العلامة التجارية",
      seo: "تحسين محركات البحث (SEO)",
      seoDesc: "تصدّر النتائج واحصل على عملاء بشكل عضوي",
      seoDetails: "تحسين محلي • تحسين داخل الصفحة • الكلمات المفتاحية • التتبع والتقارير"
    },
    
    // Calendar
    selectDate: "اختر تاريخاً",
    selectTime: "اختر موعداً",
    noSlots: "لا توجد مواعيد متاحة لهذا التاريخ",
    
    // Form
    yourInfo: "معلوماتك",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    
    // Validation
    required: "هذا الحقل مطلوب",
    invalidEmail: "بريد إلكتروني غير صالح",
    invalidPhone: "رقم هاتف غير صالح",
    
    // Actions
    back: "رجوع",
    continue: "متابعة",
    confirm: "تأكيد الحجز",
    
    // Confirmation
    thankYou: "شكراً على ثقتكم!",
    confirmationTitle: "تم تأكيد حجزكم",
    confirmationMessage: "سنرسل لكم بريداً إلكترونياً يتضمن جميع التفاصيل.",
    bookingDetails: "تفاصيل موعدكم",
    service: "الخدمة",
    date: "التاريخ",
    time: "الوقت",
    close: "إغلاق",
    
    // Theme
    lightMode: "الوضع الفاتح",
    darkMode: "الوضع الداكن",
    
    // Footer
    allRights: "جميع الحقوق محفوظة",
    
    // Errors
    slotTaken: "هذا الموعد لم يعد متاحاً",
    bookingError: "حدث خطأ، يرجى المحاولة مرة أخرى"
  },
  en: {
    // Header
    brand: "EL Marketeur TN",
    consultation: "Consultation",
    
    // Hero
    heroTitle: "Book your strategic consultation",
    heroSubtitle: "45 minutes to transform your digital marketing strategy",
    freeAudit: "First Consultation is FREE",
    duration: "45 min",
    
    // Services
    selectService: "Choose your service",
    services: {
      paidAds: "Paid Ads & Performance",
      paidAdsDesc: "Turn clicks into sales",
      paidAdsDetails: "Meta Ads • Google Ads • Funnels • Retargeting • ROAS Optimization",
      strategy: "Strategy & Consulting",
      strategyDesc: "Clarity and growth direction",
      strategyDetails: "Marketing Strategy • Go-To-Market • Personas • Competitive Analysis",
      ecommerce: "E-commerce & Social Growth",
      ecommerceDesc: "Scale brands and online stores",
      ecommerceDetails: "Product Launch • Upsell Systems • Content Strategy • Community Growth",
      webDev: "Website Development",
      webDevDesc: "Fast, conversion-focused websites",
      webDevDetails: "Landing Pages • WordPress • UX/UI • Payment Integration",
      content: "Content Creation",
      contentDesc: "High-impact visuals that convert",
      contentDetails: "Reels • UGC • Ad Creatives • Branding Content",
      seo: "SEO",
      seoDesc: "Rank higher. Get organic leads",
      seoDetails: "Local SEO • On-Page Optimization • Keywords • Tracking & Reporting"
    },
    
    // Calendar
    selectDate: "Select a date",
    selectTime: "Choose a time slot",
    noSlots: "No slots available for this date",
    
    // Form
    yourInfo: "Your information",
    fullName: "Full name",
    email: "Email address",
    phone: "Phone number",
    
    // Validation
    required: "This field is required",
    invalidEmail: "Invalid email",
    invalidPhone: "Invalid phone number",
    
    // Actions
    back: "Back",
    continue: "Continue",
    confirm: "Confirm booking",
    
    // Confirmation
    thankYou: "Thank you for your trust!",
    confirmationTitle: "Your booking is confirmed",
    confirmationMessage: "We will send you a confirmation email with all the details.",
    bookingDetails: "Your appointment details",
    service: "Service",
    date: "Date",
    time: "Time",
    close: "Close",
    
    // Theme
    lightMode: "Light mode",
    darkMode: "Dark mode",
    
    // Footer
    allRights: "All rights reserved",
    
    // Errors
    slotTaken: "This slot is no longer available",
    bookingError: "An error occurred, please try again"
  }
};

export const getDirection = (lang: Language): 'ltr' | 'rtl' => {
  return lang === 'ar' ? 'rtl' : 'ltr';
};
