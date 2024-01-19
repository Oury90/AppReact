import "./singlePost.css";

function SinglePost(){
    return(
        <div className="single-post">
            <div className="singlePost-container">
            <img src="https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg" alt="" />
            <h1 className="singlePost-title">
            Contrairement à une opinion
                <div className="singlePost-icon">
                    <i className="single-icon fa-solid fa-file-pen"></i>
                    <i className="single-icon fa-solid fa-trash"></i>
                </div>
            </h1>
            <span className="singlePost-author">Author: <b>Oury</b> 1 hour ago</span>
            <p className="singlePost-content">
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie 
            d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent 
            pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous 
            devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de 
            Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com 
            le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, 
            en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. 
            Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, 
            ou des touches d'humour.
            </p>
            </div>
        </div>
        
    )
}
export default SinglePost;