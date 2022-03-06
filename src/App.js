import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addcard" element={<AddCard />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
