"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";


const LoginForm = () => {
  const searchParams = useSearchParams();
const redirectPath = searchParams.get("redirect") || "/";
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await authClient.signIn.email({
      email: form.email,
      password: form.password,
    });

    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }

    toast.success("Login successful!");
    router.push(redirectPath);
    router.refresh();
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL:redirectPath ,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf4]">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
          Sign In
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full border border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full border border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button className="btn btn-warning w-full rounded-full">Login</button>
        </form>

        <div className="text-center my-5 text-gray-500 font-medium">OR</div>

        <button onClick={handleGoogleLogin}
         className="btn w-full rounded-full bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center mt-5 text-sm text-yellow-900">
          Don't have an account?{" "}
          <Link href="/register" className="text-orange-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
