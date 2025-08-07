"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MessageCircle, Send } from "lucide-react";

interface NewsletterAlertProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterAlert({ isOpen, onClose }: NewsletterAlertProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the email to your newsletter service
    console.log("Newsletter subscription:", { email });
    
    setIsSubmitting(false);
    onClose();
    // You could show a success message here
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the message to your backend
    console.log("Contact message:", { name, email, message });
    
    setIsSubmitting(false);
    onClose();
    // You could show a success message here
  };

  const flipToMessage = () => {
    setIsFlipped(true);
  };

  const flipToNewsletter = () => {
    setIsFlipped(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Card Container with 3D flip effect */}
            <div className="relative w-full h-[500px] perspective-1000">
              <motion.div
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
              >
                {/* Newsletter Side (Front) */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 h-full flex flex-col">
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={24} />
                    </button>

                    <div className="flex-1 flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Mail className="text-white" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          Stay Updated!
                        </h2>
                        <p className="text-gray-600">
                          Subscribe to our newsletter and get the latest updates on digital solutions and tech insights.
                        </p>
                      </div>

                      <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                        <div>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <Send size={18} />
                              Subscribe
                            </>
                          )}
                        </button>
                      </form>

                      <div className="mt-6 text-center">
                        <button
                          onClick={flipToMessage}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                        >
                          Or send us a message instead →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Side (Back) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 h-full flex flex-col overflow-hidden">
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    >
                      <X size={24} />
                    </button>

                    <div className="flex-1 flex flex-col justify-center min-h-0 pt-8">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                          <MessageCircle className="text-white" size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                          Send us a Message
                        </h2>
                        <p className="text-gray-600 text-sm">
                          Have a project in mind? Let's discuss how we can help.
                        </p>
                      </div>

                      <form onSubmit={handleMessageSubmit} className="space-y-3 flex-1 flex flex-col min-h-0">
                        <div>
                          <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          />
                        </div>
                        
                        <div className="flex-1 min-h-0">
                          <textarea
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full h-full min-h-[80px] max-h-[120px] px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm"
                          />
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm font-medium"
                        >
                          {isSubmitting ? (
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <Send size={16} />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>

                      <div className="mt-3 text-center">
                        <button
                          onClick={flipToNewsletter}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                        >
                          ← Back to newsletter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}