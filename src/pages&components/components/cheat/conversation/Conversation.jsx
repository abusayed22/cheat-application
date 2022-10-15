import React from "react";
import Navber from "./Navber";
import SingleConversation from "./SingleConversation";

function Conversation() {
  return (
    <>
      <div className="w-[100px] border-r border-t-0 border-gray-300 lg:col-span-1 md:w-full">
        <Navber />
        <ul className="overflow-auto">
          <SingleConversation />
        </ul>
      </div>
    </>
  );
}

export default Conversation;
