import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import useAuth from "../../hooks/useAuth";

function LoginPage() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { signInWithEmailAndPassword, user } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validation start here
    const errors = [];
    if (!email) {
      errors.push("email");
    }
    if (!password) {
      errors.push("password");
    }

    if (errors.length) {
      setErrors(errors);
      setTimeout(() => {
        setErrors([]);
      }, 5000);
      return;
    }
    // Validation end here

    await signInWithEmailAndPassword(email, password);
  };

  console.log({ user });
  return (
    <div className="h-screen w-full bg-[#f0f2f5] flex items-center justify-center">
      <div className="max-w-[400px] grid gap-y-9 md:grid-cols-2 md:max-w-[1024px] md:gap-x-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-blue-500 text-6xl font-bold">facebook 2.o</h1>
          <p className="text-2xl text-black">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="bg-white shadow-lg grid gap-y-6 rounded-md p-5">
          <form className="grid gap-y-6" onSubmit={onSubmit}>
            <div className="w-full">
              <input
                value={formData.email}
                type="text"
                name="email"
                className={clsx(
                  "w-full border-2 border-gray-200 rounded-md p-4 focus-visible:outline-blue-500",
                  errors.includes("email") &&
                    "focus-visible:outline-red-500 border-red-500"
                )}
                placeholder="Email Address or phone number"
                onChange={onChange}
              />
              {errors.includes("email") ? (
                <p className="text-red-400 text-sm mt-2 pl-2">
                  Email is required
                </p>
              ) : null}
            </div>
            <div className="w-full">
              <input
                value={formData.password}
                type="password"
                name="password"
                className={clsx(
                  "w-full border-2 border-gray-200 rounded-md p-4 focus-visible:outline-blue-500",
                  errors.includes("email") &&
                    "focus-visible:outline-red-500 border-red-500"
                )}
                placeholder="Password"
                onChange={onChange}
              />
              {errors.includes("password") ? (
                <p className="text-red-400 text-sm mt-2 pl-2">
                  Password is required
                </p>
              ) : null}
            </div>
            <input
              type="submit"
              value="Log in"
              className="bg-blue-500 p-3 rounded-md text-white font-bold text-xl cursor-pointer hover:bg-blue-600 transition delay-150 ease-in-out duration-300"
            />
          </form>
          <Link
            to="/forgot-password"
            className="text-center text-md text-blue-500"
          >
            Forgotten password
          </Link>

          <hr />

          <div className="flex items-center justify-center">
            <button className="bg-green-500 max-w-max text-white rounded-md py-3 px-4 font-bold">
              Create new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

// export default class LoginPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   onSubmit = () => {};

//   render() {
//     return (
//       <div className="h-screen w-full bg-[#f0f2f5] flex items-center justify-center">
//         <div className="max-w-[400px] grid gap-y-9 md:grid-cols-2 md:max-w-[1024px] md:gap-x-12 items-center">
//           <div className="text-center md:text-left">
//             <h1 className="text-blue-500 text-6xl font-bold">facebook 2.o</h1>
//             <p className="text-2xl text-black">
//               Facebook helps you connect and share with the people in your life.
//             </p>
//           </div>
//           <div className="bg-white shadow-lg grid gap-y-6 rounded-md p-5">
//             <form className="grid gap-y-6" onSubmit={this.onSubmit}>
//               <input
//                 value={this.state.email}
//                 type="text"
//                 name="email"
//                 className="w-full border-2 border-gray-200 rounded-md p-4 focus-visible:outline-blue-500"
//                 placeholder="Email Address or phone number"
//                 onChange={(e) => this.setState({ email: e.target.value })}
//               />
//               <input
//                 value={this.state.password}
//                 type="password"
//                 name="password"
//                 className="w-full border-2 border-gray-200 rounded-md p-4 focus-visible:outline-blue-500"
//                 placeholder="Password"
//                 onChange={(e) => this.setState({ password: e.target.value })}
//               />
//               <input
//                 type="submit"
//                 value="Log in"
//                 className="bg-blue-500 p-3 rounded-md text-white font-bold text-xl cursor-pointer hover:bg-blue-600 transition delay-150 ease-in-out duration-300"
//               />
//             </form>
//             <Link
//               to="/forgot-password"
//               className="text-center text-md text-blue-500"
//             >
//               Forgotten password
//             </Link>

//             <hr />

//             <div className="flex items-center justify-center">
//               <button className="bg-green-500 max-w-max text-white rounded-md py-3 px-4 font-bold">
//                 Create new account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
