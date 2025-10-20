function LoopMap(){
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
            <h1>Loop in jsx with map function.</h1>
            <table border="1" >
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>

                </thead>
                <tbody>
                    {userData.map((user)=>(
                    <tr key={user.Id}>
                        <td>{user.Id}</td>
                        <td>{user.Name}</td>
                        <td>{user.age}</td>
                        <td>{user.Email}</td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default LoopMap;