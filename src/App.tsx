import {Routes,Route} from "react-router-dom"
import Home from "./page/Home/Home"
import StudentDashboard from "./page/Dashboard/StudentDashboard"
import TeacherDasboard from "./page/Dashboard/TeacherDasboard"
import Addpage from "./page/Dashboard/Addpage"
import Viewpage from "./page/Dashboard/Viewpage"
import Enrolledpage from "./page/Dashboard/Enrolledpage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/teacher" element={<TeacherDasboard/>} />
      <Route path="/student" element={<StudentDashboard/>} />
      <Route path="/teacher/add" element={<Addpage/>} />
      <Route path="/teacher/view" element={<Viewpage/>} />
      <Route path="/student/courses" element={<Enrolledpage/>} />
    </Routes>
  )
}

export default App;