"use client";

import { authClient } from "@/lib/auth-client";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiBookOpen } from "react-icons/bi";
// import userAvatar from "@/assets/user.png";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user, "user");

  const links = [
    { path: "/", label: "Home" },
    { path: "/allbooks", label: "All Books" },
    { path: "/myprofile", label: "My Profile" },
  ];
  return (
    <div className="max-lg:collapse bg-base-200  shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link
            href={"/"}
            className="btn btn-ghost text-xl hover:bg-orange-500"
          >
            <BiBookOpen className="text-xl"></BiBookOpen> BookHaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.path}>
                <Link className="hover:bg-orange-400" href={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner text-error"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <h2>Hello! {user.name}</h2>

              {/* <Image
                src={user?.image || userAvatar}
                alt="user avatar"
                width={60}
                height={60}
                className="rounded-full"
              /> */}

              <Link
                className="btn bg-orange-500 hover:bg-orange-300"
                href={"/logout"}
                onClick={async()=>await authClient.signOut()}
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              className="btn bg-orange-500 hover:bg-orange-300"
              href={"/login"}
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu ">
          {links.map((link) => (
            <li key={link.path}>
              <Link className="hover:bg-orange-400" href={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
