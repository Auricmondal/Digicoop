import React, { useState } from "react";
import { GradientBadge } from "@/components/ui/Badges";
import SectionWrapper from "@/layouts/SectionWrapper";
import { ButtonFlippedReveal } from "@/components/ui/Buttons";
import useSubmit from "@/hooks/useSubmit"; // Adjust path as needed
import AnimatedHeader from "@/components/ui/AnimatedHeader";

const ContactUs = () => {
  const [validationErrors, setValidationErrors] = useState({});

  //! Mock submit function - replace with your actual API call
  const submitContactForm = async (data) => {
    //! Simulate API call
    console.log("Submitting contact form:", data);
    // TODO: Add actual form submission logic here
  };

  const { formData, handleChange, handleSubmit, loading, error } = useSubmit(
    submitContactForm,
    { name: "", email: "", message: "" }
  );

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";

      case "email": {
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";
      }

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return "";

      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    handleChange(e);

    // Clear validation error when user starts typing
    const { name } = e.target;
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setValidationErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setValidationErrors(newErrors);

    // If no validation errors, submit form
    if (Object.keys(newErrors).length === 0) {
      handleSubmit();
    }
  };

  return (
    <SectionWrapper className="bg-tint">
      <div className="max-w-[1460px] mx-auto" id="contact">
        {/* Section Header */}
        <div className="flex flex-col justify-center text-center gap-6">
          {/* Pill with gradient border */}
          <span>
            <GradientBadge text={"Contact Us"} />
          </span>

          {/* Header content container with responsive sizing */}
          <div className="w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[724px] h-auto mx-auto flex flex-col justify-center gap-2 lg:gap-[10px] opacity-100">
            <h2 className="mb-4">
              {/* ^ Primary Dark #001F52 */}
              {/* ^ Dark Tint #467FFD */}

              <AnimatedHeader
                words={[
                  { text: "Let's", isGradient: false },
                  { text: "Build", isGradient: false },
                  { text: "Together", isGradient: true },
                ]}
                className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.01em] text-primary-dark"
              />
            </h2>

            <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.25rem] font-normal leading-[1.6] tracking-[0] text-center text-black ">
              Whether you&apos;re ready to digitize your cooperative or simply
              curious about how DigiCoop works, we&apos;d love to hear from you.
              Our team is here to answer questions, guide you through the
              platform, and explore how we can support your cooperative&apos;s
              journey.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="bg-white rounded-2xl w-full p-6 flex flex-col gap-2 max-w-[1460px] my-6"
          style={{ boxShadow: "0px 4px 10.8px 0px rgba(0, 0, 0, 0.1)" }}
        >
          {/* Display general form error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">
              {error}
            </div>
          )}

          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Name"
              className={`w-full border rounded-md px-4 py-6 text-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                validationErrors.name ? "border-red-500" : "border-black/10"
              }`}
            />
            {validationErrors.name && (
              <p className="text-red-500 text-sm px-1">
                {validationErrors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Email"
              className={`w-full border rounded-md px-4 py-6 text-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                validationErrors.email ? "border-red-500" : "border-black/10"
              }`}
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm px-1">
                {validationErrors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Your Message"
              rows={5}
              className={`w-full border rounded-md px-4 py-6 text-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                validationErrors.message ? "border-red-500" : "border-black/10"
              }`}
            />
            {validationErrors.message && (
              <p className="text-red-500 text-sm px-1">
                {validationErrors.message}
              </p>
            )}
          </div>

          <ButtonFlippedReveal
            className={`bg-primary text-white rounded-2xl py-5 px-4 h-[58px] flex gap-1 items-center justify-center ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            fullWidth={true}
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </ButtonFlippedReveal>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactUs;
