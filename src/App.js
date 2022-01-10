import './App.css';

// React-router components importation
import { Routes, Route } from "react-router-dom"

// Pages importation
import Home from './Containers/Home/Home';
import ArticlePage from './Containers/ArticlePage/ArticlePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
