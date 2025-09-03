import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";

import Layout from "./components/Layout";
import ResultPage from "./ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;