import AuthenticationService
 from "./AuthenticationService"
function LogoutComponent (){

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                    {console.log(isUserLoggedIn)}
                </div>
            </>
        )
    
}

export default LogoutComponent