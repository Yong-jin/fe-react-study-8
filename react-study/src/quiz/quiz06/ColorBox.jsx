
//    <ColorBox bgColor={'red'} />
//function ColorBox( props ){
function ColorBox( { bgColor, boxes, setBoxes, index } ){
    return (
        <div className='box' style={{backgroundColor:bgColor}}>
            <button onClick={()=>{
                //boxes setBoxes index
                // let temp = [...boxes];
                // temp.splice(index, 1);
                // setBoxes(temp);

                setBoxes( boxes.filter(( _ , idx) => idx != index ))
                
            }}>X</button>
        </div>
        //<div className='box' style={{backgroundColor:props.bgColor}}></div>
    )
}
export default ColorBox;
