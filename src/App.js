import './App.css';

// React-router components importation
import { Routes, Route } from "react-router-dom"

// Containers importation
import Home from './Containers/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
