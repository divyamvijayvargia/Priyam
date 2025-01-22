import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Shield, Cpu, Network } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: "Enterprise Software Solutions",
    description: "Custom enterprise applications that streamline your business operations",
    icon: Code,
    features: ["Scalable Architecture", "Integration Capabilities", "Custom Workflows"]
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description: "Robust cloud solutions for maximum efficiency and reliability",
    icon: Cloud,
    features: ["Auto-scaling", "Load Balancing", "Disaster Recovery"]
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    icon: Database,
    features: ["Real-time Analytics", "Predictive Modeling", "Visual Dashboards"]
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Comprehensive security solutions for your digital assets",
    icon: Shield,
    features: ["Threat Detection", "Data Encryption", "Security Audits"]
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI",
    icon: Cpu,
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    id: 6,
    title: "IoT Solutions",
    description: "Connect and manage your IoT devices efficiently",
    icon: Network,
    features: ["Device Management", "Real-time Monitoring", "Data Analytics"]
  }
];

const Solutions = () => {
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
              Enterprise Solutions
            </h1>
            <p className="text-xl">
              Transformative technology solutions for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <solution.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">See how our solutions drive business success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Retail Chain",
                description: "Implemented an enterprise-wide digital transformation solution",
                result: "40% increase in operational efficiency",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60"
              },
              {
                title: "Healthcare Provider",
                description: "Deployed AI-powered patient management system",
                result: "Reduced wait times by 60%",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-600 font-semibold">Result: {study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;