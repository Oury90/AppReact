import "./sigle.css";
import SinglePost from "../singlePost/SinglePost";
import Saidbar from "../sidebar/Saidbar";

function Single(){
    return(
        <div className="single-post">
            <SinglePost />
            <Saidbar />
        </div>
    )
};
export default Single;