import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


function HeaderComponent () {
    
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/soarnego">SoarNego</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        
                    </ul>
                </nav>
            </header>
        )
    
}

// {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}

export default HeaderComponent