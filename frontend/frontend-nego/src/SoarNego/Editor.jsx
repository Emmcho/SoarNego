
import 'remirror/styles/all.css';
import { useCallback, useState, useEffect } from 'react';
import {
    BoldExtension, ItalicExtension, ImageExtension, DropCursorExtension, FontSizeExtension, HeadingExtension, LinkExtension, NodeFormattingExtension,
    BulletListExtension, OrderedListExtension, TaskListExtension,TextHighlightExtension
} from 'remirror/extensions';
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
    TextAlignmentButtonGroup,
    ListButtonGroup,
     
} from '@remirror/react';


// The first line imports the CSS styles for the `remirror` library.
// The next few lines import various hooks and components from the `react` and `remirror` libraries.
// The following lines import various extensions from the `remirror/extensions` module.
// The remaining lines import various components and hooks from the `@remirror/react` module.


import FileContext from "./providers/FileExporerContext";
import { useContext } from "react";
import { ToggleListItemExtension } from "./remirrorCustomExtensions/ToggleListItemExtension.jsx"


// These lines import the `FileContext` and `useContext` hooks from the `react` library, as well as a custom extension called `ToggleListItemExtension`.


const extensions = () => [
    new BoldExtension(),
    new ItalicExtension(),
    new HeadingExtension(),
    new ImageExtension({ enableResizing: true }),
    new DropCursorExtension(),
    new FontSizeExtension({ defaultSize: '16', unit: 'px' }),
    new LinkExtension({ autoLink: true }),
    new NodeFormattingExtension(),
    new BulletListExtension(),
    new OrderedListExtension(),
    new ToggleListItemExtension(),
    new TaskListExtension(),
    new TextHighlightExtension()
];


// This defines an array of `remirror` extensions that will be used in the editor. Each extension is instantiated as a new object.


const FONT_SIZES = ['8', '10', '12', '14', '16', '18', '24', '30'];


// This defines an array of font sizes that will be used in the editor.


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
// This defines a custom component called `FontSizeButtons` that renders a dropdown menu of font sizes. It uses the `useCommands` and `useActive` hooks from `remirror` to set and retrieve the font size.

const HighlightButtons = () => {
    const commands = useCommands();
    return (
      <>
        <button
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => commands.setTextHighlight('red')}
        >
          Highlight red
        </button>
        <button
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => commands.setTextHighlight('green')}
        >
          Highlight green
        </button>
        <button
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => commands.removeTextHighlight()}
        >
          Remove
        </button>
      </>
    );
  };

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

        useKeymap('Mod-s', handleSaveShortcut);
    },
];


// This defines an array of hooks that will be used in the editor. The only hook defined here is a custom hook that listens for the `Ctrl/CMD+s` keyboard shortcut and logs the editor's content to the console.


export const getEditorObject = (text) => {
    text = JSON.parse(text)
    return {
        type: text.type,
        content: text.content
    }
};


// This defines a function called `getEditorObject` that takes a JSON string as input, parses it, and returns an object with a `type` and `content` property.


export const Editor = () => {
    const { editorContent, currentFile } = useContext(FileContext)

    const [file, setFile] = useState(currentFile)

    const html = String.raw; // Just for better editor support



    const { manager, state, onChange } = useRemirror({
        extensions,
        content: editorContent
    });






    useEffect(() => {
        if (file !== currentFile) {
            manager.view.updateState(manager.createState({ content: editorContent }));

            setFile(currentFile)

        }

    }, [currentFile, file])

    // This is a useEffect hook that listens for changes to the `currentFile` state and updates the editor's content accordingly.

    return (
        <>
            <ThemeProvider>
                <Remirror
                    manager={manager}
                    state={state}
                    hooks={hooks}
                    onChange={onChange}
                >
                    <Toolbar>
                        <UndoButton />
                        <RedoButton />
                        <CommandButtonGroup>
                            <DecreaseFontSizeButton />
                            <FontSizeButtons />
                            <IncreaseFontSizeButton />
                        </CommandButtonGroup>
                        <TextAlignmentButtonGroup />

                        <ToggleItalicButton />
                        <ToggleBoldButton />
                        <HeadingLevelButtonGroup showAll />
                        <ListButtonGroup />
                        <HighlightButtons />


                    </Toolbar>
                    <EditorComponent />
                </Remirror>
            </ThemeProvider>
        </>
    );

};
export default Editor;
// This returns the main editor component, which is wrapped in a `ThemeProvider` and a `Remirror` component. The `Toolbar` component contains various buttons and dropdowns for formatting text, and the `EditorComponent` renders the actual editor.