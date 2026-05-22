import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaAngleDoubleRight, FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const RightSide = ({ books }) => {
  return (
    <div className="card bg-base-100 shadow-sm p-2">
      <div className="">
        <div className=" p-2">
          <Image
            src={books?.image_url}
            width={200}
            height={200}
            alt={books?.title}
            unoptimized
          />
          <h2 className="text-xl font-bold">{books.title}</h2>
          <p className=" text-sm bg-green-200">{books.author}</p>
        </div>
      </div>

      <p className=" line-clamp-3 ">{books.description}</p>
      <div className="flex justify-between items-center gap-2">
        <Link className="p-3" href={`/books/${books.id}`}>
          <button className="btn  hover:bg-orange-500">
            {" "}
            Details <FaAngleDoubleRight />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RightSide;
