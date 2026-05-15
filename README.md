# 26CC_Bondly

GitHub: [JJZHANG0/26CC_Bondly](https://github.com/JJZHANG0/26CC_Bondly).  
**Live site:** `https://jjzhang0.github.io/26CC_Bondly/`

### GitHub Pages 设置（必看）

仓库里的根目录 `index.html` 是 **Vite 开发入口**，不能直接当静态站；线上必须提供 **`npm run build` 之后的文件**。

任选其一：

1. **推荐 — GitHub Actions**  
   Settings → Pages → **Build and deployment** → Source 选 **GitHub Actions**。推送 `main` 后由 workflow 构建 `dist` 并发布。

2. **从分支发布**  
   Settings → Pages → Source 选 **Deploy from a branch** → Branch **main**，Folder **`/docs`**（不要用 `/ (root)`）。本仓库已包含预构建的 `docs/` 目录；更新站点后请在本地执行 `npm run build:pages` 再提交 `docs/`。

若 Pages 仍指向 **根目录 `/`**，浏览器会去加载 `https://jjzhang0.github.io/src/main.js`（404），页面会一片空白。

---

# AuraLoop — Social Energy Intelligence

A premium, minimalist product website for an AI-powered social energy and relationship insight app. **Production:** Vue 3 + Vite + Tailwind (`npm run dev` / `npm run build`). The previous single-file CDN version is kept as `public/legacy-standalone.html`.

---

## ✅ Completed Features

### Pages
- **Home** — Full-screen hero with animated energy curve, problem/solution sections, energy chart mockup, privacy promise, final CTA
- **About** — Editorial layout with mission, philosophy, "Why Now", differentiators, team section
- **Features** — Six core features with interactive mockups: Social Energy Curve, Conversation Analysis, Situation Replay, Personal Social Profile, Personalized Suggestions, Privacy-First Local Processing
- **Pricing** — Three-tier freemium model (Free / VIP / Hardware Bundle) with monthly/yearly toggle and comparison table
- **Products** — Four product sections: AI Mobile App, Situation Replay Companion, Social Energy Wristband, Local-First Privacy Layer
- **Download** — App store buttons, QR code placeholder, wristband pairing steps, beta waitlist form, final CTA

### Global Components
- **Navbar** — Sticky, transparent-to-solid on scroll, full mobile menu with hamburger animation
- **Footer** — Multi-column with product/company/legal links, social icons, system status indicator
- **Login Modal** — Email/password form + Google placeholder, dark/light aware
- **Signup Modal** — Email/password form + Google placeholder, dark/light aware, switch between modals

### Interactivity
- **Dark / Light mode toggle** — Smooth CSS transition, persisted in `localStorage`
- **EN / 中文 language switch** — Full bilingual translations for all 6 pages, persisted in `localStorage`
- **Page navigation** — Smooth fade+slide transitions between all pages, scroll-to-top on navigate
- **Scroll reveal animations** — IntersectionObserver-based reveals with staggered delays
- **Animated SVG energy curves** — Stroke-dasharray draw animation on hero background
- **Floating card mockups** — CSS animation (`float`) on hero product preview cards
- **Cursor glow** — Subtle radial gradient follows mouse on desktop
- **Neon hover effects** — Neon green (dark mode) / neon purple (light mode) on all buttons and nav links
- **Monthly/Yearly pricing toggle** — Live price switching on Pricing page
- **Beta waitlist form** — Client-side email submission with success state
- **Wristband heart rate SVG** — Animated ECG-style line in Products/Download

---

## 🗂 File Structure

```
index.html          ← Complete self-contained website (Vue 3 + Tailwind via CDN)
public/
  favicon.svg       ← AuraLoop brand favicon
src/                ← Vue 3 + Vite source (alternative build setup)
  App.vue
  main.js
  style.css
  router/index.js
  stores/appStore.js
  i18n/translations.js
  composables/useScrollReveal.js
  views/
    HomePage.vue
    AboutPage.vue
    FeaturesPage.vue
    PricingPage.vue
    ProductsPage.vue
    DownloadPage.vue
  components/
    AppNavbar.vue
    AppFooter.vue
    LoginModal.vue
    SignupModal.vue
package.json
vite.config.js
tailwind.config.js
postcss.config.js
```

> **Deployed version:** `index.html` is the fully self-contained production file that runs directly in any browser without a build step.

---

## 🚀 Functional Entry Points

| URL / Route | Description |
|---|---|
| `index.html` | Main entry — defaults to Home page |
| `#home` | Home page |
| `#about` | About page |
| `#features` | Features page |
| `#pricing` | Pricing page |
| `#products` | Products page |
| `#download` | Download + beta waitlist page |

Navigation is handled client-side via Vue reactive state (no hash routing in the CDN version).

---

## 🎨 Design System

| Token | Value |
|---|---|
| **Primary palette** | Pure black `#000000` / Pure white `#FFFFFF` |
| **Neon accent (dark hover)** | `#39FF14` (neon green) |
| **Neon accent (light hover)** | `#BF5FFF` (neon purple) |
| **Font** | DM Sans (Google Fonts) — weights 300, 400, 500, 600 |
| **Border radius** | `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px) |
| **Border opacity** | `white/8` – `white/20` dark / `black/6` – `black/15` light |

---

## 🌐 Languages

- **English** (default)
- **Chinese (Simplified)** — full translation coverage across all pages, navigation, modals, and footer

Language preference persisted in `localStorage` key `al-lang`.

---

## 🔒 Privacy & Data

- No backend. No real authentication.
- Login/Signup modals are UI-only placeholders.
- Beta waitlist form stores state in Vue reactive data (client-side only).
- Theme and language preferences stored in `localStorage`.

---

## 📋 Not Yet Implemented

- Real authentication / user accounts
- Actual app download links (App Store / Google Play)
- Real QR code for app download
- Backend API for beta waitlist
- Blog / changelog section
- Careers page
- Actual demo video

## 💡 Recommended Next Steps

1. Connect beta waitlist form to an email service (Mailchimp, Resend, etc.)
2. Add real App Store / Google Play URLs when app is live
3. Create a `/demo` page with product walkthrough video
4. Add `og:image` meta tags for social sharing
5. Optimize for Core Web Vitals (lazy-load fonts, preload critical CSS)
6. Add cookie consent banner for GDPR compliance

---

© 2025 AuraLoop. Social energy intelligence for the modern era.
