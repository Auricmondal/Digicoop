import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "@/components/sections/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const handleForgotPasswordSubmit = async (email) => {
    try {
      console.log("Password reset requested for:", email);
      // TODO: Implement API call
      // TODO: Handle success
    } catch (error) {
      console.error("Error sending reset email:", error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-tint flex items-center justify-center">
      <ForgotPasswordForm
        onSubmit={handleForgotPasswordSubmit}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}
