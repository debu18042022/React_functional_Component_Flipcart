// import logo from './logo.svg';
import './App.css';
import "./Components/style.css";
import ComponentNavbar from './Components/ComponentNavbar';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';
function App() {
  return (
    <div style={{flexWrap:"wrap",minWidth:"100%",backgroundColor:"lightblue"}}>
      <ComponentNavbar/>
      <Component2/>
      <Component3/>
      <Component4/>
    </div>
  );
}
export default App;
