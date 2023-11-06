import React from 'react'
import { io } from 'socket.io-client'
import '../Component/style.css'

const Chat = () => {
    const socket = io("https://chat-api-uq6p.onrender.com/")  // to make continous connection with server 
    
    socket.on('Msg',(data)=>{   //getting the same data from server and reading here using .on method
        console.log(data);
    })

    socket.on('bcast',(exddata)=>{
        console.log(exddata);
    })

    socket.on('exbcast',(ddata)=>{
        console.log(ddata);
    })

    socket.on('JoinSuccessfully',(jrdata)=>{
        console.log(jrdata);
    })

    socket.on('joinmess',(jmdata)=>{
        console.log(jmdata);
    })

    const sendmessage = ()=>{
        socket.emit('Message',"Hi world")
    }

    const broadcast = ()=>{
        socket.emit('Broadcast','Broadcast Message to all participant')
    }

    const exclusivebroadcast = ()=>{
        socket.emit('ExclusiveBroadcast','Exclusive Broadcast Message to for participants')
    }

    const joinroom = ()=>{
        socket.emit('joinroom',"Join Group leo")
    }

    const groupmessage = ()=>{
        socket.emit('groupMess',"Thanks for joining")
    }

  return (
    <div className='container'>
        <h2>Socket Programming</h2>
        <h3>Chat Application</h3>
        <button onClick={sendmessage}>Send Message</button>
        <button onClick={broadcast}>Broadcast Message</button>
        <button onClick={exclusivebroadcast}>Exclusive Broadcast Message</button>
        <button onClick={joinroom}>Join Room</button>
        <button onClick={groupmessage}>Send message to group</button>
    </div>
  )
}

export default Chat