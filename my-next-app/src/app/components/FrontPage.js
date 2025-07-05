'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, ChevronDown, ChevronUp, Star, Calendar, Shield, Heart, Brain, Users, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Navbar from './Navbar';
import './FrontPage.css'
import QuotesComponent from './Quote';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const TherapistWebsite = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const SectionWrapper = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please tell us what brings you here';
    if (!formData.preferredTime.trim()) errors.preferredTime = 'Preferred contact time is required';
    if (!formData.agreeToContact) errors.agreeToContact = 'Please agree to be contacted';
    
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Navigate life's challenges with evidence-based techniques including cognitive-behavioral therapy and mindfulness practices. Learn practical tools to manage anxiety, reduce stress, and build resilience for lasting emotional well-being.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your connections and improve communication in your relationships. Whether you're facing challenges with your partner, family, or friends, we'll work together to build healthier, more fulfilling relationships.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Trauma Recovery",
      description: "Heal from past experiences in a safe, supportive environment. Using trauma-informed approaches, we'll work at your pace to process difficult experiences and develop healthy coping strategies for moving forward.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via Zoom and are available Monday, Wednesday, and Friday from 1 PM to 5 PM."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice is required for cancellations. This allows time to offer the slot to another client who may be waiting."
    },
    {
      question: "How long are sessions?",
      answer: "Individual sessions are 50 minutes and couples sessions are 60 minutes. This includes time for check-in and any homework or follow-up discussions."
    },
    {
      question: "What should I expect in the first session?",
      answer: "The first session focuses on understanding your concerns, goals, and background. We&apos;ll discuss your therapy expectations and create a personalized treatment plan together."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Navbar/>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: "url('/images/textbehindimageai.com-1751718539297.png')"
    }}
  ></div>



  {/* Foreground Text Content */}

    <button 
      onClick={() => scrollToSection('contact')}
      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg book-button"
    >
      Book a Free Consultation
    </button>

</section>

      {/* About Section */}
      <SectionWrapper>
      <section id="about" className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop.jpg"
                alt="Dr. Serena Blake"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Dr. Serena Blake</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">8 Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">500+ Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </SectionWrapper>
    <SectionWrapper>
    <section id ="quotes">
        <QuotesComponent/>
    </section>
    </SectionWrapper>
      {/* Services Section */}
      <SectionWrapper>
      <section id="services" className="pt-10 pb-0 bg-white services">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-8">
      <h2
        className="text-5xl font-medium text-gray-900 mb-2 area-hed"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Areas of Focus
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Personalized therapy approaches tailored to your unique needs and goals
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="group">
          <img
            src={service.image}
            alt={service.title}
            className="object-cover transition-transform duration-300 group-hover:scale-105 my-service-img"
          />
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      </SectionWrapper>

      {/* Session Fees */}
       {/* Session Fees */}
       <SectionWrapper>
      <section className="py-16 bg-orange-50"> 
  <div className="mx-auto px-4 my-cost-box">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Rates and Insurance</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Transparent pricing with flexible payment options and insurance coverage
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Rates Column */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 ses-hed">Session Fees</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-gray-700 font-medium">Session Fee</span>
            <span className="text-2xl font-bold text-blue-600">$200</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-gray-700 font-medium">Psychodiagnostic Evaluation</span>
            <span className="text-2xl font-bold text-blue-600">$225</span>
          </div>
        </div>
      </div>

      {/* Insurance Column with Vertical Divider */}
      <div className="my-insurance-box border-l border-gray-500 pl-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 ses-hed">Insurance Options</h3>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For out-of-network plans, I've partnered with Mentaya using this tool to help you check your eligibility for reimbursement for my services.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mt-5 mx-auto block">
            Check Reimbursement Eligibility
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      </SectionWrapper>
      {/* FAQ Section */}
      <SectionWrapper>
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about therapy and my practice</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? 
                    <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  }
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      </SectionWrapper>
      {/* Contact Section */}
      <SectionWrapper>
      <section id="contact" className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to take the first step? Let's connect.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">(323) 555-0192</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">serena@blakepsychology.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-semibold text-gray-900">In-person</p>
                      <p className="text-gray-600">Tue & Thu, 10 AM–6 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-semibold text-gray-900">Virtual (Zoom)</p>
                      <p className="text-gray-600">Mon, Wed & Fri, 1 PM–5 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your phone number"
                    />
                    {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">What brings you here? *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        formErrors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell me a bit about what you're looking for support with..."
                    />
                    {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred time to reach you *</label>
                    <input
                      type="text"
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        formErrors.preferredTime ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Weekday mornings, Tuesday evenings, etc."
                    />
                    {formErrors.preferredTime && <p className="text-red-500 text-sm mt-1">{formErrors.preferredTime}</p>}
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.agreeToContact}
                        onChange={(e) => handleInputChange('agreeToContact', e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">I agree to be contacted *</span>
                    </label>
                    {formErrors.agreeToContact && <p className="text-red-500 text-sm mt-1">{formErrors.agreeToContact}</p>}
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
     </SectionWrapper>
      {/* Footer */}
      <footer className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-sm text-gray-700 py-12">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      
      {/* Brand Column */}
      <div className="md:col-span-2">
        <div className="flex items-center mb-4">
          <img src="./images/WhatsApp Image 2025-07-05 at 15.56.00_130b540b_noBG.png" className="my-logo" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">Dr. Serena Blake</h3>
            <p className="text-gray-600">Clinical Psychologist, PsyD</p>
          </div>
        </div>
        <p className="text-gray-600 mb-6 max-w-md">
          Creating a safe, supportive space for healing and growth. Evidence-based therapy with compassionate, personalized care.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
            <Facebook className="w-5 h-5 text-gray-700 hover:text-white" />
          </a>
          <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
            <Instagram className="w-5 h-5 text-gray-700 hover:text-white" />
          </a>
          <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
            <Linkedin className="w-5 h-5 text-gray-700 hover:text-white" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              FAQ
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact Info</h4>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">(323) 555-0192</span>
          </li>
          <li className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">serena@blakepsychology.com</span>
          </li>
          <li className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 text-gray-500 mt-1" />
            <span className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-200 mt-8 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          © 2025 Dr. Serena Blake, PsyD. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
            Professional Licensing
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};
export default TherapistWebsite
