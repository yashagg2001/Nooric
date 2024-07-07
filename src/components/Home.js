import React from 'react';
import './styling/Home.css'; // Import your CSS file for home page styles if using separate file

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Nooric</h1>
        <p>Discover Excellence in Tea Packaging and Saree E-commerce</p>
      </div>

      <div className="content">
        <section className="section">
          <h2>Tea Packaging and Manufacturing</h2>
          <p>
            Experience the artistry of tea with our meticulously crafted packaging solutions. Whether you're a connoisseur or new to the world of tea, our range offers quality and freshness in every sip. From sourcing premium tea leaves to designing bespoke packaging, we ensure your tea experience is nothing short of exceptional.
          </p>
        </section>

        <section className="section">
          <h2>E-commerce Saree Collection</h2>
          <p>
            Step into elegance with our curated collection of sarees, designed to celebrate tradition and contemporary fashion. Our e-commerce platform showcases a diverse array of sarees, each embodying craftsmanship and timeless beauty. Whether you seek a classic weave or a modern twist, explore sarees that resonate with your style.
          </p>
        </section>

        <section className="section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Quality Assurance:</strong> We uphold the highest standards of quality in every product we offer, ensuring freshness in teas and craftsmanship in sarees.</li>
            <li><strong>Innovation:</strong> From innovative packaging designs to modern saree collections, we stay ahead with trends while honoring cultural heritage.</li>
            <li><strong>Customer Satisfaction:</strong> Your satisfaction is our priority. We strive to exceed expectations with personalized service and attention to detail.</li>
          </ul>
        </section>
    
      </div>
    </div>
  );
}

export default Home;
