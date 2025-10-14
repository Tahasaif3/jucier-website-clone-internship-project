'use client'

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

export default function StyleGuide() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

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
  };

  return (
    <div className="min-h-screen bg-lime-50">
      {/* Navbar */}
      <Navbar/>

      {/* Header */}
      <div className="bg-amber-100 py-12 text-center">
        <h1 className="text-5xl font-black text-gray-900 mb-4">Style guide</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm">
          We're here to help with any questions or support you need! Please use the form below to send us a message, and we will respond as soon as possible.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        
        {/* Colors Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Colors</h2>
          <div className="flex gap-12">
            {/* Primary */}
            <div>
              <p className="text-gray-700 font-semibold mb-2">Primary</p>
              <p className="text-gray-600 text-sm mb-4">#C0103A</p>
              <div className="w-24 h-24 bg-red-700 rounded-lg shadow-md"></div>
            </div>
            {/* Primary 2 */}
            <div>
              <p className="text-gray-700 font-semibold mb-2">Primary 2</p>
              <p className="text-gray-600 text-sm mb-4">#FFF1E8</p>
              <div className="w-24 h-24 bg-amber-50 border-2 border-gray-400 rounded-lg shadow-md"></div>
            </div>
            {/* Secondary */}
            <div>
              <p className="text-gray-700 font-semibold mb-2">Secondary</p>
              <p className="text-gray-600 text-sm mb-4">#000000</p>
              <div className="w-24 h-24 bg-black rounded-lg shadow-md"></div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Typography</h2>
          
          <h1 className="text-7xl font-black text-gray-900 mb-6">Heading H1</h1>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Heading H2</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Heading H3</h3>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Heading H4</h4>
          <h5 className="text-xl font-bold text-gray-900 mb-4">Heading H5</h5>
          <h6 className="text-lg font-bold text-gray-900 mb-8">Heading H6</h6>
        </section>

        {/* Paragraph Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Paragraph</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae est. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae nisi tristique pellentesque in quis verera ornate, eros dolor interdum nulla, ut commodo diam ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </section>

        {/* Text Alignments Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Text alignments</h2>
          <p className="text-left text-gray-700 mb-6">
            Text Left: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-center text-gray-700 mb-6">
            Text Center: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-right text-gray-700 mb-6">
            Text Right: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        {/* Form Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Form</h2>
          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="px-6 py-4 rounded-full border-2 border-gray-900 bg-lime-50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 font-medium"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="px-6 py-4 rounded-full border-2 border-gray-900 bg-lime-50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 font-medium"
              />
            </div>

            {/* Number and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="number"
                placeholder="Your number"
                value={formData.number}
                onChange={handleChange}
                className="px-6 py-4 rounded-full border-2 border-gray-900 bg-lime-50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 font-medium"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your subject"
                value={formData.subject}
                onChange={handleChange}
                className="px-6 py-4 rounded-full border-2 border-gray-900 bg-lime-50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 font-medium"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-6 py-4 rounded-3xl border-2 border-gray-900 bg-lime-50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none transition-all duration-300 font-medium"
            />

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={handleSubmit}
                className="px-10 py-3 rounded-full border-2 border-gray-900 bg-lime-50 text-gray-900 font-semibold hover:bg-gray-900 hover:text-lime-50 transition-all duration-300"
              >
                Send your message
              </button>
            </div>
          </div>
        </section>

        {/* Button Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Button</h2>
          <div className="flex gap-6">
            <button className="px-8 py-3 rounded-full border-2 border-gray-900 bg-white text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
              Button
            </button>
            <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300">
              Button
            </button>
          </div>
        </section>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-gray-900 my-12"></div>

    <Footer/>
    </div>
  );
}