import { useState } from "react";

function RadioDrop(){
    const [gender,setGender]=useState("");
    const [city,setCity]=useState("")
    return(
        <div>
            <h1>Radio button and dropdown.</h1>
            <h3>Select your Gender.</h3>

            <input type="radio" onChange={(event)=>{setGender(event.target.value)}} id="male" name="gender"  value="male"/>
            <label htmlFor="male">Male</label>

            <input type="radio" onChange={(event)=>{setGender(event.target.value)}} id="female" name="gender"  value="female"/>
            <label htmlFor="female">Female</label>

            <h2>Slected Gender:{gender}</h2>
            <h3>Select a City.</h3>
            <select onChange={(event)=>{setCity(event.target.value)}} defaultValue={"Dhaka"}>
                <option value="Khulna">Khulna</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Satkhira">Satkhira</option>
                <option value="Sylhet">Sylhet</option>

            </select>
            <h2>Selected city:{city}</h2>

        </div>
    )
}
export default RadioDrop;
