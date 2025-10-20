function Extra({data}){
    return(
        <div style={{
            border:"1px solid black",
            padding:"10px",
            margin:"10px",
            width:"400px",
            borderRadius:"5px",
        }}>
            <h3>Name:<span style={{color:"green"}}>{data.Name}</span></h3>
            <h3>age:<span style={{color:"green"}}>{data.age}</span></h3>
            <h3>Id:<span style={{color:"green"}}>{data.Id}</span></h3>
            <h3>Email:<span style={{color:"green"}}>{data.Email}</span></h3>
        </div>
    )
}
export default Extra;