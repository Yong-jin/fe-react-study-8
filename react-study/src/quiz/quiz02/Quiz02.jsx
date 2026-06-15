import { useState } from "react";

function Quiz02() {

    let textArr = ['하나', '둘', '셋'];
    let [index, setIndex] = useState(0);



    const btn_click = ()=>{
        //index 0 1 2 0  1 2 

        //index = (index + 1) > 2 ? 0 : (index+1);

        /* index++;
        if(index > 2){
            index=0;
        } */

        //(index+1) % 3
        setIndex( (index+1)%textArr.length );
    }

    return (

        <div style={{ textAlign: 'center' }}>
            <p>{textArr[index]}</p>
            <button onClick={ btn_click }>변경버튼</button>
        </div>
    )

    /*
    // flag 변수 활용     ifelse return
    let [flag, setFlag] = useState(1);

    if (flag == 1) {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>하나</p>
                <button onClick={() => {
                    setFlag(2);
                }}>변경버튼</button>
            </div>
        )
    } else if (flag == 2) {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>둘</p>
                <button onClick={() => {
                    setFlag(3);
                }}>변경버튼</button>
            </div>
        )
    } else {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>셋</p>
                <button onClick={() => {
                    setFlag(1);
                }}>변경버튼</button>
            </div>
        )
    }
    */


    /*
    //텍스트로 바로 처리
    let [text, setText] = useState("하나");

    return (
        <div style={{textAlign:'center'}}>
            <p>{text}</p>

            <button onClick={()=>{

                if(text == '하나')
                    setText('둘');
                else if(text == '둘')
                    setText('셋')
                else
                    setText('하나')
                
            }}>변경버튼</button>
        </div>
    )
    */
}

export default Quiz02;