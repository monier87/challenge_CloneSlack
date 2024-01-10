import { useEffect, useState } from 'react';
import '../chat/chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// Importa los componentes necesarios de Message y ChatInput
import Message from '../message/Message';
import ChatInput from '../chatinput/ChatInput';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  
  const getRoomDetails = () => {
    
    return { name: 'Room Name' };
  };

  
  const getRoomMessages = () => {
   
    return [
      { message: 'Hello', timestamp: Date.now(), user: 'User1', userImage: 'user1.jpg' },
      { message: 'Hi there!', timestamp: Date.now(), user: 'User2', userImage: 'user2.jpg' },
    ];
  };

  useEffect(() => {
    if (roomId) {
      // Sustituye esta lógica por la función dummy de obtención de detalles del cuarto
      const roomDetailsData = getRoomDetails(roomId);
      setRoomDetails(roomDetailsData);
    }

    
    const roomMessagesData = getRoomMessages(roomId);
    setRoomMessages(roomMessagesData);
  }, [roomId]);

  console.log('helloooooo', roomDetails);
  console.log('meeeeeeee', roomMessages);

  return (
    <div className='chat'>
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h3 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h3>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className='chat__messages'>
        {roomMessages.map(({ message, timestamp, user, userImage }, index) => (
          // Añade una key única a cada mensaje para evitar advertencias
          <Message key={index} message={message} timestamp={timestamp} user={user} userImage={userImage} />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
