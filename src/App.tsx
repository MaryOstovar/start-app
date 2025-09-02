import './App.css'
import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Home from './Home';
import Courses from './courses'

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route  path="/home" element={<Home />} />
            <Route  path="/" element={<Home />} />
            <Route  path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
