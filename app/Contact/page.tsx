'use client'
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', number: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const locations = [
    {
      name: 'Miami',
      address: '168 SE 1st St, Miami, FL 33131, USA',
      email: 'info@example.com',
      phone: '123-456-7890',
      bgColor: 'from-blue-100 to-purple-100',
      icon: '🌴'
    },
    {
      name: 'San Francisco',
      address: '1355 Market St, San Francisco, USA',
      email: 'info@example.com',
      phone: '123-456-7890',
      bgColor: 'from-yellow-50 to-yellow-100',
      icon: '🌉'
    },
    {
      name: 'Paris',
      address: '1234 Maplewood Springfield, Paris',
      email: 'info@example.com',
      phone: '123-456-7890',
      bgColor: 'from-orange-50 to-orange-100',
      icon: '🗼'
    },
    {
      name: 'London',
      address: '221B Baker Street, London',
      email: 'info@example.com',
      phone: '123-456-7890',
      bgColor: 'from-cyan-50 to-blue-50',
      icon: '🎪'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-50 to-purple-50 overflow-x-hidden">
      <Navbar />
      
      {/* Animations */}
      <style>{`
        @keyframes fadeInDown { from {opacity: 0; transform: translateY(-30px);} to {opacity: 1; transform: translateY(0);} }
        @keyframes fadeInUp { from {opacity: 0; transform: translateY(30px);} to {opacity: 1; transform: translateY(0);} }
        @keyframes slideInLeft { from {opacity: 0; transform: translateX(-30px);} to {opacity: 1; transform: translateX(0);} }
        @keyframes slideInRight { from {opacity: 0; transform: translateX(30px);} to {opacity: 1; transform: translateX(0);} }
        @keyframes scaleIn { from {opacity: 0; transform: scale(0.95);} to {opacity: 1; transform: scale(1);} }
        @keyframes bounce { 0%,100% {transform: translateY(0);} 50% {transform: translateY(-5px);} }
        @keyframes float { 0%,100% {transform: translateY(0);} 50% {transform: translateY(-10px);} }
        .animate-fadeInDown { animation: fadeInDown 0.6s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out; }
        .animate-bounce-sm { animation: bounce 2s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown mt-8">
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-4 leading-tight">
            Get in touch
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            We'd love to hear from you! Whether you have questions or just want to say hello, feel free to reach out. Our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="animate-scaleIn bg-gradient-to-br from-yellow-50 via-yellow-50 to-amber-50 border-4 border-gray-900 rounded-3xl p-6 sm:p-10 mb-20 shadow-xl transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 animate-fadeInUp">
            Squeeze in some time – We'd love to hear from you!
          </h2>

          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 rounded-2xl text-green-700 text-center font-semibold animate-fadeInDown">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          <div className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-full border-2 border-gray-900 bg-yellow-50 focus:bg-white focus:ring-2 focus:ring-gray-400 font-medium transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-full border-2 border-gray-900 bg-yellow-50 focus:bg-white focus:ring-2 focus:ring-gray-400 font-medium transition-all duration-300"
              />
            </div>

            {/* Number + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="number"
                placeholder="Your number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-full border-2 border-gray-900 bg-yellow-50 focus:bg-white focus:ring-2 focus:ring-gray-400 font-medium transition-all duration-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-full border-2 border-gray-900 bg-yellow-50 focus:bg-white focus:ring-2 focus:ring-gray-400 font-medium transition-all duration-300"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-6 py-4 rounded-3xl border-2 border-gray-900 bg-yellow-50 focus:bg-white focus:ring-2 focus:ring-gray-400 resize-none font-medium transition-all duration-300"
            />

            {/* Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={handleSubmit}
                className="px-8 sm:px-10 py-3 rounded-full border-2 border-gray-900 bg-yellow-50 text-gray-900 font-bold text-base sm:text-lg hover:bg-gray-900 hover:text-yellow-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
              >
                Send your message
              </button>
            </div>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${loc.bgColor} rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer`}
            >
              <div className="text-5xl mb-3 group-hover:animate-float">{loc.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{loc.name}</h3>
              <div className="space-y-2 text-sm text-gray-700 font-medium">
                <p className="flex items-center justify-center gap-1"><MapPin size={14} />{loc.address}</p>
                <p className="flex items-center justify-center gap-1"><Mail size={14} />{loc.email}</p>
                <p className="flex items-center justify-center gap-1"><Phone size={14} />{loc.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
