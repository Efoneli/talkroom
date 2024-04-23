// "use client";
// import Link from "next/link";
// import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";

// export default function Home() {
//   const chatrooms = [
//     {
//       id: 1,
//       name: "Football",
//       description: "Everything football",
//       slug: "football",
//     },
//     {
//       id: 2,
//       name: "Entertainment",
//       description: "Follow your fave shows in this room",
//       slug: "entertainment",
//     },
//     {
//       id: 3,
//       name: "Politics",
//       description: "Trending news in Nigeria",
//       slug: "politics",
//     },
//     {
//       id: 4,
//       name: "Fashion",
//       description: "Everything fashion",
//       slug: "fashion",
//     },
//   ];

//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <h1>Loading...</h1>;
//   // if (error) return <h3>{error.message}</h3>

//   // if (user) {
//   //   return (
//   //     <div>
//   //       Welcome {user.name}! <Link href={'/api/auth/logout'}>Logout</Link>
//   //     </div>
//   //   )
//   // }
//   return (
//     <UserProvider>
//         <div className="text-right m-4 hover:text-pink-300">
//           <Link href="/api/auth/login">Login</Link>
//         </div>
//       <main className="flex flex-col items-center justify-between p-24">
//         <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//           <p className="font-mono font-bold fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800  hover:text-pink-300 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//             Talkrooms&nbsp;
//           </p>
//         </div>

//         <div className="flex justify-between">
//           <p className='m-0 text-sm opacity-70'>
//             Connect with like minds from our available chat rooms
//           </p>
//           <button className="ml-24 p-1 border border-white rounded hover:text-pink-300 ">Add room</button>

//         </div>
//         <div className="pt-8 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
//           {chatrooms.map((room) => (
//             <Link
//               href={`/rooms/${room.slug}`}
//               as={`/rooms/${room.slug}`}
//               key={room.id}
//               className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             >
//               <h2 className='mb-3 text-2xl font-semibold hover:text-pink-300'>
//                 {room.name}{" "}
//                 <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                   -&gt;
//                 </span>
//               </h2>
//               <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//                 {room.description}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </UserProvider>
//   );
// }

"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export interface Message {
  id: number;
  body: string;
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [ownerId, setOwnerId] = useState<number | undefined>(1); // Set ownerId based on your application logic
  const router = useRouter();
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      fetchMessages(roomId.toString()); // Convert roomId to string
    }
  }, [roomId]);

  const fetchMessages = async (roomId: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/messages?roomId=${roomId}`);
      const data = response.data;
      console.log(data);
      setMessages(data);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Error fetching messages:", axiosError.message);
    }
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMessageData: Message = {
      id: messages.length + 1,
      body: newMessage,
    };
    setMessages([...messages, newMessageData]);
    setNewMessage("");

    try {
      await axios.post("http://localhost:3000/messages", {
        ownerId,
        body: newMessage,
        roomId: roomId, // Include roomId in the request body
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Error adding message:", axiosError.message);
    }
  };

  return (
    <div>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="font-mono font-bold fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Talkroom&nbsp;
          </p>
        </div>
        <h1 className="my-4 text-pink-50 border border-gray-300 rounded p-2 hover:bg-pink-50 hover:text-gray-800">
          Current Room: {roomId}
        </h1>

        <div  className="bg-black lg:max-w-5xl lg:w-full relative">
          <div className="flex h-[400px] flex-col bg-gray-900">
            <div className="flex-grow overflow-y-auto">
              <div className="flex flex-col space-y-2 p-4">
              <div className="flex items-center self-end rounded-xl rounded-tr bg-blue-500 py-2 px-3 text-white">
                  <p>This is a sender message</p>
                </div>
                {messages.map((message: Message) => (
                  <div key={message.id} className="flex items-center self-start rounded-xl rounded-tl bg-gray-300 text-black py-2 px-3">
                    <p>{message.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex mt-4 w-full">
                <input
                  type="text"
                  value={newMessage}
                  onChange={handleMessageChange}
                  placeholder="Press enter to send..."
                  className="w-full p-3 outline-none text-gray-900"
                />
                <button type="submit" className="bg-pink-900 px-3 hover:bg-pink-500">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;
