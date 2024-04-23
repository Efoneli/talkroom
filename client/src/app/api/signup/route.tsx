// const fs = require("fs");
// const path = require("path")

// import { NextResponse } from "next/server";

// const filePath = 'src/app/utils/token-based-authenticated-users.json'
// // Dummy user data (loaded from users.json)
// const userData = require("../../utils/token-based-authenticated-users.json");


// interface SignupFormDataType {
//   username: string;
//   password: string;
// }


// // API route handler
// export async function POST(request: Request) {
//   console.log('signup check')
//   const { username, password } = (await request.json()) as SignupFormDataType;

//   if (!username || !password) {
//     return NextResponse.json({ message: "Signup fail" }, { status: 400 });
//   }

//   userData.users.push({ username, password, id: userData.users.length + 1 });

//   // Save the updated user data back to users.json (in a real app, use a database)
//   fs.writeFileSync(
//     filePath,
//     JSON.stringify(userData, null, 2)
//   );

//   return NextResponse.json({ message: "Signup successful" }, { status: 201 });
// }


import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function createUser(name:string) {
  try {
    const response = await axios.post('http://localhost:3000/users/', { name })

    if (response.status !== 201) {
      throw new Error('Failed to create user: ' + response.data.Message)
    }
    return response.data
  } catch (error) {
    throw new Error('Failed to create user: ' + error.message)
  }
}
