// ChatApp.jsx
'use client'
import React from 'react';
import MessagesPage from "../../components/Messages";

const ChatApp: React.FC = () => {
  
  return (
    <div>
     <MessagesPage />
    </div>
  );
};

export default ChatApp;






// "use client";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import io from "socket.io-client";
// import MessagesPage from './../../components/Messages';

// export default function Page() {
//   const router = useRouter();
//   const { slug } = useParams();

//   const [messages, setMessages] = useState<any[]>([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     if (!slug) return; // Ensure slug is available before connecting to socket

//     const socket = io(`http://localhost:3001/${slug}`);

//     socket.on("message", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [slug]); // Depend on slug for socket connection

//   const sendMessage = () => {
//     if (!input.trim()) return; // Do nothing if input is empty

//     const socket = io(`http://localhost:3001/${slug}`);
//     socket.emit("message", input);
//     setInput("");
//   };

//   return (
//     <main className="flex  flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="font-mono font-bold fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Talkrooms&nbsp;
//         </p>
//       </div>
//       <h1>Current Room: {slug}</h1> {/* Display current room based on slug */}
//       <div
//         style={{ height: "45vh", width: "100%" }}
//         className="bg-black lg:max-w-5xl lg:w-full relative"
//       >
//         <p className="text-white"> {messages} </p>
//         <div className="absolute bottom-0 left-0 w-full">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Hit enter to send message"
//             className="w-full p-3 outline-none text-gray-900"
//             onKeyUp={(e) => e.key === "Enter" && sendMessage()}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
