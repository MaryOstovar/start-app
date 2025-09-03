import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Courses from './courses'
import Steps from "./steps.tsx";
import Appointments from "./appointments.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Courses />} />
            <Route  path="/steps" element={<Steps/>} />
            <Route  path="/step/appointments" element={<Appointments/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
