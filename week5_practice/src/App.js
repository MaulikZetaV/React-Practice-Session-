import { Routes, Route } from "react-router-dom";
import "./App.css";

import HeadPart from "./components/HeaderPart";
import Sidebar from "./components/SideBar";
import FooterPart from "./components/Footer";

import Home from "./pages/Home";


import Day1Layout from "./pages/Day1/Day1Layout";
import Day1Home from "./pages/Day1/Day1Home";
import Profile from "./pages/Day1/Profile";
import Contact from "./pages/Day1/Contact";

import Day2Layout from "./pages/Day2/Day2Layout";
import Day2Home from "./pages/Day2/Day2Home";
import Users from "./pages/Day2/Users";
import UserDetails from "./pages/Day2/UserDetails";
import UserProfile from "./pages/Day2/UserProfile";


import Day3 from "./pages/Day3/Day3";
import Day4 from "./pages/Day4/Day4";
import Day5 from "./pages/Day5/Day5";

function App() {
  return (
    <div className="App">
      <HeadPart />

      <div className="main-layout">
        <Sidebar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/day-1" element={<Day1Layout />}>
              <Route index element={<Day1Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="contact" element={<Contact />} />
          
            </Route>

            <Route path="/day-2" element={<Day2Layout />}>
              <Route index element={<Day2Home />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:userId" element={<UserDetails />} />
              <Route path="users/:userId/profile" element={<UserProfile />} />
            </Route>

            <Route path="/day-3" element={<Day3 />} />
            <Route path="/day-4" element={<Day4 />} />
            <Route path="/day-5" element={<Day5 />} />
          </Routes>
        </div>
      </div>

      <FooterPart />
    </div>
  );
}

export default App;
