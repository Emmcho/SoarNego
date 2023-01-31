
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import SoarNegoAppPage from './SoarNegoAppPage'
import LoginPage from './LoginPage'
import AuthenticatedRoute from './AuthenticatedRoute';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ErrorComponent from './ErrorComponent';



function SoarNegoConnectorPage () {
    
    
    
        return (
            
            <div className="SoarNegoConnectorPage">
                
                

                    <Router>
                        <HeaderComponent/>
                        
                        <Routes>
                              

                                        <Route path="/login" element={<LoginPage/>} />
                                    
                                        <Route
                                        path="/soarnego" 
                                        element={
                                            
                                            
                                            <SoarNegoAppPage/>
                                           
                                        
                                        } />
                                        
                                        <Route path="/login" element={<LoginPage/>} />
                                        <Route path="/logout" element={<LogoutComponent/>} />
                                        <Route path="*"  element = {<ErrorComponent/>} />
                                
                        </Routes>
                        
                        <FooterComponent/>
                    </Router>
                
            </div>


        )
       
}

export default SoarNegoConnectorPage

