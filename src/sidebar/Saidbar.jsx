import "./saidbar.css"

function Saidbar(){
    return(
        <>
        <div className="container">
            <div className="container-top-side">
                <span className="said-about">ABOUT ME</span>
                <img className="img-slide" src="https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg" alt="" />
                <p>Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement 
                du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature 
                </p>
            </div>
            <div className="categorie-sid">
                <span className="said-about">CATEGORIES</span>
                <ul className="item-categorie">
                    <li className="c-item">Style</li>
                    <li className="c-item">Life</li>
                    <li className="c-item">Music</li>
                    <li className="c-item">Tech</li>
                    <li className="c-item">Sport</li>
                    <li className="c-item">Travel</li>
                </ul>
                <div className="link-social">
                    <span className="said-about">FOLLOW US</span>
                    <div className="folower">
                        <i className=" socio-folower fa-brands fa-square-facebook"></i>
                        <i className=" socio-folower fa-brands fa-square-twitter"></i>
                        <i className=" socio-folower fa-brands fa-square-instagram"></i>
                        <i className=" socio-folower fa-brands fa-linkedin"></i>
                    </div>
                    
                </div>

            </div>
        </div>
        </>
    )
}
export default Saidbar;