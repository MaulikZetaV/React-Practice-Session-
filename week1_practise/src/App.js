import './App.css';
import Day1 from './Day-1/Day1';
import Day2 from './Day-2/Day2';
import Day3 from './Day-3/Day3';
import DayThree from './Day-3/DayThree';
import FooterPart from './Day-3/FooterPart';
import HeadPart from './Day-3/HeadPart';
import Sidebar from './Day-3/Sidebar';


function App() {
  return (
    <>
      <HeadPart/>
      <Sidebar/>
      <Day1/>
      <Day2/>
      <Day3 name = "Maulik Thakur"/>
      <DayThree name = "Maulik" role = "Trainee"/>
      <DayThree name = "Sandy" role = "Trainee"/>
      <DayThree name = "Manav" role = "Intern"/>
      <FooterPart/>
    </>
  );
}

export default App;
