import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Home from './Home';
import Steps from "./steps.tsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/steps" element={<Steps/>} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
