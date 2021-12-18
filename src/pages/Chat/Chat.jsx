import { ChatEngine } from 'react-chat-engine';

import './Chat.css';

const Chat = () => {
  return (
		<div className='chat-page'>
		<ChatEngine
			height='100vh'
			projectID='2b543fe2-2a38-4552-8b53-6ae71ea17344'
			userName='KateDurgin'
			userSecret='123123'
		/>
		</div>
	)
}

export default Chat;