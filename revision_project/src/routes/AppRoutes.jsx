import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import MiniProject1 from "../pages/miniProject1/MiniProject1";
import MiniProject2 from "../pages/miniProject2/MiniProject2";
import MiniProject3 from "../pages/miniProject3/MiniProject3";
import MiniProject4 from "../pages/miniProject4/MiniProject4";
import FinalProject from "../pages/finalProject/FinalProject";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/mini-project-1" element={<MiniProject1 />} />
        <Route path="/mini-project-2" element={<MiniProject2 />} />
        <Route path="/mini-project-3" element={<MiniProject3 />} />
        <Route path="/mini-project-4" element={<MiniProject4 />} />

        <Route
          path="/final-project/*"
          element={
            <ProtectedRoute>
              <FinalProject />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
