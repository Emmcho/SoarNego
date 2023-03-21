import { createContext,useState, useCallback } from "react";
import { getEditorObject } from "../Editor";

const FileContext = createContext();

export function FileContextProvider({children}){

    const [editorContent, setEditorContent] = useState(
        {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'This is temp text',
                  },
                ],
              },
            ]
          }
    )

    const [fileContentToLoad, SetfileContentToLoad]=useState("")
    const [indexToloadFromFileArrayObj, SetIndexToloadFromFileArrayObj]=useState("")


    const [fileIdDataObj, setFileIdDataObj] = useState([])

    const [currentFile, setCurrentFile] = useState('')
    const [fileItems, setFileItems] = useState(
        {
                name: "Root Folder",
                checked: 0,
                isOpen: false, // this folder is opened, we can see it's children
                children: [
                ]
              }
    )


    const addToFileList = (name,checked,isOpen,fileIndex) =>{
        setFileItems({...fileItems,
            children:[...fileItems.children,{name, checked,isOpen,fileIndex}]})
    }

    //Saves file content in the session storage
    //const addFileToSessionStorage = (addFileIndexToStorage, content) =>{
    const readJsonFileContent = (jsonContent, fileIdentifier) =>{
        var partindex = 0
        var artindex = 0
        var secindex = 0
        var paraindex = 0
        var senindex = 0
        var ContractContent= ""
        
       

        
        for (partindex = 0; partindex < jsonContent.Part.length; partindex++)
        {
            //part loop
            ContractContent = ContractContent + jsonContent.Part[partindex].Heading + "/n "
            ContractContent = ContractContent + jsonContent.Part[partindex].Label + "/n "
            
            for (artindex = 0; artindex < jsonContent.Part[partindex].Article.length; artindex++)
            {
                //article loop
                ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Heading + "/n "
                ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Label + "/n "
                
                for (secindex = 0; secindex < jsonContent.Part[partindex].Article[artindex].Section.length; secindex++)
                {
                    //section loop
                    ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Section[secindex].Heading + "/n "
                    ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Section[secindex].Label + "/n "
                    
                    for (paraindex = 0; paraindex < jsonContent.Part[partindex].Article[artindex].Section[secindex].Paragraph.length; paraindex++)       
                    {
                        ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Section[secindex].Paragraph[paraindex].Heading + "/n "
                        ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Section[secindex].Paragraph[paraindex].Label + "/n "
                        ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Section[secindex].Paragraph[paraindex].Body + "/n "
                        //paragraph loop
                        for (senindex = 0; senindex < jsonContent.Part[partindex].Article[artindex].Section[secindex].Paragraph[paraindex].Sentence.length; senindex++)
                        
                        {
                            //sentence loop
                            ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Section[secindex].Paragraph[paraindex].Sentence[senindex].Heading + "/n "
                            ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Section[secindex].Paragraph[paraindex].Sentence[senindex].Label + "/n "
                            ContractContent = ContractContent + jsonContent.Part[partindex].Article[artindex].Section[secindex].Paragraph[paraindex].Sentence[senindex].Content + "/n "
                            
                

                        }
                
                
                

                    }
                
                

                }


            }
            
        }
        //populate array that would be used to store all file loaded into the directory with- File identity and content
        //console.log(ContractContent, fileIdentifier)
        addFileIndexAndContentIntoObject(fileIdentifier,ContractContent)

        //fileArrayHolder.push(fileIdentifier,ContractContent)

        // Pass function to populate this object FileIdDataObj

    }
    

    

    const addFileIndexAndContentIntoObject= (fileId, fileContent )=>{
        
        // setFileIdDataObj({...fileIdDataObj,
        //     fileIdDataObj:{fileId, fileContent}})
        //let arr = []
        setFileIdDataObj((prevVal)=>{
            //prevVal = Object.assign({}, prevVal);
            //let newState = {...prevVal, fileId: fileId, fileContent: fileContent}
            fileIdDataObj.push( { ...prevVal, fileId: fileId, fileContent: fileContent});
            //arr.push(newState);
                return fileIdDataObj;
            
            //return arr.push({fileId: fileId, fileContent: fileContent});
        })

        loaderFromFileArrayObj(fileIdDataObj)

    }

    
    

   

    

    


    //set determinant
    //set fileContentToEditor
    const loaderFromFileArrayObj = (fileIdDataObj) =>{
        
        let fileData = []
        fileData.push(fileIdDataObj)
         console.log("This is file data", fileData)
        
        // fileData.forEach(myFunction)
        //     function myFunction(item, index)
        //     {
        //         if (indexToloadFromFileArrayObj === fileIdDataObj[index].fileId ){
        //         console.log(item, index);
        //         //SetfileContentToLoad(fileIdDataObj[index].fileContent)

                
        //         }
        //     }


        fileIdDataObj.forEach(function(item, index){
                if (indexToloadFromFileArrayObj === item.fileId ){
                  console.log(item, index);
                  console.log(item.fileContent)
                   SetfileContentToLoad(item.fileContent)
                }
          
          
              })
        
    }


    


     //Retrieves file content from the session storage
     //Use the index to retrieve from the object fileIdDataObj
    const sendToEditorContentLoader = (editorContentFromFileClick)=>{
        SetIndexToloadFromFileArrayObj(editorContentFromFileClick)
        //const fileContentToLoad = textHere
        //uncomment next 3 lines
        //console.log(fileContentToLoad)
        const newEditorContent = getEditorObject(fileContentToLoad)
        setEditorContent(newEditorContent)
        setCurrentFile(editorContentFromFileClick)
    }

   
    return(
        <FileContext.Provider value = {{fileItems,addToFileList, readJsonFileContent, sendToEditorContentLoader, editorContent, currentFile }}>
            {children}
        </FileContext.Provider>

    )
}

export default FileContext