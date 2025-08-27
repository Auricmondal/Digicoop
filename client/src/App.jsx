import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AboutPage from "./pages/AboutPage";
import ProgressBar from "./components/shared/ProgressBar";
import "./App.css";
import SolutionPage from "./pages/SolutionPage";

export default function App() {
  return (
    <Router>
      <ProgressBar />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="solutions" element={<SolutionPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}
