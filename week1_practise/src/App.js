import './App.css';
import Day1 from './Day-1/Day1';
import Day2 from './Day-2/Day2';
import Day3 from './Day-3/Day3';
import Day4 from './Day-4/Day4';
import FooterPart from './Day-3/FooterPart';
import HeadPart from './Day-3/HeadPart';
import Sidebar from './Day-3/Sidebar';

function App() {
  return (
    <>
      <HeadPart />

      <div className="main-layout">
        <Sidebar />

        <div className="page-content">
          <Day1 />
          <Day2 />
          <Day3 name="Maulik Thakur" />
          <Day4 />
        </div>
      </div>

      <FooterPart />
    </>
  );
}

export default App;
