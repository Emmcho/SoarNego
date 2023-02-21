
import 'remirror/styles/all.css';
import { useContext, useCallback  } from 'react';
import { BoldExtension, CalloutExtension, ItalicExtension,ImageExtension,DropCursorExtension} from 'remirror/extensions';
import { EditorComponent,ThemeProvider,useChainedCommands,
   useActive, Remirror, useRemirror,useCommands,
   useHelpers, useKeymap,Toolbar,
   ToggleItalicButton, ToggleBoldButton } from '@remirror/react';


const extensions = () => [new BoldExtension(),
  new ItalicExtension(),new ImageExtension(),
new ImageExtension({ enableResizing: true }),
new DropCursorExtension()];

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
  const imageSrc = 'https://dummyimage.com/2000x800/479e0c/fafafa';

      const { manager, state,onChange} = useRemirror({
          extensions,
          content: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'image',
                    attrs: {
                      height: 160,
                      width: 400,
                      src: imageSrc,
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'You can see a resizable image above. Move your mouse over the image and drag the resizing handler to resize it.',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Drag and drop an image file to editor to insert it.',
                  },
                ],
              },
            ],
          },
        });
        
    
  return (
    <ThemeProvider>
      <Remirror 
        manager={manager} 
        initialContent={state} 
        hooks={hooks}
        onChange={onChange}
      >
        <Toolbar>
          <ToggleItalicButton />
          <ToggleBoldButton/>
          
        </Toolbar>
        <EditorComponent/>
      </Remirror>
    </ThemeProvider>
  );

};
export default Editor;