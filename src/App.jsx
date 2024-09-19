import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import ProjectDetails from "./pages/projectDetails";
import ProjectsPage from "./pages/projectsPage";
import { Footer, Header } from "./comps";



const App = () =>{ 

  return(
  <Router>
    <Header nav={['home','gallary','contact','about']} cta='gallary' /> 
    <div className="w-full flex pb-32 bg-[#f2edf5] flex-col gap-32 px-2 md:px-0 overflow-hidden text-[#07041b] items-center">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id/*" element={<ProjectDetails />} />
      </Routes>
      
    </div>
    <Footer />
  </Router>
  )}
   
 
export default App;