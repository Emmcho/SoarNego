
import { useContext, useEffect } from 'react';
import FileContext from './providers/FileExporerContext';
import { BoldExtension, CalloutExtension, ItalicExtension } from 'remirror/extensions';
import { EditorComponent,useActive, Remirror, useRemirror,useCommands} from '@remirror/react';
import 'remirror/styles/all.css';

export const Menu = () => {
  const { toggleBold, focus } = useCommands();
  const active = useActive();

  return (
    <button
      onClick={() => {
        toggleBold();
        focus();
        }}style={{ fontWeight: active.bold() ? 'bold' : undefined }}
        > B
    </button>
  );
};

export const Editor=() =>{
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
      <Remirror manager={manager} initialContent={state}>
        {/* The text editor is placed above the menu to make the zIndex easier to manage for popups */}
        <EditorComponent />
        <Menu />
      </Remirror>
    </div>
  );

}
export default Editor