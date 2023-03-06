
import 'remirror/styles/all.css';
import { useCallback,forwardRef, Ref, useImperativeHandle, useRef, useState, useEffect  } from 'react';
import { BoldExtension, ItalicExtension,ImageExtension,DropCursorExtension,FontSizeExtension,HeadingExtension,LinkExtension,} from 'remirror/extensions';
import { 
  EditorComponent,
  ThemeProvider,
  useActive, 
  Remirror, 
  useRemirror,
  useCommands,
  useHelpers, 
  useKeymap,
  Toolbar,
  ToggleItalicButton, 
  ToggleBoldButton,
  CommandButtonGroup,
  CommandMenuItem,
  DecreaseFontSizeButton,
  DropdownButton,
  IncreaseFontSizeButton,
  HeadingLevelButtonGroup,
  UndoButton,
  RedoButton,
  useRemirrorContext
  } from '@remirror/react';
  import FileContext from "./providers/FileExporerContext";
  import { useContext } from "react";


const extensions = () => [
new BoldExtension(),
new ItalicExtension(),
new HeadingExtension(),
new ImageExtension({ enableResizing: true }),
new DropCursorExtension(),
new FontSizeExtension({ defaultSize: '16', unit: 'px' }),
new LinkExtension({ autoLink: true })
];

const FONT_SIZES = ['8', '10', '12', '14', '16', '18', '24', '30'];
//Used for handeling Font size Buttons
const FontSizeButtons = () => {
  const { setFontSize } = useCommands();
  const { fontSize } = useActive();
  return (
    <DropdownButton aria-label='Set font size' icon='fontSize'>
      {FONT_SIZES.map((size) => (
        <CommandMenuItem
          key={size}
          commandName='setFontSize'
          onSelect={() => setFontSize(size)}
          enabled={setFontSize.enabled(size)}
          active={fontSize({ size })}
          label={size}
          icon={null}
          displayDescription={false}
        />
      ))}
    </DropdownButton>
  );
};
//used for saving to .JSON
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

      //replace editor's content
      

    

    // "Mod" means platform agnostic modifier key - i.e. Ctrl on Windows, or Cmd on MacOS
    useKeymap('Mod-s', handleSaveShortcut);
    //useKeymap('Mod-R', handleClick);

   // const { getRootProps, view } = useRemirror();
    //view.dispatch(view.state.tr.insertText('a'))
  },

  
];





  
// export interface EditorRef {
//   setContent: (content: any) => void;
// }

// const ImperativeHandle = forwardRef((_: unknown, ref: Ref<EditorRef>) => {
//   const { setContent } = useRemirrorContext({
//     autoUpdate: true,
//   });

//   // Expose content handling to outside
//   useImperativeHandle(ref, () => ({ setContent }));

//   return <></>;
// });

  export const getEditorObject = (text) => {
    return {
      type: 'doc',
      content: [

        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text,
            },
          ],
        }
      ],
    }
  }

  export const Editor=() =>{
    const {editorContent, currentFile} = useContext(FileContext)

    const [file, setFile] = useState(currentFile)

    // const DOC = {
    
    //   type: 'doc',
    //   content: [
    //     {
    //       type: 'paragraph',
    //       content: [
    //         {
    //           type: 'text',
    //           text:editorContent,
    //         },
    //       ],
    //     },
    //   ],
    // };

    // const editorRef = useRef<EditorRef | null>(null);

            const { manager, state,onChange} = useRemirror({
                extensions,
                content: editorContent
              });
              

        const handleClick = useCallback(() => {
          // Clear out old state when setting data from outside
          // This prevents e.g. the user from using CTRL-Z to go back to the old state
          manager.view.updateState(manager.createState({ content: editorContent}));
        }, [manager]);


      useEffect(() => {
        console.log(file, currentFile)
        if (file !== currentFile) {
          manager.view.updateState(manager.createState({ content: editorContent}));
          setFile(currentFile)

        }

      }, [currentFile, file])

  
      return (
        <>
            {/* <button
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => editorRef.current.setContent(editorContent)}
            >
            Replace content
          </button> */}
       
        <ThemeProvider>
          <Remirror 
            manager={manager} 
            state={state} 
            hooks={hooks}
            onChange={onChange}
            // onDispatchTransaction={UpdateRemirrorEditorContent}
          >
            {/* <button onMouseDown={(event) => event.preventDefault()} onClick={handleClick}>
              Upload selected File content
            </button> */}
            <Toolbar>
              <UndoButton/>
              <RedoButton/>
              <CommandButtonGroup>
                <DecreaseFontSizeButton />
                <FontSizeButtons />
                <IncreaseFontSizeButton />
              </CommandButtonGroup>
              <ToggleItalicButton />
              <ToggleBoldButton/>
              <HeadingLevelButtonGroup showAll />
            </Toolbar>
            <EditorComponent/>
          </Remirror>
        </ThemeProvider>
        </>
      );

  };
export default Editor;