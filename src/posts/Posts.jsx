import "./posts.css";
import Post from "../post/Post";
import posts from "../data";

const newData = new Date().toDateString()

function getPosts(post){
    return (
        <Post 
            key={post.id}
            imgpost={post.image}
            titlepost={post.title}
            time={newData}
            contentpost={post.content}
        />
    )
}

function Posts(){
    return(
        <>
            <div className="container-post">
                {posts.map(getPosts)}
            </div>
        </>
    )
};
export default Posts;