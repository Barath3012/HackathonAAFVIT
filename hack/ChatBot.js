
import ChatBot from 'react-simple-chatbot';
 
const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
        end: true
    }
];
 
function Chat() {
    return (
        <div className="Chat">
            <h1>HEY RIYA</h1>
            <ChatBot steps={steps} />
        </div>
    );
}
 
export default Chat;