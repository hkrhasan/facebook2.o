import React, { Component, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Input, SignUpModal } from "../../components";
import { SignIn, ResetPassword } from "../../firebase";
import { toast } from "react-hot-toast";
import AuthPage from "../AuthPage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../store/reducers/user.reducer";

function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
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
    if (isLoading) return;
    setIsLoading(true);
    const { email } = formData;

    // Validation start here
    const errors = [];
    if (!email) {
      errors.push("email");
    }

    if (errors.length) {
      setErrors(errors);
      setTimeout(() => {
        setErrors([]);
      }, 5000);
      setIsLoading(false);
      return;
    }
    // Validation end here
    const { success, response, error } = await ResetPassword(email);

    setIsLoading(false);
    if (!success) {
      toast.error(error);
      return;
    }

    toast.success("email has send successfully.");
  };

  return (
    <div className="h-screen w-full bg-[#f0f2f5] flex items-center justify-center">
      <div className="max-w-[400px] grid gap-y-9 md:grid-cols-2 md:max-w-[1024px] md:gap-x-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-blue-500 text-6xl font-bold">Reset Password</h1>
          <p className="text-2xl text-black">
            If you know your password?{" "}
            <Link to="/login" className="text-center text-md text-blue-500">
              SignIn
            </Link>
          </p>
        </div>
        <div className="bg-white shadow-lg grid gap-y-6 rounded-md p-5">
          <form className="grid gap-y-6" onSubmit={onSubmit}>
            <div className="w-full">
              <Input
                value={formData.email}
                type="text"
                name="email"
                className={clsx(
                  "px-4 py-4",
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

            <input
              type="submit"
              value={isLoading ? "Loading..." : "Submit"}
              className="bg-blue-500 p-3 rounded-md text-white font-bold text-xl cursor-pointer hover:bg-blue-600 transition delay-150 ease-in-out duration-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
