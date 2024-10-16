import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import ProjectDetails from "./pages/projectDetails";
import ProjectsPage from "./pages/projectsPage";
import { Footer, Header } from "./comps";
import Notfound from "./pages/Notfound";



const App = () =>{ 

  return(
  <Router>
    <Header nav={['contact','about']} cta='contact' /> 
    <div className="w-full flex min-h-screen pb-32 bg-[#f2edf5] flex-col gap-32 px-2 md:px-0 overflow-hidden text-[#07041b] items-center">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id/*" element={<ProjectDetails />} />
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      
    </div>
    <Footer />
  </Router>
  )}
   
 
export default App;