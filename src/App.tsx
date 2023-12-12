import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
// import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      {/* <NavBar/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
