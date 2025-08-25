import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "../../layouts/SectionWrapper";
import { ButtonFlippedReveal } from "../ui/Buttons";
import useSubmit from "../../hooks/useSubmit";
import FloatingLabelInput from "../ui/FormInput";

const ForgotPasswordForm = ({ onSubmit, onLoginClick }) => {
  const { formData, handleChange, handleSubmit, loading, error } = useSubmit(
    onSubmit,
    { email: "" }
  );

  const handleLoginClick = () => {
    if (onLoginClick) {
      onLoginClick();
    }
  };

  return (
    <SectionWrapper>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* Home Icon */}
        <Link to="/">
          <Home className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-200" />
        </Link>

        {/* Brand Name */}
        <h1 className="text-center text-sm font-semibold text-primary mt-6">
          DigiCoop
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6">
          Enter your email and we'll send you a link to reset your password
        </p>

        {/* Email Input */}
        <FloatingLabelInput
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        {/* Error Message from hook */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Send Button */}
        <div className="flex justify-center">
          <ButtonFlippedReveal
            onClick={handleSubmit}
            disabled={loading}
            className={`bg-primary text-white py-2 px-4 rounded-xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-dark-tint ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-md hover:shadow-black/50"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </ButtonFlippedReveal>
        </div>

        {/* Login Link */}
        <div className="text-center mt-8">
          <span className="text-gray-600">Remember Your Password? </span>
          <button
            onClick={handleLoginClick}
            className="text-blue-600 hover:text-blue-700 underline font-medium transition duration-200 bg-transparent border-none cursor-pointer"
          >
            Log In
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ForgotPasswordForm;
