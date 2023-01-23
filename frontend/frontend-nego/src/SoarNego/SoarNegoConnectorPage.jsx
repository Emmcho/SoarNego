
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import SoarNegoAppPage from './SoarNegoAppPage'
import LoginPage from './LoginPage'
import AuthenticatedRoute from './AuthenticatedRoute';


function SoarNegoConnectorPage () {
    
    
    
        return (
            
            <div className="SoarNegoConnectorPage">
                

                <Router>
                    <Routes>
                        <Route 
                        path="/soarnego" 
                        element={
                            // <AuthenticatedRoute>
                                <SoarNegoAppPage/>
                            //</AuthenticatedRoute>
                        
                        } />
                        <Route path="/login" element={<LoginPage/>} />
                    </Routes>
                </Router>
            </div>
            
        )
       
}

export default SoarNegoConnectorPage

