import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/sections/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSubmit = async ({email, password}) => {
    try {
      console.log("Login requested for:", email, password);
      // TODO: Implement API call
      // TODO: Handle success
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="min-h-screen bg-tint flex items-center justify-center">
      <LoginForm
        onSubmit={handleLoginSubmit}
        onForgotPasswordClick={handleForgotPasswordClick}
      />
    </div>
  );
}