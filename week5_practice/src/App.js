import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Studied from "./Pages/Studied";
import HeadPart from "./components/HeaderPart";
import Sidebar from "./components/SideBar";
import FooterPart from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="App">
        <HeadPart />
        <div className="main-layout">
          <Sidebar />
          <div className="page-content">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/studied" element={<Studied />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <FooterPart />
      </div>
    </>
  );
}

export default App;
