import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Home from './Home';
import Courses from './courses'
import Steps from "./steps.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/courses" element={<Courses />} />
            <Route  path="/steps" element={<Steps/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
