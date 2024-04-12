// import { NextApiRequest, NextApiResponse } from 'next';

// interface Room {
//   id: number;
//   name: string;
// }

// const rooms: Room[] = [];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     res.status(200).json(rooms);
//   } else if (req.method === 'POST') {
//     const { name } = req.body;
//     const id = rooms.length + 1;
//     const newRoom = { id, name };
//     rooms.push(newRoom);
//     res.status(201).json(newRoom);
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
