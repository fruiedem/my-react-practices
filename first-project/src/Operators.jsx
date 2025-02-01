export default function Operators() {
    const hasMessage = true;
    const message =null;
    return(
        <>
            <h3> and 연산자 </h3>
            {hasMessage && <p>There is a message</p>}
            <h3> null 병합 연산자 </h3>
            {message ?? <p>No messages</p>}
            <h3> or 연산자 </h3>
            {message || <p>Empty</p>}
        </>
    )
}