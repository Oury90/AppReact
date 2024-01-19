import { Link } from "react-router-dom";
import "./Topbar.css"

function Topbar(){
    return <div className="top">
        <div className="topleft">
        <i className=" socio fa-brands fa-square-facebook"></i>
        <i className=" socio fa-brands fa-square-twitter"></i>
        <i className=" socio fa-brands fa-square-instagram"></i>
        <i className=" socio fa-brands fa-linkedin"></i>
        </div>
        <div className="topcentre">
            <ul className="topItems"> 
                <Link className="item" to="/">HOME</Link>               
                <Link className="item" to="/about">ABOUT</Link>
                <Link className="item" to="/contact">CONTACT</Link>
                <Link className="item" to="write">WRITE</Link>
                <Link className="item" to="login">LOGOUT</Link>
            </ul>
        </div>
        <div className="topright">
        <img className="topimg" src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg" alt="profil-gril" />
        <i className=" seachItem fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
}
export default Topbar;