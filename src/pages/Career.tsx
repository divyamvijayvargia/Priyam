import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Briefcase } from 'lucide-react';
import { jobs } from '../data';

const Career = () => {
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
              Join Our Team
            </h1>
            <p className="text-xl">
              Build your career with a company that's shaping the future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join TechCorp?</h2>
            <p className="text-gray-600">Discover the benefits of working with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Great Culture",
                description: "Work with passionate professionals in a collaborative environment",
                details: ["Inclusive workplace", "Regular team events", "Open communication"]
              },
              {
                icon: Briefcase,
                title: "Growth Opportunities",
                description: "Clear career paths and continuous learning programs",
                details: ["Training budget", "Mentorship program", "Skill workshops"]
              },
              {
                icon: Clock,
                title: "Work-Life Balance",
                description: "Flexible working hours and remote work options",
                details: ["Flexible hours", "Remote work", "Unlimited PTO"]
              },
              {
                icon: MapPin,
                title: "Global Presence",
                description: "Opportunities to work with international teams and clients",
                details: ["Global projects", "Travel opportunities", "Cultural exchange"]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-center mb-6">
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                </div>
                <ul className="space-y-2">
                  {benefit.details.map((detail, i) => (
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

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-gray-600">Find your perfect role</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="space-y-2">
                      {job.requirements.map((requirement, i) => (
                        <div key={i} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {requirement}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Application Process</h2>
            <p className="text-gray-600">Simple steps to join our team</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply",
                  description: "Submit your application",
                  details: ["Upload resume", "Fill application form", "Cover letter"]
                },
                {
                  step: "2",
                  title: "Review",
                  description: "Initial screening",
                  details: ["Application review", "Skills assessment", "Background check"]
                },
                {
                  step: "3",
                  title: "Interview",
                  description: "Meet the team",
                  details: ["Technical interview", "Culture fit", "Team meeting"]
                },
                {
                  step: "4",
                  title: "Offer",
                  description: "Welcome aboard",
                  details: ["Offer letter", "Benefits discussion", "Onboarding"]
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {step.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-600"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Employee Benefits</h2>
            <p className="text-gray-600">What we offer to our team members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Wellness",
                benefits: [
                  "Comprehensive health insurance",
                  "Dental and vision coverage",
                  "Mental health support",
                  "Gym membership"
                ]
              },
              {
                title: "Financial Benefits",
                benefits: [
                  "Competitive salary",
                  "Performance bonuses",
                  "401(k) matching",
                  "Stock options"
                ]
              },
              {
                title: "Work-Life Balance",
                benefits: [
                  "Flexible work hours",
                  "Remote work options",
                  "Paid time off",
                  "Parental leave"
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;