import './App.css';
import './App.css';
import HeadPart from './components/HeaderPart';
import Sidebar from './components/SideBar';
import FooterPart from './components/Footer';
import Day1 from './Day-1/Day1';
import Day2 from './Day-2/Day2';
import Day3 from './Day-3/Day3';
import Day4 from './Day-4/Day4';
import Day5 from './Day-5/Day5';

function App() {
  return (
    <div className="App">
          <HeadPart/>
          <div className="main-layout">
            <Sidebar />
            <div className="page-content">
             <Day1/>
             <Day2/>
             <Day3/>
             <Day4/>
             <Day5/>
            </div>
          </div>
          <FooterPart />
        </div>
    
  );
}

export default App;
