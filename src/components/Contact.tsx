import React from 'react';
import { Mail, Phone, MapPin, Instagram, Dribbble, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-pink-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-pink-100 mb-12 max-w-2xl">
          Looking to bring your brand to life? Let's collaborate on your next project.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-pink-300" />
                <span>janet@janetgarcia.design</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-pink-300" />
                <span>+1 (415) 555-0123</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-pink-300" />
                <span>San Francisco, California</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/janetgarcia.design" className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://dribbble.com/janetgarcia" className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Dribbble className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/janetgarcia" className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-pink-100 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 rounded-lg bg-pink-700 border border-pink-600 text-white placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-pink-100 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 rounded-lg bg-pink-700 border border-pink-600 text-white placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-pink-100 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full p-3 rounded-lg bg-pink-700 border border-pink-600 text-white placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Tell me about your project"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;