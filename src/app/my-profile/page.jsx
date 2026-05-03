"use client";
import { authClient } from "@/lib/auth-client";
import { User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link href="/login" className="btn btn-warning rounded-full">
          Please Login
        </Link>
      </div>
    );
  }

  const user = session.user;
  return (
    <section className="min-h-screen bg-[#fffdf4] px-4 py-16">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow p-8 text-center">
        <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden bg-orange-100">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-full flex items-center justify-center text-4xl">
              <User2 size={50} className="text-yellow-950" />
            </div>
          )}
        </div>

        <h2 className="text-3xl font-bold mt-5 text-yellow-950">{user.name}</h2>
        <p className="text-gray-600 mt-2">{user.email}</p>

        <Link
          href="/update-profile"
          className="btn btn-warning rounded-full mt-6"
        >
          Update Information
        </Link>
      </div>
    </section>
  );
};

export default MyProfile;
