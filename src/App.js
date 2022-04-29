import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className="App">
      <Header />

      <MainPage switch1={switch1} setSwitch1={setSwitch1} switch2={switch2} setSwitch2={setSwitch2} switch3={switch3} setSwitch3={setSwitch3} />

      <Footer />
    </div>
  );
}

export default App;
