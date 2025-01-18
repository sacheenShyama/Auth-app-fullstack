import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
  return (
    <div className="w-full bg-white rounded shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
          Find Your Account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border-2 outline-none border-gray-300 focus:border-blue-400 rounded w-full p-2"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              New password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border-2 outline-none border-gray-300 focus:border-blue-400 rounded w-full p-2"
            />
          </div>
          <button
            type="submit"
            className="rounded p-2 w-full text-white bg-blue-500 hover:bg-blue-600"
          >
            Find account : Reset
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-blue-600 underline "
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
