import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import ProjectDetails from "./pages/projectDetails";
import ProjectsPage from "./pages/projectsPage";



const App = () =>{ 

  return(
  <Router>
    <div className="w-full flex flex-col gap-32 px-2 md:px-0 overflow-hidden text-[#07041b] items-center">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id/*" element={<ProjectDetails />} />
      </Routes>
    </div>
  </Router>
  )}
   
 
export default App;