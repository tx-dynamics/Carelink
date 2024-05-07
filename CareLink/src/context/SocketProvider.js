import React, {useMemo, useEffect} from 'react';
import {io} from 'socket.io-client';

const SocketProvider = () => {
  const socket = useMemo(() => socket.io('ws://your-socket-url'), []);

  useEffect(() => {
    // Ensure socket is open when component mounts

    // Clean up event listeners when componet unmounts
    return () => {
      socket.close();
    };
  }, [socket]);

  // Other socket-related logic can go here

  return (
    <></> // You can return any UI components or null
  );
};

export default SocketProvider;
