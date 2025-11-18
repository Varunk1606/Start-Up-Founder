import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-[44vh] gap-5 px-2 md:px-0">
      <div className="font-bold text-3xl md:text-5xl text-white flex justify-center items-center">Start-Up Funder <span><img width={45} src="/icons/logo.png" alt="" /></span></div>
      <p className="text-white text-center">A crowdfunding platform for creators.Get funded from your fans and followers.Start now! </p>
      <div className="">
        <Link href={"/login"}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        </Link >
        <Link href={"/about"}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </Link>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white text-center container mx-auto px-10 mb-10">
      <h2 className="font-bold text-3xl m-8">Explore Our Features</h2>
      <div className="flex gap-5 justify-around py-5">
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2" width={90} src="/icons/man.gif" alt="" />
          <p className="font-bold text-center">Launch Your Idea</p>
          <p className="text-center">Start your project with instant funding.</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2" width={90} src="/icons/coin.gif" alt="" />
          <p className="font-bold text-center">Secure Investments</p>
          <p className="text-center">Smart funding for bold founders.</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2" width={90} src="/icons/group.gif" alt="" />
          <p className="font-bold text-center">Collaborate & Grow</p>
          <p className="text-center">Build together. Grow together.</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white text-center container mx-auto px-10 mb-10">
      <h2 className="font-bold text-3xl m-8">Learn More About Us</h2>
      <div className="flex justify-center items-center w-full">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/677ZtSMr4-4?si=Knqn2On9b-i5liF2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
    </> 
  );
}
