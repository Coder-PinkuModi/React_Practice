import { useState } from "react"

function ArrayObjectsCars() {

    const [cars, setCars] = useState([])
    const [year, setYear] = useState(2023)
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")

    function handleAddCar() {
        setCars(c=>[...c,{year, name, brand}])
        document.getElementById("year").value = "2023"
        document.getElementById("name").value = ""
        document.getElementById("brand").value = ""
    }
    
    function handleAddcarYear(e){
        setYear(e.target.value)
    }
    function handleAddcarName(e){
        setName(e.target.value)
    }
    function handleAddcarBrand(e){
        setBrand(e.target.value)
    }

    function handleRemoveCar(index){
        setCars(c=>c.filter((_,i)=>i!==index))
    }
    return (
        <div>
            <h1>Car List</h1>
            <ul> 
                {cars.map((car, index) => <li key={index} onClick={()=>handleRemoveCar(index)}> {car.year}  {car.name}  {car.brand} </li>)}
            </ul>
            <input type="Number"  onChange={handleAddcarYear} id="year" />
            <input type="text"  onChange={handleAddcarName} id="name"/>
            <input type="text"  onChange={handleAddcarBrand} id="brand" />

            <button type="submit" onClick={handleAddCar}>Add</button>
        </div>
    )
}

export default ArrayObjectsCars