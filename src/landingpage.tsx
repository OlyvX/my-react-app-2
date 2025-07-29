// FitPulse.jsx
import React from 'react';
import './FitPulse.css';

const FitPulse = () => {
  const openPost = (postId: string) => {
    console.log(`Opening post: ${postId}`);
    // Add your post opening logic here
  };

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Newsletter subscription submitted');
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">FitPulse</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#posts">Posts</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Transform Your Body</h1>
              <div className="hero-subtitle">Unleash Your Fitness Potential</div>
              <p className="hero-description">
                Discover science-backed workouts, nutrition guides, and wellness tips that will revolutionize your fitness journey. From beginner-friendly routines to advanced training protocols, we've got everything you need to achieve your goals.
              </p>
              <div className="cta-buttons">
                <a href="#posts" className="btn btn-primary">🔥 Start Reading</a>
                <a href="#newsletter" className="btn btn-secondary">📧 Join Community</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="fitness-visual">
                <div className="fitness-orbits">
                  <div className="orbit orbit-1">
                    <div className="orbit-dot dot-1"></div>
                  </div>
                  <div className="orbit orbit-2">
                    <div className="orbit-dot dot-2"></div>
                  </div>
                </div>
                <div className="fitness-main">💪</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-posts" id="posts">
        <div className="container">
          <h2 className="section-title">Featured Articles</h2>
          <p className="section-subtitle">Expert insights and actionable advice for your fitness journey</p>
          <div className="posts-grid">
            <article className="post-card" onClick={() => openPost('hiit-workout')}>
              <div className="post-image">🏃‍♂️</div>
              <div className="post-content">
                <div className="post-meta">
                  <span>🔥 HIIT Training</span>
                  <span>• 8 min read</span>
                </div>
                <h3 className="post-title">The Ultimate HIIT Workout Guide for Fat Loss</h3>
                <p className="post-excerpt">Discover how High-Intensity Interval Training can revolutionize your fitness routine and accelerate fat loss in just 20 minutes a day.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="post-card" onClick={() => openPost('strength-training')}>
              <div className="post-image">🏋️‍♀️</div>
              <div className="post-content">
                <div className="post-meta">
                  <span>💪 Strength Training</span>
                  <span>• 12 min read</span>
                </div>
                <h3 className="post-title">Building Muscle: A Complete Beginner's Guide</h3>
                <p className="post-excerpt">Everything you need to know about strength training, from proper form to progressive overload principles for maximum muscle growth.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="post-card" onClick={() => openPost('nutrition')}>
              <div className="post-image">🥗</div>
              <div className="post-content">
                <div className="post-meta">
                  <span>🍎 Nutrition</span>
                  <span>• 10 min read</span>
                </div>
                <h3 className="post-title">Meal Prep Mastery: Fuel Your Fitness Goals</h3>
                <p className="post-excerpt">Learn how to prep nutritious meals that support your fitness goals, save time, and keep you on track throughout the week.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="post-card" onClick={() => openPost('recovery')}>
              <div className="post-image">😴</div>
              <div className="post-content">
                <div className="post-meta">
                  <span>🧘‍♂️ Recovery</span>
                  <span>• 6 min read</span>
                </div>
                <h3 className="post-title">The Science of Recovery: Sleep, Rest, and Regeneration</h3>
                <p className="post-excerpt">Understand why recovery is just as important as training and how to optimize sleep and rest for better performance.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="post-card" onClick={() => openPost('motivation')}>
              <div className="post-image">🎯</div>
              <div className="post-content">
                <div className="post-meta">
                  <span>🚀 Motivation</span>
                  <span>• 5 min read</span>
                </div>
                <h3 className="post-title">Building Unshakeable Fitness Habits</h3>
                <p className="post-excerpt">Discover the psychology behind lasting habit formation and how to make fitness a permanent part of your lifestyle.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="post-card" onClick={() => openPost('home-workout')}>
              <div className="post-image">🏠</div>
              <div className="post-content">
                <div className="post-meta">
                  <span>🏋️ Home Workouts</span>
                  <span>• 7 min read</span>
                </div>
                <h3 className="post-title">No-Equipment Home Workouts That Actually Work</h3>
                <p className="post-excerpt">Effective bodyweight exercises and routines you can do anywhere, no gym membership required.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="categories" id="categories">
        <div className="container">
          <h2 className="section-title">Explore Categories</h2>
          <p className="section-subtitle">Find content tailored to your fitness interests</p>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">🏃‍♂️</div>
              <h3>Cardio & HIIT</h3>
              <p>High-intensity workouts, running tips, and cardiovascular training methods</p>
              <span className="category-count">24 Articles</span>
            </div>
            <div className="category-card">
              <div className="category-icon">💪</div>
              <h3>Strength Training</h3>
              <p>Muscle building, powerlifting, and resistance training guides</p>
              <span className="category-count">18 Articles</span>
            </div>
            <div className="category-card">
              <div className="category-icon">🥗</div>
              <h3>Nutrition</h3>
              <p>Meal planning, supplements, and healthy eating strategies</p>
              <span className="category-count">32 Articles</span>
            </div>
            <div className="category-card">
              <div className="category-icon">🧘‍♀️</div>
              <h3>Wellness</h3>
              <p>Mental health, recovery, yoga, and mindfulness practices</p>
              <span className="category-count">15 Articles</span>
            </div>
            <div className="category-card">
              <div className="category-icon">🎯</div>
              <h3>Weight Loss</h3>
              <p>Fat loss strategies, cutting protocols, and transformation stories</p>
              <span className="category-count">21 Articles</span>
            </div>
            <div className="category-card">
              <div className="category-icon">⚡</div>
              <h3>Performance</h3>
              <p>Athletic training, sports performance, and competition prep</p>
              <span className="category-count">12 Articles</span>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-visual">📧</div>
            <h2>Join Our Fitness Community</h2>
            <p>Get weekly workout tips, nutrition guides, and exclusive content delivered straight to your inbox. Transform your fitness journey with expert insights and motivation.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter your email address"
              />
              <button type="button" className="btn btn-primary" onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>FitPulse</h3>
              <p>Transform your fitness journey with science-backed workouts, nutrition guides, and wellness tips. Your ultimate destination for health and fitness content.</p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📺</a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#posts">Articles</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Categories</h3>
              <ul className="footer-links">
                <li><a href="#">Cardio & HIIT</a></li>
                <li><a href="#">Strength Training</a></li>
                <li><a href="#">Nutrition</a></li>
                <li><a href="#">Wellness</a></li>
                <li><a href="#">Weight Loss</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>📧 info@fitpulse.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 123 Fitness St, Health City, HC 12345</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 FitPulse. All rights reserved. Transform your fitness journey with us.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FitPulse;