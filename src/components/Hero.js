import React, { useState } from 'react';
import './Hero.css';
import bannerImg from './images/banner_img.png';
import shape1 from './images/banner_shape01.png';
import shape2 from './images/banner_shape02.png';
import shape3 from './images/banner_shape03.png';
import shape4 from './images/banner_shape04.png';
import shape6 from './images/banner_shape07.png';
import shape7 from './images/banner_shape07.png';
import aboutImage from './images/h2_about_img.png';

const portfolioCardData = [
  { size: '520X723' },
  { size: '519X722' },
  { size: '514X722' },
  { size: '520X723' },
  { size: '519X722' },
  { size: '514X722' },
];


const services = [
  {
   
    title: 'Search Engine Optimization',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
   
    title: 'Website Development',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
    
    title: 'Pay-Per-Click Advertising',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
    
    title: 'Social Media Marketing',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
   
    title: 'Email Marketing',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
   
    title: 'Content Marketing',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  }
];

// Testimonial data for the section
const testimonials = [
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ...',
    name: 'Davis Levin',
    role: 'CEO Kawasaki Inc.',
    avatar: require('./images/avatar-1.png'),
    color: '#f59e42',
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ...',
    name: 'Davis Levin',
    role: 'CEO Kawasaki Inc.',
    avatar: require('./images/avatar-2.png'),
    color: '#f59e42',
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ...',
    name: 'Davis Levin',
    role: 'CEO Kawasaki Inc.',
    avatar: require('./images/avatar-3.png'),
    color: '#22c55e',
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ...',
    name: 'Davis Levin',
    role: 'CEO Kawasaki Inc.',
    avatar: require('./images/avatar-4.png'),
    color: '#6366f1',
  },
];

const Hero = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const visibleCards = portfolioCardData.slice(sliderIndex, sliderIndex + 3);
  const canSlideLeft = sliderIndex > 0;
  const canSlideRight = sliderIndex < portfolioCardData.length - 3;

  const handleLeft = () => {
    if (canSlideLeft) setSliderIndex(sliderIndex - 1);
  };
  const handleRight = () => {
    if (canSlideRight) setSliderIndex(sliderIndex + 1);
  };

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const handleTestimonialLeft = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const handleTestimonialRight = () => {
    setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
  <div className="hero-image-container">
    <img src={bannerImg} className="main-hero-image" />
  </div>
  <div className="hero-content">
    <span className="subtitle">Amazing <span>Starts</span> Here</span>
    <h1 className="title">Grow Your Business Using Our Services</h1>
    <p>We are a team of talented designers making websites with React.</p>
    <a href="/contact" className="contact-us-btn">Contact Us</a>
  </div>
</div>

<div className="decorative-shapes">
  <img src={shape1} alt="shape" className="shape shape1" />
  <img src={shape2} alt="shape" className="shape shape2" />
  <img src={shape3} alt="shape" className="shape shape3" />
  <img src={shape4} alt="shape" className="shape shape4" />
  <img src={shape6} alt="shape" className="shape shape6" />
  <img src={shape7} alt="shape" className="shape shape7" />
</div>
<section className="services-section">
  <div className="services-container">
    <div className="service-card">
      <img src={require('./images/services_icon01.png')} alt="UIUX Design" />
      <h3>UIUX Design</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="service-card">
      <img src={require('./images/services_icon02.png')} alt="Product Design" />
      <h3>Product Design</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="service-card">
      <img src={require('./images/services_icon03.png')} alt="Website Design" />
      <h3>Website Design</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="service-card">
      <img src={require('./images/services_icon04.png')} alt="Branding Design" />
      <h3>Branding Design</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
  </div>
</section>


<section className="about-section">
  <div className="about-wrapper">
    <div className="about-content">
      <span className="about-badge">About Company</span>
      <h2 className="about-title">
        A Full Service Design <br /> and Branding Agency
      </h2>
      <p className="about-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard.
      </p>

      <div className="about-features">
        <div className="feature-item">
          <img src={require('./images/icon1.png')} alt="Concept" />
          <div>
            <h4>Concept Creation</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

        <div className="feature-item">
          <img src={require('./images/icon2.png')} alt="Sketch" />
          <div>
            <h4>Sketch Drawing</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <p>Think Creative Agency Are a Full Service Design</p>
        <button className="about-button">Read More</button>
      </div>
    </div>

    <div className="about-image">
  <img src={aboutImage} alt="About Visual" />
</div>
  </div>
</section>

<section className="team-section">
      <div className="team-wrapper">
        <div className="team-content">
          {/* Left side - Static team image */}
          <div className="team-avatars">
            <div className="avatar-container">
              <img 
                src={require('./images/team_main_img.png')} 
                alt="Our Team" 
                className="team-image"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="team-text">
            <div className="content-blur-overlay">
              <span className="team-badge">Our Team</span>
              <h2 className="team-title">
                An Essential <span className="title-blur">Aspect of</span><br />
                <span className="title-blur">Creativity is Not</span><br />
                <span className="title-blur">Being</span><br />
                Afraid to Fail
              </h2>
              <p className="team-description">
                <span className="desc-blur">Lorem Ipsum is simply dummy text of the printing and</span><br />
                <span className="desc-blur">typesetting industry. Lorem Ipsum has been the</span><br />
                <span className="desc-blur">industry's standard.</span>
              </p>
              <button className="team-button">
                <span>Meet Our Team</span>
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Portfolio Section - Redesigned */}
    <section className="portfolio-showcase-section">
      <div className="portfolio-showcase-container">
        {/* Left Side */}
        <div className="portfolio-showcase-left portfolio-showcase-left-centered">
          <div className="portfolio-badge-row">
           
            <span className="portfolio-badge">Our Complete Craft</span>
          </div>
          <h2 className="portfolio-showcase-title">
            Some of Our<br />Work in Craft<br />Digital Agency
          </h2>
          <p className="portfolio-showcase-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button className="portfolio-showcase-btn">View All Project</button>
          <div className="portfolio-showcase-arrows">
            <span className={`arrow-btn${!canSlideLeft ? ' disabled' : ''}`} onClick={handleLeft}>&#8592;</span>
            <span className={`arrow-btn${!canSlideRight ? ' disabled' : ''}`} onClick={handleRight}>&#8594;</span>
          </div>
          <div className="portfolio-showcase-decorative portfolio-showcase-decorative-top"></div>
          <div className="portfolio-showcase-decorative portfolio-showcase-decorative-bottom"></div>
        </div>
        {/* Right Side */}
        <div className="portfolio-showcase-right">
          <div className="portfolio-showcase-cards">
            {visibleCards.map((card, idx) => (
              <div className="portfolio-showcase-card" key={sliderIndex + idx}>
                <div className="portfolio-showcase-card-inner">
                  <img src={require(`./images/port${(sliderIndex + idx) % 4 + 1}.webp`)} alt={`portfolio-${sliderIndex + idx + 1}`} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'36px'}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="testimonials-section" style={{position: 'relative', overflow: 'hidden'}}>
      {/* Animated background shapes */}
      <img src={require('./images/work_shape02.png')} alt="bg-shape" className="testimonial-bg-shape shape02" />
      <img src={require('./images/work_shape03.png')} alt="bg-shape" className="testimonial-bg-shape shape03" />
      <img src={require('./images/work_shape01.png')} alt="bg-shape" className="testimonial-bg-shape shape01" />
      <div className="testimonials-header">
        <span className="testimonials-subtitle">Testimonials</span>
        <h2 className="testimonials-title">What Our Customer Say<br />About Us</h2>
      </div>
      <div className="testimonials-carousel-wrapper" style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',maxWidth:'100vw'}}>
        <button className="testimonials-arrow left" onClick={handleTestimonialLeft} aria-label="Previous testimonial">&#8592;</button>
        <div className="testimonials-carousel-card" style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',maxWidth:'420px'}}>
          <div className="testimonial-card" key={testimonialIndex}>
            <div className="testimonial-quote-mark">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C12 20 14 16 18 16V12C12 12 8 16 8 24H12ZM24 24C24 20 26 16 30 16V12C24 12 20 16 20 24H24Z" fill="#f59e42"/>
              </svg>
            </div>
            <div className="testimonial-text">{testimonials[testimonialIndex].text}</div>
            <div className="testimonial-user-row">
              <img src={testimonials[testimonialIndex].avatar} alt={testimonials[testimonialIndex].name} className="testimonial-avatar" style={{ background: testimonials[testimonialIndex].color }} />
              <div>
                <div className="testimonial-name">{testimonials[testimonialIndex].name}</div>
                <div className="testimonial-role">{testimonials[testimonialIndex].role}</div>
              </div>
            </div>
          </div>
        </div>
        <button className="testimonials-arrow right" onClick={handleTestimonialRight} aria-label="Next testimonial">&#8594;</button>
      </div>
      <div className="testimonials-pagination">
        {testimonials.map((_, i) => (
          <span className={`testimonials-dot${i === testimonialIndex ? ' active' : ''}`} key={i} onClick={() => setTestimonialIndex(i)}></span>
        ))}
      </div>
    </section>




    <section className="marquee-section">
        <div className="marquee-container">
          <div className="marquee marquee-top">
            <div className="marquee-content">
              {[...services, ...services].map((service, index) => (
                <span key={index}>{service.title}</span>
              ))}
            </div>
          </div>
          <div className="marquee marquee-bottom">
            <div className="marquee-content reverse">
              {[...services, ...services].map((service, index) => (
                <span key={index}>{service.title}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

    <section className="consultation-section">
      <div className="consultation-container">
        {/* Left Side */}
        <div className="consultation-left">
          <img src={require('./images/consultation_icon01.png')} alt="icon" className="consultation-main-icon" />
          <div className="consultation-badge">95% Accuracy</div>
          <h2 className="consultation-title">Worldwide Best Digital<br />Marketing Agency</h2>
          <p className="consultation-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          </p>
          <div className="consultation-features-row">
            <div className="consultation-feature">
              <span className="consultation-feature-icon">
                <img src={require('./images/consultation_icon02.png')} alt="icon" />
                <span className="consultation-feature-badge">12x</span>
              </span>
              <span className="consultation-feature-text">Faster Order<br />Processing</span>
            </div>
            <div className="consultation-feature">
              <span className="consultation-feature-icon">
                <img src={require('./images/consultation_icon03.png')} alt="icon" />
                <span className="consultation-feature-badge consultation-feature-badge-orange">95%</span>
              </span>
              <span className="consultation-feature-text">
                Processing<br />Accuracy
             
              </span>
            </div>
          </div>
          <div className="consultation-decor consultation-decor-left"></div>
        </div>
        {/* Right Side */}
        <div className="consultation-right">
          <form className="consultation-form">
            <h3 className="consultation-form-title">Free Consultation</h3>
            <input type="text" placeholder="Name" className="consultation-input" />
            <input type="email" placeholder="Email Address" className="consultation-input" />
            <input type="tel" placeholder="Phone Number" className="consultation-input" />
            <input type="text" placeholder="Subject" className="consultation-input" />
            <button type="submit" className="consultation-submit-btn">Consultation</button>
          </form>
          <div className="consultation-decor consultation-decor-right"></div>
        </div>
      </div>
    </section>

    <section className="blog-section">
      <div className="blog-header">
        <span className="blog-subtitle">My Blog</span>
        <h2 className="blog-title">News & Updates</h2>
        <p className="blog-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy</p>
      </div>
      <div className="blog-cards-row">
        {[1,2,3].map((item, idx) => (
          <div className="blog-card" key={idx}>
            <div className="blog-card-image" style={{background:'#bbb', borderRadius:'24px 24px 0 0', height:'340px', display:'flex',alignItems:'center',justifyContent:'center',fontSize:'64px',color:'#111',fontWeight:'500'}}>
              <img src={require(`./images/blog-${idx+1}.webp`)} alt={`blog-${idx+1}`} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'24px 24px 0 0'}} />
            </div>
            <div className="blog-card-footer">
              <div className="blog-card-category">Branding</div>
              <div className="blog-card-title">How To Create JavaScript Vanilla Gantt Chart: Adding</div>
              <div className="blog-card-author-row">
                <span className="blog-card-author-name">By Ataur</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="newsletter-section">
      <div className="newsletter-bg-map"></div>
      <div className="newsletter-header">
        <span className="newsletter-subtitle">Get update</span>
        <h2 className="newsletter-title">Get latest updates<br />and deals!</h2>
      </div>
      <form className="newsletter-form">
        <input type="email" className="newsletter-input" placeholder="Enter your email address" />
        <button type="submit" className="newsletter-btn">Subscribe</button>
      </form>
      {/* Decorative shapes */}
      <img src={require('./images/newsletter_shape01.png')} className="newsletter-shape newsletter-shape1" alt="shape" />
      <img src={require('./images/newsletter_shape02.png')} className="newsletter-shape newsletter-shape2" alt="shape" />
      <img src={require('./images/newsletter_shape03.png')} className="newsletter-shape newsletter-shape3" alt="shape" />
      <img src={require('./images/newsletter_shape04.png')} className="newsletter-shape newsletter-shape4" alt="shape" />
      <img src={require('./images/newsletter_shape05.png')} className="newsletter-shape newsletter-shape5" alt="shape" />
      <img src={require('./images/newsletter_shape06.png')} className="newsletter-shape newsletter-shape6" alt="shape" />
    </section>

    </section>





  );
};

export default Hero; 