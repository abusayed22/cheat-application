import React from 'react'
import Navber from '../components/cheat/messages/Navber'
import SendMessage from '../components/cheat/messages/SendMessage'
import SingleMessage from '../components/cheat/messages/SingleMessage'

function Message() {
    return (
        <>
            <div className="w-full lg:col-span-2 lg:block">
                <div className="w-full grid conversation-row-grid">
                    <Navber />
                    <div className="relative w-full p-6 overflow-y-auto">
                        <ul className="space-y-2">
                            <SingleMessage />
                        </ul>
                    </div>
                    <SendMessage />
                </div>
            </div>
        </>
    )
}

export default Message
