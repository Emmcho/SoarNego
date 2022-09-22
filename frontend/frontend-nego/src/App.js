
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
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SoarNegoApp from './SoarNego/SoarNegoApp';

class App extends Component {
    render() {
        return (
            <div className="App">
            <Split direction = 'vertical' sizes={[10,90]} style={{height: 'calc(100vh - 1rem)'}}>
              <div className="upperPane"> D </div>
              <Split className="flex" sizes={[15,70,15]}>
                <div> File System here</div>
                <div> <SoarNegoApp/> </div>
                <div> Features buttons here </div>
                
              </Split>
              
            </Split>
            
          </div>
      
            
        );
    }
}

export default App;
