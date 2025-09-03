import Home from './Home';
import Steps from "./steps.tsx";
import { BrowserRouter as Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import ResultPage from "./ResultPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route  path="/" element={<Home />} />
            <Route  path="/steps" element={<Steps/>} />
            <Route path="/result" element={<ResultPage />} />
            </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;