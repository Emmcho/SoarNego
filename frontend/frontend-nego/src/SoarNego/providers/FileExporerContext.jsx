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
    const [currentFile, setCurrentFile] = useState('')



    const [fileItems, setFileItems] = useState(
        {
                name: "Root Folder",
                checked: 0,
                isOpen: true, // this folder is opened, we can see it's children
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
        
        // console.log(editorContentFromFileClick)

        // console.log(sessionStorage.getItem(editorContentFromFileClick))

        const fileContent = sessionStorage.getItem(editorContentFromFileClick)

        // console.log(fileContent)

        const newEditorContent = getEditorObject(fileContent)
        
        setEditorContent(newEditorContent)
        setCurrentFile(editorContentFromFileClick)

    }

    //Updates ProseMirror editor's content- not in use anymore
    const UpdateProseMirrorEditorContent = (editorCotentUpdate) =>{
        //let editorText = "This  is the content"
        const transaction = editorCotentUpdate.state.tr.insert(0, editorCotentUpdate.state.schema.text(editorContent ))
        const newState = editorCotentUpdate.state.apply(transaction);
        editorCotentUpdate.updateState(newState);
        
    }

    // const RemirrorContent = UpdateRemirrorEditorContenT (manager)

    //     //let editorText = "This  is the content"
    // const handleClick = useCallback(() => {
    //         // Clear out old state when setting data from outside
    //         // This prevents e.g. the user from using CTRL-Z to go back to the old state
    //         manager.view.updateState(manager.createState({ content: DOC }));
    // }, [manager]);
    
        
    console.log(editorContent)
    


        

    return(
        <FileContext.Provider value = {{fileItems,addToFileList, addFileToSessionStorage, sendToEditorContentLoader,UpdateProseMirrorEditorContent, editorContent, currentFile }}>
            {children}
        </FileContext.Provider>

    )
}

export default FileContext