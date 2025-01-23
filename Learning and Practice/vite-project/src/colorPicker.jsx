import {useState} from "react"
function ColorPicker(){

    const [colorValue,setColorValue]=useState("")

   const styleColorPickerdiv={
        width:"300px",
        padding:"10px",
        margin:"10px",
        fontSize:"1.5rem",
    }


    const colorPicker={
        width:"60%",
        height:"150px",
        border:"none",
        borderRadius:"10px",
        backgroundColor:"#c77a7a",
        transition:"all 0.2s ease-in-out",
    }
 
    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColorValue(newColor);
    };

    return (


        <div className="color-picker" style={styleColorPickerdiv}>
            <h1>Color Picker</h1>
            <input type="color" id="color-picker" onChange={handleColorChange} style={colorPicker}/>
            <p className="color-value" >Color Value: {colorValue}</p>
        </div>
    )
}

export default ColorPicker