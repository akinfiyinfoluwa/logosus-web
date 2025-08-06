import Link from "next/link";
import { PieChartIcon } from "lucide-react";
import { SignUpForm } from "./signup-form";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-full items-center justify-center px-4 sm:px-6 lg:w-1/2 lg:px-8">
        <div className="w-full max-w-sm">
          <Link href="/" className="flex items-center mb-8">
            <PieChartIcon className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold flex items-center">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Finance
              </span>
              <span className="text-gray-900">Flow</span>
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">
              Create your account
            </h1>
            <p className="mt-2 text-gray-600">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent hover:opacity-80"
              >
                Sign in
              </Link>{" "}
              to your account.
            </p>
          </div>

          <SignUpForm />
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-100/20 to-blue-200/20">
          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>
      </div>
    </div>
  );
}