import { useState,useEffect,useContext } from "react";
import {getCurrFile} from "./Editor"
import FileContext from "./providers/FileExporerContext";
import DiffMatchPatch from 'diff-match-patch';
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

    const [sessionData, setSessionData] = useState([]);
    const { currentFile } = useContext(FileContext)
    const [delta, setDelta] = useState(null);
    const { showDiff } = useContext(ShowDiffContext);

    
    
  
    const left = sessionStorage.getItem("Contract_Document1_V2_03_21_2023.json64")
    const right =sessionStorage.getItem("Contract_Document1_V3_03_21_2023.json65")
    
    if (!delta && showDiff) {
      compareJson(left, right, setDelta);
    }
  
    if (!showDiff) {
      return null;
    }
  
  

    // const currFile = getCurrFile()
   
    // const sessionKeys = Object.keys(sessionStorage);
    // const sessionDataArray =[]
   
    // sessionKeys.forEach(key => {
    //     // console.log(key)
    //     // console.log(currFile)
    //     sessionDataArray.push(sessionStorage.getItem(key))
        
    // });
    
    // setSessionData(sessionDataArray);
    
    
    
        
     return (
      <div>
      {delta && (
        <JsonDiffReact
          left={left}
          right={right}
          delta={delta}
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
  );
}



