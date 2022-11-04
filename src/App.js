import './App.css';
import Editor from "./Editor"
import Previewer from "./Previewer"
import React from "react"


function App() {

  const [text, setText] = React.useState("hello")
  
  const [editorMax, setEditorMax] = React.useState(false)
  const [previewerMax, setPreviewerMax] = React.useState(false)

  function expandEditor() {
    setEditorMax(prevState => !prevState)
  }

function handleChange(event) {
  setText(event.target.value)
}

let content
const editor = <Editor handleChange={handleChange} display={text} />
const previewer = <Previewer preview={text}/>

if (editorMax) {
  content = editor
} else if (previewerMax) {
  content = previewer
} else {
    content = editor + previewer
}


  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
