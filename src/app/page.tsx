import { Scene } from "@/components/Scene";
import SplineModel from "@/components/SplineModel";

import Image from "next/image";
import { MotionH1 } from "@/components/MotionH1";
import { MotionDiv } from "@/components/MotionDiv";
import TypingAnimation from "@/components/TypingAnimation";
import HeroMarquee from "@/components/HeroMarquee";

export default function Home() {
  // const camera = new THREE.PerspectiveCamera(10, 400/400, 0.1, 1000);
  // camera.position.z = 13;
  // const scene = new THREE.Scene();
  // let card3D;
  // const loader = new Loader

  return (
    <>
      <main>
        <section className="p-4 h-dvh flex flex-col gap-6 justify-center items-center ">
          <MotionDiv initial={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }} animate={{ opacity: 1, y: 0 }} className="relative">
            <h1 className="text-6xl max-w-[18ch] z-10 text-center">
              The fastest <span className="text-6xl">chat, now with </span> <span className="text-6xl font-bold text-purple-700">AI</span>
            </h1>
            <MotionDiv
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6, ease: "easeIn" }}
              animate={{ opacity: 1 }}
              id="scene-container"
              className="z-0 pointer-events-none absolute -right-2 -bottom-14 sm:right-16 sm:-bottom-24 aspect-square h-[120px] sm:h-[180px] -rotate-90"
            >
              <Scene />
            </MotionDiv>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
            animate={{ opacity: 1 }}
            className="group max-w-[600px] backdrop-blur-[2px] w-full p-4 z-10 min-h-fit relative group duration-150 ease-in-out transition-all transform border-t hover:scale-105 hover:border-opacity-70 hover:bg-gray-900 hover:bg-clip-padding backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 sm:h-[250px] flex flex-col gap-10 justify-center items-center rounded-3xl overflow-hidden hover:border border-slate-400 border-opacity-50"
          >
            <h1 className="text-4xl text-center max-w-[10ch] z-10">Start today!</h1>
            <h5 className="text-center">Create your account and see what AI can do for your company now</h5>
            <div className="duration-500 group-hover:scale-110 group-hover:opacity-20 group-hover:from-indigo-400 absolute bg-gradient-to-br from-cyan-300 to-transparent opacity-10 blur-lg left-0 top-0 rounded-full w-[200px] h-[166px]" />
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500 to-transparent opacity-10 blur-lg rounded-full top-0 w-[100px] h-[33px]" />
            <div className=" duration-500 group-hover:scale-110 group-hover:opacity-60 absolute inset-0 bg-gradient-to-bl from-purple-500 to-transp  arent opacity-50 blur-lg rounded-full top-0 right-0 w-[90%]] h-[15px]" />
            <div className="duration-500 group-hover:scale-110 group-hover:opacity-25 group-hover:inset-6 absolute inset-0 bg-gradient-to-br from-yellow-500 to-transparent opacity-15 blur-lg rounded-full top-5 left-10 w-[100px] h-[78px]" />

            <div className="w-full sm:w-fit z-10 flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full w-full sm:w-fit border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
                Sign in
              </a>
              <a
                className="rounded-full w-full sm:w-fit border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                See pricing
              </a>
            </div>
          </MotionDiv>
          {/* <div id="scene-container" className="z-0 pointer-events-none absolute -right-10 -bottom-5 w-[180px] h-[180px]">
              <Scene />
            </div> */}
          <HeroMarquee />
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
}
