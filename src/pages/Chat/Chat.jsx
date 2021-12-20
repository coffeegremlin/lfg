import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../../components/Chat/ChatFeed'
import LoginForm from '../../components/Chat/LoginForm';
import './Chat.css';

const projectID='2b543fe2-2a38-4552-8b53-6ae71ea17344'

const Chat = () => {
// want to show log in form if user is not logged into chat
if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="90vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default Chat;