function User({children,name="Undefined"}){
    return(
        <div style={{color:"red",border:"2px solid green",width:"300px"}}>
        <h1>hello,{name}</h1>
        {children}
        </div>
    )
}
export default User;
