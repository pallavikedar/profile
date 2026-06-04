

import React from "react";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";

import Profile from '../Assets/profile.jpeg';
import './BusinessCardMobile.css';
import logo from '../Assets/logo.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import dynamic from "../Assets/dynamic-layout.jpeg";
import three from "../Assets/360-layout.jpeg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import mobileApp from '../Assets/mobileApp.jpg';
import website from '../Assets/website.jpg';

const BusinessCardMobile = () => {

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
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Abhishek_Ajay_Ghushe.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const crmModules = [
    {
      icon: "📋", color: "blue", name: "Lead Management",
      desc: "Capture & track every inquiry from all sources",
      tags: [{ label: "Source Tracking" }, { label: "Follow-up Alerts" }, { label: "Lead Scoring" }],
    },
    {
      icon: "📅", color: "green", name: "Booking Management",
      desc: "Plot reservations, token amounts & agreements",
      tags: [{ label: "Token Receipt", mod: "green" }, { label: "Plot Hold", mod: "green" }, { label: "Agreement", mod: "green" }],
    },
    {
      icon: "💰", color: "amber", name: "Payment Tracking",
      desc: "EMI schedules, dues & receipt generation",
      tags: [{ label: "EMI Plans", mod: "amber" }, { label: "Due Alerts", mod: "amber" }, { label: "Receipts", mod: "amber" }],
    },
    {
      icon: "🏘️", color: "purple", name: "Plot Inventory",
      desc: "Live availability — available, hold, sold status",
      tags: [{ label: "Live Status", mod: "purple" }, { label: "Plot Matrix", mod: "purple" }],
    },
    {
      icon: "🤝", color: "teal", name: "Channel Partners",
      desc: "Broker profiles, commissions & deal tracking",
      tags: [{ label: "Broker Mgmt", mod: "teal" }, { label: "Commission", mod: "teal" }],
    },
    {
      icon: "📊", color: "coral", name: "Reports & Analytics",
      desc: "Sales velocity, revenue & team performance",
      tags: [{ label: "Daily Reports", mod: "coral" }, { label: "Team KPIs", mod: "coral" }],
    },
  ];

  const pipelineStages = [
    { icon: "📥", label: "New", count: 24 },
    { icon: "📞", label: "Called", count: 18 },
    { icon: "🏠", label: "Visit", count: 11 },
    { icon: "💬", label: "Negotiation", count: 7 },
    { icon: "✅", label: "Booked", count: 5 },
  ];

  return (
    <div className="card-container">
      {/* Profile Section */}
      <div className="profile-container">
        <div className="profile">
          <img src={Profile} alt="profile" className="profile-image" />
        </div>
        <div className="profile-details">
          <h2 className="name">Abhishek Ajay Ghushe</h2>
          <p className="position">Director &amp; CEO</p>
          <button className="save-button" onClick={saveContact}>Save Contact</button>
        </div>
      </div>

      {/* About Section */}
      <div style={{ paddingLeft: "10px", fontFamily: "Afacad Flux" }}>
        <h3 style={{ textAlign: "left", color: "#015c8b" }}>About</h3>
        <p style={{ fontSize: "16px", textAlign: "center", color: "rgb(104 117 124)" }}>
          CEO AND Founder of Techgicus Software Solution PVT. LTD. and this company builds customized software and provides software services.
        </p>
      </div>

      {/* Services Swiper */}
      <div>
        <h3 style={{ textAlign: "left", color: "#015c8b", paddingLeft: "10px", fontFamily: "Afacad Flux" }}>Services</h3>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img style={{ width: "79%", height: "137px", borderRadius: "10px", border: "1px solid rgb(184 231 255)" }} src={mobileApp} alt="mobile" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "79%", height: "137px", borderRadius: "10px", border: "1px solid rgb(184 231 255)" }} src={website} alt="website" /></SwiperSlide>
        </Swiper>
      </div>

      {/* ===== PREMIUM REAL ESTATE SERVICES SECTION ===== */}
      <div className="realestate-section">
        <div className="realestate-header">
          <h3 className="realestate-title">Real Estate Tech Services</h3>
          <p className="realestate-subtitle">Powered by Techgicus Software Solution</p>
        </div>

        {/* Card 1 — Dynamic Plot Layout */}
        <div className="re-card re-card--map">
          <div className="re-card__image-wrap">
            <img src={dynamic} alt="Dynamic Plot Layout on Google Maps" className="re-card__img" />
            <div className="re-card__img-overlay">
              <span className="re-card__live-pill">
                <span className="re-card__live-dot"></span>LIVE ON GOOGLE MAPS
              </span>
            </div>
          </div>
          <div className="re-card__body">
            <div className="re-card__icon-row">
              <div className="re-card__icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4 className="re-card__name">Dynamic Plot Layout</h4>
                <p className="re-card__tag">Interactive Map Integration</p>
              </div>
            </div>
            <p className="re-card__desc">
              Visualize every plot on a live Google Maps layer — with plot numbers, dimensions, roads &amp; amenity pins, all dynamically rendered.
            </p>
            <div className="re-card__features">
              <span className="re-card__feat">📍 Plot Mapping</span>
              <span className="re-card__feat">🛣️ Road Visibility</span>
              <span className="re-card__feat">📐 Dimensions</span>
              <span className="re-card__feat">🏪 Nearby Amenities</span>
              <span className="re-card__feat">📍 Quotation Generation</span>
              <span className="re-card__feat">📍 Manage Site Visits</span>
            </div>
          </div>
        </div>

        {/* Card 2 — 360° Bird View */}
        <div className="re-card re-card--360">
          <div className="re-card__image-wrap">
            <img src={three} alt="360 Degree Bird View Plot Layout" className="re-card__img" />
            <div className="re-card__img-overlay re-card__img-overlay--dark">
              <span className="re-card__badge-360">360°</span>
            </div>
          </div>
          <div className="re-card__body">
            <div className="re-card__icon-row">
              <div className="re-card__icon-circle re-card__icon-circle--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M12 2a10 10 0 1 0 10 10"/>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div>
                <h4 className="re-card__name">360° Aerial Bird View</h4>
                <p className="re-card__tag">Immersive Plot Visualization</p>
              </div>
            </div>
            <p className="re-card__desc">
              Experience plots from every angle with our 360° panoramic aerial view — high-resolution visuals, surrounding landmarks &amp; smart decision insights.
            </p>
            <div className="re-card__features">
              <span className="re-card__feat re-card__feat--green">🔭 Virtual Tour</span>
              <span className="re-card__feat re-card__feat--green">🏗️ Layout View</span>
              <span className="re-card__feat re-card__feat--green">🌿 3D Visuals</span>
              <span className="re-card__feat re-card__feat--green">⏱️ Time Saving</span>
            </div>
          </div>
        </div>

        {/* ===== REAL ESTATE CRM ===== */}
        <div className="re-crm-section">
          <div className="re-crm-header">
            <h3 className="re-crm-title">Real Estate CRM</h3>
            <p className="re-crm-subtitle">Complete sales pipeline — from lead to registry</p>
          </div>

          {/* Pipeline Strip */}
          <div className="re-crm-pipeline-wrap">
            <p className="re-crm-pipeline-label">Lead Pipeline Overview</p>
            <div className="re-crm-pipeline">
              {pipelineStages.map((stage, i) => (
                <div className="re-crm-stage" key={i}>
                  <div className="re-crm-stage__dot">{stage.icon}</div>
                  <div className="re-crm-stage__label">{stage.label}</div>
                  <div className="re-crm-stage__count">{stage.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Module Grid */}
          <div className="re-crm-grid">
            {crmModules.map((mod, i) => (
              <div className="re-crm-card" key={i}>
                <div className={`re-crm-card__icon re-crm-card__icon--${mod.color}`}>{mod.icon}</div>
                <h4 className="re-crm-card__name">{mod.name}</h4>
                <p className="re-crm-card__desc">{mod.desc}</p>
                <div className="re-crm-card__tags">
                  {mod.tags.map((tag, j) => (
                    <span key={j} className={`re-crm-tag${tag.mod ? ` re-crm-tag--${tag.mod}` : ""}`}>{tag.label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CRM CTA Strip */}
          <div className="re-crm-strip">
            <div className="re-crm-strip__text">
              <span className="re-crm-strip__title">End-to-End Real Estate CRM</span>
              <span className="re-crm-strip__sub">Lead → Booking → Registry — all in one platform</span>
            </div>
            <a href="tel:+919284614144" className="re-crm-strip__btn">Get Demo →</a>
          </div>
        </div>
        {/* ===== END REAL ESTATE CRM ===== */}

        {/* Bottom CTA strip */}
        <div className="re-cta-strip">
          <div className="re-cta-strip__text">
            <span className="re-cta-strip__headline">See It All Before You Decide</span>
            <span className="re-cta-strip__sub">Trusted &amp; Transparent · Plan Your Future Better</span>
          </div>
          <a href="tel:+919284614144" className="re-cta-strip__btn">Explore Now →</a>
        </div>
      </div>
      {/* ===== END REAL ESTATE SECTION ===== */}

      {/* Quick Contact */}
      <h3 style={{ textAlign: "left", color: "#015c8b", paddingLeft: "10px", fontFamily: "Afacad Flux" }}>Quick Contact</h3>
      <div className="Contact-container">
        <div className="icon-wrapper"><a href="tel:+919284614144" className="icon-link"><BsTelephoneFill className="icon1" /></a></div>
        <div className="icon-wrapper"><a href="mailto:abhighushe@gmail.com" className="icon-link"><FaEnvelope className="icon1" /></a></div>
        <div className="icon-wrapper"><a href="https://g.co/kgs/uTT7h3u" target="_blank" rel="noopener noreferrer" className="icon-link"><AiFillGoogleCircle className="icon1" /></a></div>
        <div className="icon-wrapper"><a href="https://maps.app.goo.gl/2ShnbPxuZZ61r6ds6" target="_blank" rel="noopener noreferrer" className="icon-link"><FaMapMarkerAlt className="icon1" /></a></div>
      </div>

      {/* Social Links */}
      <h3 style={{ textAlign: "left", color: "#015c8b", paddingLeft: "10px", fontFamily: "Afacad Flux" }}>Social Links</h3>
      <div className="icon-container">
        <a href="https://wa.me/9284614144" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp"><FaWhatsapp className="icon" /></a>
        <a href="https://www.facebook.com/abhishek.ghushe.5" target="_blank" rel="noopener noreferrer" className="icon-link facebook"><FaFacebook className="icon" /></a>
        <a href="https://www.instagram.com/abhishekghushe/profilecard/?igsh=MWZobWx2d21ia3ZxcA==" target="_blank" rel="noopener noreferrer" className="icon-link instagram"><FaInstagram className="icon" /></a>
        <a href="https://www.linkedin.com/in/abhishek-ajay-ghushe-1607461b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon-link linkedin"><FaLinkedin className="icon" /></a>
        <a href="https://youtube.com/@techgicus6310?si=nWvilPdl8D7HnCO1" target="_blank" rel="noopener noreferrer" className="icon-link youtube"><FaYoutube className="icon" /></a>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", bottom: 0 }}>
        <h4 style={{ color: "#015c8b", fontFamily: "Afacad Flux" }}>Powered by: </h4>
        <img style={{ width: "110px", paddingLeft: "10px" }} src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default BusinessCardMobile;