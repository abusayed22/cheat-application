import React from 'react'
import Conversation from '../components/cheat/conversation/Conversation'
import Message from './Message'

function Cheat() {
  return (
    <div>
      <div className="max-w-7xl mx-auto -mt-1">
        <div className="min-w-full border h-screen rounded flex lg:grid lg:grid-cols-3">
          <Conversation />
          {/* <Message /> */}
        </div>
      </div>
    </div>
  )
}

export default Cheat
