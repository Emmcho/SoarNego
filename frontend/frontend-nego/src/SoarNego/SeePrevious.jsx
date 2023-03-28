import { useState,useEffect,useContext } from "react";
import {getCurrFile} from "./Editor"
import JsonDiffReact from 'jsondiffpatch-for-react';
import ShowDiffContext from './ShowDiffContext';

const compareJson = (left, right, setDelta) => {
  const jsondiffpatch = require('jsondiffpatch').create({
    objectHash: (obj) => obj._id || obj.id,
    arrays: {
      detectMove: true,
      includeValueOnMove: true,
    },
    textDiff: {
      minLength: 60,
    },
  });

  const delta = jsondiffpatch.diff(left, right);
  
  setDelta(delta);
};


export const SeePrevious = () =>{

    const  currentFile = getCurrFile()
    const [delta, setDelta] = useState(null);
    const { showDiff } = useContext(ShowDiffContext);
    const [selectedFile, setSelectedFile] = useState(null);

    var left
    if(currentFile){
      left = JSON.parse(sessionStorage.getItem(currentFile))
    }
    
    
    

    useEffect(() => {
      
      if (showDiff && !delta && left && selectedFile) {
        
        compareJson(left, selectedFile, setDelta);
      }
      
    }, [showDiff, delta, left, selectedFile]);

    const handleFileSelect = (event) => {
      
      setSelectedFile( JSON.parse(sessionStorage.getItem(event.target.value)));
    };

    const sessionKeys = Object.keys(sessionStorage);

  
        
     return (
      <div>
      {showDiff && (
        <>
          <select onChange={handleFileSelect}>
            <option value="">Select a file</option>
            {sessionKeys.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <div style={
                {height: "800px",
                textAlign: "left",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word"}
                }>
          {selectedFile && delta && (
            <JsonDiffReact
              left={left}
              right={selectedFile}
              
              jsondiffpatch={{
                objectHash: (obj) => obj._id || obj.id,
                arrays: {
                  detectMove: true,
                  includeValueOnMove: true,
                },
                textDiff: {
                  minLength: 60,
                },
              }}
              
            />
          )}
          </div>
        </>
      )}
    </div>
  );
}



