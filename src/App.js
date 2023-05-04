import "./App.css";
import "./app.scss";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/Portfolio" element={<Home />} />
    </Routes>
  );
}

export default App;
