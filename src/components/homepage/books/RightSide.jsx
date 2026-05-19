import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const RightSide = ({ books }) => {
  return (
    <div className="card bg-base-100 shadow-sm p-2">
      <div className="card-body">
        <div className="flex justify-between items-center bg-slate-200 p-2">
          <div className="flex gap-1 items-center">
            {/* <Image
              src={books.image_url}
              alt={books.author}
              width={40}
              height={40}
              className="rounded-full"
            />{" "} */}
            <div>
              <h2 className="font-semibold">{books.author}</h2>
              {/* <p className="text-xs">{news.author?.published_date}</p> */}
            </div>{" "}
          </div>
          <div className="flex justify-between items-center">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>
        <h2 className="card-title">{books.title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
      <figure>
        {/* <Image
          src={books?.image_url}
          width={600}
          height={400}
          alt={books?.title}
          className="w-full h-auto rounded-lg"
          unoptimized
        /> */}
      </figure>
      <p className=" line-clamp-3 ">{books.description}</p>
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2 ">
          <h2 className="flex items-center gap-1 ">
            <IoIosStar className="text-yellow-500 text-lg" />{" "}
            <IoIosStar className="text-yellow-500 text-lg" />{" "}
            {/* {news.rating.number} */}
          </h2>
          <h2 className="flex items-center gap-2 ">
            {" "}
            <FaEye />
            {/* {news.total_view} */}
          </h2>
        </div>
        <Link href={`/books/${books.id}`}>
          <button className="btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default RightSide;
