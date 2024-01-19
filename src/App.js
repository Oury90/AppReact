import Topbar from "./topbar/Topbar";
import Home from "./home/Home"
import Single from "./sigle/Single"
// import Write from "./write/Write";
import Setings from "./setings/Setings";
import Login from "./login/Login";
import Register from "./register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
        <Link to="/">HOME</Link> 
      </div>
    ),
  }
]);


function App() {
  return (
    <>
      <Topbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
