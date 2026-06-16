
//    <ColorBox bgColor={'red'} />
//function ColorBox( props ){
function ColorBox( { bgColor } ){
    return (
        <div className='box' style={{backgroundColor:bgColor}}></div>
        //<div className='box' style={{backgroundColor:props.bgColor}}></div>
    )
}
export default ColorBox;
