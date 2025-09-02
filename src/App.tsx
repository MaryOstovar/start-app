import './App.css'
import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Home from './Home';
import TaskForm from "./TaskForm.tsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route  path="/home" element={<Home />} />
            <Route  path="/" element={<Home />} />
            <Route  path="/tasks/form" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
