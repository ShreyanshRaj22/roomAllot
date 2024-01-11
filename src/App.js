import "./App.css";
import Navbar from "./components/Navbar";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="full-height-content">
        <ButtonContainer />
      </div>
    </div>
  );
}

export default App;
