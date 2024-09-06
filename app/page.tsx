import Image from "next/image";
import {roboto700} from "./fonts/roboto"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 text-lg top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span className={`${roboto700.className}`}>A79 <Link href={"/dashboard"} className="underline">Tabular Agent </Link></span>

        </p>
         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
         
            By{" "}
            Aditya

        </div>
        <p className="fixed left-0 text-lg top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span className={`${roboto700.className}`}>A79 <Link href={"/folder"} className="underline">File Agent</Link></span>

        </p>
       
      </div>

      <div className="relative text-white">
        <Image
          className="relative  "
          src="/a79.png"
          alt="a79"
          width={180}
          height={37}
          priority
        />
      </div>
      <div></div>
    </main>
  );
}
