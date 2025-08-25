import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "../../layouts/SectionWrapper";
import { ButtonFlippedReveal } from "../ui/Buttons";
import useSubmit from "../../hooks/useSubmit";
import FloatingLabelInput from "../ui/FormInput";

const LoginForm = ({ onSubmit, onLoginClick }) => {
  const { formData, handleChange, handleSubmit, loading, error } = useSubmit(
    onSubmit,
    { email: "", password: "" }
  );

  const handleLoginClick = () => {
    if (onLoginClick) {
      onLoginClick();
    }
  };

  return (
    <SectionWrapper>
      <div className="w-full md:w-md max-w-md bg-white rounded-lg shadow-md p-8">
        {/* Home Icon */}
        <Link to="/">
          <Home className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-200" />
        </Link>

        {/* Brand Name */}
        <h1 className="text-center text-sm font-semibold text-primary mt-6">
          DigiCoop
        </h1>

        {/* Description */}
        <h2 className="text-center text-gray-800 mb-6 text-3xl font-bold">
          Welcome Back!
        </h2>

        {/* Inputs */}
        <FloatingLabelInput
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <FloatingLabelInput
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
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
            Log In
          </ButtonFlippedReveal>
        </div>

        {/* Login Link */}
        <div className="text-center mt-8">
          <button
            onClick={handleLoginClick}
            className="text-blue-600 hover:text-blue-700 underline font-medium transition duration-200 bg-transparent border-none cursor-pointer"
          >
            Forgot Your Password?
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LoginForm;