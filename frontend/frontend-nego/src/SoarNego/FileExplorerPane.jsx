import React from "react"
import SoarNegoDataService from "../api/SoarNego/SoarNegoDataService.js"
import {useState, useEffect} from "react"
import axios from "axios";

// to be implemented in replacement of react-d3-tree 
import FolderTree, {testData} from "react-folder-tree";
import 'react-folder-tree/dist/style.css';
import FileContext from "./providers/FileExporerContext.jsx";
import { useContext } from "react";


function Explorer(){

    const {fileItems, sendToEditorContentLoader } = useContext(FileContext)
    const {addToFileList, addFileToSessionStorage} = useContext(FileContext)
    const {editorContent} = useContext(FileContext)

    
    //Future enhancement is to be able to read multiple files at a time
    
    const [fileList, setfileList] = useState([]);
    
    const treObjHolder = []
    const [selFileName, setSelFileName] = useState('');
   
    const [content, setContent] = useState('');
    
    let fileReader

   useEffect(() => {
     //These variables are called in useEffect to synchronize re-rendering of file retrieved data       
    const dummyRerender1= selFileName
    const dummyRerender2= content
    const dummytreObjHolder= treObjHolder

  });
    
    const handleClick = (event) => {
        //Initialize to '' so that when same file is clicked, OnChange will capture the event and chenge of file selection
        event.target.value = ''
    }
  
    const handleFileRead = (e) => {
        
        setContent(fileReader.result)
    }


    const handleFileClick = (state, event)=>{
        //sending the file content to a context function API that saves it in the session storage 
        sendToEditorContentLoader(state.nodeData.fileIndex)
        //console.log("Content sent to loader", state.nodeData.fileIndex)
        

    }

        const handleFileChosen = (file) => {
            fileReader = new FileReader();

            const fileName = file.name

            const onLoaded = () => {
                const fileContent = fileReader.result
                const fileData = {
                    fileId: 1,
                    fileName,
                    fileContent
                }
                const parsedJSON = JSON.parse(fileContent)
                const parts = parsedJSON.Part
                parts.forEach(part => {
                    console.log(part)
                });
                console.log(parsedJSON)
                if (!fileData.fileName || !fileData.fileContent) return
                axios.post('http://localhost:8080/api/save/files',fileData)
                .then(function (response){
                    addToFileList(response.data.fileName, 0,true,response.data.fileName+response.data.fileId)
                    addFileToSessionStorage(response.data.fileName+response.data.fileId, response.data.fileContent)
                })
                
                .catch(function(error){
                console.log(error)
                })   
            }
            
            fileReader.onloadend = onLoaded;
            fileReader.readAsText(file)
            
        
        }

    return(
        <>  

                        <div>
                            <label>Load a File</label>
                            <input type="file" onChange={e => handleFileChosen(e.target.files[0])}  onClick = {handleClick } name="fileLoader" id="myFile" accept=".json" ></input>
                            

                        </div>
                       

            <div>
                
                   
            </div>
          
            
            <FolderTree
                data={ fileItems}
                onNameClick ={handleFileClick}
                
               
                />

            
        
        </>

        
    )
}
export default Explorer;



