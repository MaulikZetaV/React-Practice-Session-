import './App.css';
import HeadPart from './components/HeaderPart';
import Sidebar from './components/SideBar';
import FooterPart from './components/Footer';
import DayOne from './Day-1/Day1';
import DayTwo from './Day-2/Day2';


function App() {
  return (
    <>
          <HeadPart />
    
          <div className="main-layout">
            <Sidebar />
    
            <div className="page-content">
              <DayOne />
              <br/>
              <DayTwo />
            
            </div>
          </div>
    
          <FooterPart />
        </>
  );
}

export default App;
