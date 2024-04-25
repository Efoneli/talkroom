// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { createUser } from "../api/signup/route";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     // password: "",
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
//       const response = await fetch("/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log(response);

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Signup successfull", data);
//         router.push("/login");
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
//       <h2 className="">Sign Up</h2>

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

//         {/* <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div> */}

//         <button type="submit">Sign Up</button>
//       </form>

//       <Link href="/">Go to home page</Link>
//     </div>
//   );
// };

// export default SignUp;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "../api/signup/route";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(name);
      setName("");
      setErrorMessage("");

      router.push("/dashboard");
      if (statusCode === 201) {
        toast.message("User successfully created");
      }

      // Optionally, redirect the user to another page after successful signup
      // history.push('/dashboard'); // Requires React Router's useHistory hook
    } catch (error) {
      // Handle errors if user creation fails
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="form__container">
      <p className="text-center">Welcome to Talkroom, please </p>
      <span>
        <h2>Sign Up</h2>
      </span>

      {errorMessage && <p>{errorMessage}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          {/* <label>Input Name:</label> */}
          <input
            type="text"
            placeholder="name here"
            className="rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
