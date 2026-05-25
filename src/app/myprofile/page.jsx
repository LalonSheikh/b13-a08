import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="flex justify-center items-center ">
      <div className="container mx-auto p-6 max-w-md">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>
        <div className="space-y-2">
          <Image
            src={user?.image}
            alt="Profile preview"
            width={300}
            height={200}
            unoptimized // ✅ bypasses domain whitelist for dynamic URLs
            className="rounded-4xl object-cover"
          />

          <p className="text-xl">{user?.name}</p>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* ✅ Update button */}
        <Link
          href="/myprofile/update"
          className="btn bg-orange-500 pt-2 mt-6 inline-block"
        >
          Update Information
        </Link>
      </div>{" "}
    </div>
  );
};

export default MyProfilePage;
