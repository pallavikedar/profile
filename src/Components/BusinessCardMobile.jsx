// import React from "react";
// import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
// import { BsTelephoneFill } from "react-icons/bs";
// import { AiFillGoogleCircle } from "react-icons/ai";

// import Profile from '../Assets/profile.jpeg';
// import './BusinessCardMobile.css'; // Import the CSS file

// const BusinessCardMobile = () => {
//   return (
//     <div className="card-container">
//       {/* Profile Section */}
//       <div className="profile-container">
//         <div className="profile">
//           <img
//             src={Profile}
//             alt="profile"
//             className="profile-image"
//           />
//         </div>
//         <div className="profile-details">
//           <h2 className="name">Abhishek Ajay Ghushe</h2>
//           <p className="position">Director & CEO</p>
//           <button className="save-button">Save Contact</button>
          
         
//         </div>
//       </div>
//       <div style={{paddingLeft:"10px"}}>
//       <h3 style={{textAlign:"left",color:"#015c8b"}}>About</h3>
//       <p style={{fontSize:"16px",textAlign:"left",color:"rgb(104 117 124)"}}>CEO AND Founder of Techgicus Software Solution PVT. LTD. and this company build customize software and serve software service </p>

//       </div>

//       {/* Icon Section */}
//       <h3 style={{textAlign:"left",color:"#015c8b",paddingLeft:"10px"}}>Social Links</h3>
//       <div className="icon-container">
      
    
//       <a href="https://wa.me/9284614144" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp"><FaWhatsapp className="icon" /></a>
      
//       <a href="https://www.facebook.com/abhishek.ghushe.5" target="_blank" rel="noopener noreferrer" className="icon-link facebook"><FaFacebook className="icon" /></a>
//       <a href="https://www.instagram.com/abhishekghushe/profilecard/?igsh=MWZobWx2d21ia3ZxcA==" target="_blank" rel="noopener noreferrer" className="icon-link instagram"><FaInstagram className="icon" /></a>
//       <a href="https://www.linkedin.com/in/abhishek-ajay-ghushe-1607461b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon-link linkedin"><FaLinkedin className="icon" /></a>
//       <a href="https://youtube.com/@techgicus6310?si=nWvilPdl8D7HnCO1" target="_blank" rel="noopener noreferrer" className="icon-link youtube"><FaYoutube className="icon" /></a>
   
//       </div>
//       <h3 style={{textAlign:"left",color:"#015c8b",paddingLeft:"10px"}}>Quick Contact</h3>
//       <div className="Contact-container">
      
//       <div className="icon-wrapper" >
//       <a href="tel:+919284614144" className="icon-link">
//       <BsTelephoneFill className="icon1" />
    
//       </a>
      
//       </div>
//       <div className="icon-wrapper">
//       <a href="mailto:abhighushe@gmail.com" className="icon-link"><FaEnvelope className="icon1" /></a>
//       </div>
//       <div className="icon-wrapper">
//       <a href="https://g.co/kgs/uTT7h3u" target="_blank" rel="noopener noreferrer" className="icon-link"><AiFillGoogleCircle className="icon1" /></a>
//       </div>
//       <div className="icon-wrapper">
//       <a href="https://maps.app.goo.gl/2ShnbPxuZZ61r6ds6" target="_blank" rel="noopener noreferrer" className="icon-link"><FaMapMarkerAlt className="icon1" /></a>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessCardMobile;
// // <a href="tel:+919284614144" className="icon-link telephone"><BsTelephoneFill className="icon" /></a>
// // <a href="mailto:abhighushe@gmail.com" className="icon-link email"><FaEnvelope className="icon" /></a>
//    // <a href="https://g.co/kgs/uTT7h3u" target="_blank" rel="noopener noreferrer" className="icon-link google"><AiFillGoogleCircle className="icon" /></a>
//       // <a href="https://maps.app.goo.gl/2ShnbPxuZZ61r6ds6" target="_blank" rel="noopener noreferrer" className="icon-link map"><FaMapMarkerAlt className="icon" /></a>


import React from "react";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";

import Profile from '../Assets/profile.jpeg';
import './BusinessCardMobile.css';
import logo from '../Assets/logo.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import mobileApp from '../Assets/mobileApp.jpg';
import website from '../Assets/website.jpg'

const BusinessCardMobile = () => {

  // Function to create and download the vCard file
  const saveContact = () => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Ghushe;Abhishek;Ajay;;
FN:Abhishek Ajay Ghushe
ORG:Techgicus Software Solution PVT. LTD.
TITLE:Director & CEO
TEL;TYPE=CELL:+919284614144
EMAIL:abhighushe@gmail.com
URL:https://www.linkedin.com/in/abhishek-ajay-ghushe-1607461b4
ADR;TYPE=WORK:;;Techgicus Office Address;City;State;Postal Code;Country
END:VCARD
`;

    // Create a blob from the vCard data
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "Abhishek_Ajay_Ghushe.vcf";
    document.body.appendChild(link);
    link.click();

    // Clean up and remove the temporary link element
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="card-container">
      {/* Profile Section */}
      <div className="profile-container">
        <div className="profile">
          <img src={Profile} alt="profile" className="profile-image" />
        </div>
        <div className="profile-details">
          <h2 className="name">Abhishek Ajay Ghushe</h2>
          <p className="position">Director & CEO</p>
          <button className="save-button" onClick={saveContact}>Save Contact</button>
        </div>
      </div>

      {/* About Section */}
      <div style={{ paddingLeft: "10px",fontFamily:"Afacad Flux" }}>
        <h3 style={{ textAlign: "left", color: "#015c8b" }}>About</h3>
        <p style={{ fontSize: "16px", textAlign: "center", color: "rgb(104 117 124)" }}>
          CEO AND Founder of Techgicus Software Solution PVT. LTD. and this company builds customized software and provides software services.
        </p>
      </div>

     <div>
     <h3 style={{ textAlign: "left", color: "#015c8b", paddingLeft: "10px",fontFamily:"Afacad Flux" }}>Services</h3>
     <Swiper
     spaceBetween={30}
        centeredSlides={true}
     
     
     autoplay={{
       delay: 2500,
       disableOnInteraction: false,
     }}
     
   
     modules={[Autoplay]}
     className="mySwiper"
   >
     <SwiperSlide><img style={{width:"79%",height:"137px",borderRadius:"10px",border:"1px solid rgb(184 231 255))"}} src={mobileApp} alt="mobile"/></SwiperSlide>
     <SwiperSlide><img style={{width:"79%",height:"137px",borderRadius:"10px",border:"1px solid rgb(184 231 255))"}} src={website} alt="website"/></SwiperSlide>
     
   </Swiper>
 
    
     </div>

      {/* Quick Contact Section */}
      <h3 style={{ textAlign: "left", color: "#015c8b", paddingLeft: "10px",fontFamily:"Afacad Flux" }}>Quick Contact</h3>
      <div className="Contact-container">
        <div className="icon-wrapper">
          <a href="tel:+919284614144" className="icon-link"><BsTelephoneFill className="icon1" /></a>
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
       {/* Social Links */}
       <h3 style={{ textAlign: "left", color: "#015c8b", paddingLeft: "10px",fontFamily:"Afacad Flux" }}>Social Links</h3>
       <div className="icon-container">
         <a href="https://wa.me/9284614144" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp"><FaWhatsapp className="icon" /></a>
         <a href="https://www.facebook.com/abhishek.ghushe.5" target="_blank" rel="noopener noreferrer" className="icon-link facebook"><FaFacebook className="icon" /></a>
         <a href="https://www.instagram.com/abhishekghushe/profilecard/?igsh=MWZobWx2d21ia3ZxcA==" target="_blank" rel="noopener noreferrer" className="icon-link instagram"><FaInstagram className="icon" /></a>
         <a href="https://www.linkedin.com/in/abhishek-ajay-ghushe-1607461b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon-link linkedin"><FaLinkedin className="icon" /></a>
         <a href="https://youtube.com/@techgicus6310?si=nWvilPdl8D7HnCO1" target="_blank" rel="noopener noreferrer" className="icon-link youtube"><FaYoutube className="icon" /></a>
       </div>
       <div style={{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",bottom:0}}>
       <h4 style={{ color: "#015c8b",fontFamily:"Afacad Flux" }}>Powered by: </h4>
       <img style={{width:"110px",paddingLeft:"10px"}} src={logo} alt="logo"/>
       
       </div>

    </div>
  );
};

export default BusinessCardMobile;
