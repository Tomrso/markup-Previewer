import MDEditor from "@uiw/react-md-editor"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons'

export default function Previewer(props) {
    return (
        <div className={props.maximised ? "previewer-max" : "previewer"}>
            <div className="header">
                <p className="title">Previewer</p>
                <FontAwesomeIcon icon={props.maximised ? faMinimize : faMaximize} className="icon" onClick={props.toggle}/>
            </div>
            <div className="markdown">
            <MDEditor.Markdown source={props.preview} className="markup-preview" />
            </div>
        </div>
    )
}