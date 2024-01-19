import Topbar from "./topbar/Topbar";
import Home from "./home/Home"
import Single from "./sigle/Single"
import Write from "./write/Write";
// import Setings from "./setings/Setings";
import Login from "./login/Login";
import Register from "./register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Single/>}></Route>
        <Route path="/contact" element={<Login/>}></Route>
        <Route path="/write" element={<Write/>}></Route>
        <Route path="/login" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
