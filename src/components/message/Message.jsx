import "..//message/Massege.css"

function Message({message, timestamp,user,userImage}) {
  return (
    <div className = "message">
        <img src = {userImage} alt = ""/>
        <div className='message__info'>
            <h4>{user} <span className = "message__timestamp">{timestamp?.toDate().toUTCString()}</span></h4>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Message