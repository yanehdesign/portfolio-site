import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

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
                <span>yaneh@yanehdesign.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-pink-300" />
                <span>+1 (307) 220-1192</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-pink-300" />
                <span>Portland, Oregon</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/yanehdesign?igsh=MTFiaDRucmxtNWI4aQ%3D%3D&utm_source=qr" className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              
                <a href="https://www.linkedin.com/in/janet-g-7a8245351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;