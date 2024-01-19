import "./write.css";


function Write(){
    return(
        <div className="writePost">
            <div className="writePost-container">
                <img src="https://cdn.pixabay.com/photo/2017/08/07/16/39/girl-2605526_1280.jpg" alt="" />
               
                <form className="formPost">
                    <input type="file" id="file" />
                    <input type="text" placeholder="Tile Post" autoFocus="true" />
                    <button type="submite">Push</button>
                </form>
               

            </div>
        </div>
    )
}
export default Write;