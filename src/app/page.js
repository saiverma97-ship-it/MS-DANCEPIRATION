'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const classStyles = [
    { title: 'Hip-Hop', desc: 'Urban energy and street style fusion.', img: '/images/hiphop.png' },
    { title: 'Bollywood', desc: 'The joy and drama of Indian cinema dance.', img: '/images/bollywood.png' },
    { title: 'Contemporary', desc: 'Fluidity, expression, and emotional depth.', img: '/images/contemporary.png' },
    { title: 'Classical', desc: 'Grace and tradition in every mudra.', img: '/images/classical.png' },
    { title: 'Kids Dance', desc: 'Nurturing young talent with fun and rhythm.', img: '/images/kids.png' },
    { title: 'Freestyle', desc: 'Express yourself without boundaries.', img: '/images/hero.png' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-video-bg">
          <img src="/images/hero_classic.png" alt="Hero background" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-up">
          <div className="hero-brand-logo">
            <img src="/images/logo.png" alt="MS DanceLogo" />
            <div className="hero-brand-name">MS DANCEPIRATION BIDAR</div>
          </div>
          <h1 className="hero-title">Inspiring <span>Passion</span> Through Dance</h1>
          <p className="hero-subtitle">MS Dancepiration Academy Bidar - Where art meets professional excellence.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Book a Trial Class</a>
            <a href="#about" className="btn-secondary">Explore Our Legacy</a>
          </div>
        </div>
      </section>

      {/* About Section - Professional Light Theme */}
      <section id="about" className={`about-section section-light ${isVisible.about ? 'animate-fade-up' : ''}`}>
        <div className="section-header">
          <h2>Our <span>Story</span></h2>
          <div className="divider"></div>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <h3>Nurturing Artistry Since 2015</h3>
            <p>Founded by passionate dancers, MS Dancepiration is more than just a dance studio. It's a sanctuary for artists to find their voice through movement.</p>
            <p>Our mission is to provide world-class dance education that transcends technical skill, focusing on emotional expression and confidence building for students of all ages.</p>
            <div className="stats">
              <div className="stat-item"><h4>500+</h4><p>Students</p></div>
              <div className="stat-item"><h4>10+</h4><p>Dance Styles</p></div>
              <div className="stat-item"><h4>50+</h4><p>Performances</p></div>
            </div>
          </div>
          <div className="about-image">
            <div className="img-frame">
              <img src="/images/contemporary.png" alt="Founder/Studio" />
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className={`classes-section ${isVisible.classes ? 'animate-fade-up' : ''}`}>
        <div className="section-header">
          <h2>Classes <span>Offered</span></h2>
          <div className="divider"></div>
        </div>
        <div className="classes-grid">
          {classStyles.map((style, idx) => (
            <div key={idx} className="class-card glass-card">
              <div className="class-img">
                <img src={style.img} alt={style.title} />
              </div>
              <h3>{style.title}</h3>
              <p>{style.desc}</p>
              <a href="#contact" className="read-more">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className={`schedule-section ${isVisible.schedule ? 'animate-fade-up' : ''}`}>
        <div className="section-header">
          <h2>Weekly <span>Schedule</span></h2>
          <div className="divider"></div>
        </div>
        <div className="schedule-table-container glass-card">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05:00 PM</td>
                <td>Hip-Hop (Beg)</td>
                <td>Bollywood (Int)</td>
                <td>Hip-Hop (Beg)</td>
                <td>Bollywood (Int)</td>
                <td>Contemporary</td>
                <td>Kids Combo</td>
              </tr>
              <tr>
                <td>06:30 PM</td>
                <td>Classical</td>
                <td>Contemp (Adv)</td>
                <td>Classical</td>
                <td>Contemp (Adv)</td>
                <td>Freestyle</td>
                <td>Kids Hip-Hop</td>
              </tr>
              <tr>
                <td>08:00 PM</td>
                <td>Bollywood (Beg)</td>
                <td>Hip-Hop (Adv)</td>
                <td>Bollywood (Beg)</td>
                <td>Hip-Hop (Adv)</td>
                <td>Open Session</td>
                <td>Performance Lab</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Instructors Section - Professional Light Theme */}
      <section id="instructors" className={`instructors-section section-light ${isVisible.instructors ? 'animate-fade-up' : ''}`}>
        <div className="section-header">
          <h2>Meet The <span>Experts</span></h2>
          <div className="divider"></div>
        </div>
        <div className="instructors-grid">
          <div className="instructor-card">
            <div className="instructor-img">
              <img src="/images/instructor_1.jpg" alt="Mahesh Gupta Sir" />
              <div className="instructor-social">
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <h4>Mahesh Gupta Sir</h4>
            <p>Founder & Head Instructor</p>
          </div>
          <div className="instructor-card">
            <div className="instructor-img">
              <img src="/images/instructor_2.jpg" alt="Shivlata Mam" />
              <div className="instructor-social">
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <h4>Shivlata Mam</h4>
            <p>Lead Choreographer</p>
          </div>
          <div className="instructor-card">
            <div className="instructor-img">
              <img src="/images/hero.png" alt="Assistant Instructor" />
              <div className="instructor-social">
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <h4>Assistant Coach</h4>
            <p>Specialty: Bollywood & Kids</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={`gallery-section ${isVisible.gallery ? 'animate-fade-up' : ''}`}>
        <div className="section-header">
          <h2>Visual <span>Journey</span></h2>
          <div className="divider"></div>
        </div>
        <div className="gallery-masonry">
          <img src="/images/journey_1.jpg" alt="Dance Performance" />
          <img src="/images/journey_2.jpg" alt="Dance Competition Winners" />
          <img src="/images/journey_3.jpg" alt="Group Dance Pose" />
          <img src="/images/journey_4.jpg" alt="Stage Performance" />
          <img src="/images/journey_5.jpg" alt="Award Ceremony" />
          <img src="/images/journey_6.jpg" alt="Event Group Photo" />
        </div>
      </section>

      {/* Contact Section - Professional Light Theme */}
      <section id="contact" className={`contact-section section-light ${isVisible.contact ? 'animate-fade-up' : ''}`}>
        <div className="section-header">
          <h2>Get In <span>Touch</span></h2>
          <div className="divider"></div>
        </div>
        <div className="contact-container">
          {isSubmitted ? (
            <div className="form-success-message glass-card reveal-content">
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for choosing MS Dancepiration. Our team will contact you within 24 hours.</p>
              <div className="divider"></div>
              <p><strong>Mobile:</strong> <a href="tel:+918431556143">8431556143</a></p>
              <p><strong>Location:</strong> Gumpa Road, EV Showroom</p>
            </div>
          ) : (
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <select required defaultValue="">
                <option value="" disabled>Select Class Interest</option>
                <option value="hiphop">Hip-Hop</option>
                <option value="bollywood">Bollywood</option>
                <option value="contemporary">Contemporary</option>
                <option value="kids">Kids Dance</option>
              </select>
              <textarea placeholder="Your Message" rows="5"></textarea>
              <button type="submit" className="btn-primary">Book My Trial Class</button>
            </form>
          )}
          <div className="contact-info">
            <div className="info-item">
              <h4>Location</h4>
              <p>Gumpa Road, EV Showroom, Art City.</p>
            </div>
            <div className="info-item">
              <h4>Call Us</h4>
              <p><a href="tel:+918431556143" className="clickable-link">+91 84315 56143</a></p>
            </div>
            <div className="info-item">
              <h4>Email Us</h4>
              <p><a href="mailto:info@msdancepiration.com" className="clickable-link">info@msdancepiration.com</a></p>
            </div>
            <div className="info-item">
              <h4>Follow Us</h4>
              <div className="social-row">
                <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
                <a href="#"><i className="fab fa-youtube"></i> YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
