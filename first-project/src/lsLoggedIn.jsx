export default function IsLoggedIn() {
    const isLoggedIn = true;
    return (
        <>
            {`isLoggedIn: ${String(isLoggedIn)}`}
            {isLoggedIn ? <h2>Hello!</h2> : <h2>Sign in</h2>}
        </>
    )
}