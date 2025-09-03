import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Home from './Home';
import Steps from "./steps.tsx";
import Appointments from "./appointments.tsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/steps" element={<Steps/>} />
            <Route  path="/appointments" element={<Appointments/>} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
