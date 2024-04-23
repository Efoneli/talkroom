// const jwt = require("jsonwebtoken");
// import { NextResponse } from "next/server";
// // Dummy user data (loaded from users.jso
// const userData = require("../../utils/token-based-authenticated-users.json");

// export interface LoginFormDataType {
//   username: string;
//   password: string;
// }

// // Function to generate a JWT with user information
// function generateToken(user: {
//   username: string;
//   password: string;
//   id: string;
// }) {
//   // Include relevant user information in the token
//   const payload = {
//     userId: user.id,
//     username: user.username,
//   };

//   // Sign the token with a secret key and set an expiration time
//   return jwt.sign(payload, "mySecretKey", { expiresIn: "1h" });
// }
// // API route handler
// export async function POST(request: Request) {
//   console.log('checking')
//   const { username, password: claimedCorrectPassword } =
//     (await request.json()) as LoginFormDataType;

//   // Find the user by username
//   const user = userData.users.find(
//     (u: LoginFormDataType) => u.username === username
//   );

//   // Check if the user exists and the password is correct
//   if (user && user.password === claimedCorrectPassword) {
//     // Generate a JWT with user information
//     const token = generateToken({ ...user, id: userData.users.length + 1 });

//     return NextResponse.json(
//       { message: "Login successful", token },
//       { status: 200 }
//     );
//   } else {
//     return NextResponse.json(
//       { message: "Invalid credentials" },
//       { status: 401 }
//     );
//   }
// }



import axios from "axios";

export async function loginUser(name: string) {
  try {
    const response = await axios.post('http://localhost:3000/users/', { name });

    if (response.status !== 200) {
      throw new Error('Failed to login: ' + response.data.message);
    }

    return response.data;
  } catch (error) {
    throw new Error('Failed to login: ' + error.message);
  }
}

