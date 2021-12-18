//This file is the chat bubble that we send

const MyMessage = ({ message }) => {
  //tell between image or text messages
  if(message?.attachments?.length > 0 ) { 
      return (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}

        />
      )
  }
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: 'indigo' }}>
      {message.text}
    </div>

  )

}

export default MyMessage;