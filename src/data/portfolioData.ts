export type ViewId = 'home' | 'about' | 'skills' | 'projects' | 'journey' | 'contact';

export type TechKey =
  | 'react'
  | 'nextjs'
  | 'supabase'
  | 'postgres'
  | 'kotlin'
  | 'python'
  | 'javascript'
  | 'typescript'
  | 'php'
  | 'java'
  | 'c'
  | 'tailwind'
  | 'vite'
  | 'html5'
  | 'css3'
  | 'nodejs'
  | 'mysql'
  | 'sqlserver'
  | 'github'
  | 'vercel'
  | 'telegram'
  | 'electron'
  | 'vscode'
  | 'intellij'
  | 'android';

export const IMAGES = {
  portrait: '/assets/aistudio/photo_2026-11-26_17-40-32_0b38a4f0.jpg',
  mobistockDashboard: '/assets/aistudio/Screenshot_2026-11-26_174337_3490a98d.png',
  mobistockInventory: '/assets/aistudio/Screenshot_2026-11-26_174352_0f5c4fe9.png',
  mobistockMobile: '/assets/aistudio/Screenshot_2026-11-26_174516_11f0ee88.png',
  mobistockInventoryMobile: '/assets/aistudio/Screenshot_2026-11-26_174534_23cbbe2c.png',
  mobistockPos: '/assets/aistudio/Screenshot_2026-11-26_174405_79b63349.png',
  mobistockPosMobile: '/assets/aistudio/Screenshot_2026-11-26_174552_a7fd7ef3.png',
  mobistockAnalytics: '/assets/aistudio/Screenshot_2026-11-26_174420_bc930b3d.png',
  mobistockAnalyticsMobile: '/assets/aistudio/Screenshot_2026-11-26_174616_0249f5c4.png',
  gamezoneDesktop: '/assets/aistudio/Screenshot_2026-11-26_180458_939834e4.png',
  gamezoneGames: '/assets/aistudio/Screenshot_2026-11-26_180511_fd2ab6e3.png',
  gamezoneSessions: '/assets/aistudio/Screenshot_2026-11-26_180531_caf048df.png',
  gamezoneEarnings: '/assets/aistudio/Screenshot_2026-11-26_180550_69b8f264.png',
  gamezoneSubscription: '/assets/aistudio/Screenshot_2026-11-26_180650_1efd0a10.png',
  gamezoneMobile: '/assets/aistudio/Screenshot_2026-11-26_180900_763ae070.png',
  gamezoneGamesMobile: '/assets/aistudio/Screenshot_2026-11-26_181009_5f8a410d.png',
  gamezoneSessionsMobile: '/assets/aistudio/Screenshot_2026-11-26_181021_7787fb4f.png',
  gamezoneEarningsMobile: '/assets/aistudio/Screenshot_2026-11-26_181037_301200fa.png',
  gamezoneSubscriptionMobile: '/assets/aistudio/Screenshot_2026-11-26_181055_4c6d6f17.png',
  dillaHome: '/assets/aistudio/Screenshot_2026-11-26_181253_256e669d.png',
  dillaDesktop: '/assets/aistudio/Screenshot_2026-11-26_181320_8ecd1822.png',
  dillaStudent: '/assets/aistudio/Screenshot_2026-11-26_181342_b2f31dad.png',
  dillaShowcase: '/assets/aistudio/Screenshot_2026-11-26_181412_839a2e28.png',
  dillaHomeMobile: '/assets/aistudio/Screenshot_2026-11-26_181513_721fdd58.png',
  dillaMobile: '/assets/aistudio/Screenshot_2026-11-26_181539_fdec0276.png',
  dillaStudentMobile: '/assets/aistudio/Screenshot_2026-11-26_181604_a5a954d7.png',
  dillaShowcaseMobile: '/assets/aistudio/Screenshot_2026-11-26_181618_df16258c.png',
  ggmDesktop: '/assets/aistudio/Screenshot_2026-11-27_104550_e7d98c08.png',
  ggmCustomerHome: '/assets/aistudio/Screenshot_2026-11-27_104613_1f5ec298.png',
  ggmCustomerOrders: '/assets/aistudio/Screenshot_2026-11-27_104633_3a9289e3.png',
  ggmSellerOverview: '/assets/aistudio/Screenshot_2026-11-27_104655_ba91fd8d.png',
  ggmSellerOrders: '/assets/aistudio/Screenshot_2026-11-27_104710_c46ca759.png',
  ggmAdminOverview: '/assets/aistudio/Screenshot_2026-11-27_104323_a623d1e6.png',
  ggmAdminSellers: '/assets/aistudio/Screenshot_2026-11-27_104526_89b12984.png',
  ggmAdminUsers: '/assets/aistudio/Screenshot_2026-11-27_104434_1f93265f.png',
  ggmMobile: '/assets/aistudio/Screenshot_2026-11-27_104806_afbea431.png',
  ggmCustomerHomeMobile: '/assets/aistudio/Screenshot_2026-11-27_104950_dd14cbac.png',
  ggmCustomerOrdersMobile: '/assets/aistudio/Screenshot_2026-11-27_105003_32f6c22e.png',
  ggmSellerOverviewMobile: '/assets/aistudio/Screenshot_2026-11-27_105028_cfd23edd.png',
  ggmSellerOrdersMobile: '/assets/aistudio/Screenshot_2026-11-27_105042_609248f3.png',
  ggmAdminOverviewMobile: '/assets/aistudio/Screenshot_2026-11-27_104832_a1099859.png',
  ggmAdminSellersMobile: '/assets/aistudio/Screenshot_2026-11-27_104911_fe7bd3c9.png',
  ggmAdminUsersMobile: '/assets/aistudio/Screenshot_2026-11-27_104843_bf4aeb17.png',
  moviebotDesktop: '/assets/aistudio/Screenshot_2026-11-27_105508_88ad7025_blurred.png',
  moviebotSeries: '/assets/aistudio/Screenshot_2026-11-27_105533_f93f7ff0_blurred.png',
  moviebotPayment: '/assets/aistudio/Screenshot_2026-11-27_105643_86fc4eb8_blurred.png',
  moviebotMobile: '/assets/aistudio/Screenshot_2026-11-27_105751_fc1fe54b.png',
  moviebotSeriesMobile: '/assets/aistudio/Screenshot_2026-11-27_105810_1f734a80.png',
  moviebotPaymentMobile: '/assets/aistudio/Screenshot_2026-11-27_105826_30555d96.png',
  gradecalcMobile: '/assets/aistudio/Screenshot_2026-11-27_110902_788e92b7.png',
  gradecalcSemester: '/assets/aistudio/Screenshot_2026-11-27_110921_1e5720b1.png',
  gradecalcTarget: '/assets/aistudio/Screenshot_2026-11-27_110938_a4a67b93.png',
  gradecalcSettings: '/assets/aistudio/Screenshot_2026-11-27_111014_cfc73c94.png',
  gradecalcNewSemester: '/assets/aistudio/Screenshot_2026-11-27_111032_d08467d2.png',
  gradecalcAddCourse: '/assets/aistudio/Screenshot_2026-11-27_111051_f390bcc7.png',
} as const;

export const HOME_CORE_TECH: TechKey[] = [
  'react',
  'nextjs',
  'supabase',
  'postgres',
  'kotlin',
  'python',
];

export const HOME_STATS = [
  { value: '6', label: 'Featured projects' },
  { value: '4', label: 'Live web products' },
  { value: '3', label: 'Platforms: web, Telegram, Android' },
  { value: '🇪🇹', label: 'Built for Ethiopia' },
];

export interface ShowcaseProduct {
  badge: string;
  name: string;
  url: string;
  desktopTag: string;
  desktopImg: string;
  desktopAlt: string;
  mobileImg: string;
  mobileAlt: string;
}

export const SHOWCASE_PRODUCTS: ShowcaseProduct[] = [
  {
    badge: 'FEATURED',
    name: 'MobiStock',
    url: 'https://mobistock-nine.vercel.app',
    desktopTag: 'Desktop · mobistock-nine.vercel.app',
    desktopImg: IMAGES.mobistockInventory,
    desktopAlt: 'MobiStock desktop interface',
    mobileImg: IMAGES.mobistockMobile,
    mobileAlt: 'MobiStock mobile interface',
  },
  {
    badge: 'SAAS · WEB & DESKTOP',
    name: 'GameZone Management System',
    url: 'https://gamezone-supabase.vercel.app',
    desktopTag: 'Desktop · gamezone-supabase.vercel.app',
    desktopImg: IMAGES.gamezoneDesktop,
    desktopAlt: 'GameZone desktop interface',
    mobileImg: IMAGES.gamezoneMobile,
    mobileAlt: 'GameZone mobile interface',
  },
  {
    badge: 'CAMPUS SYSTEM',
    name: 'Dilla University Incubation Center',
    url: 'https://dilla-incubation.vercel.app',
    desktopTag: 'Desktop · dilla-incubation.vercel.app',
    desktopImg: IMAGES.dillaDesktop,
    desktopAlt: 'Dilla University Incubation Center desktop interface',
    mobileImg: IMAGES.dillaMobile,
    mobileAlt: 'Dilla University Incubation Center mobile interface',
  },
];

export interface ProjectSlide {
  src: string;
  label: string;
}

export interface ProjectItem {
  id: 'mobistock' | 'ggm' | 'gamezone' | 'dilla' | 'moviebot' | 'gradecalc';
  tag: string;
  isFeatured?: boolean;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights?: string[];
  live?: string;
  source?: string;
  stack: TechKey[];
  slides: ProjectSlide[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'mobistock',
    tag: 'FEATURED',
    isFeatured: true,
    title: 'MobiStock',
    shortDesc:
      'Inventory & POS system for mobile phone and accessories shops with low-stock alerts and profit analytics.',
    fullDesc:
      'Inventory system for mobile phone and accessories shops with POS terminal and profit analytics.',
    highlights: [
      'Stock levels and low-stock alerts',
      'Point-of-sale terminal',
      'Orders history',
      'Sales analytics with revenue and profit',
    ],
    live: 'https://mobistock-nine.vercel.app',
    stack: ['react', 'typescript', 'supabase', 'postgres'],
    slides: [
      { src: IMAGES.mobistockDashboard, label: 'Desktop · Overview & Low-Stock Alerts' },
      { src: IMAGES.mobistockMobile, label: 'Mobile · Dashboard Overview' },
      { src: IMAGES.mobistockInventory, label: 'Desktop · Inventory Management' },
      { src: IMAGES.mobistockInventoryMobile, label: 'Mobile · Inventory Management' },
      { src: IMAGES.mobistockPos, label: 'Desktop · Point-of-Sale Terminal' },
      { src: IMAGES.mobistockPosMobile, label: 'Mobile · POS Terminal' },
      { src: IMAGES.mobistockAnalytics, label: 'Desktop · Revenue & Profit Analytics' },
      { src: IMAGES.mobistockAnalyticsMobile, label: 'Mobile · Sales Analytics' },
    ],
  },
  {
    id: 'ggm',
    tag: 'WEB',
    title: 'GGM (Google General Market)',
    shortDesc:
      'Marketplace with role-based access for Super Admins, Staff Admins and Customers.',
    fullDesc:
      'Marketplace with role-based access for Super Admins, Staff Admins and Customers.',
    live: 'http://ggm-platform.vercel.app',
    stack: ['react', 'javascript', 'supabase', 'postgres'],
    slides: [
      { src: IMAGES.ggmDesktop, label: 'Desktop · Marketplace Landing' },
      { src: IMAGES.ggmMobile, label: 'Mobile · Marketplace Landing' },
      { src: IMAGES.ggmCustomerHome, label: 'Desktop · Customer Discovery Feed' },
      { src: IMAGES.ggmCustomerHomeMobile, label: 'Mobile · Customer Discovery Feed' },
      { src: IMAGES.ggmCustomerOrders, label: 'Desktop · Customer Order Timeline' },
      { src: IMAGES.ggmCustomerOrdersMobile, label: 'Mobile · Customer Order Timeline' },
      { src: IMAGES.ggmSellerOverview, label: 'Desktop · Seller Dashboard & Revenue' },
      { src: IMAGES.ggmSellerOverviewMobile, label: 'Mobile · Seller Dashboard & Revenue' },
      { src: IMAGES.ggmSellerOrders, label: 'Desktop · Seller Order Fulfillment' },
      { src: IMAGES.ggmSellerOrdersMobile, label: 'Mobile · Seller Order Fulfillment' },
      { src: IMAGES.ggmAdminOverview, label: 'Desktop · Admin Platform Overview' },
      { src: IMAGES.ggmAdminOverviewMobile, label: 'Mobile · Admin Platform Overview' },
      { src: IMAGES.ggmAdminSellers, label: 'Desktop · Admin Seller Verification' },
      { src: IMAGES.ggmAdminSellersMobile, label: 'Mobile · Admin Seller Verification' },
      { src: IMAGES.ggmAdminUsers, label: 'Desktop · Admin User Management' },
      { src: IMAGES.ggmAdminUsersMobile, label: 'Mobile · Admin User Management' },
    ],
  },
  {
    id: 'gamezone',
    tag: 'SAAS',
    title: 'GameZone Management System',
    shortDesc:
      'Gaming center SaaS with session timers, ETB billing, owner reports, PWA & desktop installer.',
    fullDesc:
      'SaaS for gaming centers with session timers, ETB billing, owner reports, PWA and desktop installer, priced in Ethiopian Birr.',
    live: 'https://gamezone-supabase.vercel.app',
    source: 'https://github.com/NATIOPIA10/gamezone-supabase',
    stack: ['react', 'supabase', 'vercel', 'electron'],
    slides: [
      { src: IMAGES.gamezoneDesktop, label: 'Desktop · Owner Dashboard' },
      { src: IMAGES.gamezoneMobile, label: 'Mobile · Owner Dashboard' },
      { src: IMAGES.gamezoneGames, label: 'Desktop · Game Management & Pricing' },
      { src: IMAGES.gamezoneGamesMobile, label: 'Mobile · Game Management & Pricing' },
      { src: IMAGES.gamezoneSessions, label: 'Desktop · Live Session Timers' },
      { src: IMAGES.gamezoneSessionsMobile, label: 'Mobile · Live Session Timers' },
      { src: IMAGES.gamezoneEarnings, label: 'Desktop · Earnings & Reports' },
      { src: IMAGES.gamezoneEarningsMobile, label: 'Mobile · Earnings & Reports' },
      { src: IMAGES.gamezoneSubscription, label: 'Desktop · ETB SaaS Subscription Plans' },
      { src: IMAGES.gamezoneSubscriptionMobile, label: 'Mobile · ETB SaaS Subscription Plans' },
    ],
  },
  {
    id: 'dilla',
    tag: 'CAMPUS',
    title: 'Dilla University Incubation Center',
    shortDesc:
      'Student registration, room & seat management, QR-code ID cards, and project tracking.',
    fullDesc:
      'Student registration and approval, room and seat management, QR-code ID cards, and project status tracking.',
    live: 'https://dilla-incubation.vercel.app',
    stack: ['react', 'supabase', 'telegram'],
    slides: [
      { src: IMAGES.dillaHome, label: 'Desktop · Incubation Center Portal' },
      { src: IMAGES.dillaHomeMobile, label: 'Mobile · Incubation Center Portal' },
      { src: IMAGES.dillaDesktop, label: 'Desktop · Admin Overview & Room Occupancy' },
      { src: IMAGES.dillaMobile, label: 'Mobile · Admin Overview & Room Occupancy' },
      { src: IMAGES.dillaStudent, label: 'Desktop · Student Portal & Telegram Link' },
      { src: IMAGES.dillaStudentMobile, label: 'Mobile · Student Portal & ID Card' },
      { src: IMAGES.dillaShowcase, label: 'Desktop · Verified Project Showcase' },
      { src: IMAGES.dillaShowcaseMobile, label: 'Mobile · Verified Project Showcase' },
    ],
  },
  {
    id: 'moviebot',
    tag: 'BOT',
    title: 'Telegram Movie & Series Order Bot',
    shortDesc:
      'Search titles, browse paged posters, pay via Telebirr or bank transfer, with admin approval.',
    fullDesc:
      'Users search titles, browse paged poster results, pay via Telebirr or bank transfer, and admins approve orders; series priced per episode range.',
    stack: ['python', 'telegram', 'supabase', 'postgres'],
    slides: [
      { src: IMAGES.moviebotDesktop, label: 'Telegram Desktop · Movie Catalog & Buy Flow' },
      { src: IMAGES.moviebotMobile, label: 'Telegram Mobile · Movie Catalog & Buy Flow' },
      { src: IMAGES.moviebotSeries, label: 'Telegram Desktop · Series & Episode Pricing' },
      { src: IMAGES.moviebotSeriesMobile, label: 'Telegram Mobile · Series & Episode Pricing' },
      { src: IMAGES.moviebotPayment, label: 'Telegram Desktop · Telebirr & CBE Payment Proof' },
      { src: IMAGES.moviebotPaymentMobile, label: 'Telegram Mobile · Telebirr & CBE Payment Proof' },
    ],
  },
  {
    id: 'gradecalc',
    tag: 'ANDROID',
    title: 'GradeCalc',
    shortDesc:
      'Ethiopian university GPA & CGPA calculator (4.0 scale) with all data stored locally on device.',
    fullDesc:
      'Android app for Ethiopian university students: 0–100 marks to letter grades, semester GPA and CGPA on 4.0 scale, stored locally on device.',
    stack: ['kotlin', 'android'],
    slides: [
      { src: IMAGES.gradecalcMobile, label: 'Android · My Grade Report & GPA Trend' },
      { src: IMAGES.gradecalcSemester, label: 'Android · Semester Courses & ECTS Breakdown' },
      { src: IMAGES.gradecalcAddCourse, label: 'Android · Add Course & Assessment Calculator' },
      { src: IMAGES.gradecalcTarget, label: 'Android · Target CGPA Calculator' },
      { src: IMAGES.gradecalcSettings, label: 'Android · Ethiopian 4.0 Scale, Amharic & PIN Lock' },
      { src: IMAGES.gradecalcNewSemester, label: 'Android · Add New Semester Dialog' },
    ],
  },
];

export type SkillCategoryId = 'all' | 'languages' | 'frontend' | 'backend' | 'tools';

export interface SkillGroupCard {
  id: Exclude<SkillCategoryId, 'all'>;
  title: string;
  countLabel: string;
  footerLabel: string;
  isCore?: boolean;
  skills: { key: TechKey; name: string }[];
}

export const SKILL_GROUPS: SkillGroupCard[] = [
  {
    id: 'languages',
    title: 'Languages',
    countLabel: '7 TOOLS',
    footerLabel: 'Web, bots & Android',
    isCore: true,
    skills: [
      { key: 'python', name: 'Python' },
      { key: 'typescript', name: 'TypeScript' },
      { key: 'javascript', name: 'JavaScript' },
      { key: 'kotlin', name: 'Kotlin' },
      { key: 'java', name: 'Java' },
      { key: 'php', name: 'PHP' },
      { key: 'c', name: 'C' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    countLabel: '6 TOOLS',
    footerLabel: 'Responsive dashboards & PWAs',
    skills: [
      { key: 'react', name: 'React' },
      { key: 'nextjs', name: 'Next.js' },
      { key: 'tailwind', name: 'Tailwind CSS' },
      { key: 'vite', name: 'Vite' },
      { key: 'html5', name: 'HTML5' },
      { key: 'css3', name: 'CSS3' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Data',
    countLabel: '6 TOOLS',
    footerLabel: 'Auth, role permissions & APIs',
    skills: [
      { key: 'supabase', name: 'Supabase' },
      { key: 'postgres', name: 'PostgreSQL' },
      { key: 'python', name: 'Python' },
      { key: 'nodejs', name: 'Node.js' },
      { key: 'mysql', name: 'MySQL' },
      { key: 'sqlserver', name: 'SQL Server' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    countLabel: '6 TOOLS',
    footerLabel: 'Deploy, bots & desktop builds',
    skills: [
      { key: 'github', name: 'Git & GitHub' },
      { key: 'vercel', name: 'Vercel' },
      { key: 'telegram', name: 'Telegram Bot API' },
      { key: 'electron', name: 'Electron' },
      { key: 'vscode', name: 'VS Code' },
      { key: 'android', name: 'Android Studio' },
    ],
  },
];

export type SkillCatalogProjectKey =
  | 'mobistock'
  | 'gamezone'
  | 'moviebot'
  | 'ggm'
  | 'dilla'
  | 'gradecalc';

export const SKILL_PROJECTS_CATALOG: Record<
  SkillCatalogProjectKey,
  { tag: string; title: string; desc: string; img: string }
> = {
  mobistock: {
    tag: 'FEATURED · INVENTORY & POS',
    title: 'MobiStock',
    desc: 'Inventory & POS system for mobile phone shops with low-stock alerts and profit analytics.',
    img: IMAGES.mobistockInventory,
  },
  gamezone: {
    tag: 'SAAS · WEB & DESKTOP',
    title: 'GameZone Management System',
    desc: 'Gaming center SaaS with session timers, ETB billing, owner reports, PWA & Electron installer.',
    img: IMAGES.gamezoneDesktop,
  },
  moviebot: {
    tag: 'PYTHON · TELEGRAM BOT',
    title: 'Movie & Series Order Bot',
    desc: 'Automated title search, paged posters, Telebirr & bank payments, and admin approval.',
    img: IMAGES.moviebotDesktop,
  },
  ggm: {
    tag: 'WEB · MARKETPLACE',
    title: 'GGM (Google General Market)',
    desc: 'Multi-role marketplace for Super Admins, Staff Admins, and Customers.',
    img: IMAGES.ggmDesktop,
  },
  dilla: {
    tag: 'CAMPUS · INCUBATION',
    title: 'Dilla University Incubation Center',
    desc: 'Student registration, room & seat assignment, QR-code ID cards, and project tracking.',
    img: IMAGES.dillaDesktop,
  },
  gradecalc: {
    tag: 'ANDROID · KOTLIN',
    title: 'GradeCalc',
    desc: 'Offline Ethiopian university GPA & CGPA calculator on a 4.0 scale.',
    img: IMAGES.gradecalcMobile,
  },
};

export interface SkillMetaEntry {
  name: string;
  role: string;
  iconKey?: TechKey;
  categoryKey?: Exclude<SkillCategoryId, 'all'>;
  keys: SkillCatalogProjectKey[];
}

export const SKILL_META: Record<string, SkillMetaEntry> = {
  python: { name: 'Python', role: 'Bots, Automation & Backend Logic', iconKey: 'python', keys: ['moviebot', 'dilla'] },
  typescript: { name: 'TypeScript', role: 'Type-Safe Full-Stack Apps', iconKey: 'typescript', keys: ['mobistock', 'gamezone'] },
  javascript: { name: 'JavaScript', role: 'Interactive Web & Marketplaces', iconKey: 'javascript', keys: ['ggm', 'mobistock'] },
  kotlin: { name: 'Kotlin', role: 'Native Android Applications', iconKey: 'kotlin', keys: ['gradecalc'] },
  java: { name: 'Java', role: 'OOP & Desktop/Android Foundations', iconKey: 'java', keys: ['gradecalc'] },
  php: { name: 'PHP', role: 'Server-Side Web & Campus Systems', iconKey: 'php', keys: ['dilla'] },
  c: { name: 'C', role: 'Algorithms & Systems Programming', iconKey: 'c', keys: ['gradecalc'] },
  react: { name: 'React', role: 'Component UI & Dashboards', iconKey: 'react', keys: ['mobistock', 'gamezone', 'ggm', 'dilla'] },
  nextjs: { name: 'Next.js', role: 'Production React Web Apps', iconKey: 'nextjs', keys: ['ggm', 'gamezone'] },
  tailwind: { name: 'Tailwind CSS', role: 'Rapid Responsive Interfaces', iconKey: 'tailwind', keys: ['mobistock', 'dilla'] },
  vite: { name: 'Vite', role: 'Fast Frontend Build Tooling', iconKey: 'vite', keys: ['mobistock', 'gamezone'] },
  html5: { name: 'HTML5', role: 'Semantic Accessible Markup', iconKey: 'html5', keys: ['mobistock', 'ggm'] },
  css3: { name: 'CSS3', role: '3D Motion & Glassmorphism', iconKey: 'css3', keys: ['mobistock', 'dilla'] },
  supabase: { name: 'Supabase', role: 'Auth, Realtime & Postgres Backend', iconKey: 'supabase', keys: ['mobistock', 'gamezone', 'ggm', 'dilla', 'moviebot'] },
  postgres: { name: 'PostgreSQL', role: 'Relational Data & Analytics', iconKey: 'postgres', keys: ['mobistock', 'ggm', 'moviebot'] },
  nodejs: { name: 'Node.js', role: 'APIs & Build Pipelines', iconKey: 'nodejs', keys: ['gamezone', 'mobistock'] },
  mysql: { name: 'MySQL', role: 'Structured Business Databases', iconKey: 'mysql', keys: ['dilla'] },
  sqlserver: { name: 'SQL Server', role: 'Enterprise Data Modeling', iconKey: 'sqlserver', keys: ['mobistock'] },
  github: { name: 'Git & GitHub', role: 'Version Control & Releases', iconKey: 'github', keys: ['gamezone', 'mobistock'] },
  vercel: { name: 'Vercel', role: 'Zero-Downtime Cloud Hosting', iconKey: 'vercel', keys: ['mobistock', 'gamezone', 'ggm', 'dilla'] },
  telegram: { name: 'Telegram Bot API', role: 'Automated Orders & Campus Alerts', iconKey: 'telegram', keys: ['moviebot', 'dilla'] },
  electron: { name: 'Electron', role: 'Desktop Installers for Windows', iconKey: 'electron', keys: ['gamezone'] },
  vscode: { name: 'VS Code', role: 'Primary Full-Stack Editor', iconKey: 'vscode', keys: ['mobistock', 'moviebot'] },
  android: { name: 'Android Studio', role: 'Mobile Builds & Device Testing', iconKey: 'android', keys: ['gradecalc'] },
  cat_languages: {
    name: 'Languages',
    role: 'Python, TypeScript, JS, Kotlin, Java, PHP, C',
    categoryKey: 'languages',
    keys: ['moviebot', 'mobistock', 'gradecalc'],
  },
  cat_frontend: {
    name: 'Frontend',
    role: 'React, Next.js, Tailwind, Vite, HTML5, CSS3',
    categoryKey: 'frontend',
    keys: ['mobistock', 'gamezone', 'ggm'],
  },
  cat_backend: {
    name: 'Backend & Data',
    role: 'Supabase, PostgreSQL, Python, Node.js, SQL',
    categoryKey: 'backend',
    keys: ['mobistock', 'moviebot', 'dilla'],
  },
  cat_tools: {
    name: 'Tools & Platforms',
    role: 'GitHub, Vercel, Telegram API, Electron, Android',
    categoryKey: 'tools',
    keys: ['gamezone', 'moviebot', 'gradecalc'],
  },
};

export interface JourneyMilestone {
  id: string;
  num: string;
  modalNum: string;
  title: string;
  shortDesc: string;
  modalDesc: string;
  spanWide?: boolean;
  isNow?: boolean;
  stack: TechKey[];
  slides: ProjectSlide[];
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'step1',
    num: '01',
    modalNum: '01 · FOUNDATIONS',
    title: 'Started coding',
    shortDesc:
      'Core algorithms, data structures, and problem solving in Computer Science at Dilla University.',
    modalDesc:
      'Began Computer Science at Dilla University with C and Java, building strong fundamentals in algorithms, memory, and object-oriented design.',
    stack: ['java', 'c'],
    slides: [
      {
        src: IMAGES.gradecalcMobile,
        label: 'Academic foundation · Structured logic & GPA systems',
      },
      {
        src: IMAGES.dillaDesktop,
        label: 'Dilla University · Campus problem solving',
      },
    ],
  },
  {
    id: 'step2',
    num: '02',
    modalNum: '02 · EARLY SYSTEMS',
    title: 'First projects',
    shortDesc:
      'Built database-backed campus tools and web portals, learning how real users interact with software.',
    modalDesc:
      'Built database-backed tools with PHP, MySQL, and Java, turning paper workflows into searchable digital records.',
    stack: ['php', 'mysql', 'java'],
    slides: [
      {
        src: IMAGES.dillaDesktop,
        label: 'Campus portal · Student registration & rooms',
      },
      {
        src: IMAGES.dillaMobile,
        label: 'Mobile pass · QR-code student ID cards',
      },
    ],
  },
  {
    id: 'step3',
    num: '03',
    modalNum: '03 · MODERN STACK',
    title: 'Modern web stack',
    shortDesc:
      'Moved to React, TypeScript, and Supabase to ship fast, role-based dashboards and real-time systems.',
    modalDesc:
      'Adopted React, TypeScript, and Supabase to deliver role-based dashboards, realtime updates, and clean mobile-first interfaces.',
    stack: ['react', 'typescript', 'supabase'],
    slides: [
      { src: IMAGES.ggmDesktop, label: 'GGM · Multi-role marketplace portal' },
      { src: IMAGES.ggmMobile, label: 'GGM · Responsive mobile storefront' },
    ],
  },
  {
    id: 'step4',
    num: '04',
    modalNum: '04 · PRODUCTION',
    title: 'Live products',
    shortDesc:
      'Launched MobiStock, GameZone SaaS, and GGM in production with cloud hosting, ETB billing, and desktop installers.',
    modalDesc:
      'Shipped MobiStock and GameZone Management System to real shops and gaming centers with ETB billing, profit analytics, and desktop installers.',
    spanWide: true,
    stack: ['vercel', 'postgres', 'electron'],
    slides: [
      { src: IMAGES.mobistockInventory, label: 'MobiStock · Inventory & low-stock alerts' },
      { src: IMAGES.mobistockPos, label: 'MobiStock · Point-of-Sale terminal' },
      { src: IMAGES.gamezoneDesktop, label: 'GameZone · Session timers & ETB billing' },
    ],
  },
  {
    id: 'step5',
    num: '05',
    modalNum: '05 · NOW',
    title: 'Building for clients',
    shortDesc:
      'Shipping Python Telegram bots, Android apps, and custom business & campus systems tailored for Ethiopia.',
    modalDesc:
      'Currently building Python Telegram order bots with Telebirr payments, Kotlin Android apps, and custom software for Ethiopian businesses.',
    spanWide: true,
    isNow: true,
    stack: ['python', 'telegram', 'kotlin', 'android'],
    slides: [
      { src: IMAGES.moviebotDesktop, label: 'Python Telegram Bot · Search & admin approval' },
      { src: IMAGES.moviebotMobile, label: 'Telegram Mobile · Telebirr payment flow' },
      { src: IMAGES.gradecalcMobile, label: 'GradeCalc · Kotlin Android app' },
    ],
  },
];

export const QUICK_BRIEF_TEMPLATES = [
  {
    id: 'pos',
    label: 'Inventory & POS',
    message:
      'Hi Natnael, I need an inventory & POS web system for my business in Ethiopia.',
  },
  {
    id: 'bot',
    label: 'Python Telegram Bot',
    message:
      'Hi Natnael, I want to build a Python Telegram bot with Telebirr/bank payment approval.',
  },
  {
    id: 'portal',
    label: 'Android / Portal',
    message:
      'Hi Natnael, I need an Android app or campus/management portal.',
  },
];
