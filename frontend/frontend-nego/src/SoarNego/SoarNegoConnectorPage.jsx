
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SoarNegoAppPage from './SoarNegoAppPage'


function SoarNegoConnectorPage () {
    
    
    
        return (
            
            <div className="SoarNegoConnectorPage">
                

                <Router>
                    <Routes>
                        <Route path="/soarnego" element={<SoarNegoAppPage/>} />
                    </Routes>
                </Router>
            </div>
            
        )
    
}

export default SoarNegoConnectorPage

