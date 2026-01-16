import './App.css';
import HeadPart from './components/HeaderPart';
import Sidebar from './components/SideBar';
import FooterPart from './components/Footer';
import DayOne from './Day-1/Day1';
import DayTwo from './Day-2/Day2';
import Day3 from './Day-3/Day3';
import Day4 from './Day-4/Day4';
import Day5 from './Day-5/Day5';


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
              <br/>
              <Day3/>
              <br/>
              <Day4/>
              <br/>
              <Day5/>
            </div>
          </div>
    
          <FooterPart />
        </>
  );
}

export default App;
