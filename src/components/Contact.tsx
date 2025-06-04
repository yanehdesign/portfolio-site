import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-pink-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-pink-100 mb-25 max-w-2xl">
          Let's Create Together
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;