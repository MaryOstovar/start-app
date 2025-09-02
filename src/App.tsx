import './App.css'
import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Home from './Home';

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route  path="/home" element={<Home />} />
            <Route  path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
