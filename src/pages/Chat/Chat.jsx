import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../../components/Chat/ChatFeed'
import './Chat.css';

const Chat = () => {
  return (
		<ChatEngine
			height='90vh'
			projectID='2b543fe2-2a38-4552-8b53-6ae71ea17344'
			userName='KateDurgin'
			userSecret='123123'
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}
			/>}
		/>
	)
}

export default Chat;