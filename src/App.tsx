import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Articles } from "./Pages/Articles";
import { Article } from "./Pages/Article";

function App() {
  return (
    <div className="App">
      <Articles></Articles>

      <Router>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
