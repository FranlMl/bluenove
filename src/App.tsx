import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Article } from "./Pages/Article";
import { Articles } from "./Pages/Articles";
import { Header } from "./Compos/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Articles />} />

          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
