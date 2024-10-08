import React from "react";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";

import Profile from '../Assets/profile.jpeg';
import './BusinessCardMobile.css'; // Import the CSS file

const BusinessCardMobile = () => {
  return (
    <div className="card-container">
      {/* Profile Section */}
      <div className="profile-container">
        <div className="profile">
          <img
            src={Profile}
            alt="profile"
            className="profile-image"
          />
        </div>
        <div className="profile-details">
          <h2 className="name">Abhishek Ajay Ghushe</h2>
          <p className="position">Director & CEO</p>
          <button className="save-button">Save Contact</button>
          
         
        </div>
      </div>
      <div>
      <h4 style={{textAlign:"left",color:"#015c8b"}}>About</h4>
      <p style={{fontSize:"10px",textAlign:"left",color:"rgb(104 117 124)"}}>CEO AND Founder of Techgicus Software Solution PVT. LTD. and this company build customize software and serve software service </p>

      </div>

      {/* Icon Section */}
      <h4 style={{textAlign:"left",color:"#015c8b"}}>Social Links</h4>
      <div className="icon-container">
      
    
      <a href="https://wa.me/9284614144" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp"><FaWhatsapp className="icon" /></a>
      
      <a href="https://www.facebook.com/abhishek.ghushe.5" target="_blank" rel="noopener noreferrer" className="icon-link facebook"><FaFacebook className="icon" /></a>
      <a href="https://www.instagram.com/abhishekghushe/profilecard/?igsh=MWZobWx2d21ia3ZxcA==" target="_blank" rel="noopener noreferrer" className="icon-link instagram"><FaInstagram className="icon" /></a>
      <a href="https://www.linkedin.com/in/abhishek-ajay-ghushe-1607461b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon-link linkedin"><FaLinkedin className="icon" /></a>
      <a href="https://youtube.com/@techgicus6310?si=nWvilPdl8D7HnCO1" target="_blank" rel="noopener noreferrer" className="icon-link youtube"><FaYoutube className="icon" /></a>
   
      </div>
      <h4 style={{textAlign:"left",color:"#015c8b"}}>Quick Contact</h4>
      <div className="Contact-container">
      
      <div className="icon-wrapper" >
      <a href="tel:+919284614144" className="icon-link">
      <BsTelephoneFill className="icon1" />
    
      </a>
      
      </div>
      <div className="icon-wrapper">
      <a href="mailto:abhighushe@gmail.com" className="icon-link"><FaEnvelope className="icon1" /></a>
      </div>
      <div className="icon-wrapper">
      <a href="https://g.co/kgs/uTT7h3u" target="_blank" rel="noopener noreferrer" className="icon-link"><AiFillGoogleCircle className="icon1" /></a>
      </div>
      <div className="icon-wrapper">
      <a href="https://maps.app.goo.gl/2ShnbPxuZZ61r6ds6" target="_blank" rel="noopener noreferrer" className="icon-link"><FaMapMarkerAlt className="icon1" /></a>
      </div>
      </div>
    </div>
  );
};

export default BusinessCardMobile;
// <a href="tel:+919284614144" className="icon-link telephone"><BsTelephoneFill className="icon" /></a>
// <a href="mailto:abhighushe@gmail.com" className="icon-link email"><FaEnvelope className="icon" /></a>
   // <a href="https://g.co/kgs/uTT7h3u" target="_blank" rel="noopener noreferrer" className="icon-link google"><AiFillGoogleCircle className="icon" /></a>
      // <a href="https://maps.app.goo.gl/2ShnbPxuZZ61r6ds6" target="_blank" rel="noopener noreferrer" className="icon-link map"><FaMapMarkerAlt className="icon" /></a>