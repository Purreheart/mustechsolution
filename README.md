# MUSTECH DYNAMIC SOLUTIONS — Website

**Brand:** Mustech Dynamic Solutions  
**Tagline:** Innovating the Future, Dynamically  
**Location:** Lagos, Nigeria

---

## Project Structure

```
mustech-website/
├── index.html          ← Homepage
├── about.html          ← About page
├── services.html       ← Services page
├── portfolio.html      ← Portfolio page
├── contact.html        ← Contact page
├── css/
│   ├── style.css       ← Main stylesheet (brand colors, components)
│   └── animations.css  ← Scroll reveals, transitions, effects
├── js/
│   ├── components.js   ← Shared nav & footer injected into every page
│   └── main.js         ← All interactivity (preloader, counters, particles, form)
├── assets/
│   └── favicon.svg     ← Brand favicon
└── README.md           ← This file
```

---

## Technologies Used

| Technology      | Purpose                          |
|----------------|----------------------------------|
| HTML5           | Semantic markup, SEO structure   |
| CSS3            | Custom properties, Grid, Flexbox |
| Vanilla JS (ES6+)| All interactivity & animations  |
| Bootstrap Icons | Icon library (CDN)               |
| Google Fonts    | Montserrat + DM Sans (CDN)       |

> No CSS frameworks like Bootstrap are required — all layout is handled by custom CSS Grid/Flexbox, making the site lighter and faster.

---

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Animated preloader with progress bar
- ✅ Sticky navbar with scroll detection & active link tracking
- ✅ Mobile hamburger menu with slide-in panel
- ✅ Particle canvas background (hero section)
- ✅ Scroll-reveal animations on all sections
- ✅ Animated counter numbers
- ✅ Portfolio filter with smooth transitions
- ✅ FAQ accordion (contact page)
- ✅ Contact form with validation and success state
- ✅ Newsletter signup
- ✅ WhatsApp floating button
- ✅ Back-to-top button
- ✅ Cookie consent bar
- ✅ Toast notifications
- ✅ Page progress reading bar
- ✅ Infinite-scroll trust marquee
- ✅ Code typing animation (hero)
- ✅ SEO meta tags on every page
- ✅ Open Graph social preview tags
- ✅ SVG favicon

---

## Deployment Instructions

### Option 1 — Netlify (Recommended, Free)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the entire `mustech-website/` folder onto the Netlify dashboard
3. Your site is live instantly at a `.netlify.app` URL
4. To use a custom domain (e.g. mustechdynamicsolutions.com), add it in Site Settings > Domain Management

### Option 2 — GitHub Pages (Free)
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `mustech-website`
3. Upload all files in this folder to the repository
4. Go to Settings > Pages > Select `main` branch > Save
5. Site is live at `https://yourusername.github.io/mustech-website`

### Option 3 — cPanel / Shared Hosting (Whogohost, etc.)
1. Log into your hosting cPanel
2. Open File Manager > Navigate to `public_html`
3. Upload all files in this folder directly into `public_html`
4. Your site is live at your domain

### Option 4 — Vercel (Free, fast)
1. Go to [vercel.com](https://vercel.com) and sign up
2. Import from GitHub or drag-drop the folder
3. Deploy — your site is live in seconds

---

## Customisation Checklist

Before going live, update the following:

- [ ] Replace `+234 701 241 1394` with final phone number throughout
- [ ] Replace `mustech_solution@gmail.com` with final email
- [ ] Add real portfolio project images in `assets/img/`
- [ ] Update WhatsApp links with final number
- [ ] Add real social media profile URLs (Instagram, LinkedIn, X, TikTok)
- [ ] Connect contact form to a backend (Formspree, EmailJS or custom API)
- [ ] Add Google Analytics or similar tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Add real client testimonial photos

---

## Connect Contact Form (Formspree — Free)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your form endpoint (e.g. `https://formspree.io/f/xyzabc`)
3. In `js/main.js`, find the contact form submit handler
4. Replace the `setTimeout` simulation with a real `fetch` call:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: form.querySelector('#fname').value,
    phone: form.querySelector('#fphone').value,
    email: form.querySelector('#femail').value,
    service: form.querySelector('#fservice').value,
    message: form.querySelector('#fmsg').value,
  })
}).then(res => {
  if (res.ok) {
    formWrap.style.display = 'none';
    success.style.display = 'block';
  }
});
```

---

## Brand Colours

| Name         | Hex       | Usage                          |
|-------------|-----------|-------------------------------|
| Navy Deep Blue | `#000066` | Primary brand colour, backgrounds |
| Electric Blue  | `#00CCFF` | Accent, CTAs, highlights       |
| White          | `#ffffff` | Text on dark, clean backgrounds|
| Navy Dark      | `#000033` | Footer, deep sections          |
| Navy Light     | `#003399` | Gradients, secondary bg        |

---

## Support

For technical support or website updates, contact:  
📞 +234 701 241 1394  
✉️ mustech_solution@gmail.com  
💬 WhatsApp: wa.me/2347012411394

---

*Built with ❤️ for Mustech Dynamic Solutions · Lagos, Nigeria*
