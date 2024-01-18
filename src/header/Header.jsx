import "./Header.css";

function Header(){
    return(
        <>
        <div className="container-header">
            <span className="header-sm">React & Node</span>
            <span className="header-lg">Blog</span>
        </div>
        <img className="img-head" src="https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg" alt="" />
        </>
    )
};
export default Header;