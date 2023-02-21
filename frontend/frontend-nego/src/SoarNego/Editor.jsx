
import { useContext, useCallback  } from 'react';
import FileContext from './providers/FileExporerContext';
import { BoldExtension, CalloutExtension, ItalicExtension } from 'remirror/extensions';
import { EditorComponent,ThemeProvider,useChainedCommands,
  useActive, Remirror, useRemirror,useCommands,
   useHelpers, useKeymap,Toolbar,
   ToggleItalicButton, ToggleBoldButton, ToggleCalloutMenuItem
  } from '@remirror/react';
import 'remirror/styles/all.css';


const extensions = () => [new BoldExtension(),
  new ItalicExtension()];

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

// For custom menu items(currently not in use)
// export const Menu = () => {
//   const { toggleBold,toggleItalics, focus } = useCommands();
//   const active = useActive();
//   const chain = useChainedCommands();

//   return (
//     <div>
//     <button
//       onClick={() => {
//         chain // Begin a chain
//           .toggleBold()
//           .focus()
//           .run(); // A chain must always be terminated with `.run()`
//         }}style={{ fontWeight: active.bold() ? 'bold' : undefined }}
//         disabled={toggleBold.enabled() === false}> B
//     </button>
//     <button
//       onClick={() => {
//         chain // Begin a chain
//           .toggleItalics()
//           .focus()
//           .run(); // A chain must always be terminated with `.run()`
//         }}style={{ fontWeight: active.bold() ? 'bold' : undefined }}
//         disabled={toggleBold.enabled() === false}> I
//     </button>
//     </div>
//   );
// };

export const Editor=() =>{
      const { manager, state } = useRemirror({
          extensions: extensions,
        
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
    <ThemeProvider>
      <Remirror 
        manager={manager} 
        initialContent={state} 
        hooks={hooks}
      >
        <Toolbar>
          <ToggleItalicButton />
          <ToggleBoldButton/>
        </Toolbar>
        <EditorComponent/>
      </Remirror>
    </ThemeProvider>
  );

}
export default Editor