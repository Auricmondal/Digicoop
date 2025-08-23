import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
