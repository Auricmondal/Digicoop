import { Home } from "lucide-react";
import SectionWrapper from "../../layouts/SectionWrapper";
import useAuthForm from "../../hooks/useAuthForm";

const ForgotPasswordForm = ({ onSubmit, onLoginClick }) => {
  const { formData, handleChange, handleSubmit, loading, error } = useAuthForm(
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
        <Home className="w-6 h-6 text-gray-600" />

        {/* Brand Name */}
        <h1 className="text-center text-sm font-semibold text-primary mt-6">
          DigiCoop
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6">
          Enter your email and we'll send you a link to reset your password
        </p>

        {/* Email Input */}
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-6 w-full border-b border-gray-300 focus:outline-none focus:border-b focus:border-primary ease-in-out duration-200"
          placeholder="Email"
          required
        />
        {/* Error Message from hook */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Send Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className={`bg-primary text-white py-2 px-4 rounded-xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-dark-tint ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:shadow-md hover:shadow-black/50"
            }`}
          >
            Send
          </button>
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