"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
    const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  if (isPending) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!session) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/login" className="btn btn-warning rounded-full">
        Please Login
      </Link>
    </div>
  );
}
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await authClient.updateUser({
      name: name || session.user.name,
      image: image || session.user.image,
    });

    if (error) {
      toast.error("Update failed");
      return;
    }

    toast.success("Profile updated!");
    router.push("/my-profile");
    router.refresh();
  };

    return (
        <section className="min-h-screen bg-[#fffdf4] flex items-center justify-center px-4">
      <form onSubmit={handleUpdate} className="w-full max-w-md bg-white rounded-3xl shadow p-8">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Update Profile
        </h2>

        <input
          type="text"
          placeholder="New Name"
          className="input input-bordered w-full mb-4 border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="New Image URL"
          className="input input-bordered w-full mb-4 border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="btn btn-warning w-full rounded-full">
          Update Information
        </button>
      </form>
    </section>
    );
};

export default UpdateProfile;