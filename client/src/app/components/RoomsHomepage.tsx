// Rooms.jsx
"use client";
import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Room {
  id: number;
  name: string;
  slug: string;
}

const RoomsHomepage: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [newRoomName, setNewRoomName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:3000/rooms");
      const data = response.data;
      console.log("Fetched rooms:", data);
      setRooms(data);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Error fetching rooms:", axiosError.message);
    }
  };

  const handleAddRoom = async () => {
    try {
      const response = await axios.post("http://localhost:3000/rooms", {
        id: Number,
        name: newRoomName,
      });
      const newRoom: Room = response.data;
      console.log("New room:", newRoom);
      setRooms((prevRooms) => [...prevRooms, newRoom]);
      setNewRoomName("");
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Error adding room:", axiosError.message);
    }
  };

  const handleRoomClick = (id: number) => {
    router.push(`/rooms/${id}`);
  };

  const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomName(event.target.value);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="font-mono font-bold fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800  hover:text-pink-300 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Talkrooms&nbsp;
          </p>

        </div>

        <div className="flex justify-between">
          <p className="m-0 text-sm opacity-70">
            Connect with like minds from our available chat rooms
          </p>
        </div>

        <div className="pt-8 mb-32 grid text-center grid-cols-1 md:grid-cols-3 gap-4">
          {rooms.map((room: Room, name) => (
            <Link
            href={`/rooms/${room.name}`}
              key={room.name}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              // onClick={() => handleRoomClick(id)}
            >
              <h2 className="mb-3 text-2xl font-semibold cursor-pointer hover:text-[#90bde7]">
                {room.name}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            
            </Link>
          ))}
        </div>

        <form>
          <div className="flex  mt-4">
            <input
              type="text"
              value={newRoomName}
              onChange={handleRoomNameChange}
              placeholder="Press enter to send..."
              className="w-full p-3 outline-none text-gray-900"
            />

            <button
              onClick={handleAddRoom}
              type="submit" 
              className="bg-[#6cafee] px-3 rounded-r-md text-sm hover:bg-[#90bde7]"
            >
              Add Room
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default RoomsHomepage;

// Rooms.tsx;
// 'use client'
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import axios, { AxiosError } from 'axios';

// interface Room {
//   id: number;
//   name: string;
// }

// const Rooms: React.FC = () => {
//   const [rooms, setRooms] = useState<Room[]>([]);
//   const [newRoomName, setNewRoomName] = useState<string>('');

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   const fetchRooms = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/rooms');
//       const data = response.data;
//       setRooms(data);
//     } catch (error) {
//       const axiosError = error as AxiosError;
//       console.error('Error fetching rooms:', axiosError.message);
//     }
//   };

//   const handleAddRoom = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/rooms', {
//         name: newRoomName,
//       });
//       const newRoom: Room = response.data;
//       setRooms(prevRooms => [...prevRooms, newRoom]);
//       setNewRoomName('');
//     } catch (error) {
//       const axiosError = error as AxiosError;
//       console.error('Error adding room:', axiosError.message);
//     }
//   };

//   const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNewRoomName(event.target.value);
//   };

//   return (
//     <>
//       <h1>Chat Rooms</h1>
//       <ul>
//         {rooms.map((room: Room) => (
//           <li key={room.id}>
//             <Link href={`/room/${room.id}`}>
//               {room.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           value={newRoomName}
//           onChange={handleRoomNameChange}
//           placeholder="Enter room name"
//         />
//         <button onClick={handleAddRoom}>Add Room</button>
//       </div>
//     </>
//   );
// };

// export default Rooms;
