export default function userStatus(userStatus){
    return(
        userStatus === "admin" ? (
            <>
                <h2>Admin Dashboard</h2>
                <button>Manage Users</button>
            </>
        ) : userStatus === "member" ? (
            <p>Welcome to the community</p>
        ) : (
            <a href="/signup">Sign up hear</a>
        )
    );
}