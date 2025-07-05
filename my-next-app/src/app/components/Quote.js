import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Quote.css'
const QuotesComponent = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const quotes = [
    {
      text: "The curious paradox is that when I accept myself just as I am, then I can change.",
      author: "Carl Rogers",
      category: "Self-Acceptance"
    },
    {
      text: "You are not broken. You are not a problem to be solved. You are a human being worthy of love and belonging.",
      author: "Brené Brown",
      category: "Self-Worth"
    },
    {
      text: "The greatest thing in the world is to know how to belong to oneself.",
      author: "Michel de Montaigne",
      category: "Self-Awareness"
    },
    {
      text: "Healing is not about forgetting or moving on. It's about learning to carry your experiences with wisdom and grace.",
      author: "Dr. Serena Blake",
      category: "Healing"
    },
    {
      text: "Between stimulus and response there is a space. In that space is our power to choose our response.",
      author: "Viktor Frankl",
      category: "Mindfulness"
    },
    {
      text: "The only way out is through.",
      author: "Robert Frost",
      category: "Resilience"
    },
    {
      text: "You don't have to be perfect. You just have to be brave enough to be yourself.",
      author: "Anonymous",
      category: "Authenticity"
    },
    {
      text: "Vulnerability is not weakness. It's the birthplace of innovation, creativity, and change.",
      author: "Brené Brown",
      category: "Vulnerability"
    },
    {
      text: "The wound is the place where the Light enters you.",
      author: "Rumi",
      category: "Growth"
    },
    {
      text: "You have been assigned this mountain to show others it can be moved.",
      author: "Mel Robbins",
      category: "Strength"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, quotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
    setIsAutoPlaying(false);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
    setIsAutoPlaying(false);
  };

  const goToQuote = (index) => {
    setCurrentQuote(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Words of Wisdom</h2>
          <p className="text-xl text-gray-600">
            Inspiring thoughts on healing, growth, and self-discovery
          </p>
        </div>

        <div className="relative">
          {/* Quote Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[300px] flex items-center justify-center my-quote-box">
            <div className="text-center max-w-3xl">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6 opacity-60" />
              
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-6">
                "{quotes[currentQuote].text}"
              </blockquote>
              
              <div className="space-y-2">
                <cite className="text-lg font-semibold text-blue-600 not-italic">
                  — {quotes[currentQuote].author}
                </cite>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevQuote}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextQuote}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next quote"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Quote Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToQuote(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentQuote 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>

        {/* Quote Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">
            {currentQuote + 1} of {quotes.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default QuotesComponent;