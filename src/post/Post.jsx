import "./post.css"

function Post(props){
    return(
        <div className="sigle-post">
            <img className="img-post" src={props.imgpost} alt="" />
            <div className="cnt-post">
                <span className="post-item">Music</span>
                <span className="post-item">Life</span>
            </div>
            <span className="head-post">{props.titlepost}</span>
            <span className="time-post">{props.time}</span>
            <p className="post-description">{props.contentpost}</p>

        </div>
    )
}
export default Post;