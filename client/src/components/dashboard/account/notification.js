import React from "react";

function Notifications() {

  return(
    <div className="bg-gray-100 py-10 text-left">
      <div className="bg-white w-5/6 m-auto rounded-xl">
        <div className="flex border-b-2 border-gray-100 font-medium p-3">
          <h3 className="w-1/3">Event</h3>
          <h3 className="w-1/3">Message</h3>
          <h3 className="w-1/3">Date & Time</h3>
        </div>

        {/* DIV BELOW WILL CONDITIONALLY RENDER ACCEPTED INVITATIONS FROM DATABASE */}
        <div className="flex justify p-3">
          <p className="w-1/3">Event</p>
          <p className="w-1/3">Gary Keeler -- Fish Creek Lodge</p>
          <p className="w-1/3">12 Jun 2022, 7:10</p>
        </div>
      </div>

    </div>
  )
};
export default Notifications;