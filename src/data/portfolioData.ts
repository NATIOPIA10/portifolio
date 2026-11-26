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
  portrait:
    'https://lh3.googleusercontent.com/aida/ALJJyrCtWY0cxS5KpEwpCPuhS9Yq_71fej_wws9BKcsMafwu8TdSLO53WTaMNul0__T5nAtmNbZGLN1dGLWMYznF9xUdjAcr7dgMSgEDoaEPKiunrJwqlt4X39tw0TvzuO8Pz7iAZm84CIPUUT-Ow12ThBH6xsr7lYKIs_itruPJLnSn5ISxC8B3Tz98JSbiGDIimM2bqXL8mNyfy2HkjR8MtqD-9SgUuG1UjK0pDQeCcnsA2GOBNYsHLnDz6Qts',
  mobistockInventory:
    'https://lh3.googleusercontent.com/aida/ALJJyrB804Z2HUVRhWB_ieVQz16RGAbIqlk4xbYRiMdVNidMLZaNxvhtqYHNHzdn0Tr01OMJMQqMvA610qkx6R53ACDv1KpVjSQa6LIRRZimm0N7qrbLbCPQ6HLJQI98c1xF2QwAvn24OK-4iiLG2qpULO47B_S033v2--R7RXs7EYyOpitOhUnJ0qWSimazA9WDl1_Y8jjbEulYM_ZwSVckcYNZJqW2CcOTkuxCufbe6dJBFOSiIGjIiu2RhxyW2jQ',
  mobistockMobile:
    'https://lh3.googleusercontent.com/aida/ALJJyrBlMBP1DLDaPhaYZFAgexKfYUBvWBJ2DPQimOdIGgLMog9fe5UGX5Cs9aPb_c5rQrYQ3kMzOPPmaGmW4RxTUJvOJmGqV7PlEF1QOs_eLCulATi4IocrUNSSJJOvdYNQ1FsdSOCBBgUl4nxhw93l0ftnPbYmQ76lXDlZOG3qYGukCVP4SMpXv1tr3it0dGioLz9bJCWzYGuiwYDMS1_kz-DCQw93F3E3tz7NykuzQtTP9d-kzHs7mcucXjpP',
  mobistockPos:
    'https://lh3.googleusercontent.com/aida/ALJJyrDiepinG9hOkhvuik-9E70lU5W2VvpYDgA6ggibMwG0zl2X9yG6gb04RoxpeGklVRCf70hWK3qdCZ9pjPscfARTf0XHUK7-Rn0nWlAKgGbj7CkB2k0plbfbuegN4GmoubpxJqx9t1YbbxQE1xQK2KFEAd4SGHp6eYzCc0BLNbwXWwux6anHyh2-bkYe7SCEt805KFXL3IAuJtz-pYUkxj_0cFkMOtC6Z2PTrkxg_DZkqFt2IeLt4_Y',
  mobistockAnalytics:
    'https://lh3.googleusercontent.com/aida/ALJJyrAExsuS3S69if9d_A_Ibvrfm0WQHOorSwKlGdVM8i4Tn84ExgvhPfeVLqKd2NeHYFlnBDRKx1FXHhgmrcp62kNmET3bd9FtoEMTFYMBETMAlegUnDNiqZA8EMRc2VOBVGyUpp6kQ0x5VHhGIkxTfbSFI8uUmCXb3yPD2CLfbI5U11QkAbCwu_LoWGYelv4mWef3WrFC3hrzmpP_4eq2dl0JzHwuz6iafOVb95eGcLEe1mam1bp_Rjjqf-tpK34T',
  gamezoneDesktop:
    'https://lh3.googleusercontent.com/aida/ALJJyrDD7ftNmIZ3-9P5-jw2vHRPRhCEmr_WObKVMln40ErLMscIRoFw50oTaudGd1KjOPbvfqBDXIkGmLY2KfJuk-Hcu1dP4-h2qIW3vSoQLBsmkUN_6FfMODMg9iOcYb_CQKeEJyJxdgqQJj0SqwyxmdnsYSX-ffZeClHDWPGK7jqrxQIlgZdMEnRazt74WBOwD-2xAdS1E37ZUoxmiZtjrfu0IQW9_XHdfvHVLc5EEWgx40B8gJsXefW_eLAy',
  gamezoneMobile:
    'https://lh3.googleusercontent.com/aida/ALJJyrBCHRA8Xx1EEEu9DXd1hMp8AvvJ8xL1GUvHQ4yp__6vlduZKTIfnF7zgegkfQPohLzQw7rq_vlCZU736Qkn5mxeTIfcfRAwQQJ9deVmZ20QYJf5qbsb7FwhAySl6Xe-rH0D760a5I-w7wW9WJ5GAWJwpGJAXVgFfyBckHnZvDaOZ7ghp6_qvL3SSsjPN8fNkzksCRUVN3PioPTvdHx6JmNQAgdmtYG-XtxPuJT8M-kfXOk-MLnuB0Jz1cY',
  dillaDesktop:
    'https://lh3.googleusercontent.com/aida/ALJJyrCwlZ0pqMMAIE7y2nkOpYSFUagH8Gjv2ugItNi4lSobqRH6K7cKx_T30nhWPDFcdG1fidR5IlEbYQ_9ghlnOKGzkEdKPxvrsjGakNORufCnfSgP5MFIaX9BA0FKQczFjzv1a7kbMez0K5bFjrDq4Ua0JjiniFkVXDB4ugoolqO2ER53aZfT77tHSNHwj3sHHuvIL97P-R7hr2WTJzYuY0ZYI2gl3kLGlZrI0UDSa1nYhEs7dBGGGNiA',
  dillaMobile:
    'https://lh3.googleusercontent.com/aida/ALJJyrB3DgGxsi29-WO74E_d6D0PVrxBcqsTIiPq65ClJuXflk34D4bjpnTDvjDHoWi4Y5hBzcALoJW961NmpQlNElawgufKOYZ1tapCNgZ5I-N9wUo4zllUp1YSsy1JJnCdsZ144tOwBEuVzbMpl98wr0mm8dauAOve3PZp8YawMqfDQrWZ2PB0oHy5YiDOSr26tKeMuZoEA0ljKgcxYCB4zRuidHHGhOXZldcWuIgO3obWyLZJJnJd8w',
  ggmDesktop:
    'https://lh3.googleusercontent.com/aida/ALJJyrDaP9kG3-LSUPLxJEp0DrilnU4Y7yFRCu98eJXoF_DOzNcJsmRf-SR3Sf8T7iD3SH4uxUUL6hr5z9RI0fGkoMuwG3EQfjzYIf4Whg3XrN3m_zgNUJm7ER5I9Yv34zWIAUH5WNZAOixBo962Mtx1sAZPeKlGvQhS88qn_5RffIl0gbn8tjgqVZ58p_0vHDyltPcBT7tPS6C1iOetqmzOddzNBGvxngsLiYYOVGifNFRVGX8vL-E',
  ggmMobile:
    'https://lh3.googleusercontent.com/aida/ALJJyrAalxxctC_UH0fGFOYy3BWmHKcwqky6QYVQhFlhH52Vmg_aVg5X3R--hp1G0wp5TxUOOQuSTPgfCfzCZ8DG-tgJQY2oK4VsY4_kxtIAitEXT_pWPy_tRBlydBlSPxpxDMVCKqbayHCSn-VUOefVNrBuVjRhXD1cv9kk7PfemS4dLgx4mg5VxLZChIEoIkjE-FuPF5WE61LarxMZvd-hSLqHkfRCdDTFbw20s5Ffyw6etroKFcw',
  moviebotDesktop:
    'https://lh3.googleusercontent.com/aida/ALJJyrBiwDF2OlB2n68IZxEl0EBaapQRGIYPypc2MeKvvvCNotcRdaToeONY3UZdGYQHMhGmRUs9g49ufKywKB3FBqrjzcXxk-bpBwM2bpJzFHpbX064PKnN2Caqs6xk6dSaXSVchQPDRsg0s_U7D5KGxEqlKl3VZRT4AbthKJirnFgokGK9wLLaV-JJ68f5k3_NqrTAHsVH1KmD5idjm6jSClapAdFrA7vYQFI9DWkaMGN8aWrODul5kuGTs16G',
  moviebotMobile:
    'https://lh3.googleusercontent.com/aida/ALJJyrBrBRARQ8Lte_Se6eOW2D_21tuCzkaMH_Izr078YFYP6AN32p6zAUGxHxh4pG9rpifE7c_-lFfJWRvQv1P0KtpXsPMFHPsXTuJrQr8WGpK23YNTOnygs91Gsyd0051KHDJIpCL1bPokkWePe85ROeITK10BKm_Sn4W1kqvlB7ZR95Sh_pNIvfLfq4t0aU0pVfem8CxBamxyN48C7BqKKXMwjHA5z9Rc3JLsjFkLWMjNt4PLiLk_hWX6LYs',
  gradecalcDesktop:
    'https://lh3.googleusercontent.com/aida/ALJJyrDTkQeB2SM1lPddxgLNKbKFUdiGHw__O3yrsbR8TowAR84CFXj1zjzvlx-PLbwsAuREIbiFY-GKIzsAaZw-9rNE50fMHHKwSc_8xyCLm9M1GbDLDEP2NqdiPdy5kOd_jtaNtoaVhRWdmLZZO22aw7Z74l-jSkyqhlrbPr405djL96pt-cQwxQBuXk5TDsg2QyvTJ0-QlhQlh32cMcGqX3UILX9hv_t8lc4309vR8JBAUZKF9borWhAnDc5obQ',
  gradecalcMobile:
    'https://lh3.googleusercontent.com/aida/ALJJyrCZxqF6vZ1tUiass7bcIOclLhG0aLale9gqEGi4JPm62fFNP7wPSKkO73UZVhFvq3hXxvcYQFkYC5V7E9EfYm1o2XDZ8NI6vRmxP_avCz4gfLADe8TDet-vW8OHwvtzZ_fQKSzleE2ZsyT-6gsuThBTYR43s2v8zLQFLwmIK7v_GcmrrIIDiHU7yqYm8FZ8YQfMZGWJj1VHzlnJM6KHLSfkqjRczF6JhZ6FLGOiLnmNpc7gl_0TvN-6beAi',
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
      { src: IMAGES.mobistockInventory, label: 'Desktop · Inventory & Low-Stock Alerts' },
      { src: IMAGES.mobistockMobile, label: 'Mobile · Quick Stock & Sales' },
      { src: IMAGES.mobistockPos, label: 'Desktop · Point-of-Sale Terminal' },
      { src: IMAGES.mobistockAnalytics, label: 'Desktop · Revenue & Profit Analytics' },
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
      { src: IMAGES.ggmDesktop, label: 'Desktop · Marketplace & Admin Portal' },
      { src: IMAGES.ggmMobile, label: 'Mobile · Customer Storefront' },
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
      { src: IMAGES.gamezoneDesktop, label: 'Desktop · Session Timers & ETB Billing' },
      { src: IMAGES.gamezoneMobile, label: 'Mobile · PWA Control Panel' },
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
      { src: IMAGES.dillaDesktop, label: 'Desktop · Campus Incubation Portal' },
      { src: IMAGES.dillaMobile, label: 'Mobile · QR-Code Student ID Pass' },
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
      { src: IMAGES.moviebotDesktop, label: 'Telegram Desktop · Search & Admin Approval' },
      { src: IMAGES.moviebotMobile, label: 'Telegram Mobile · Order & Telebirr Pay' },
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
      { src: IMAGES.gradecalcDesktop, label: 'Tablet · Semester & CGPA Summary' },
      { src: IMAGES.gradecalcMobile, label: 'Android · On-Device Grade Calculator' },
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
        src: IMAGES.gradecalcDesktop,
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
