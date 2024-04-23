// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/login", {
        
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       console.log(response)


//       if (response.ok) {
//         const data = await response.json();
//         console.log("Login successful:", data);

//         // Redirecting
//         router.push("/dashboard");
//       } else {
//         const errorData = await response.json();
//         console.error("Login failed:", errorData);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }

//   };

//   return (
//     <div className="form__container">
//       <h2 className="">Login</h2>

//       <form className="form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit">Login </button>
//       </form>

//       <Link href="/">Go to home page</Link>
//     </div>
//   );
// };

// export default Login;



'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../api/login/route';

const Login = () => {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // Define a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Call the loginUser function from your API module with the username and password
      await loginUser(name);
      // Clear the form fields after successful login
      setName('');
      setErrorMessage('');
      // Redirect the user to another page after successful login
      router.push('/dashboard');
    } catch (error) {
      // Handle errors if login fails
      setErrorMessage(error.message);
    }
  };

  // Return JSX for the login form
  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Input Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
       
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

