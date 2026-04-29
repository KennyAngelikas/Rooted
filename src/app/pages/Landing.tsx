import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Network, MessageSquare, Filter } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 mb-8 bg-orange-100 rounded-full"
          >
            <span className="text-sm text-orange-800 tracking-wide">VISUAL DISCOURSE ANALYSIS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 leading-tight"
            style={{ fontSize: "4.5rem", fontFamily: "Crimson Text, serif" }}
          >
            Our <span className="text-orange-600">argument map</span> helps non-experts,
            who want to comprehend a topic, by visualizing diverse arguments,
            and summarizing overwhelming noise of online discourse.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Transform chaotic threads into navigable knowledge graphs.
            Understand complexity. Discover perspectives. Find clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              to="/visualize"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <span className="text-lg">Explore the Map</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Problem Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white py-24"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl mb-6"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              The Problem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              We are overloaded with so much information, that it is impossible to synthesize
              the diverse and shifting perspectives on complex topics. This leads us to a
              fragmented understanding of public discourse.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed mt-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              This lack of clarity fosters <span className="text-orange-400 font-semibold">"false polarization,"</span> where we
              perceive opposing views as more extreme than they actually are, ultimately deepening
              social divisiveness and hindering productive dialogue.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Value Proposition */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-br from-orange-50 to-amber-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl mb-6 text-gray-900"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Our Solution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-700 leading-relaxed mb-12"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Our Argument Map takes massive chaotic threads from r/ChangeMyView dataset and
              turns each topic into a navigable graph, visualizing diversity and frequency of
              arguments. This helps users simply visualize and understand the complexity and
              diversity of viewpoints on a topic as well as identifying new angles.
            </motion.p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Interactive Graph
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Navigate complex discussions through an intuitive, zoomable node network
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Argument Mapping
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  See how arguments connect, diverge, and build upon each other
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Filter className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Smart Filtering
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Focus on what matters with customizable views and perspectives
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl mb-6"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            Ready to explore?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 mb-8"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Transform how you understand online discourse
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="/visualize"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <span className="text-lg">View Visualization</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
