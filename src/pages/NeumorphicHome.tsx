import React from 'react';
import './NeumorphicHome.css';

const NeumorphicHome: React.FC = () => {
  return (
    <div className="neo-home">
      <header className="neo-header">
        <h1>SemperMade</h1>
        <p className="subtitle">Modern Neumorphic Design</p>
      </header>

      <section className="welcome-card">
        <h2>Welcome!</h2>
        <p>Experience a soft and tactile interface crafted with modern neumorphism.</p>
        <button className="neo-button">Get Started</button>
      </section>

      <div className="features-row">
        <div className="feature-card">
          <span role="img" aria-label="speed">⚡</span>
          <p>Fast</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="secure">🔒</span>
          <p>Secure</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="responsive">📱</span>
          <p>Responsive</p>
        </div>
      </div>

      <nav className="neo-nav">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default NeumorphicHome;
