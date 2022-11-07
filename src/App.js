import './App.css';
import Editor from "./Editor"
import Previewer from "./Previewer"
import React from "react"
import placeholder from "./placeholder"
function App() {

  const [text, setText] = React.useState(JSON.parse(localStorage.getItem('text')) || placeholder)
  const [editorMax, setEditorMax] = React.useState(false)
  const [previewerMax, setPreviewerMax] = React.useState(false)

function handleChange(event) {
  setText(event.target.value)
}

React.useEffect(() => {
  localStorage.setItem('text', JSON.stringify(text))
}, [text])

function toggleEditor() {
  setEditorMax(prevState => !prevState)
  console.log("toggled")
}

function togglePreviewer() {
  setPreviewerMax(prevState => !prevState)
}

  return (
    <div className="App">
      {previewerMax === false && <Editor handleChange={handleChange} display={text} toggle={toggleEditor} maximised={editorMax} />}
      {editorMax === false && <Previewer preview={text} toggle={togglePreviewer} maximised={previewerMax} />}
      <p><strong>Built By Tomrso</strong></p>
    </div>
    
  );
}

export default App;
