import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from "./Sidebar";
import Navbar from './Nav';
import Mainbody from './Mainbody';

function App() {

  return (
    <div className="App">
       <div className="wrapper">
       <SideBar/>
       <div className="Nav-Body">
     <Navbar></Navbar> 
     <Mainbody></Mainbody>
     </div>
     </div>
    </div>
  )
}

export default App
