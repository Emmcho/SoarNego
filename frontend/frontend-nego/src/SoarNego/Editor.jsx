
import { useContext, useCallback  } from 'react';
import FileContext from './providers/FileExporerContext';
import { BoldExtension, CalloutExtension, ItalicExtension } from 'remirror/extensions';
import { EditorComponent,useChainedCommands,useActive, Remirror, useRemirror,useCommands, useHelpers, useKeymap} from '@remirror/react';
import 'remirror/styles/all.css';

const hooks = [
  () => {
    const { getJSON } = useHelpers();

    const handleSaveShortcut = useCallback(
      ({ state }) => {
        console.log(`Save to backend: ${JSON.stringify(getJSON(state))}`);

        return true; // Prevents any further key handlers from being run.
      },
      [getJSON],
    );

    // "Mod" means platform agnostic modifier key - i.e. Ctrl on Windows, or Cmd on MacOS
    useKeymap('Mod-s', handleSaveShortcut);
  },
];

export const Menu = () => {
  const { toggleBold, focus } = useCommands();
  const active = useActive();
  const chain = useChainedCommands();

  return (
    <button
      onClick={() => {
        chain // Begin a chain
          .toggleBold()
          .focus()
          .run(); // A chain must always be terminated with `.run()`
        }}style={{ fontWeight: active.bold() ? 'bold' : undefined }}
        disabled={toggleBold.enabled() === false}> B
    </button>
  );
};

export const Editor=() =>{
      const { manager, state } = useRemirror({
          extensions: () => [
            new BoldExtension(),
            new ItalicExtension(),
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
      <Remirror manager={manager} initialContent={state} hooks={hooks} >
        {/* The text editor is placed above the menu to make the zIndex easier to manage for popups */}
        <EditorComponent />
        <Menu />
      </Remirror>
    </div>
  );

}
export default Editor