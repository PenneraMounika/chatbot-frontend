import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'

function MessagesWindow() {

    const messages = useSelector((state) => state.messages)
    const dispatch = useDispatch()

    // console.log(messages)

    return (
        <div className="messages-window">
            {
                messages.map(element => 
                    (<div className="message" style={element.sender === 'user' ? {marginLeft:"auto", backgroundColor:"rgba(255,255,255,0.12)"} : {marginRight:"auto", backgroundColor:"rgba(255,255,255,0.05)"}}>{element.text}</div>)
                )
            }
        </div>
    )
}

export default connect()(MessagesWindow);