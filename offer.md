# Client Offer Landing Page â€” React + Vercel

This file contains the full project brief, website content, React implementation guide, and deployment steps for creating a professional offer page for a client.

The goal is to build a beautiful, mobile-first, professional React landing page that presents website development packages clearly and convincingly.

---

## 1. Project Goal

Create a modern offer page for a website development service targeting a European client.

The page should present three packages:

- Basic Package â€” â‚¬799
- Business Package â€” â‚¬999 â€” Most Popular
- Premium Package â€” â‚¬1299

The design must be:

- Mobile-first
- Professional
- Clean and premium-looking
- Suitable for Dutch / European business clients
- Responsive for desktop
- Easy to deploy on Vercel
- Built with React

---

## 2. Recommended Tech Stack

Use:

- React
- Vite
- Tailwind CSS
- lucide-react for icons
- framer-motion for smooth animations

Recommended project creation command:

```bash
npm create vite@latest client-offer-page -- --template react
cd client-offer-page
npm install
npm install lucide-react framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 3. Tailwind Configuration

Replace the content of `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(15, 23, 42, 0.14)",
      },
    },
  },
  plugins: [],
}
```

---

## 4. CSS File

Replace the content of `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #f8fafc;
  color: #0f172a;
}

* {
  box-sizing: border-box;
}
```

---

## 5. Main React Component

Replace the content of `src/App.jsx` with:

```jsx
import { motion } from "framer-motion";
import {
  Check,
  Star,
  Globe2,
  ShieldCheck,
  Zap,
  Bot,
  MapPin,
  Palette,
  BarChart3,
  CreditCard,
  ArrowRight,
  Crown,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    name: "Basic Package",
    price: "â‚¬799",
    tagline: "Perfect for small businesses that need a professional online presence.",
    hosting: "Hosting included â€” 1 year",
    badge: null,
    highlight: false,
    icon: Globe2,
    featuresTitle: "Included Features",
    features: [
      "Modern Responsive Website",
      "Up to 5 Pages",
      "Mobile & Tablet Optimization",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps Integration",
      "Basic SEO Setup",
      "Social Media Links",
      "1 Language",
      "Custom Colors & Branding",
      "Domain Included",
      "SSL Security Certificate",
      "Speed Optimization",
      "Delivery in 7-14 Business Days",
    ],
  },
  {
    name: "Business Package",
    price: "â‚¬999",
    tagline: "Ideal for growing businesses looking for a complete professional solution.",
    hosting: "Hosting included â€” 2 years",
    badge: "Most Popular",
    highlight: true,
    icon: Star,
    featuresTitle: "Everything in Basic, plus",
    features: [
      "Up to 10 Pages",
      "Fully Custom Website Design",
      "Telegram Bot Integration",
      "Offer / Services Pages",
      "Advanced SEO Optimization",
      "Multi-language Support â€” 2 Languages Included",
      "Professional Logo Design",
      "Enhanced Branding & Visual Identity",
      "Performance Optimization",
      "Security Protection",
      "Basic Analytics Setup",
      "Admin Dashboard",
      "Priority Support",
      "Delivery in 14-20 Business Days",
      "Free SEO Audit",
      "Free Website Training Session",
      "Scalable Business Infrastructure",
    ],
  },
  {
    name: "Premium Package",
    price: "â‚¬1299",
    tagline: "Advanced premium solution for businesses that want maximum performance and scalability.",
    hosting: "Hosting included â€” 3 years",
    badge: "Premium",
    highlight: false,
    icon: Crown,
    featuresTitle: "Everything in Business, plus",
    features: [
      "Unlimited Pages",
      "Premium UI/UX Design",
      "Advanced Telegram Automation",
      "AI Chat Integration",
      "Full Multi-language System",
      "Advanced SEO Strategy",
      "Booking / Reservation System",
      "Dynamic Offers Management",
      "Google Analytics & Search Console",
      "Premium Security Protection",
      "High-Speed Optimization",
      "Custom Admin Panel",
      "Professional Branding Kit",
      "Premium Logo Design",
      "3 Months Maintenance Included",
      "Technical Support & Training",
      "Priority Delivery in 20-35 Business Days",
      "Advanced Performance Optimization",
      "Enhanced Security Monitoring",
      "Scalable Business Infrastructure",
    ],
  },
];

const languages = ["English", "Dutch", "German", "French"];

const coreBenefits = [
  {
    icon: Bot,
    title: "Telegram Automation",
    text: "Receive contact and offer requests directly through Telegram with a smart bot integration.",
  },
  {
    icon: Palette,
    title: "Visual Freedom",
    text: "The client can choose colors, visual direction, and branding preferences before development.",
  },
  {
    icon: MapPin,
    title: "Google Maps Ready",
    text: "Professional location integration to help visitors find the business easily.",
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    text: "Search engine optimization, analytics setup, and structure built for business visibility.",
  },
];

function Feature({ text }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-slate-700">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <Check size={14} strokeWidth={3} />
      </span>
      <span>{text}</span>
    </li>
  );
}

function PackageCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`relative rounded-[2rem] border bg-white p-6 shadow-premium ${
        item.highlight
          ? "border-blue-500 ring-4 ring-blue-100 scale-[1.02]"
          : "border-slate-200"
      }`}
    >
      {item.badge && (
        <div
          className={`absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg ${
            item.highlight ? "bg-blue-600" : "bg-slate-900"
          }`}
        >
          {item.badge}
        </div>
      )}

      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-extrabold text-slate-950">{item.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.tagline}</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl bg-slate-50 p-5">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-black tracking-tight text-slate-950">
            {item.price}
          </span>
          <span className="pb-1 text-sm font-medium text-slate-500">fixed price</span>
        </div>
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
          <ShieldCheck size={16} className="text-emerald-600" />
          {item.hosting}
        </p>
      </div>

      <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">
        {item.featuresTitle}
      </h4>

      <ul className="space-y-3">
        {item.features.map((feature) => (
          <Feature key={feature} text={feature} />
        ))}
      </ul>

      <a
        href="#contact"
        className={`mt-7 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold transition ${
          item.highlight
            ? "bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        Choose {item.name.replace(" Package", "")}
        <ArrowRight size={17} />
      </a>
    </motion.div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(180deg,#ffffff,#f8fafc)]">
      <section className="relative px-5 pb-14 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-10 flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-sm font-black leading-none text-slate-950">
                  Digital Offer
                </p>
                <p className="text-xs text-slate-500">Website Development</p>
              </div>
            </div>
            <a
              href="#packages"
              className="rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white"
            >
              View Packages
            </a>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <Zap size={16} />
                Professional business website proposal
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
                A complete digital presence built for trust, speed, and growth.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                A modern responsive website with professional branding, SEO,
                Google Maps integration, Telegram automation, multilingual options,
                and reliable hosting included.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                >
                  Explore Packages
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#payment"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-extrabold text-slate-900 transition hover:bg-slate-50"
                >
                  Payment Terms
                  <CreditCard size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-[2.2rem] border border-white bg-white/80 p-5 shadow-premium backdrop-blur"
            >
              <div className="rounded-[1.7rem] bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-blue-200">Featured Package</p>
                  <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-black uppercase">
                    Most Popular
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-black">Business Package</h2>
                <p className="mt-2 text-slate-300">
                  Best value for a professional company website.
                </p>

                <div className="mt-7 rounded-3xl bg-white p-5 text-slate-950">
                  <p className="text-sm font-bold text-slate-500">Total Price</p>
                  <p className="mt-2 text-5xl font-black">â‚¬999</p>
                  <p className="mt-3 text-sm font-semibold text-emerald-700">
                    Hosting included for 2 years
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="font-black">10 Pages</p>
                    <p className="text-slate-300">Custom design</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="font-black">2 Languages</p>
                    <p className="text-slate-300">Client choice</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="font-black">SEO</p>
                    <p className="text-slate-300">Advanced setup</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="font-black">Telegram Bot</p>
                    <p className="text-slate-300">Smart leads</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </div>
                <h3 className="font-black text-slate-950">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="packages" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Pricing Packages
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Choose the right package for your business.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Transparent pricing, clear scope, and professional delivery.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
            {packages.map((item, index) => (
              <PackageCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-premium sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                Languages
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Multi-language support available.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                The Business Package includes 2 languages. The client can choose any
                two languages from the available list. Premium includes full
                multi-language support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {languages.map((language) => (
                <div
                  key={language}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center font-bold text-slate-800"
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="payment" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-6 text-white shadow-premium sm:p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-200">Payment Terms</p>
              <h2 className="text-2xl font-black">Clear and milestone-based payment</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-4xl font-black">30%</p>
              <h3 className="mt-3 font-black">Advance Payment</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Required before starting the project.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-4xl font-black">40%</p>
              <h3 className="mt-3 font-black">Mid-Project Payment</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Due when design and development reach 50% completion.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-4xl font-black">30%</p>
              <h3 className="mt-3 font-black">Final Payment</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Due after final delivery and before website launch.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-5 text-slate-950">
            <ul className="space-y-3 text-sm leading-6">
              <Feature text="Project starts after the first payment is received." />
              <Feature text="All payments are non-refundable once work has started." />
              <Feature text="Additional features or revisions outside the agreed scope may require extra charges." />
              <Feature text="Delivery timelines may vary depending on client feedback and content availability." />
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-blue-600 p-8 text-center text-white shadow-premium">
          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to start your website project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Choose the package that fits your business needs and we will prepare the
            next steps, project scope, and timeline.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-blue-700 transition hover:bg-blue-50"
          >
            Contact Now
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
```

---

## 6. Optional HTML Head SEO

In `index.html`, update the title and meta description:

```html
<title>Website Development Packages</title>
<meta
  name="description"
  content="Professional website development packages including hosting, SEO, Telegram automation, multilingual support, branding, and Google Maps integration."
/>
```

---

## 7. Full Offer Content

Use the following content if you need to copy it into another design or proposal.

# Website Development Packages

## BASIC PACKAGE â€” â‚¬799

Perfect for small businesses that need a professional online presence.

### Included Features

- Modern Responsive Website
- Up to 5 Pages
- Mobile & Tablet Optimization
- Contact Form
- WhatsApp Integration
- Google Maps Integration
- Basic SEO Setup
- Social Media Links
- 1 Language
- Custom Colors & Branding
- Domain Included
- Hosting Included â€” 1 Year
- SSL Security Certificate
- Speed Optimization
- Delivery in 7-14 Business Days

---

## â­ MOST POPULAR â€” BUSINESS PACKAGE â€” â‚¬999

Ideal for growing businesses looking for a complete professional solution.

### Everything in Basic, plus

- Up to 10 Pages
- Fully Custom Website Design
- Telegram Bot Integration
- Offer / Services Pages
- Advanced SEO Optimization
- Multi-language Support â€” 2 Languages Included
- Professional Logo Design
- Enhanced Branding & Visual Identity
- Performance Optimization
- Security Protection
- Basic Analytics Setup
- Admin Dashboard
- Priority Support
- Hosting Included â€” 2 Years
- Delivery in 14-20 Business Days

### Languages Available

- English
- Dutch
- German
- French

Client chooses any 2 languages.

### Bonus Included

- Free SEO Audit
- Free Website Training Session
- Scalable Business Infrastructure

---

## PREMIUM PACKAGE â€” â‚¬1299

Advanced premium solution for businesses that want maximum performance and scalability.

### Everything in Business, plus

- Unlimited Pages
- Premium UI/UX Design
- Advanced Telegram Automation
- AI Chat Integration
- Full Multi-language System
- Advanced SEO Strategy
- Booking / Reservation System
- Dynamic Offers Management
- Google Analytics & Search Console
- Premium Security Protection
- High-Speed Optimization
- Custom Admin Panel
- Professional Branding Kit
- Premium Logo Design
- Hosting Included â€” 3 Years
- 3 Months Maintenance Included
- Technical Support & Training
- Priority Delivery in 20-35 Business Days

### Premium Extras

- Advanced Performance Optimization
- Enhanced Security Monitoring
- Scalable Business Infrastructure

---

# Payment Terms

## Payment Structure

- 30% Advance Payment â€” Required before starting the project
- 40% Mid-Project Payment â€” Due after the design and development phase reaches 50% completion
- 30% Final Payment â€” Due after final delivery and before website launch

## Additional Information

- Project starts after the first payment is received.
- All payments are non-refundable once work has started.
- Additional features or revisions outside the agreed scope may require extra charges.
- Delivery timelines may vary depending on client feedback and content availability.

---

## 8. GitHub Copilot Prompt

Paste this prompt into GitHub Copilot Chat inside VS Code:

```text
Create a professional mobile-first React landing page using Vite and Tailwind CSS for website development packages.

The page must look premium and modern for a European business client. It should include:
- Hero section with strong headline and call to action
- Three pricing cards: Basic â‚¬799, Business â‚¬999 Most Popular, Premium â‚¬1299
- Business package should visually stand out as the most popular option
- Package features exactly as provided in this offer.md file
- Languages section showing English, Dutch, German, French
- Payment Terms section: 30% advance, 40% mid-project, 30% final
- Benefits section: Telegram Bot, Google Maps, SEO, Visual Branding
- Contact call-to-action section
- Mobile-first layout
- Clean spacing, rounded cards, soft shadows, professional colors
- Use lucide-react icons and framer-motion animations
- Make it ready to deploy on Vercel
```

---

## 9. Vercel Deployment Steps

After completing the project:

```bash
npm run build
```

Create a GitHub repository and push the project:

```bash
git init
git add .
git commit -m "Initial client offer page"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Then deploy on Vercel:

1. Go to Vercel.
2. Click Add New Project.
3. Import the GitHub repository.
4. Keep the default framework as Vite.
5. Click Deploy.
6. Copy the final Vercel link and send it to the client.

---

## 10. Client Message Template

Use this message when sending the link to the client:

```text
Hello,

I prepared a clear website development offer with three package options so you can choose the best fit for your business.

You can view the proposal here:
[PASTE VERCEL LINK]

The Business Package is marked as the most popular option because it includes a complete professional website, 10 pages, 2 years hosting, SEO, Telegram bot integration, logo design, multilingual support, and priority delivery.

Best regards,
[Your Name]
```

---

## 11. Notes Before Sending to Client

Before sending the Vercel link:

- Replace `your-email@example.com` with your real email.
- Add your logo or name if available.
- Check the website on mobile first.
- Make sure all prices are correct.
- Test all buttons.
- Test the build using `npm run build`.