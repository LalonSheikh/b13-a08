"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Image from "next/image";

const UpdateProfilePage = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (session?.user) {
      setValue("name", session.user.name || "");
      setValue("image", session.user.image || "");
    }
  }, [session, setValue]);

  const onSubmit = async (data) => {
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      toast.error(error.message || "Failed to update profile");
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/myprofile");
  };

  if (isPending) {
    return <div className="container mx-auto p-6">Loading...</div>;
  }

  const imageValue = watch("image");

  return (
    <div className="flex items-center justify-center ">
      <div className="container mx-auto p-6 max-w-md ">
        <h1 className="text-3xl font-bold mb-6">Update Information</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Image preview */}
          {imageValue && (
            <div className="flex justify-center">
              <Image
                src={imageValue}
                alt="Profile preview"
                width={300}
                height={200}
                unoptimized // ✅ bypasses domain whitelist for dynamic URLs
                className="rounded-xl object-cover"
              />
            </div>
          )}

          {/* Image URL field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              {...register("image")}
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
            />
          </div>

          {/* Name field */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              placeholder="Your name"
              className={`input input-bordered w-full ${
                errors.name ? "input-error" : ""
              }`}
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn bg-orange-500 pt-2 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
