/**
 * MUSTECH DYNAMIC SOLUTIONS
 * Components — navbar, footer injected into every page
 * components.js
 */

'use strict';

const MUSTECH = {
  nav: `
  <div class="page-progress" id="progress-bar"></div>

  <!-- Navbar -->
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="nav-wrap">
        <a href="index.html" class="nav-logo">
        <img src="assets/Logo.SVG/Icon_Wordmark White.svg" alt="" width="50%">
        </a>
        <ul class="nav-menu">
          <li><a href="index.html" class="nav-link-item">Home</a></li>
          <li><a href="about.html" class="nav-link-item">About</a></li>
          <li><a href="services.html" class="nav-link-item">Services</a></li>
          <li><a href="portfolio.html" class="nav-link-item">Portfolio</a></li>
          <li><a href="contact.html" class="nav-link-item">Contact</a></li>
          <li><a href="contact.html" class="nav-cta-btn">Talk to Us</a></li>
        </ul>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Nav -->
  <div class="mobile-nav-overlay" id="mobile-overlay"></div>
  <div class="mobile-nav" id="mobile-nav">
    <nav class="mobile-nav-links">
      <a href="index.html"     class="mobile-nav-link">Home</a>
      <a href="about.html"     class="mobile-nav-link">About</a>
      <a href="services.html"  class="mobile-nav-link">Services</a>
      <a href="portfolio.html" class="mobile-nav-link">Portfolio</a>
      <a href="contact.html"   class="mobile-nav-link">Contact</a>
    </nav>
    <a href="contact.html" class="mobile-nav-cta">Get Started →</a>
  </div>`,

  footer: `
  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row" style="grid-template-columns: 2fr 1fr 1fr 2fr; gap: 3rem;">
        <!-- Brand -->
        <div>
        <!-- class="footer-brand-name">MUS<span>TECH</span></div>
          <small class="footer-tagline">Dynamic Solutions</small>-->
          <img src="assets/Logo.PNG/MDS_white_logomark.png" alt="" width="50%">
          <p class="footer-desc">Your all-in-one tech partner in Lagos, Nigeria. We deliver innovative digital solutions that empower businesses to grow.</p>
          <div class="social-row" style="margin-top: 1.5rem;">
            <a href="#" class="social-icon" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-icon" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="social-icon" aria-label="Twitter/X"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="social-icon" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
            <a href="https://wa.me/2347012411394" class="social-icon" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <div class="footer-col-title">Services</div>
          <nav class="footer-links">
            <a href="services.html">Web Development</a>
            <a href="services.html">Mobile Apps</a>
            <a href="services.html">Brand Design</a>
            <a href="services.html">UI/UX Design</a>
            <a href="services.html">Gadget Repairs</a>
            <a href="services.html">Tech Insights</a>
          </nav>
        </div>

        <!-- Company -->
        <div>
          <div class="footer-col-title">Company</div>
          <nav class="footer-links">
            <a href="about.html">About Us</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="contact.html">Contact</a>
            <a href="contact.html">Get a Quote</a>
          </nav>
        </div>

        <!-- Newsletter -->
        <div>
          <div class="footer-col-title">Stay Ahead</div>
          <p class="footer-newsletter-desc">Get weekly tech insights, tips, and exclusive Mustech offers delivered to your inbox.</p>
          <form class="newsletter-form" novalidate>
            <div class="footer-input-wrap">
              <input type="email" class="footer-input" placeholder="your@email.com" required>
              <button type="submit" class="footer-input-btn">→</button>
            </div>
          </form>
          <p style="font-size: 0.7rem; color: rgba(255,255,255,0.25); margin-top: 0.6rem;">No spam. Unsubscribe anytime.</p>
          <div style="margin-top: 1.5rem; font-size: 0.78rem; color: rgba(255,255,255,0.35);">
            <p><i class="bi bi-telephone" style="color: var(--electric); margin-right: 6px;"></i>+234 701 241 1394</p>
            <p style="margin-top: 0.4rem;"><i class="bi bi-envelope" style="color: var(--electric); margin-right: 6px;"></i>mustechdynamicsolutions@gmail.com</p>
          </div> 
          <div class="social-links">
            <a href=" https://www.instagram.com/p/DWF7l77DD6b/?igsh=am9tZmczOGJkMGpk" target="_blank" class="social-link" title="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" target="_blank" class="social-link" title="LinkedIn"><i class="bi bi-linkedin" ></i></a>
            <a href="#" target="_blank" class="social-link" title="X / Twitter" ><i class="bi bi-twitter-x" ></i></a>
            <a href="Tiktok: https://vt.tiktok.com/ZSubmVTfA" target="_blank" class="social-link" title="TikTok" ><i class="bi bi-tiktok"></i></a>
            <a href="https://wa.me/2347012411394" target="_blank" class="social-link" title="WhatsApp" ><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
       
      </div>

      <div class="footer-bottom">
        <span>© 2026 Mustech Dynamic Solutions. All rights reserved.</span>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Back to Top -->
  <button class="back-top" id="back-top" aria-label="Back to top">
    <i class="bi bi-arrow-up"></i>
  </button>

  <!-- WhatsApp Float -->
  <a href="https://wa.me/2347012411394?text=Hello%20Mustech!%20I'd%20like%20to%20discuss%20a%20project."
     target="_blank" rel="noopener"
     id="wa-float"
     style="position:fixed;bottom:5rem;right:2rem;width:50px;height:50px;border-radius:50%;
            background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;
            font-size:1.3rem;z-index:997;box-shadow:0 4px 20px rgba(37,211,102,0.4);
            opacity:0;transform:translateY(20px);transition:all 0.4s ease;text-decoration:none;"
     aria-label="Chat on WhatsApp">
    <i class="bi bi-whatsapp"></i>
  </a>

  <!-- Cookie Bar -->
  <div class="cookie-bar" id="cookie-bar">
    <div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
      <p>We use cookies to improve your experience. <a href="#">Learn more</a></p>
      <div style="display:flex;gap:0.5rem;">
        <button class="cookie-accept" style="background:var(--electric);color:var(--navy);border:none;border-radius:20px;padding:0.4rem 1.2rem;font-size:0.8rem;font-weight:700;cursor:pointer;">Accept</button>
        <button class="cookie-decline" style="background:transparent;color:rgba(255,255,255,0.5);border:1px solid rgba(255,255,255,0.2);border-radius:20px;padding:0.4rem 1rem;font-size:0.8rem;cursor:pointer;">Decline</button>
      </div>
    </div>
  </div>`
};



// Inject nav and footer into every page
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder    = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder)    navPlaceholder.innerHTML    = MUSTECH.nav;
  if (footerPlaceholder) footerPlaceholder.innerHTML = MUSTECH.footer;

  // Highlight active page
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-item, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Show WA float after delay
  setTimeout(() => {
    const waf = document.getElementById('wa-float');
    if (waf) { waf.style.opacity = '1'; waf.style.transform = 'translateY(0)'; }
  }, 3000);
});
