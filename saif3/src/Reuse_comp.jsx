import Extra from "./extra";

function Loopm(){
    const userData=[
        {
            Name:"saif",
            age: 26,
            Id : 66,
            Email:"saif@test.com"
        },
        {
            Name:"taif",
            age: 27,
            Id : 67,
            Email:"taif@test.com"
        },
        {
            Name:"daif",
            age: 26,
            Id : 76,
            Email:"daif@test.com"
        },
        {
            Name:"paif",
            age: 25,
            Id : 69,
            Email:"paif@test.com"
        }
    ]
    return(
        <div>
            <h1>Reuse component in Loop.</h1>
            {
                userData.map((user)=>(
                    <Extra data={user}/>

                ))
            }
        </div>
    )
}
export default Loopm;