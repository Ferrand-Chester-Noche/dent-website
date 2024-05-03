import React from 'react';
import './Header.css'; // Import the CSS file for styles

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img className="logo" src="/image/logo1.png" />
        <div className="text">
          <div>University of the Philippines</div>
          <div>Department of Clinical Dental Health Sciences</div>
        </div>
      </div>
      <div>
        <button className="loginBtn">
            Login
        </button>
      </div>
    </div>
  );
};

export default Header;
