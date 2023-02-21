
import 'remirror/styles/all.css';
import { useCallback  } from 'react';
import { BoldExtension, ItalicExtension,ImageExtension,DropCursorExtension,FontSizeExtension,HeadingExtension } from 'remirror/extensions';
import { 
  EditorComponent,
  ThemeProvider,
  useActive, 
  Remirror, 
  useRemirror,
  useCommands,
  useHelpers, 
  useKeymap,Toolbar,
  ToggleItalicButton, 
  ToggleBoldButton,
  CommandButtonGroup,
  CommandMenuItem,
  DecreaseFontSizeButton,
  DropdownButton,
  IncreaseFontSizeButton,
  HeadingLevelButtonGroup 
  } from '@remirror/react';


const extensions = () => [
new BoldExtension(),
new ItalicExtension(),
new HeadingExtension(),
new ImageExtension({ enableResizing: true }),
new DropCursorExtension(),
new FontSizeExtension({ defaultSize: '16', unit: 'px' }),
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

    // "Mod" means platform agnostic modifier key - i.e. Ctrl on Windows, or Cmd on MacOS
    useKeymap('Mod-s', handleSaveShortcut);
  },
];


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
  );

};
export default Editor;