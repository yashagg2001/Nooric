import React, { useState } from 'react';
import './styling/Header.css'; // Import your CSS file for header styles if using separate file

const Header = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><button onClick={toggleContactInfo}>Contact</button></li>
        </ul>
      </nav>
      {showContactInfo && (
        <div className="contact-info">
          <p>Phone Number: +91-9812130219</p>
          <p>Email: support@nooric.com </p>
          <p>Email: maheshgupta149@gmail.com</p>
        </div>
      )}
    </header>
  );
}

export default Header;
