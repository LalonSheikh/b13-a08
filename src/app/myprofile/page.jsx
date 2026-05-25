import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyProfile() {
  const headerStore = await headers(); // ✅ FIX HERE

  const session = await auth.api.getSession({
    headers: {
      cookie: headerStore.get("cookie") || "",
    },
  });

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My Profile</h1>

      <div className="mt-4 space-y-2">
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>ID:</b> {user.id}</p>
      </div>
    </div>
  );
}