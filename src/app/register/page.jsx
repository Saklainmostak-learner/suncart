"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();

    const {data, error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
      image: form.image||undefined,
    });
  
    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    toast.success("Register successful!");
    router.push("/login");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf4]">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full border border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full border border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full border border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full border border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button className="btn btn-warning w-full rounded-full">
            Register
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-yellow-900">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
