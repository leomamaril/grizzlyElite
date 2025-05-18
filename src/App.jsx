import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Navigation from "./pages/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grizzly from "./pages/Grizzly";
function App() {
 

  return (
    
     <>
      <Navigation/>
      <Grizzly/>
     </>
  
  )
}

export default App
