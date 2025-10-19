// import { useState } from "react";

// function Input(){
//     const [val,setVal]=useState("shahariar");
//     return(
//         <div>
//             <h1>Get input field Value .</h1>
//             <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="enter some value" />
//             <h1>{val}</h1>
//             <button onClick={()=>setVal("")} style={{border:"2px solid red"}}>clear!</button>
//         </div>
//     )
// }
// export default Input;

// FROM HERE I START CONTROLLED COMPONENT.

import { useState } from "react";

function Input(){
    const [name,setName]=useState("");
    const [password,setPass]=useState("");
    const [email,setEmail]=useState("");

    return(
        <div>
            <h1>Controlled Component</h1>
            <form action="" method="set">
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="enter name" />
                <h3>{name}</h3>

                <input type="password" value={password} onChange={(event)=>setPass(event.target.value)} placeholder="enter password" />
                <h3>{password}</h3>

                <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter email" />
                <h3>{email}</h3>

                <button style={{border:"2px solid,green"}}>Submit</button>

                <button style={{border:"2px solid,green"}} onClick={()=>{setName("");setPass("");setEmail("")}}>Clear</button>
                
            </form>
        </div>
    )
}
export default Input;

