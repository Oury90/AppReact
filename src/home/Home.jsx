import "./Home.css";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import Saidbar from "../sidebar/Saidbar";

function Home(){
    return(
        <>
            <Header />
            <div className="saidbar">
                <Posts />
                <Saidbar />
            </div>
        </>
        
    )
};
export default Home;