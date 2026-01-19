import './App.css';
import HeadPart from './components/HeaderPart';
import Sidebar from './components/SideBar';
import FooterPart from './components/Footer';
import Day1 from './Day-1/Day1';

function App() {
  return (
    <div className="App">
      <HeadPart />
      <div className="main-layout">
        <Sidebar />
        <div className="page-content">
          <Day1/>
        </div>
      </div>
      <FooterPart />
    </div>
  );
}

export default App;
