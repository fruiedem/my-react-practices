function FunctionExpressions() {
    const getGreeting = (name) => `Hello ${name}.`; // return 생략
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };
    const calculateTotal = (items) => {
        return items.reduce((sum, item) => sum + item.price, 0);
    };
    const items = [{id: 1, price: 10}, {id: 2, price: 20}];

    return(
        <div>
            <p>{getGreeting("Alice")}</p>
            <p>Today: {formatDate(new Date())}</p>
            <p>Total: ${calculateTotal(items)}</p>
            <p>Good {(()=>{
                const hours = new Date().getHours();
                return hours < 12 ? "morning" : "afternoon";
            })()}</p>   
            {/* 즉시 함수 호출 */}
        </div>
    )
}

export default FunctionExpressions