// "use client";
// import React, { useState, useEffect } from "react";
// import axios, { AxiosError } from "axios";

// interface Message {
//   id: number;
//   body: string;
// }

// const Room: React.FC<{ roomId: number }> = ({ room, roomId }) => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState<string>("");

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3000/messages/${roomId}`
//       );
//       const data = response.data;
//       setMessages(data);
//     } catch (error) {
//       const axiosError = error as AxiosError;
//       console.error("Error fetching messages:", axiosError.message);
//     }
//   };

//   const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNewMessage(event.target.value);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       await axios.post(`http://localhost:3000/messages/${roomId}`, {
//         body: newMessage,
//       });

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { id: prevMessages.length + 1, body: newMessage },
//       ]); 

//       setNewMessage("");
//     } catch (error) {
//       const axiosError = error as AxiosError;
//       console.error("Error adding message:", axiosError.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Room: {room}</h1>
//       <ul>
//         {messages.map((message: Message) => (
//           <li key={message.id}>{message.body}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={handleMessageChange}
//           placeholder="Type your message..."
//         />
//         <button type="submit">Send now</button>
//       </form>
//     </div>
//   );
// };

// export default Room;


import React from 'react'

function Roomiee() {
  return (
    <div>Roomiee</div>
  )
}

export default Roomiee
