import hangman1 from "./images/hangman1.png";
import hangman0 from "./images/hangman0.png";
import hangman2 from "./images/hangman2.png";
import hangman3 from "./images/hangman3.png"
import hangman4 from "./images/hangman4.png"
import hangman5 from "./images/hangman5.png"
import hangman6 from "./images/hangman6.png"
import hangman7 from "./images/hangman7.png"
import hangman8 from "./images/hangman8.jpg"
import hangman0dark from "./images/hangman0dark.png";
import hangman1dark from "./images/hangman1dark.png";
import hangman2dark from "./images/hangman2dark.png";
import hangman3dark from "./images/hangman3dark.png"
import hangman4dark from "./images/hangman4dark.png"
import hangman5dark from "./images/hangman5dark.png"
import hangman6dark from "./images/hangman6dark.png"
import hangman7dark from "./images/hangman7dark.png"
import hangmanWinner from "./images/winner.jpg"



export default function Gallows(props) {
    function image() {
        switch (props.count) {
            case 1:
                 return (props.theme ?  hangman1 : hangman1dark);
                break;
            case 0:
                 return (props.theme ?  hangman0 : hangman0dark);
                break;
            case 2:
                 return (props.theme ?  hangman2 : hangman2dark);
                break;
            case 3:
                 return (props.theme ?  hangman3 : hangman3dark);
                break;
            case 4:
                 return (props.theme ?  hangman4 : hangman4dark);
                break;
            case 5:
                 return (props.theme ?  hangman5 : hangman5dark);
                break;
            case 6:
                 return (props.theme ?  hangman6 : hangman6dark);
                break;
            case 7:
                 return (props.theme ?  hangman7 : hangman7dark);
                break;
            case 8:
                 return (props.theme ?  hangman8 : hangman8);
                break;
            case 20:
                return hangmanWinner;
                break;
        }
    }
    return (<>
        <img className=" mx-auto d-block mt-5 pt-5" src={image()} />

    </>
    )
}