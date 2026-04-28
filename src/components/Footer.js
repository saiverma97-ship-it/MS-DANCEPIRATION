'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>MS <span>DANCEPIRATION</span></h3>
          <p>Inspiring passion through movement. Our academy is dedicated to nurturing talent across all dance forms.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>Gumpa Road, EV Showroom, Art City.</p>
          <p>Phone: +91 84315 56143</p>
          <p>Email: info@msdancepiration.com</p>
        </div>
        
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe for updates and workshop alerts.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email" />
            <button type="submit" className="btn-primary mini">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MS Dancepiration Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
