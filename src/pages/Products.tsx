import React from 'react';
import { motion } from 'framer-motion';
import { Box, BarChart, Shield, Cloud, Smartphone, Zap } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "TechCorp Analytics",
    description: "Advanced analytics platform for business intelligence",
    features: [
      "Real-time data processing",
      "Custom dashboards",
      "Predictive analytics",
      "Export capabilities"
    ],
    icon: BarChart,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "SecureGuard",
    description: "Enterprise-grade security management system",
    features: [
      "Threat detection",
      "Access control",
      "Compliance management",
      "Security reporting"
    ],
    icon: Shield,
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "CloudManager",
    description: "Comprehensive cloud infrastructure management",
    features: [
      "Resource optimization",
      "Cost management",
      "Performance monitoring",
      "Auto-scaling"
    ],
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "MobileConnect",
    description: "Enterprise mobility management platform",
    features: [
      "Device management",
      "App distribution",
      "Security policies",
      "Usage analytics"
    ],
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60"
  }
];

const Products = () => {
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
              Our Products
            </h1>
            <p className="text-xl">
              Enterprise solutions designed for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-lg">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="space-y-3">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <Zap className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      Request Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-gray-600">Our products work together perfectly</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Box className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Easy Setup</h3>
                <p className="text-gray-600">Quick implementation with minimal disruption</p>
              </div>
              <div className="text-center">
                <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Cloud-Native</h3>
                <p className="text-gray-600">Built for modern cloud infrastructure</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-grade security at every level</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;