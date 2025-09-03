import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import TaskForm from "./Tasks/TaskForm.tsx";
import TaskUploadDoc from "./Tasks/TaskUploadDoc.tsx";
import Courses from './courses'
import Steps from "./steps.tsx";
import Layout from "./components/Layout";
import ResultPage from "./ResultPage";
import Appointments from "./appointments.tsx";
import TasksPage from "./TasksPage.tsx";
import UploadSis from "./UploadSis.tsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/tasks/form" element={<TaskForm />} />
            <Route  path="/tasks/upload-doc" element={<TaskUploadDoc />} />
          <Route element={<Layout />}>
            <Route path="/steps" element={<Steps/>} />
            <Route path="/step/results" element={<ResultPage />} />
            <Route  path="/" element={<Courses />} />
            <Route  path="/steps" element={<Steps/>} />
            <Route  path="/step/appointments" element={<Appointments/>} />
            <Route  path="/step/tasks" element={<TasksPage/>} />
            <Route  path="/step/upload" element={<UploadSis/>} />
            <Route  path="/step/tasks/assignments" element={<TaskForm/>} />
            <Route  path="/step/tasks/attachments" element={<TaskUploadDoc/>} />
            </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;