
import { useContext, useEffect } from 'react';
import FileContext from './providers/FileExporerContext';
import { BoldExtension, CalloutExtension, ItalicExtension } from 'remirror/extensions';
import { Remirror, useRemirror } from '@remirror/react';



function Editor(){
    const {UpdateProseMirrorEditorContent} = useContext(FileContext)
    const { manager, state } = useRemirror({
        extensions: () => [
          new BoldExtension(),
          new ItalicExtension(),
          new CalloutExtension({ defaultType: 'warn' }),
        ],
      
        // Set the initial content.
        content: '<p>I love <b>Remirror</b></p>',
      
        // Place the cursor at the start of the document. This can also be set to
        // `end`, `all` or a numbered position.
        selection: 'start',
      
        // Set the string handler which means the content provided will be
        // automatically handled as html.
        // `markdown` is also available when the `MarkdownExtension`
        // is added to the editor.
        stringHandler: 'html',
      });
    
  return (
    <div className='remirror-theme'>
      {/* the className is used to define css variables necessary for the editor */}
      <Remirror manager={manager} initialContent={state} />
    </div>
  );

}
export default Editor