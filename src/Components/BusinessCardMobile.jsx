import React from "react";
import {  FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";

import Profile from '../Assets/profile.jpeg'

const BusinessCardMobile = () => {
  return (
    <div style={styles.cardContainer}>
      {/* Profile Section */}
      <div style={styles.profileContainer}>
      <div style={styles.profile} >
        <img
          src={Profile} // Replace with actual image
          alt="profile"
          style={styles.profileImage}
        />
        </div>
        <div style={{ backgroundColor: "#ffff",
          borderRadius: "15px",
          padding: "20px",
          maxWidth: "100%",
          margin: "0 auto",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          fontFamily: "'Arial', sans-serif",}}>
        <h2 style={styles.name}>Abhishek Ajay Ghushe</h2>
        <p style={styles.position}>Director & CEO</p>
        <p style={styles.company}>TECHGICUS SOFTWARE SOLUTIONS PVT LTD</p>
        <button style={styles.saveButton}>Save Contact</button>
        </div>
      </div>

      {/* Icon Section */}
      <div style={styles.iconContainer}>
        <a href="tel:+919284614144" style={styles.iconLink}><BsTelephoneFill  style={styles.icon} /></a>
        <a href="https://wa.me/9284614144" target="_blank" rel="noopener noreferrer" style={styles.iconLink}><FaWhatsapp style={styles.icon} /></a>
        <a href="mailto:abhighushe@gmail.com" style={styles.iconLink}><FaEnvelope style={styles.icon} /></a>
        <a href="https://www.facebook.com/abhishek.ghushe.5" target="_blank" rel="noopener noreferrer" style={styles.iconLink}><FaFacebook style={styles.icon} /></a>
        <a href="https://www.instagram.com/abhishekghushe/profilecard/?igsh=MWZobWx2d21ia3ZxcA==" target="_blank" rel="noopener noreferrer" style={styles.iconLink}><FaInstagram style={styles.icon} /></a>
   
        <a href="https://www.linkedin.com/in/abhishek-ajay-ghushe-1607461b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={styles.iconLink}><FaLinkedin style={styles.icon} /></a>
        <a href="https://youtube.com/@techgicus6310?si=nWvilPdl8D7HnCO1" target="_blank" rel="noopener noreferrer" style={styles.iconLink}><FaYoutube style={styles.icon} /></a>
        
        <a href=" https://g.co/kgs/uTT7h3u" target="_blank" rel="noopener noreferrer" style={styles.iconLink}><AiFillGoogleCircle style={styles.icon} /></a>
        <a href="https://maps.app.goo.gl/2ShnbPxuZZ61r6ds6" target="_blank" rel="noopener noreferrer" style={styles.iconLink}><FaMapMarkerAlt style={styles.icon} /></a>
      </div>
    </div>
  );
};

// Styles for the mobile view digital card
const styles = {
  cardContainer: {
    backgroundColor: "#ffff",
    borderRadius: "15px",
    padding: "20px",
    maxWidth: "100%",
    margin: "0 auto",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Arial', sans-serif",
  },
  profileContainer: {
    marginBottom: "20px",
    paddingTop: "20px",
    display:"flex",
    flexDirection: "column",
   
    
  },
   profile: {
    marginBottom: "20px",
    marginLeft:"-19px",
    marginTop:"-20px",
    // backgroundColor:"#53BAC4",
     borderBottomRightRadius: "200px",
      borderBottomLeftRadius: "200px",
    width: "111%",
    height:"160px",
    display:"flex",
    justifyContent: "center",
    alignItem:"center",
    
  },
  profileImage: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  name: {
    fontSize: "1.5em",
    margin: "10px 0",
    fontWeight: "bold",
    color: "#333",
  },
  position: {
    fontSize: "1.1em",
    color: "#555",
    fontWeight:500,
    margin: "5px 0",
  },
  company: {
    fontSize: "0.9em",
    color: "#777",
    marginBottom: "15px",
  },
  saveButton: {
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
  iconContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },
  iconLink: {
    color: "#333",
    fontSize: "1.5em",
    textDecoration: "none",
  },
  icon: {
    fontSize: "1.5em",
    transition: "color 0.3s",
  },
};

export default BusinessCardMobile;
