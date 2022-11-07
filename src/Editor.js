import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
    return (
        <div className={props.maximised ? "editor-max" : "editor"}>
            <div className="header">
                <p className="title">Editor</p>
                <FontAwesomeIcon icon={props.maximised ? faMinimize : faMaximize} className="icon" onClick={props.toggle}/>
            </div>
            <textarea value={props.display} className="text-area" onChange={props.handleChange} />
        </div>
    )
}