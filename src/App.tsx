import Courses from './courses'
import Steps from "./steps.tsx";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import Layout from "./components/Layout";
import ResultPage from "./ResultPage";
import Appointments from "./appointments.tsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/steps" element={<Steps/>} />
            <Route path="/result" element={<ResultPage />} />
            <Route  path="/" element={<Courses />} />
            <Route  path="/steps" element={<Steps/>} />
            <Route  path="/step/appointments" element={<Appointments/>} />
            </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;