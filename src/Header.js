import RollingWeed from "./images/rolling-weed.png"

function Header({theme}){
   return( <div id="header" className="jumbotron-fluid">
        <h1 id={theme ? "h1day" : "h1night"} className=" text-center py-5">HANGMAN</h1>
        
        <img id="tumble" src={RollingWeed} />
    </div>)
}

export default Header;