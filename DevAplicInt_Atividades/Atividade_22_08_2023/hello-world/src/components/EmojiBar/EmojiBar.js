import './EmojiBar.css'
import { useState } from "react";

function EmojiBar() {
    const [showElement, setShowElement] = useState(false);
    const [showElement1, setShowElement1] = useState(false);
    const [showElement2, setShowElement2] = useState(false);
    const showOrHide = () => {
        if(showElement===true){
        setShowElement(false);
        }else{
            setShowElement(true); 
        }
    };
    const showOrHide1 = () => {
        if(showElement1===true){
        setShowElement1(false);
        }else{
            setShowElement1(true); 
        }
    };
    const showOrHide2 = () => {
        if(showElement2===true){
        setShowElement2(false);
        }else{
            setShowElement2(true); 
        }
    };

    return(
        <body>
           
      <button onClick={showOrHide}><p id>&#x1F602;</p>
      { showElement ? <p>Sorrindo</p> : null }
      </button>
      <button onClick={showOrHide1}><p>&#x1F389;</p>
      { showElement1 ? <p>Festa</p> : null }</button>
      <button onClick={showOrHide2}><p>&#x1F483;</p>
      { showElement2 ? <p>Dançarina</p> : null }
      </button>

        </body>
    )
}

export default EmojiBar;