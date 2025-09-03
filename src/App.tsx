import './App.css'
import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Home from './Home';
import TaskForm from "./Tasks/TaskForm.tsx";
import TaskUploadDoc from "./Tasks/TaskUploadDoc.tsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route  path="/home" element={<Home />} />
            <Route  path="/" element={<Home />} />
            <Route  path="/tasks/form" element={<TaskForm />} />
            <Route  path="/tasks/upload-doc" element={<TaskUploadDoc />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
