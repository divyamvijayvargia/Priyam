import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Users, Laptop, Phone, MessageSquare, BarChart } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Tailored solutions built for your specific business needs",
    icon: Code,
    details: [
      "Requirements analysis",
      "Custom development",
      "Testing & QA",
      "Deployment & maintenance"
    ]
  },
  {
    id: 2,
    title: "Cloud Services",
    description: "Comprehensive cloud solutions and migration services",
    icon: Cloud,
    details: [
      "Cloud migration",
      "Infrastructure setup",
      "Performance optimization",
      "24/7 monitoring"
    ]
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Turn your data into actionable insights",
    icon: Database,
    details: [
      "Data visualization",
      "Predictive analytics",
      "Business intelligence",
      "Real-time analytics"
    ]
  },
  {
    id: 4,
    title: "IT Consulting",
    description: "Expert guidance for your digital transformation",
    icon: Users,
    details: [
      "Technology assessment",
      "Digital strategy",
      "Process optimization",
      "Implementation planning"
    ]
  },
  {
    id: 5,
    title: "Web Development",
    description: "Modern web applications for your business",
    icon: Laptop,
    details: [
      "Responsive design",
      "Progressive web apps",
      "E-commerce solutions",
      "CMS development"
    ]
  },
  {
    id: 6,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: Phone,
    details: [
      "iOS development",
      "Android development",
      "Cross-platform apps",
      "App maintenance"
    ]
  }
];

const Services = () => {
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
              Our Services
            </h1>
            <p className="text-xl">
              Comprehensive technology solutions for your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600">How we deliver exceptional results</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: MessageSquare, title: "Discovery", description: "Understanding your needs" },
                { icon: BarChart, title: "Planning", description: "Creating the roadmap" },
                { icon: Code, title: "Development", description: "Building the solution" },
                { icon: Users, title: "Support", description: "Ongoing maintenance" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-600"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Let's discuss your project and create something amazing together</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;