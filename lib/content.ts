/**
 * Landing matnlari — ertaga yangi ma’lumot kelsa faqat shu faylni tahrirlang.
 * Komponentlar shu obyektdan o‘qiydi.
 */

export const site = {
  name: 'iMed Team',
  tagline: 'Professional',
  title: 'iMed Team — tibbiy ta’lim platformasi',
  description:
    'O‘zbekiston tibbiyot talabalari va shifokorlari uchun onlayn ta’lim. iMed Team MCHJ loyihalari: TibMentor, MaqolaMed, TIBNOMA.',
  logo: '/assets/logo.png',
}

export const nav = [
  { label: 'Bosh sahifa', href: '#home' },
  { label: 'Haqida', href: '#about' },
  { label: 'Loyihalar', href: '#products' },
  { label: 'Jamoa', href: '#team' },
  { label: 'Aloqa', href: '#contact' },
]

export const hero = {
  badge: 'iMed Team MCHJ — Tibbiyot Olami!',
  titleBefore: 'Tibbiyotni biz bilan',
  titleAccent: 'Tez, oson va sifatli',
  titleAfter: 'o‘rganing!',
  subtitle:
    'iMed Team MCHJ — tibbiy ta’lim platformasi, ilmiy maqolalar va tibbiy adabiyotlar loyihalarini bir joyda rivojlantiradigan jamoa.',
  primaryCta: { label: 'Loyihalarimiz', href: '#products' },
  secondaryCta: { label: 'Biz bilan bog‘lanish', href: '#contact' },
  stats: [
    { value: '2021', label: 'yildan beri' },
    { value: '10 000+', label: 'talaba va shifokor' },
    { value: '3', label: 'ta loyiha' },
  ],
  projectsLabel: 'Bizning loyihalar',
}

export const about = {
  id: 'about',
  title: 'iMed Team haqida',
  paragraphs: [
    '“iMed Team” MCHJ 2021-yildan buyon tibbiy ta’lim sohasida faoliyat yuritib kelmoqda. Shu kungacha biz 10 000 dan ziyod talaba va shifokorlarni o‘qitib keldik. Bizda o‘z ustida ishlaydigan shifokor va talabalar doimo yangi bilimlar olib kelishmoqda. Bitiruvchilarimiz turli davlat va xususiy shifoxonalarda malakali mutaxassis bo‘lib ishlab kelishmoqda.',
    'Talabalarimiz xalqaro va milliy olimpiadalarda faxrli o‘rinlarni egallab kelishadi. Kurslarimizdagi manbalar xalqaro darajadagi ma’lumotlar asosida tuzilgan va O‘zbekiston muhitiga moslashtirilgan.',
    'Jamoa tarkib topishining asosiy maqsadi — O‘zbekiston tibbiyotini yangi darajaga olib chiqish. Bu bizning eng ustuvor vazifamiz.',
  ],
  goals: [
    'Ilmiy asoslangan (evidence-based) tibbiyotni o‘rgatish',
    'Klinik fikrlashni o‘stirish, mas’uliyatli va halol shifokorlar yetishtirish',
    'Talaba va shifokorlarni zamonaviy va isbotli tibbiyot bilan to‘laqonli tanishtirish',
    'Nazariy va amaliy bilimlarni uyg‘unlashtirishni o‘rgatish',
    'Har bir bemorga yaqin insonga bo‘lgandek individual yondashuv',
    'Tibbiyot talabasi va shifokorlardagi bilim bo‘shliqlariga barham berish',
  ],
}

export const maqolamed = {
  id: 'maqolamed',
  name: 'MaqolaMed',
  logo: '/assets/maqolamed.jpg',
  badge: 'Yangi mahsulot',
  title: 'Tibbiyotdagi eng muhim yangiliklar bir joyda',
  tagline: 'Tibbiyot doim yangilanadi. Bilimingiz ham shunday bo‘lishi kerak.',
  intro: [
    'Har kuni dunyo bo‘ylab minglab ilmiy maqolalar, klinik tadqiqotlar va yangi tavsiyalar e’lon qilinadi. Ularning barchasini kuzatib borish esa ko‘p vaqt talab qiladi.',
    'MaqolaMed — tibbiyotdagi eng muhim ilmiy yangiliklarni saralab, o‘zbek tilida, sodda va tushunarli shaklda taqdim etuvchi platforma.',
  ],
  // TODO: haqiqiy bot havolasini shu yerda almashtiring
  botHref: 'https://t.me/maqolamed_bot',
  botCta: 'Telegram botga o‘tish',
  why: {
    title: 'Nega aynan MaqolaMed?',
    subtitle: 'Minglab maqolalar orasidan eng muhimlari',
    paragraphs: [
      'Tibbiyot jadal rivojlanmoqda. Har kuni yangi davolash usullari, diagnostika imkoniyatlari va klinik tadqiqot natijalari paydo bo‘lmoqda.',
      'Biroq barcha ilmiy jurnallarni muntazam kuzatish, xorijiy maqolalarni o‘qish va eng muhim ma’lumotlarni ajratib olish har doim ham oson emas. MaqolaMed ushbu jarayonni soddalashtirish uchun yaratilgan.',
      'Bizning maqsadimiz — shifokorlar va tibbiyot talabalariga eng muhim ilmiy ma’lumotlarni qulay, tushunarli va o‘zbek tilida yetkazish.',
    ],
  },
  features: {
    title: 'MaqolaMed sizga nimalarni taqdim etadi?',
    items: [
      {
        icon: '📚',
        title: 'Ilmiy maqolalar',
        text: 'Tibbiyotning turli yo‘nalishlariga oid dolzarb ilmiy maqolalar. Muhim natijalar, klinik ahamiyatga ega xulosalar va amaliyot uchun foydali ma’lumotlar.',
      },
      {
        icon: '🧬',
        title: 'Yangi tadqiqotlar',
        text: 'Dunyoning yetakchi ilmiy markazlarida olib borilayotgan klinik tadqiqotlar, yangi davolash yondashuvlari va zamonaviy diagnostika usullari haqida ma’lumotlar.',
      },
      {
        icon: '📋',
        title: 'Xalqaro klinik qo‘llanmalar',
        text: 'Klinik amaliyot uchun muhim bo‘lgan xalqaro guideline va tavsiyalardagi yangiliklar. Diagnostika, davolash va profilaktikaga oid dolzarb yondashuvlar.',
      },
      {
        icon: '🌍',
        title: 'Dalillarga asoslangan tibbiyot',
        text: 'Ilmiy dalillar asosida klinik qaror qabul qilishga yordam beradigan ma’lumotlar. Tadqiqot natijalarini tushunish va ularning amaliy ahamiyatini baholash imkoniyati.',
      },
      {
        icon: '🇺🇿',
        title: 'O‘zbek tilidagi kontent',
        text: 'Xorijiy ilmiy manbalardagi murakkab ma’lumotlar o‘zbek tilida, asosiy mazmuni saqlangan holda, o‘qishga qulay shaklda taqdim etiladi.',
      },
      {
        icon: '⏱',
        title: 'Vaqtingizni tejang',
        text: 'O‘nlab ilmiy manbalarni alohida kuzatish o‘rniga, eng muhim yangiliklar bilan yagona platforma orqali tanishing.',
      },
    ],
  },
  how: {
    title: 'MaqolaMed qanday ishlaydi?',
    steps: [
      {
        title: 'Ilmiy manbalar o‘rganiladi',
        text: 'Tibbiyot sohasidagi xalqaro ilmiy maqolalar, tadqiqotlar va klinik tavsiyalar kuzatib boriladi.',
      },
      {
        title: 'Muhim ma’lumotlar saralanadi',
        text: 'Klinik ahamiyati yuqori, dolzarb va amaliyot uchun foydali mavzular tanlab olinadi.',
      },
      {
        title: 'O‘zbek tilida tayyorlanadi',
        text: 'Tanlangan ma’lumotlar tushunarli, tartibli va o‘qishga qulay maqola shakliga keltiriladi.',
      },
      {
        title: 'Sizga taqdim etiladi',
        text: 'Tayyor maqolalar MaqolaMed Telegram boti orqali o‘quvchilarga yetkaziladi.',
      },
    ],
  },
  audience: {
    title: 'MaqolaMed kimlar uchun?',
    items: [
      {
        title: 'Tibbiyot talabalari uchun',
        text: 'Darsliklardan tashqari zamonaviy ilmiy bilimlarni egallash, yangi tadqiqotlar bilan tanishish va klinik fikrlashni rivojlantirish uchun.',
      },
      {
        title: 'Shifokorlar uchun',
        text: 'Kundalik klinik amaliyotda ahamiyatli bo‘lgan yangi ilmiy dalillar, diagnostika va davolash yondashuvlaridan xabardor bo‘lish uchun.',
      },
      {
        title: 'Rezidentlar va klinik ordinatorlar uchun',
        text: 'Mutaxassislik bo‘yicha bilimlarni chuqurlashtirish, xalqaro klinik tavsiyalarni o‘rganish va ilmiy yangiliklarni kuzatish uchun.',
      },
      {
        title: 'Ilmiy tadqiqotchilar uchun',
        text: 'Dolzarb ilmiy yo‘nalishlar, yangi tadqiqot natijalari va xalqaro tibbiyotdagi o‘zgarishlar bilan tanishish uchun.',
      },
    ],
  },
  premium: {
    title: 'Premium — bilimlaringizga investitsiya',
    subtitle: 'Tibbiyotdagi eng muhim yangiliklarni o‘tkazib yubormang.',
    text: 'MaqolaMed Premium obunasi orqali platformaning kengaytirilgan imkoniyatlaridan foydalaning va ilmiy bilimlaringizni muntazam rivojlantirib boring.',
    items: [
      'Muhim ilmiy maqolalar',
      'Yangi klinik tadqiqotlar',
      'Xalqaro guideline yangiliklari',
      'O‘zbek tilida o‘qishga qulay kontent',
      'Bilimlarni doimiy yangilab borish imkoniyati',
    ],
    cta: 'Premium obunani tanlash',
  },
  faq: {
    title: 'Tez-tez beriladigan savollar',
    items: [
      {
        q: 'MaqolaMed nima?',
        a: 'MaqolaMed — tibbiyotdagi muhim ilmiy maqolalar, klinik tadqiqotlar va xalqaro tavsiyalarni o‘zbek tilida taqdim etuvchi platforma.',
      },
      {
        q: 'Maqolalar qaysi tilda taqdim etiladi?',
        a: 'Asosiy kontent o‘zbek tilida, tibbiy terminologiya va ilmiy mazmun saqlangan holda tayyorlanadi.',
      },
      {
        q: 'MaqolaMed kimlar uchun mo‘ljallangan?',
        a: 'Tibbiyot talabalari, amaliyotchi shifokorlar, rezidentlar, ilmiy tadqiqotchilar va zamonaviy tibbiyotga qiziquvchilar uchun.',
      },
      {
        q: 'Platformadan qanday foydalanish mumkin?',
        a: 'Telegram orqali MaqolaMed botiga kirib, mavjud maqolalar va obuna imkoniyatlari bilan tanishishingiz mumkin.',
      },
      {
        q: 'MaqolaMed klinik qaror qabul qilishda yordam beradimi?',
        a: 'Platforma ilmiy bilimlarni yangilashga xizmat qiladi. Undagi materiallar mustaqil klinik qaror yoki bemorga individual davolash tavsiyasi o‘rnini bosmaydi.',
      },
    ],
  },
  final: {
    title: 'Tibbiyot rivojlanmoqda. Siz ham rivojlaning!',
    text: 'Ilmiy yangiliklarni kuzatish uchun soatlab vaqt sarflash shart emas. MaqolaMed bilan zamonaviy tibbiyotdagi muhim o‘zgarishlardan xabardor bo‘ling, bilimingizni muntazam oshiring va dalillarga asoslangan tibbiyotga bir qadam yaqinlashing.',
    motto: 'MaqolaMed — ilm-fan va amaliyot o‘rtasidagi ko‘prik.',
    cta: 'MaqolaMed’ga qo‘shilish',
  },
}

export const tibnoma = {
  id: 'tibnoma',
  name: 'TIBNOMA',
  logo: '/assets/tibnoma.jpg',
  badge: 'iMed Team MCHJ loyihasi',
  title: 'Tibbiyot olamida yangi sahifa!',
  tagline: 'Tibbiy bilim sari navbatdagi qadamingizni biz bilan boshlang!',
  intro: [
    'TIBNOMA — iMed Team MCHJ tomonidan tashkil etilgan, tibbiy adabiyotlarni targ‘ib qilish, sifatli kitoblarni ommalashtirish va tibbiy mutolaa madaniyatini rivojlantirishga qaratilgan loyiha.',
    'Platforma orqali tibbiyot talabalari, shifokorlar, rezidentlar va ilmiy izlanish olib borayotgan mutaxassislar o‘zbek, rus va ingliz tillaridagi foydali tibbiy adabiyotlar bilan tanishishlari hamda kerakli kitoblarni buyurtma asosida xarid qilishlari mumkin.',
  ],
  // TODO: haqiqiy havolalarni shu yerda almashtiring
  telegramHref: 'https://t.me/tibnoma',
  instagramHref: 'https://instagram.com/tibnoma',
  booksCta: 'Kitoblar bilan tanishish',
  telegramCta: 'Telegram kanalga o‘tish',
  about: {
    title: 'TIBNOMA haqida',
    subtitle: 'Har bir yaxshi shifokorning ortida yuzlab o‘qilgan kitoblar turadi.',
    paragraphs: [
      'Tibbiyot — doimiy izlanish, o‘rganish va bilimlarni yangilab borishni talab qiladigan soha. Sifatli tibbiy adabiyotlar esa bu jarayonning ajralmas qismidir.',
      'Bugungi kunda tibbiyotga oid minglab darsliklar, qo‘llanmalar va ilmiy nashrlar mavjud. Ammo ular orasidan ishonchli, tushunarli va amaliyot uchun foydali kitoblarni tanlash har doim ham oson emas.',
      'TIBNOMA aynan shu ehtiyojdan kelib chiqib yaratilgan.',
      'Bizning maqsadimiz — tibbiyot ahlini sifatli adabiyotlar bilan tanishtirish, kitob tanlash jarayonini osonlashtirish va tibbiy mutolaani kundalik kasbiy rivojlanishning muhim qismiga aylantirish.',
    ],
  },
  offers: {
    title: 'TIBNOMA sizga nimalarni taklif etadi?',
    items: [
      {
        icon: '📚',
        title: 'Tibbiy kitoblar tavsiyalari',
        text: 'Tibbiyotning fundamental, preklinik va klinik yo‘nalishlariga oid foydali darsliklar, qo‘llanmalar va ilmiy adabiyotlar tavsiyalari.',
      },
      {
        icon: '📖',
        title: 'iMed Team mualliflik adabiyotlari',
        text: 'iMed Team tomonidan tayyorlangan tibbiy darsliklar va o‘quv qo‘llanmalar. Murakkab tibbiy mavzularni sodda, tizimli va tushunarli shaklda o‘rganishga yordam beruvchi adabiyotlar.',
      },
      {
        icon: '🔎',
        title: 'Kitob sharhlari',
        text: 'Tibbiy kitoblarning mazmuni, asosiy afzalliklari, qamrab olgan mavzulari va kimlar uchun foydali ekanligi haqida sharhlar.',
      },
      {
        icon: '🌐',
        title: 'Uch tildagi tibbiy adabiyotlar',
        text: 'O‘zbek, rus va ingliz tillaridagi tibbiy kitoblar bilan tanishish imkoniyati. Mahalliy va xalqaro adabiyotlar orqali bilim doirangizni kengaytiring.',
      },
      {
        icon: '🛒',
        title: 'Buyurtma asosida xarid qilish',
        text: 'O‘zingizga kerakli tibbiy kitoblarni tanlang va mavjud buyurtma imkoniyatlari orqali xarid qiling.',
      },
    ],
  },
  why: {
    title: 'Nega aynan TIBNOMA?',
    items: [
      {
        title: 'Sifatli adabiyotlar tanlovi',
        text: 'Tibbiy ta’lim va kasbiy rivojlanish uchun foydali kitoblarga e’tibor qaratiladi.',
      },
      {
        title: 'Kitob tanlashda qulaylik',
        text: 'Sharhlar va tavsiyalar orqali o‘zingizga mos adabiyotlarni osonroq topishingiz mumkin.',
      },
      {
        title: 'Mahalliy va xalqaro adabiyotlar',
        text: 'O‘zbek, rus va ingliz tillaridagi kitoblar bilan bir platforma orqali tanishing.',
      },
      {
        title: 'Ta’lim va amaliyot uyg‘unligi',
        text: 'Tibbiyot talabalari uchun fundamental bilimlardan tortib, amaliyotchi shifokorlar uchun klinik qo‘llanmalargacha bo‘lgan adabiyotlar.',
      },
    ],
  },
  audience: {
    title: 'TIBNOMA kimlar uchun?',
    items: [
      {
        title: 'Tibbiyot talabalari uchun',
        text: 'Fundamental fanlarni puxta o‘zlashtirish, imtihonlarga tayyorlanish va klinik bilimlarni shakllantirish uchun.',
      },
      {
        title: 'Shifokorlar uchun',
        text: 'Mutaxassislik bo‘yicha bilimlarni yangilash, klinik tafakkurni rivojlantirish va kasbiy malakani oshirish uchun.',
      },
      {
        title: 'Rezidentlar va klinik ordinatorlar uchun',
        text: 'Tanlangan mutaxassislikni chuqur o‘rganish va zamonaviy tibbiy adabiyotlardan foydalanish uchun.',
      },
      {
        title: 'Tibbiyot o‘qituvchilari va tadqiqotchilar uchun',
        text: 'Ta’lim, ilmiy faoliyat va mustaqil izlanishlarda foydalaniladigan adabiyotlarni topish uchun.',
      },
    ],
  },
  order: {
    title: 'Kitobni qanday buyurtma qilish mumkin?',
    steps: [
      {
        title: 'Kitob tanlang',
        text: 'TIBNOMA sahifalarida taqdim etilgan tibbiy adabiyotlar va ularning sharhlari bilan tanishing.',
      },
      {
        title: 'Buyurtma uchun murojaat qiling',
        text: 'O‘zingizga kerakli kitob bo‘yicha Telegram yoki Instagram orqali bog‘laning.',
      },
      {
        title: 'Buyurtmani kelishib oling',
        text: 'Kitobning mavjudligi, narxi, to‘lov va yetkazib berish shartlarini aniqlashtiring.',
      },
      {
        title: 'Bilim sari yangi qadam qo‘ying',
        text: 'Tanlagan adabiyotingiz yordamida tibbiy bilimlaringizni yanada rivojlantiring.',
      },
    ],
  },
  final: {
    title: 'Bilimga kiritilgan eng yaxshi investitsiya — kitob!',
    text: 'Tibbiyotda mukammallikka erishish doimiy mutolaa va izlanishdan boshlanadi. TIBNOMA bilan sifatli tibbiy adabiyotlarni kashf eting, yangi kitoblar haqida ma’lumot oling va o‘z kasbiy rivojlanishingiz uchun muhim manbalarni toping.',
    motto: 'TIBNOMA — tibbiy bilim va kitobxonlikni birlashtiruvchi loyiha.',
    telegramCta: 'Telegram kanalga obuna bo‘lish',
    instagramCta: 'Instagram sahifasiga o‘tish',
    note: 'TIBNOMA — iMed Team MCHJ loyihasi.',
  },
}

export const tibmentor = {
  id: 'tibmentor',
  name: 'TibMentor',
  logo: '/assets/tibmentor.png',
  badge: 'Yangilangan platforma',
  title: 'Tibbiyotni video, audio va testlar orqali o‘rganing',
  tagline: 'Tibbiyot talabalari va shifokorlar uchun onlayn ta’lim platformasi.',
  intro: [
    'TibMentor — video darslar, o‘quv materiallari, audio darslar va ilova ichidagi testlarni bir joyga jamlagan tibbiy ta’lim platformasi. Web-sayt va mobil ilova orqali istalgan vaqtda o‘rganing.',
    'Fundamental, preklinik va klinik fanlar bo‘yicha kurslar, har bir mavzu uchun testlar, reyting va shaxsiy kabinet — hammasi bitta joyda.',
  ],
  // TODO: kerak bo‘lsa haqiqiy havolani almashtiring
  siteHref: 'https://tibmentor.uz',
  siteCta: 'Platformaga kirish',
  appHint: 'Mobil ilovani telefoningizga yuklab oling',
  ios: {
    label: 'App Store',
    hint: 'Download on',
    href: 'https://apps.apple.com/uz/app/imed-team/id6745555493',
  },
  android: {
    label: 'Android',
    hint: 'Yuklab olish',
    href: 'https://minio.imedteam.uz/imed/imedteam_3.0.0_17.apk',
  },
  features: {
    title: 'TibMentor imkoniyatlari',
    items: [
      {
        icon: '🎬',
        title: 'Video darslar',
        text: 'Ustoz shifokorlar tomonidan tayyorlangan, modullarga bo‘lingan tizimli video darslar.',
      },
      {
        icon: '🎧',
        title: 'Audio darslar',
        text: 'Yo‘lda yoki bo‘sh vaqtingizda mavzularni tinglab o‘rganing.',
      },
      {
        icon: '📄',
        title: 'Hujjat va materiallar',
        text: 'Har bir dars uchun qo‘shimcha o‘quv materiallari va konspektlar.',
      },
      {
        icon: '✅',
        title: 'Ilova ichidagi testlar',
        text: 'Mavzuni o‘rgangach, testni to‘g‘ridan-to‘g‘ri ilovaning o‘zida ishlang. Javob tanlangan zahoti to‘g‘ri variant yashil, xato variant qizil bo‘ladi.',
      },
      {
        icon: '📊',
        title: 'Natija va qayta urinish',
        text: 'Test yakunida natija foizda ko‘rsatiladi. Keyingi mavzuga o‘tishingiz yoki testni qayta ishlashingiz mumkin.',
      },
      {
        icon: '🏆',
        title: 'Reyting',
        text: 'O‘qish vaqti va test natijalari bo‘yicha alohida reytinglar. O‘z o‘rningizni doim ko‘rib turasiz.',
      },
    ],
  },
  premium: {
    title: 'Fan bo‘yicha Premium',
    subtitle: 'Faqat kerakli fanni oching.',
    text: 'Premium fanlar bo‘yicha oylik obuna asosida beriladi. Tanlangan fan Premiumi shu fanning barcha kurslarini ochadi. To‘lov Click orqali amalga oshiriladi, obuna muddati profilingizda ko‘rinib turadi.',
    items: [
      'Fundamental fanlar',
      'Preklinik fanlar',
      'Klinik fanlar',
      'Oylik to‘lov — Click orqali',
      'Promokod orqali chegirma imkoniyati',
    ],
  },
  how: {
    title: 'Qanday ishlaydi?',
    steps: [
      {
        title: 'Ro‘yxatdan o‘ting',
        text: 'Web-sayt yoki mobil ilova orqali hisob yarating.',
      },
      {
        title: 'Kursni tanlang',
        text: 'Fundamental, preklinik yoki klinik fanlar ichidan kerakli kursni toping.',
      },
      {
        title: 'O‘rganing va test ishlang',
        text: 'Video, audio va materiallar bilan o‘rganing, so‘ng mavzu testini ilovaning o‘zida ishlang.',
      },
      {
        title: 'Rivojlaning',
        text: 'Reytingda o‘z o‘rningizni kuzating, kunlik o‘qishni davom ettiring.',
      },
    ],
  },
  extra: {
    title: 'Foydalanuvchi uchun qulayliklar',
    items: [
      'Bo‘sh bo‘limlar yo‘q: darsda faqat joylangan kontent turi ko‘rinadi',
      'Profilda Premium holati va test natijalari tarixi',
      'Dars qilmagan kunlarda yumshoq eslatma (push-xabarnoma)',
      'Yangi materiallar haqida ustozlar yuboradigan xabarnomalar',
      '“Ustoz” belgisi: kontent yaratuvchi ustozlar uchun barcha kurslar ochiq',
      'Web-sayt va mobil ilova (iOS va Android)',
    ],
  },
  final: {
    title: 'Bilimingizni bugundan boshlab mustahkamlang',
    text: 'TibMentor bilan tibbiyotni tez, oson va sifatli o‘rganing.',
  },
}

export const products = {
  id: 'products',
  title: 'Loyihalarimiz',
  subtitle:
    'iMed Team MCHJ qoshida tibbiyot talabalari va shifokorlar uchun bir nechta mustaqil loyiha faoliyat yuritadi.',
  items: [
    {
      name: 'TibMentor',
      logo: tibmentor.logo,
      logoShape: 'square' as const,
      status: 'Yangilanmoqda',
      statusTone: 'soon' as const,
      description:
        'Tibbiy ta’lim platformasi: video va audio darslar, fan bo‘yicha Premium, ilova ichidagi testlar, reyting va ustoz unvoni. Web va mobil ilova.',
      href: '/tibmentor',
      cta: 'Batafsil ma’lumot',
      links: [{ label: 'Website', href: tibmentor.siteHref }],
    },
    {
      name: 'MaqolaMed',
      logo: maqolamed.logo,
      logoShape: 'square' as const,
      status: 'Ishlamoqda',
      statusTone: 'live' as const,
      description:
        'Tibbiyotdagi eng muhim ilmiy maqolalar, yangi tadqiqotlar va xalqaro klinik qo‘llanmalar — o‘zbek tilida, sodda va tushunarli shaklda.',
      href: '/maqolamed',
      cta: 'Batafsil ma’lumot',
      links: [{ label: 'Telegram bot', href: maqolamed.botHref }],
    },
    {
      name: 'TIBNOMA',
      logo: tibnoma.logo,
      logoShape: 'circle' as const,
      status: 'Ishlamoqda',
      statusTone: 'live' as const,
      description:
        'Tibbiy adabiyotlarni targ‘ib qilish, kitob sharhlari va buyurtma asosida xarid qilish loyihasi. O‘zbek, rus va ingliz tillaridagi kitoblar.',
      href: '/tibnoma',
      cta: 'Batafsil ma’lumot',
      links: [
        { label: 'Telegram kanal', href: tibnoma.telegramHref },
        { label: 'Instagram', href: tibnoma.instagramHref },
      ],
    },
  ],
}

export const courses = {
  id: 'courses',
  title: 'Kurs yo‘nalishlari',
  subtitle: 'Klinik, Fundamental va Preklinik fanlar bo‘yicha modullar.',
  groups: [
    {
      title: 'Fundamental fanlar',
      items: [
        'Anatomiya — 4 oy',
        'Gistologiya va hujayra biologiyasi — 2 oy',
        'Biokimyo — 2 oy',
        'Fiziologiya — 3 oy',
        'Fundamental farmakologiya — 1,5 oy',
      ],
    },
    {
      title: 'Preklinik fanlar',
      items: [
        'Umumiy patologiya — 1 oy',
        'Klinik farmakologiya — 1,5 oy',
        'Gematologiya — 1,5 oy',
      ],
    },
    {
      title: 'Klinik fanlar',
      items: [
        'Gastroenterologiya — 1 oy',
        'Pulmonologiya — 1 oy',
        'Nefrologiya — 1 oy',
        'Revmatologiya — 1 oy',
        'EKG — 1,5 oy',
        'Kardiologiya — 2 oy',
        'Pediatriya — 3 oy',
        'Neonatologiya — 2 oy',
        'Nevrologiya — 3 oy',
        'Akusherlik va ginekologiya — 2 oy',
        'Endokrinologiya — 3 oy',
        'Diabet maktabi — 1 oy',
        'Shoshilinch tez tibbiy yordam — 2 oy',
        'Klinik laboratoriya va diagnostika — 1 oy',
        'Otorinolaringologiya (LOR) — 3 oy',
        'Urologiya — 3 oy',
        'Mammologiya — 1 oy',
        'Ultrasonografiya (UTT) — 2 oy',
        'Ko‘krak qafasi radiologiyasi — 1 oy',
        'Neyroradiologiya — 1 oy',
        'Elektroensefalografiya (EEG) — 1 oy',
      ],
    },
  ],
}

export const extras = {
  feedback: {
    title: 'Feedback',
    text: 'Minglab talaba va shifokorlarning samimiy fikrlari bilan Telegram kanalimizda tanishing.',
    cta: 'Fikrlarni o‘qish',
    href: 'https://t.me/imedteam_feedback',
  },
  books: {
    title: 'Mualliflik kitoblarimiz',
    items: [
      'Medical English',
      'Gematologiya',
      'Antibiotiklar farmakologiyasi',
      'Kardiologiya',
      'Qon-tomir patologiyasi',
    ],
    cta: 'Buyurtma berish',
    href: 'https://t.me/manager_iMedteam',
  },
}

export const team = {
  id: 'team',
  title: '“iMed Team” jamoasi',
  subtitle:
    'Bizda shifokorlik va ustozlik mahoratiga ega, yetarli tajribali TOP ustoz shifokorlar dars o‘tishadi.',
  visibleCount: 6,
  members: [
    {
      name: 'Himmatulloh Rahmatov',
      role: 'Asoschi',
      desc: '“iMed Team” platformasi asoschisi. Farg‘ona shahar Bolalar shifoxonasi. 3 yillik tajribaga ega pediatr. “iMed Team” da pediatriya fani bo‘yicha ma’ruzachi.',
      img: '/assets/himmatulloh.png',
    },
    {
      name: 'Ulug‘bek Mahmudov',
      role: 'Ma’ruzachi',
      desc: 'Farg‘ona tibbiyot instituti, endokrinologiya kafedrasi assistenti va tayanch doktoranti. Toshkent shahar endokrinologiya markazida onlayn diabet maktabi mudiri.',
      img: '/assets/ulugbekmahmudov.jpg',
    },
    {
      name: 'Bekjon Sattarov',
      role: 'Ma’ruzachi',
      desc: 'TTA radiologiya kafedrasi assistenti. 5 yillik ish tajribasi. Hozirda Janubiy Koreyaning Yonsei Cancer Centerida amaliyotda.',
      img: '/assets/bekjonsattarov.jpg',
    },
    {
      name: 'Mirzahamid Mirzalatipov',
      role: 'Ma’ruzachi',
      desc: 'Farg‘ona shahar “Bolajon” klinikasi LOR jarroh shifokori. 4 yillik tajriba. “iMed Team” da LOR fani ma’ruzachisi.',
      img: '/assets/mirzahamidmirzapolatov.jpg',
    },
    {
      name: 'Doniyor Yakubov',
      role: 'Ma’ruzachi',
      desc: 'FJSTI gospital xirurgiya kafedrasi assistenti. “MDM clinic” urolog shifokori. 4 yillik ish tajriba. “iMed Team” da urologiya fani ma’ruzachisi.',
      img: '/assets/doniyoryakubov.jpg',
    },
    {
      name: 'Rasuljon Xolmatov',
      role: 'Ma’ruzachi',
      desc: 'ADTI klinikasi nevrologiya bo‘limi. ADTI Nevrologiya kafedrasi assistenti va tayanch doktoranti. Ish tajribasi 8 yil.',
      img: '/assets/rasuljonxolmatov.jpg',
    },
    {
      name: 'Zohidjon Zaylobiddinov',
      role: 'IT mutaxassisi',
      desc: 'Toshkent Davlat Tibbiyot Universiteti bakalavr talabasi. 1 yildan buyon iMed Team jamoasida mobil ilova, website qurish va ishini tashkillashtirishni boshqarib keladi.',
      img: '/assets/zohidjon.jpg',
    },
    {
      name: 'Mahliyo Rashidova',
      role: 'Ma’ruzachi',
      desc: 'Tibbiy radiolog, uzist. 8 yillik ish tajribasi. ADTI Tibbiy radiologiya kafedrasi assistenti va doktoranti. “iMed Team” platformasi UTT va radiologik kurslar ma’ruzachisi.',
      img: '/assets/mahliyorashidova.jpg',
    },
    {
      name: 'Muhammadqodir Arabboyev',
      role: 'Ma’ruzachi',
      desc: '“iMed Team” platformasi urologiya kursi o‘qituvchisi. Central Asian Medical University urologiya yo‘nalishi magistranti.',
      img: '/assets/muhammadqodirarabboyev.jpg',
    },
    {
      name: 'Nilufar Mamadaliyeva',
      role: 'Ma’ruzachi',
      desc: '“iMed Team” fiziologiya kursi o‘qituvchisi. FJSTI bitiruvchi kurs talabasi.',
      img: '/assets/nilufarmamadaliyeva.png',
    },
    {
      name: 'Rahmonqul Namozov',
      role: 'Ma’ruzachi',
      desc: 'Surxondaryo viloyat Ko‘p tarmoqli tibbiyot markazi Nefrologiya-Gemodializ bo‘limi. “iMed Team” platformasi nefrologiya kursi lektori.',
      img: '/assets/rahmonqulnomozov.jpg',
    },
    {
      name: 'Sardorbek Mamurov',
      role: 'Ma’ruzachi',
      desc: 'Namangan viloyati “Mamura Shifo” klinikasi revmatologi. Medical English kitobi va patologiya darsliklari muallifi.',
      img: '/assets/sardorbekmamurov.JPG',
    },
    {
      name: 'Ulugbek Zaylobidinov',
      role: 'Ma’ruzachi',
      desc: '“iMed Team” jamoasi a’zosi va tajribali mutaxassis shifokor.',
      img: '/assets/ulugbekzaylobidinov.png',
    },
    {
      name: 'Hikmatillayev Diyorbek',
      role: 'Ma’ruzachi',
      desc: '“iMed Team” platformasi anatomiya fani o‘qituvchisi. Farmed klinikasi navbatchi travmatolog-ortopedi.',
      img: '/assets/umarbekhikmatillayev.jpg',
    },
    {
      name: 'Yuldosheva Mohichehra',
      role: 'Ma’ruzachi',
      desc: '“iMed Team” platformasi pediatriya kursi o‘qituvchisi.',
      img: '/assets/yuldoshevamohichehra.jpg',
    },
    {
      name: 'Behzod Madaminov',
      role: 'Ma’ruzachi',
      desc: 'O‘quv bo‘limi product manageri. Preklinik patologiya, biokimyo, fiziologiya, nevrologiya fanlari va gematologiya, kardiologiya kitoblari muallifi. Germaniyada neyrojarrohlik bo‘yicha o‘qimoqda.',
      img: '/assets/behzodmadaminov.jpg',
    },
    {
      name: 'Elyor Fayzullayev',
      role: 'Ma’ruzachi',
      desc: 'Kardiolog shifokor. Tez tibbiy yordam shifokori. Tez tibbiy yordam va klinik laborator diagnostika fanlari lektori.',
      img: '/assets/elyorfayzulla.png',
    },
  ],
}

export const contact = {
  id: 'contact',
  badge: 'Aloqa',
  title: 'Savollaringiz bormi?',
  titleAccent: 'Biz sizga yordam beramiz!',
  subtitle: 'Jamoamiz sizni qiziqtirgan barcha savollarga javob berishga tayyor.',
  items: [
    { icon: '📍', label: 'Manzil', value: "Farg'ona shahar" },
    { icon: '📞', label: 'Telefon', value: '+998 55 055 13 14' },
    { icon: '✉️', label: 'Email', value: 'imedteam1@gmail.com' },
    { icon: '🕒', label: 'Ish vaqti', value: 'Du–Shan 10:00–18:00' },
  ],
  telegramTitle: 'Telegram orqali bog‘lanish',
  telegramText:
    'Eng tezkor javobni rasmiy Telegram botimiz yoki adminimiz orqali olishingiz mumkin.',
  telegramCta: '@iMed_team',
  telegramHref: 'https://t.me/iMed_team',
  channelLabel: 'Rasmiy kanal:',
}

export const socials = [
  { name: 'Instagram', url: 'https://instagram.com/imed_team' },
  { name: 'YouTube', url: 'http://www.youtube.com/@imedteam' },
  { name: 'Telegram', url: 'https://t.me/imedteam' },
]

export const footer = {
  blurb: 'O‘zbekiston tibbiyotini yangi darajaga olib chiqish — bizning eng ustuvor vazifamiz!',
  socialsTitle: 'Ijtimoiy tarmoqlar',
  copyright: 'iMed Team MCHJ. Barcha huquqlar himoyalangan.',
}
