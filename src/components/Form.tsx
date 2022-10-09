import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <main
      className="flex-1 flex flex-col items-center justify-center bg-slate-100 py-24 lg:py-0"
      data-testid="form-element"
    >
      <div className="text-left w-4/5 xl:w-[70%]">
        <h1 className="text-sky-700 font-bold text-3xl">Welcome Back</h1>
        <h2 className="text-gray-500 font-bold text-2xl">
          Sign in to continue
        </h2>
        <form
          className="shadow-lg p-8 bg-white mt-10 "
        >
          <input
            aria-label="Email"
            type="email"
            value={email}
            className="
            block
            w-full
            px-5
            py-3
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            placeholder="Email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <div className="mt-8 space-y-4 ">
            <input
              value={password}
              type="password"
              className="
            block
            w-full
            px-5
            py-3
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              placeholder="Password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <p className="text-sky-700 font-semibold cursor-pointer text-sm">
              Forgot password?
            </p>
          </div>
          <div className="flex justify-between flex-col mt-8 lg:flex-row items-start lg:items-center space-y-8">
            <div className="flex gap-2 flex-row">
              <p className="text-gray-500 font-semibold">New User?</p>
              <p className="text-sky-700 font-semibold cursor-pointer">
                Create account
              </p>
            </div>
            <button
              className="px-5 py-3 text-white font-semibold bg-sky-700 rounded-lg text-sm lg:text-base"
              disabled={!email || !password}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
