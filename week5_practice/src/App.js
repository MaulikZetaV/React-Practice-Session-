import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Studied from "./Pages/Studied";

function App() {
  return (
    <>
      {/* Common Navigation */}
      <Navbar />

      {/* Route Setup */}
      <Routes>
        <Route path="/" element={<Studied />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
