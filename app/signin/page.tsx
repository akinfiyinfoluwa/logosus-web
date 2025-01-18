import Link from "next/link";
import { PieChartIcon } from "lucide-react";
import { SignInForm } from "./signin-form";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-full items-center justify-center px-4 sm:px-6 lg:w-1/2 lg:px-8">
        <div className="w-full max-w-sm">
          <Link href="/" className="flex items-center mb-8">
            <PieChartIcon className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold flex items-center">
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Finance
              </span>
              <span className="text-white">Flow</span>
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-white">
              Sign in to your account
            </h1>
            <p className="mt-2 text-gray-400">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent hover:opacity-80"
              >
                Sign up
              </Link>{" "}
              for a free trial.
            </p>
          </div>

          <SignInForm />
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-teal-900/20 to-emerald-900/20">
          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>
      </div>
    </div>
  );
}
