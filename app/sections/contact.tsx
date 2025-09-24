"use client";
import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FadeInSection } from "@/components/fade-in";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use Next.js public env vars (exposed to the browser)
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Check if all required environment variables are available
      if (!serviceID || !templateID || !publicKey) {
        throw new Error(
          "Missing EmailJS configuration. Please check your environment variables."
        );
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // On success
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-32 flex flex-col gap-8 items-center justify-center"
    >
      <FadeInSection>
        <div className="flex flex-col items-center justify-center min-h-[50vh] relative z-10">
          <div className="w-full max-w-6xl">
            {/* Contact Form */}
            <div className="bg-background rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Form Section */}
                <div className="p-5 sm:p-6 md:p-8 lg:p-10 w-full">
                  <h2 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl font-noto text-primary mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-foreground/60 font-me mb-3 sm:mb-4 md:mb-6">
                    If you have any questions or concerns, please don't hesitate
                    to contact me.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 sm:py-3.5 bg-muted text-foreground border border-border rounded-lg md:rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg focus:-translate-y-0.5"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 sm:py-3.5 bg-muted border text-foreground border-border rounded-lg md:rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg focus:-translate-y-0.5"
                    />

                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows="4"
                      className="w-full px-4 py-3 sm:py-3.5 bg-muted border text-foreground border-border rounded-lg md:rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent resize-none transition-all duration-300 hover:shadow-md focus:shadow-lg focus:-translate-y-0.5"
                    />

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                        Message sent successfully!
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                        Failed to send message. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 sm:py-3.5 px-6 bg-sidebar border-border border text-foreground font-semibold rounded-lg md:rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 ${
                        isSubmitting
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:from-secondary/80 hover:to-primary/40 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send message</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Contact Info Section */}
                <div className="bg-gradient-to-br from-primary/20 to-accent/25 p-5 sm:p-6 md:p-8 lg:p-10 text-foreground w-full flex flex-col justify-center items-center">
                  <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-5 sm:mb-6 ">
                    Contact Information
                  </h3>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">
                          Email
                        </h4>
                        <p className="text-sm sm:text-base">
                          salaheddinesoussi00@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">
                          Phone
                        </h4>
                        <p className="text-sm sm:text-base">+212 700152919</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">
                          Location
                        </h4>
                        <p className="text-sm sm:text-base">Agadir, Morocco</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="mt-6 text-gray-600 text-xs sm:text-sm">
            © 2025 - Salah Eddine
          </footer>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ContactSection;
