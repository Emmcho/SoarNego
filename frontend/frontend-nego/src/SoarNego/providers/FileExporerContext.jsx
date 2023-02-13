import { createContext,useState } from "react";

const FileContext = createContext();

export function FileContextProvider({children}){

    const [editorContent, setEditorContent] = useState("  ")

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

    const addFileToSessionStorage = (addFileIndexToStorage, content) =>{
        sessionStorage.setItem(addFileIndexToStorage, content);

    }

    //Saves file content in the session storage
    const sendToEditorContentLoader = (editorContentFromFileClick)=>{
        setEditorContent(sessionStorage.getItem(editorContentFromFileClick))
        //console.log(editorContent)

    }

    const UpdateProseMirrorEditorContent = (editorCotentUpdate) =>{
        //let editorText = "This  is the content"
        const transaction = editorCotentUpdate.state.tr.insert(0, editorCotentUpdate.state.schema.text(editorContent ))
        const newState = editorCotentUpdate.state.apply(transaction);
        editorCotentUpdate.updateState(newState);
    }

    return(
        <FileContext.Provider value = {{fileItems,addToFileList, addFileToSessionStorage, sendToEditorContentLoader,UpdateProseMirrorEditorContent }}>
            {children}
        </FileContext.Provider>

    )
}

export default FileContext