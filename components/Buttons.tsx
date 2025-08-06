import Link from "next/link";

const GradientButton = ({ content }: { content: string }) => {
  return (
    <>
      <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#1d4ed8_50%,#3b82f6_100%)]" />
        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white text-sm font-medium text-gray-900 backdrop-blur-3xl">
          <Link
            href="/signin"
            className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 sm:w-auto py-4 px-10 font-satoshi"
          >
            {content}
          </Link>
        </div>
      </span>
    </>
  );
};

export { GradientButton };