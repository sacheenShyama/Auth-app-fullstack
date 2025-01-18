import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full bg-white rounded shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
          Log In
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
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border-2 outline-none border-gray-300 focus:border-blue-400 rounded w-full p-2"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
            </div>
            <Link
              href="/forgot-password"
              className="font-medium text-blue-600 underline "
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="rounded p-2 w-full text-white bg-blue-500 hover:bg-blue-600"
          >
            Sign In
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-blue-600 underline "
            >
              Sign up
            </Link>
          </p>
          <div className="w-full ">
            <p className="text-gray-500">Or continue with</p>
            <button className="w-1/2 rounded shadow bg-slate-200 p-1 text-white">
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
