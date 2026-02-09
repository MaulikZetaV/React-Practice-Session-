import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={
          <Login
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Profile setIsLoggedIn={setIsLoggedIn} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
