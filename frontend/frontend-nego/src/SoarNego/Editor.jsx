
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';
import { useContext, useEffect } from 'react';
import FileContext from './providers/FileExporerContext';
function Editor(){
    const {UpdateProseMirrorEditorContent} = useContext(FileContext)
    useEffect(() => {
        // const mySchema = new Schema({
        //     nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
        //     marks: schema.spec.marks
        // })

        // window.view = new EditorView(document.querySelector("#editor"), {
        //     state: EditorState.create({
        //         doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
        //         plugins: exampleSetup({schema: mySchema})
                
        //     })
        // })

        // const modView = window.view
        // UpdateProseMirrorEditorContent(modView)

        // const transaction = modView.state.tr.insert(0, modView.state.schema.text("Hello World!"))
        // const newState = modView.state.apply(transaction);
        // modView.updateState(newState);

        
    });

  return (
    <div style={{ padding: 16 }}>
                  <WysiwygEditor placeholder='Enter text...' />
                </div>
  );

}
export default Editor