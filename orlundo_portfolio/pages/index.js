import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import Image from "next/image";
import orlundo from "../public/new_orlundo.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkmode, setDarkMode] = useState(false);
  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Orlundo Portfolio</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500;600&family=Roboto&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-roboto">Hello</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkmode)} className="cursor-pointer text-2xl" />
          </li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
          </li>
        </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Orlundo Hubbard</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">I'm a software engineer based out of Austin, Texas with experience in building production ready projects. I've worked with technologies such as JavaScript (React, NextJs), SQL, and Python. I also have a strong background in working with team collaboration tools such as Figma, Jira and Github. </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 height-80 mt-20 overflow-hidden">
          <Image src={orlundo} />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">I am an engineer and freelancer looking to help artist build out their portfolio. I've built projects for 
           <span className="text-teal-500"> startups</span> in an agency setting and I'm very comfortable in working in fast pace environments that require a lot of change.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={design} width={100} height={100} />
            <h3 text-lg font-medium pt-8 pb-2>Beautiful designs</h3>
            <p className="py-2">Creating beautiful designs using modern design theory</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={code} width={100} height={100} />
            <h3 text-lg font-medium pt-8 pb-2>Beautiful designs</h3>
            <p className="py-2">Creating beautiful designs using modern design theory</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={consulting} width={100} height={100} />
            <h3 text-lg font-medium pt-8 pb-2>Beautiful designs</h3>
            <p className="py-2">Creating beautiful designs using modern design theory</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">I am an engineer and freelancer looking to help artist build out their portfolio. I've built projects for 
           <span className="text-teal-500"> startups</span> in an agency setting and I'm very comfortable in working in fast pace environments that require a lot of change.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
            <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
            <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
            <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
            <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div>
            <Image src={web5} />
            </div>
            <div className="basis-1/3 flex-1">
            <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
    
  )
  }
  