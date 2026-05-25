"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);
   const handleGoogleSignIn = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
      // console.log(data, "data");
    };

  const handleRegister = async (data) => {
    const { name, photo, email, password } = data;

    // console.log(data);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/login",
    });

    console.log("SUCCESS:", res);
    console.log("ERROR:", error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Signup Successful");
    }
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 ">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          {" "}
          Register Your Account
        </h2>
        <form className="space-y-2" onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              {...register("name", {
                required: "Name Field is required",
              })}
              className="input focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Type Your Name..."
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              {...register("photo", {
                required: "Photo URL is required",
              })}
              className="input focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Type Your Photo URL..."
            />
            {errors.photo && (
              <span className="text-red-500">{errors.photo.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              {...register("email", {
                required: "Email Field is required",
              })}
              className="input focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Type Your Email..."
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              {...register("password", {
                required: "Password Field is required",
              })}
              className="input focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Type Your Password..."
            />
            <span
              className="absolute right-4 top-4"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {" "}
              {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </fieldset>
          <button className="btn w-full hover:bg-orange-400 bg-slate-200">
            Register
          </button>
        </form>

        <div className="flex flex-col gap-2">
          <button onClick={handleGoogleSignIn} className="btn border-blue-500 text-blue-500">
            {" "}
            <FaGoogle /> Login with google
          </button>
        </div>
        <p className="text-sm">
          If your have an account?{" "}
          <Link className="text-orange-300" href={"/login"}>
            Login
          </Link>{" "}
        </p>
       
      </div>
    </div>
  );
};

export default RegisterPage;
