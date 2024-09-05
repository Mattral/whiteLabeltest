// MeetingRoom.tsx

import React from 'react';
import { Call } from '@stream-io/video-react-sdk'; // Adjust the import as necessary

interface MeetingRoomProps {
  call: Call;
}

const MeetingRoom: React.FC<MeetingRoomProps> = ({ call }) => {
  return (
    <div>
      {/* Render meeting room with the call data */}
      <p>Meeting Room for call: {call.id}</p>
    </div>
  );
};

export default MeetingRoom;
