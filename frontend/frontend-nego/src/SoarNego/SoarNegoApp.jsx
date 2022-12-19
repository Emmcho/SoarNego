
import React, {Component} from "react";
import './SoarNego.css'
import SplitPane, {Pane} from "split-pane-react/esm/SplitPane";
import 'split-pane-react/esm/themes/default.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Contact from "../dataFile1/modcontract.json"
import { myScript } from "./myScript";
import { Contract } from "./Contract";
import { SomeComponentAsString } from "./Contract";

function SoarNegoApp () {
    //console.log(Contract)
   console.log({SomeComponentAsString})
   const editorData = {SomeComponentAsString}
   //console.log(editorData.FileN) 
    
    
        
        return(
            
            <div className="SoarNegoApp">
                
    
            <CKEditor
                editor={ ClassicEditor }
                data={SomeComponentAsString}
                
                
                
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
export default SoarNegoApp
