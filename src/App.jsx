import { Route, Routes } from "react-router-dom";
// import Hero from "./components/hero";
import SideNav from "./components/sideNave";
import Dashbord from "./Pages/Dashbord";
import Student from "./Pages/Student";
import Teacher from "./Pages/Teacher";

function App() {
  return (
    <div>
      <SideNav>
        {/* <Hero /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </SideNav>
    </div>
  );
}

export default App;
