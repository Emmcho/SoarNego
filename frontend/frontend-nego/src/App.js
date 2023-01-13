
import './App.css';
import './bootstrap.css';
import Split from 'react-split';
import SplitPane from 'react-split-pane';


// function App() {
//   return (
//     <div className="App">
//       My Hello world
//     </div>
//   );
// }

// export default App;
import React, { Component, useState } from 'react';
import SoarNegoApp from './SoarNego/SoarNegoApp';
import BasicExample from './SoarNego/RightPane';
import BasicExample1 from './SoarNego/RightPane';
import Editor from './SoarNego/QuillEditor';
import Features from './SoarNego/FeaturesBar';
import Explorer from './SoarNego/FileExplorerPane';



function App () {
  //const[state,setState] = useState(contract1)
  //const[value, setValue] = useState(Contract)
 

  function handleClick(){
    console.log("This div was clicked")
  }

    
      
        return (
            <div className="App">
            <Split direction = 'vertical' sizes={[10,90]} style={{height: 'calc(100vh - 1rem)'}}>
              <div className="upperPane"> <Features/> </div>
              <Split className="flex" sizes={[15,70,15]}>
                <div > <Explorer/></div>
                <div> <Editor/> </div>
                <div>  <BasicExample/>
                       <BasicExample1/>
                </div>
                
              </Split>
              
            </Split>
            
          </div>
      
            
        );
    
}

export default App;
