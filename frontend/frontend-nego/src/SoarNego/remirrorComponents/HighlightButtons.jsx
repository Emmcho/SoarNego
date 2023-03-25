import {useCommands} from '@remirror/react';

export const HighlightButtons = () => {
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
