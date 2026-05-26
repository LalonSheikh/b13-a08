"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BorrowButton = ({ bookId }) => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleBorrow = () => {
    console.log("session:", session);
    console.log("isPending:", isPending);
    if (isPending) return;

    if (!session?.user) {
      router.push("/login");
      return;
    }

    toast.success("Book borrowed successfully! ");
  };

  return (
    <button
      onClick={handleBorrow}
      className="btn bg-orange-500 cursor-pointer"
      disabled={isPending}
    >
      {isPending ? "Loading..." : "Borrow This Book"}
    </button>
  );
};

export default BorrowButton;
