import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

/**
 * MainLayout
 * - Wraps all pages
 * - Provides persistent Navbar & Footer
 * - Uses React Router Outlet for nested routes
 */
const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "calc(100vh - 128px)",
          padding: "0px",
          backgroundColor: "#ffffff"
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
