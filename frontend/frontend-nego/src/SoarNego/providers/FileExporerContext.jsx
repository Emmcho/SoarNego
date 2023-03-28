import { createContext,useState, useCallback } from "react";
import { getEditorObject } from "../Editor";

const FileContext = createContext();

export function FileContextProvider({children}){
  const [selectedFile, setSelectedFile] = useState(null);


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
    const addFileToSessionStorage = (addFileIndexToStorage, content) =>{
        sessionStorage.setItem(addFileIndexToStorage, content);

    }

     //Retrieves file content from the session storage
    const sendToEditorContentLoader = (editorContentFromFileClick)=>{
        const fileContent = sessionStorage.getItem(editorContentFromFileClick)
        const newEditorContent = getEditorObject(fileContent)
        setEditorContent(newEditorContent)
        setCurrentFile(editorContentFromFileClick)
    }

   
    return(
        <FileContext.Provider value = {{fileItems,addToFileList, addFileToSessionStorage, sendToEditorContentLoader, editorContent, currentFile,selectedFile,setSelectedFile }}>
            {children}
        </FileContext.Provider>

    )
}

export default FileContext