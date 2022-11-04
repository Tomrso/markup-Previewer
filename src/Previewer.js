import './Previewer.css'
import MDEditor from "@uiw/react-md-editor"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons'

export default function Previewer(props) {
    return (
        <div className="previewer">
            <div className="header">
                <p className="title">{props.title}</p>
                <FontAwesomeIcon icon={faMaximize} className="icon" />
            </div>
            <MDEditor.Markdown source={props.preview} />
        </div>
    )
}