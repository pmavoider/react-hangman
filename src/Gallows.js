import hangman1 from "./images/hangman1.png";
import hangman0 from "./images/hangman0.png";
import hangman2 from "./images/hangman2.png";
import hangman3 from "./images/hangman3.png"
import hangman4 from "./images/hangman4.png"
import hangman5 from "./images/hangman5.png"
import hangman6 from "./images/hangman6.png"
import hangman7 from "./images/hangman7.png"
import hangman8 from "./images/hangman8.png"
 //props.count is set to hangman1 currently;
export default function Gallows(props) {
    function image(){
        //alert(props.count)
        switch(props.count){
            case 1:
            return hangman1;
            break;
            case 0:
            return hangman0;
            break;
            case 2:
            return hangman2;
            break;
            case 3:
            return hangman3;
            break;
            case 4:
            return hangman4;
            break;
            case 5:
            return hangman5;
            break;
            case 6:
            return hangman6;
            break;
            case 7:
            return hangman7;
            break;
            case 8:
            return hangman8;
            break;
        }
    }
        return(<>
        <img className=" mx-auto d-block mt-5 pt-5" src={image()} />
        
        </>
        )
}