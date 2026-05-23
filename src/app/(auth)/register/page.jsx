"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const { name, photo, email, password } = data;
    console.log(data, "data");
  };
  console.log(watch("email"), "errors");
  console.log(watch("password"));
  return (
    <div className="contaier mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 ">
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
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              {...register("password", {
                required: "Password Field is required",
              })}
              className="input focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Type Your Password..."
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </fieldset>
          <button className="btn w-full hover:bg-orange-400 bg-slate-200">
            Register
          </button>
        </form>
        <p className="mt-6">
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
