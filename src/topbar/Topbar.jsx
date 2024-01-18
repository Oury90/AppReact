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
                <li className="item">HOME</li>
                <li className="item">ABOUT</li>
                <li className="item">CONTACT</li>
                <li className="item">WRITE</li>
                <li className="item">LOGOUT</li>
            </ul>
        </div>
        <div className="topright">
        <img className="topimg" src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg" alt="profil-gril" />
        <i className=" seachItem fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
}
export default Topbar;