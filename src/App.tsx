import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import TaskForm from "./Tasks/TaskForm.tsx";
import TaskUploadDoc from "./Tasks/TaskUploadDoc.tsx";
import Courses from './courses'
import Steps from "./steps.tsx";
import Appointments from "./appointments.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/tasks/form" element={<TaskForm />} />
            <Route  path="/tasks/upload-doc" element={<TaskUploadDoc />} />
            <Route  path="/" element={<Courses />} />
            <Route  path="/steps" element={<Steps/>} />
            <Route  path="/step/appointments" element={<Appointments/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
