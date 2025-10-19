import { useState } from "react";

function CheckBox(){
    const[skills,setSkills]=useState([]);
    function handelskill(event){
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value]);
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }

    return(
        <div>
            <h1>Select your skills.</h1>
            <input type="checkbox" onChange={handelskill} id="php" value="php"/>
            <label htmlFor="php">PHP</label>
            <br />
            <input type="checkbox" onChange={handelskill} id="js" value="js" />
            <label htmlFor="js">JS</label>
            <br />
            <input type="checkbox" onChange={handelskill} id="java" value="java" />
            <label htmlFor="java">JAVA</label>
            <br />
            <input type="checkbox" onChange={handelskill} id="node" value="node"/>
            <label htmlFor="node">NODE</label>
            <br />
            <p>{skills}</p>
        </div>
    )
}
export default CheckBox;
