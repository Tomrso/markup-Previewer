import './Editor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
    return (
        <div className="editor-wrapper">
            <div className="header">
                <p className="title">{props.title}</p>
                <FontAwesomeIcon icon={faMaximize} className="icon" />
            </div>
            <textarea value={props.display} className="editor" onChange={props.handleChange} />
        </div>
    )
}