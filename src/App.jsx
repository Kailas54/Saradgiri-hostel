import React, { useState, useEffect } from 'react';
import './index.css';
import bgImage from './assets/background.jpeg';

function App() {


  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="logo">
          SARADAGIRI<span>HOSTEL</span>
        </div>
        <div className="nav-links">
          <a href="#home" className="active">HOME</a>
          <a href="#facilities">FACILITIES</a>
          <a href="#menu">MENU</a>
          <a href="#contact">CONTACT</a>
        </div>
        <a href="https://wa.me/918891115433" target="_blank" rel="noreferrer" className="register-btn" style={{ textDecoration: 'none' }} title="Book a room at Saradagiri Hostel via WhatsApp">BOOK NOW ↗</a>
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Gradient overlay */}
        <div className="hero-overlay" />

        {/* Giant title – bleeds off both edges like the reference */}
        <h1 className="visually-hidden">Saradagiri Ladies Hostel Varkala Near Sivagiri Mutt</h1>
        <div className="hero-giant-title" aria-hidden="true">
          SARADAGIRI
        </div>

        {/* Main body content – bottom-left like the reference */}
        <div className="hero-body">
          <span className="hero-label">ABOUT THE HOSTEL</span>

          <p className="hero-desc">
            Saradagiri Hostel Varkala Near Sivagiri Mutt Managed by SNV Womens Association, offers convenient and affordable accomodation solution for students and young professionals.
          </p>

          <div className="hero-cta-row">
            <span className="hero-cta-label">ADMISSIONS OPEN 2026 ↓</span>
            <a href="https://www.google.com/maps/search/Sivagiri+Mutt,+Varkala" target="_blank" rel="noreferrer" className="hero-explore" title="View Saradagiri Hostel location on Google Maps">LOCATION ↗</a>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="hero-bottom-bar">
          <div className="hero-bottom-col">
            <span className="bottom-label">LOCATION</span>
            <span className="bottom-value">Varkala Near Sivagiri Mutt</span>
          </div>
          <div className="hero-bottom-col">
            <span className="bottom-label">CAPACITY</span>
            <span className="bottom-value">500 + Students</span>
          </div>
          <div className="hero-bottom-col">
            <span className="bottom-label">ESTABLISHED</span>
            <span className="bottom-value">Since 1987</span>
          </div>
          <div className="hero-bottom-col">
            <span className="bottom-label">FACILITIES</span>
            <span className="bottom-value">Wi-Fi · Mess · Security · Study Hall</span>
          </div>
        </div>

        {/* Bottom giant word – right side like "STUDIO" in the reference */}
        <div className="hero-giant-bottom" aria-hidden="true">HOSTEL</div>

        {/* Marquee – pinned to bottom of hero */}
        <div className="marquee-container">
          <div className="marquee-content">
            SARADAGIRI HOSTEL 2026&nbsp;•&nbsp;A HOME AWAY FROM HOME&nbsp;•&nbsp;
            VARKALA NEAR SIVAGIRI MUTT&nbsp;•&nbsp;
            ADMISSIONS OPEN&nbsp;•&nbsp;SARADAGIRI HOSTEL 2026&nbsp;•&nbsp;
            A HOME AWAY FROM HOME&nbsp;•&nbsp;VARKALA NEAR SIVAGIRI MUTT&nbsp;•&nbsp;
            ADMISSIONS OPEN&nbsp;•&nbsp;
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section id="facilities" className="facilities-section">
        <div className="facilities-header">
          <div className="facilities-title-col">
            <h2 className="facilities-title">
              OUR <span>FACILITIES</span>
            </h2>
            <p className="facilities-desc">
              Deep-dive into specialized amenities crafted to empower every stage of your college journey, from comfort to focused learning.
            </p>
          </div>
          <a href="#" className="view-facilities-btn">VIEW FULL SCHEDULE</a>
        </div>

        <div className="facilities-grid">
          {/* Card 1 */}
          <div className="facility-card">
            <div className="facility-image-wrapper">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" alt="Nutritious and hygienic dining hall at Saradagiri Ladies Hostel" />
            </div>
            <div className="facility-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
            </div>
            <div className="facility-content">
              <span className="facility-subtitle">HYGIENIC & NUTRITIOUS</span>
              <h3 className="facility-name">DINING</h3>
              <p className="facility-text">A spacious mess providing healthy and delicious meals, ensuring students feel right at home.</p>

            </div>
          </div>

          {/* Card 2 */}
          <div className="facility-card">
            <div className="facility-image-wrapper">
              <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop" alt="24/7 secure environment at Saradagiri Hostel" />
            </div>
            <div className="facility-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div className="facility-content">
              <span className="facility-subtitle">SAFE & SECURE</span>
              <h3 className="facility-name">24*7 SECURITY SYSTEM</h3>
              <p className="facility-text">Round-the-clock CCTV surveillance and professional security personnel ensuring a safe environment.</p>

            </div>
          </div>

          {/* Card 3 */}
          <div className="facility-card">
            <div className="facility-image-wrapper">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Quiet study hall for focused learning at Saradagiri Hostel" />
            </div>
            <div className="facility-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            </div>
            <div className="facility-content">
              <span className="facility-subtitle">FOCUSED LEARNING</span>
              <h3 className="facility-name">STUDY HALL</h3>
              <p className="facility-text">Quiet and well-lit study rooms with high-speed Wi-Fi, perfect for uninterrupted academic preparation.</p>

            </div>
          </div>

          {/* Card 4 */}
          <div className="facility-card">
            <div className="facility-image-wrapper">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop" alt="Comfortable guest accommodation at Saradagiri Hostel" />
            </div>
            <div className="facility-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <div className="facility-content">
              <span className="facility-subtitle">COMFORTABLE STAYS</span>
              <h3 className="facility-name">GUEST ROOMS</h3>
              <p className="facility-text">We offer comfortable and affordable short-term accommodation for guests and visiting parents, ensuring a pleasant experience.</p>

            </div>
          </div>
        </div>
      </section>

      {/* ── MENU SECTION ── */}
      <section id="menu" className="menu-section">
        <div className="menu-bg-image">
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop" alt="Food background" />
          <div className="menu-bg-overlay"></div>
        </div>

        <div className="menu-container">
          <div className="menu-header">
            <h2>DELICIOUS HOSTEL MENU</h2>
            <h3>SPECIALS</h3>
          </div>

          <div className="menu-cards-wrapper">
            <div className="menu-card menu-card-left">
              <div className="menu-card-border">
                <div className="menu-card-inner">
                  <h4>MON - WED</h4>
                  <div className="menu-items">
                    <div className="menu-day-group">
                      <span className="menu-day-title">MONDAY</span>
                      <div className="menu-item">
                        <span className="item-name">Upma, Banana, Tea</span>
                        <span className="item-price">MORNING</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Fish Curry, Thoran, Pickle</span>
                        <span className="item-price">NOON</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Ilayada, Tea</span>
                        <span className="item-price">EVENING</span>
                      </div>
                    </div>
                    <div className="menu-day-group">
                      <span className="menu-day-title">TUESDAY</span>
                      <div className="menu-item">
                        <span className="item-name">Puttu, Kadala Curry, Tea</span>
                        <span className="item-price">MORNING</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Fish Curry, Mezhukkupuratti, Pickle</span>
                        <span className="item-price">NOON</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Kozhukkatta, Coffee</span>
                        <span className="item-price">EVENING</span>
                      </div>
                    </div>
                    <div className="menu-day-group">
                      <span className="menu-day-title">WEDNESDAY</span>
                      <div className="menu-item">
                        <span className="item-name">Appam, Egg Curry, Tea</span>
                        <span className="item-price">MORNING</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Mezhukkupuratti, Rasam, Pickle</span>
                        <span className="item-price">NOON</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Biscuit, Tea</span>
                        <span className="item-price">EVENING</span>
                      </div>
                    </div>
                  </div>
                  <p className="menu-footer-text">Nutritious and hygienic food prepared daily with fresh ingredients.</p>
                </div>
              </div>
            </div>

            <div className="menu-card menu-card-right">
              <div className="menu-card-pattern"></div>
              <div className="menu-card-border">
                <div className="menu-card-inner">
                  <h4>THU - SUN</h4>
                  <div className="menu-items">
                    <div className="menu-day-group">
                      <span className="menu-day-title">THURSDAY</span>
                      <div className="menu-item">
                        <span className="item-name">Idli, Sambar, Tea</span>
                        <span className="item-price">MORNING</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Fish Curry, Mezhukkupuratti, Pickle</span>
                        <span className="item-price">NOON</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Madakku / Bread, Tea</span>
                        <span className="item-price">EVENING</span>
                      </div>
                    </div>
                    <div className="menu-day-group">
                      <span className="menu-day-title">FRIDAY</span>
                      <div className="menu-item">
                        <span className="item-name">Appam, Potato Curry, Tea</span>
                        <span className="item-price">MORNING</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Fish Curry, Thoran, Pickle</span>
                        <span className="item-price">NOON</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Bread Toast, Tea</span>
                        <span className="item-price">EVENING</span>
                      </div>
                    </div>
                    <div className="menu-day-group">
                      <span className="menu-day-title">SATURDAY</span>
                      <div className="menu-item">
                        <span className="item-name">Dosa, Sambar, Tea</span>
                        <span className="item-price">MORNING</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Sambar, Mezhukkupuratti, Pickle</span>
                        <span className="item-price">NOON</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Ilayada, Coffee</span>
                        <span className="item-price">EVENING</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Kanji, Payar, Pickle</span>
                        <span className="item-price">NIGHT</span>
                      </div>
                    </div>
                    <div className="menu-day-group">
                      <span className="menu-day-title">SUNDAY</span>
                      <div className="menu-item">
                        <span className="item-name">Wheat Dosa, Tomato Curry, Tea</span>
                        <span className="item-price">MORNING</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Parippu, Chicken, Pickle</span>
                        <span className="item-price">NOON</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Aval Nanachathu, Tea</span>
                        <span className="item-price">EVENING</span>
                      </div>
                      <div className="menu-item">
                        <span className="item-name">Chapathi/Porotta, Chicken</span>
                        <span className="item-price">NIGHT</span>
                      </div>
                    </div>
                  </div>
                  <p className="menu-footer-text">Nutritious and hygienic food prepared daily with fresh ingredients.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-vertical-text">
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>U</span>
          </div>
        </div>

        <div className="menu-bottom-pill">
          HYGIENIC AND NUTRITIOUS MEALS SERVED DAILY
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="footer-section">
        <div className="footer-content">
          <div className="footer-col">
            <h3 className="footer-logo">SARADAGIRI<span>HOSTEL</span></h3>
            <p className="footer-desc">Managed by SNV Womens Association</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">LOCATION</h4>
            <p className="footer-text">Varkala Near Sivagiri Mutt<br />Kerala, India</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">CONTACT</h4>
            <p className="footer-text"><strong>Akhila Binesh (Warden):</strong> <br />+91 88911 15433</p>
            <p className="footer-text"><strong>Abha Shaju:</strong> <br />+91 95446 08530</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Saradagiri Hostel. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
