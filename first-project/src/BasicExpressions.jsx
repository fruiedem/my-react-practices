function BasicExpressions(){
    const name = "John";
    const age = 25;
    const isAdmin = true;
    return (
        <div>
            <p> Name: {name}</p>
            <p>Age next year: {age + 1}</p>
            <p>{name + "'s profile"}</p>
            <p>{`${name} is ${age} years old`}</p>
            <p>Admin status: {String(isAdmin)}</p>
        </div>
    )
}
export default BasicExpressions