import Link from "next/link";

const GradientButton = ({ content }: { content: string }) => {
  return (
    <>
      <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4ade80_0%,#38bdf8_50%,#4ade80_100%)]" />
        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-sm font-medium text-gray-50 backdrop-blur-3xl">
          <Link
            href="/signin"
            className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-r from-green-300 to-blue-200 text-slate-950 hover:from-green-400 hover:to-blue-300 transition-all duration-300 sm:w-auto py-4 px-10 font-satoshi"
          >
            {content}
          </Link>
        </div>
      </span>
    </>
  );
};

export { GradientButton };
