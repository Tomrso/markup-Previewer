import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

export default function Header(props) {
    return (
        <div className="header">
            <p className="title">{props.title}</p>
            <FontAwesomeIcon icon={faMaximize} className="icon" />
        </div>
    )
}