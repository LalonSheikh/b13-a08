"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);
  };
  // console.log(watch("email"), "errors");
  // console.log(watch("password"));
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 ">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          {" "}
          Login Your Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
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
            Login
          </button>
        </form>
        <p className="mt-6">
          Don&apos; t have an account?{" "}
          <Link className="text-orange-300" href={"/register"}>
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
