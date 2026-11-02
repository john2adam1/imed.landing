/**
 * Landing matnlari — ertaga yangi ma’lumot kelsa faqat shu faylni tahrirlang.
 * Komponentlar shu obyektdan o‘qiydi.
 */

export const site = {
  name: 'iMed Team',
  tagline: 'Professional',
  title: 'iMed Team — tibbiy ta’lim platformasi',
  description:
    'O‘zbekiston tibbiyot talabalari va shifokorlari uchun onlayn ta’lim. iMed, TibMentor va boshqa mahsulotlar.',
  logo: '/assets/logo.png',
  heroImage: '/assets/masterklass.jpg',
}

export const nav = [
  { label: 'Bosh sahifa', href: '#home' },
  { label: 'Haqida', href: '#about' },
  { label: 'Mahsulotlar', href: '#products' },
  { label: 'Kurslar', href: '#courses' },
  { label: 'Jamoa', href: '#team' },
  { label: 'Aloqa', href: '#contact' },
]

export const hero = {
  badge: 'iMed Team — Tibbiyot Olami!',
  titleBefore: 'Tibbiyotni biz bilan',
  titleAccent: 'Tez, oson va sifatli',
  titleAfter: 'o‘rganing!',
  subtitle:
    'Kompaniyamiz tibbiy ta’lim platformalari, kurslar va mualliflik materiallarini bir joyda rivojlantiradi.',
  primaryCta: { label: 'iMed platformasi', href: 'https://imedteam.uz' },
  appHint: 'Yoki mobil ilovani telefoningizga yuklab oling',
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
}

export const about = {
  id: 'about',
  title: 'iMed Team haqida',
  paragraphs: [
    '“iMed Team” tibbiy platformasi 2021-yildan buyon o‘z faoliyatini olib bormoqda. Shu kungacha biz 10 000 dan ziyod talaba va shifokorlarni o‘qitib keldik. Bizda o‘z ustida ishlaydigan shifokor va talabalar doimo yangi bilimlar olib kelishmoqda. Bitiruvchilarimiz turli davlat va xususiy shifoxonalarda malakali mutaxassis bo‘lib ishlab kelishmoqda.',
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

export const products = {
  id: 'products',
  title: 'Mahsulotlarimiz',
  subtitle:
    'Bitta jamoa — bir nechta tibbiy ta’lim mahsuloti. Ertaga yangi loyiha qo‘shilsa, shu ro‘yxatga yozamiz.',
  items: [
    {
      name: 'iMed',
      status: 'Ishlamoqda',
      statusTone: 'live' as const,
      description:
        'Talaba va shifokorlar uchun asosiy ta’lim platformasi: kurslar, videolar, hujjatlar, reyting va kabinet. Web va mobil ilova.',
      href: 'https://imedteam.uz',
      cta: 'Platformaga o‘tish',
    },
    {
      name: 'TibMentor',
      status: 'Yangilanmoqda',
      statusTone: 'soon' as const,
      description:
        'Tibbiy ta’limning yangi versiyasi: Premium paketlar (Fundamental, Preklinik, Klinik), ilova ichidagi testlar, audio darslar va ustoz unvoni.',
      href: '#contact',
      cta: 'Tez orada',
    },
    {
      name: 'MaqolaMed',
      status: 'Tayyorlanmoqda',
      statusTone: 'soon' as const,
      description:
        'Tibbiy ta’lim jamoasining yangi mahsuloti. Batafsil ma’lumot va havola tez orada e’lon qilinadi.',
      href: '#contact',
      cta: 'Ma’lumot kutilmoqda',
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
  copyright: 'iMed Team. Barcha huquqlar himoyalangan.',
}
