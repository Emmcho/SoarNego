import React from "react"
import HelloWorldService from "../api/SoarNego/HelloWorldService.js"
import SoarNegoDataService from "../api/SoarNego/SoarNegoDataService.js"
import {useState} from "react"
function Explorer(){
    
    const [fileList, setfileList] = useState([]);
    const pathVarName = "Emmanuel"

    const [welMsg, setwelMsg] = useState('')

    //const handleSelection = event =>{
    function handleSelection(e){

        // fileSelector.addEventListener('open', (event) => {
        //     const fileList = event.target.files
        //     const fileSelected = fileList.map((selFile)=>
        //     console.log("Ayeleso" )
        //     )
            
        //     //console.log(fileList)
        //     }
        // )
        
        console.log("Ayeleso")
    }

    
   



    // function handleWelcomeClick() {
    //     HelloWorldService.executeHelloWorldService()
    //     .then(response => handleSuccessfulResponse(response))
    //     //.catch()
        
    // }

    // function handleWelcomeClick() {
    //     HelloWorldService.executeHelloWorldServiceBean()
    //     .then(response => handleSuccessfulResponse(response))
    //     //.catch()
        
    // }

    function handleWelcomeClick() {
        HelloWorldService.executeHelloWorldServicePathVariable(pathVarName)
        .then(response => handleSuccessfulResponse(response))
        .catch(error => handleError(error))
        console.log("Ayeleso Emmanuel")
        
    }

    function handleSuccessfulResponse(response){
         setwelMsg(response.data.message)

    }

    function handleError(error){
        setwelMsg(error.response.data.message)

   }
    
   function handleWorkFileDir(){
    SoarNegoDataService.retrieveAllFiles()
    .then(
        response => {
            setfileList(response.data)
            console.log(response.data)
        }
    )
    //.catch()

   

   
  }
    return(
        <>
            <div>
                <input type="file" id="file-selector" accept=".json" onSelect={handleSelection} multiple></input>

            </div>
            <p></p>
            <p></p>
            <div>
                Click here to get customized welcom message
                <button onClick={handleWelcomeClick} className="btn btn-success"> Get welcome </button>
            
            </div>
            
            <div>
                {welMsg}
            </div>
            <p></p>
            <p></p>

            <div>
                Click here to to load hardcoded files
                <button onClick={handleWorkFileDir} className="btn btn-success"> Load Files </button>
            
            </div>
            <p></p>
            <p></p>
            <div>
                
                    {<ul>
                        {fileList.map((f) =>  (<li> { f.fileData} {f.id}</li>
                    
                       
                        
                        ))}

                    </ul>}
            </div>

            
        
        </>

        
       
           
        
             
        
        
    )
}
export default Explorer;



