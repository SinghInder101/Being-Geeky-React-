import logo from './logo.svg';

import './App.css';
import Header from './header'
import DivOne from './Div1/DivOne'
import DivTwo from './Div2/DivTwo';
import DivThree from './Div3/DivThree';
import DivFour from './Div4/DivFour';
import DivFive from './Div5/DivFive';
import DivSix from './Div6/DivSix';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <DivOne></DivOne>
      <DivTwo></DivTwo>
      <DivThree></DivThree>
      <DivFive></DivFive>
      <DivFour></DivFour>
      <DivSix></DivSix>

      
    </div>
  );
}

export default App;
