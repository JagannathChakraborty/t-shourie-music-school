import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaUserGraduate,
  FaMicrophone,
  FaAward,
  FaHandsHelping,
  FaLaptop,
  FaTheaterMasks,
  FaCertificate,
  FaUsers,
} from 'react-icons/fa';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reason-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.reasons-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: <FaUserGraduate />,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals with decades of experience in Indian classical and Western music.',
    },
    {
      icon: <FaMicrophone />,
      title: 'State-of-the-Art Facilities',
      description: 'Acoustically treated rooms, industry-standard gear, and professional post-production suites.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Personalized Attention',
      description: 'Individual growth focus with private lessons, mentorship, and customized learning paths.',
    },
    {
      icon: <FaLaptop />,
      title: 'Learning by Doing',
      description: 'Hands-on access to professional workflows alongside experienced mentors in real projects.',
    },
    {
      icon: <FaTheaterMasks />,
      title: 'Performance Opportunities',
      description: 'Regular workshops, recitals, and community performances to showcase your talent.',
    },
    {
      icon: <FaCertificate />,
      title: 'Recognized Certifications',
      description: 'Get certified from prestigious academies like Gandharv Mahavidyalaya and Odisha Sangeet Natak Academy.',
    },
    {
      icon: <FaAward />,
      title: 'Industry Connections',
      description: 'Direct pathway to the entertainment industry through T. Shourie Entertainment network.',
    },
    {
      icon: <FaUsers />,
      title: 'Vibrant Community',
      description: 'Join a supportive community where creativity thrives and lifelong connections are made.',
    },
  ];

  return (
    <section className="why-choose-section section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Us</span>
          <h2 className="section-title">
            Why Choose <span>T. Shourie</span> School of Music?
          </h2>
          <p className="section-subtitle">
            Discover what makes us one of Odisha's leading music schools
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
              <div className="reason-number">{String(index + 1).padStart(2, '0')}</div>
            </motion.div>
          ))}
        </div>

        <div className="why-cta">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Ready to Begin Your Musical Journey?</h3>
            <p>
              Whether you're aiming for a career in music or simply want to enjoy
              the journey, we're here to guide every step of your path.
            </p>
            <div className="cta-buttons">
              <a href="tel:9937023166" className="btn-primary">
                Call Us Now
              </a>
              <a href="#contact" className="btn-secondary">
                Send a Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;