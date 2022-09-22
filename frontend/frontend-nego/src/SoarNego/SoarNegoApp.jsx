
import React, {Component} from "react";
import './SoarNego.css'
import SplitPane, {Pane} from "split-pane-react/esm/SplitPane";
import 'split-pane-react/esm/themes/default.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class SoarNegoApp extends Component{
    
    render(){
        
        return(
            
            <div className="SoarNegoApp">
                
    
            <CKEditor
                editor={ ClassicEditor }
                data="<p>  SoarNego text editor area</p><p>  SoarNego text editor area</p>"
                
                
                
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
            </div>



        )
    }
}
export default SoarNegoApp

