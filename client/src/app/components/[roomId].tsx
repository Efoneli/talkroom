'use client'
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Message } from './Messages';
import { useParams, useRouter } from 'next/navigation';

const RoomPage: React.FC = () => {
  const router = useRouter();
  const { roomId } = useParams()
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/rooms/${roomId}/messages`);
        const data = response.data;
        setMessages(data);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error('Error fetching messages:', axiosError.message);
      }
    };

    if (roomId) {
      fetchMessages();
    }
  }, [roomId]);

  return (
    <div>
      <h1>Messages for Room {roomId}</h1>
      <ul>
        {messages.map((message: Message) => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomPage;
