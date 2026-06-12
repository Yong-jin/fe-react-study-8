import { useState } from "react";
import './Quiz01.css';

function Quiz01(){
    
    //let count = 0;
    let [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={()=>{
                //count = count + 2;
                //console.log(count);
                
                setCount(count + 2);
            }}>짝수출력</button> 
            {/* <span  style={ {color:'red'} }>{count}</span> */}
            <span className="quiz1-font-red">{count}</span>
        </div>
    )
}

export default Quiz01;