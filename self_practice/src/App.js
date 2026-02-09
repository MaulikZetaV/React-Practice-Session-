import {Routes,Route} from "react-router-dom";
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import NavBar from "./components/NavBar";
import Error from "./pages/Error";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";
import Homes from "./mini-project1/Homes";

function App() {
  return (
   <div>
    <h2>React Router DOM Self-Practice</h2>
    <NavBar/>
    <Routes>
      {/*Basic Routing*/}
      <Route path = "/" element = {<Home/>} />
      <Route path = "/about" element = {<About/>} />

      {/*Dynamic Routing*/}
      <Route path="/user" element = {<User/>} />
      <Route path="/user/:id" element = {<UserDetails/>} />

      {/*Mini Project on Dynamice Routing*/}
      <Route path="/homes" element = {<Homes/>} />






      <Route path = "*" element = {<Error/>} />
    </Routes>

   </div>
  );
}

export default App;
