import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Briefcase } from 'lucide-react';
import { awards, services } from '../data';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovative Software Solutions for Your Business
            </h1>
            <p className="text-xl mb-8">
              We help businesses transform through technology
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600">Recognition for excellence and innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award) => (
              <motion.div
                key={award.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive solutions for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon === 'Code' && <Award className="w-6 h-6 text-blue-600" />}
                  {service.icon === 'Cloud' && <Users className="w-6 h-6 text-blue-600" />}
                  {service.icon === 'Smartphone' && <Briefcase className="w-6 h-6 text-blue-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how we can help you achieve your goals</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;