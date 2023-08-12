import MessagesWindow from "./MessagesWindow"
import InputField from "./InputField"

export default function ChatWindow() {
    return (
        <div className="chat-window">
            <MessagesWindow />
            <InputField />
        </div>
    )
}