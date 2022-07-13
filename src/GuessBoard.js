

export default function GuessBoard(props){
     
    
    //alert("render") 
    const newWordArray = props.word.map((x, index)=> {
            return <span key={index} className="pl-4">{x}</span>
    } )    
        
        return(
            <div className="mx-auto">
                <h1 className="text-center mt-5">{newWordArray}</h1>
            </div>
        )}
