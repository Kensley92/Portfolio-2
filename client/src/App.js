import logo from './logo.svg';
import './App.css';
import NameSearch from "./components/NameSearch";
import GenderSearch from "./components/GenderSearch";
import AgeSearch from "./components/AgeSearch";

function App() {
  return (
    <div className="App">
      <NameSearch/>
      <AgeSearch/>
      <GenderSearch/>
    </div>
  );
}

export default App;
