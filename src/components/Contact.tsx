import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-pink-800 text-white">
      <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:yaneh@yanehdesign.com"
              className="flex flex-col items-center p-6 rounded-2xl hover:bg-white/20 transition"
            >
              <Mail className="w-12 h-12 text-white mb-4" />
              <span className="text-white">yaneh@yanehdesign.com</span>
            </a>
            <a
              href="tel:+13072201192"
              className="flex flex-col items-center p-6 rounded-2xl hover:bg-white/20 transition"
            >
              <Phone className="w-12 h-12 text-white mb-4" />
              <span className="text-white">+1 (307) 220-1192</span>
            </a>
            <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-white/20 transition">
              <MapPin className="w-12 h-12 text-white mb-4" />
              <span className="text-white">Portland, OR</span>
            </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;