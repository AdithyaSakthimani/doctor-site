import {React,useState} from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, ChevronDown, ChevronUp, Star, Calendar, Shield, Heart, Brain, Users, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Navbar.css'
function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
     const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  return (
    <>
    {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm navbar">
        <div className="max-w-6xl mx-auto px-4 navbar-size">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center justify-center mr-3">
                <img src ="./images/WhatsApp Image 2025-07-05 at 15.56.00_130b540b_noBG.png" className="my-logo"/>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Dr. Serena Blake</h1>
                <p className="text-xs text-gray-600">Clinical Psychologist</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Book Consultation
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  FAQ
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  Contact
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mx-4 mt-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
          </>
  )
}

export default Navbar
