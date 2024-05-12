"use client";

import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image'
import Logo from '../public/logo.png'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {

  const {data:session} = useSession();

  return (
    <div>
      <Head>
        <title>Lokalytica</title>
      </Head>
      <header className="header">
        <div className="logo">
          <Image src={Logo} alt="Lokalytica Logo"/>
        </div>
        <div>  
          <Link href="/" className="links">Home</Link>
          <Link href="/about" className="links">About</Link>
          <Link href="/leaderboard" className="links">Leaderboard</Link>
          <Link href="/dashboard"><span style = {{ fontWeight: 700}} className="currentPage">Welcome, {session?.user?.name}</span></Link>
        </div>
      </header>
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
          <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            Email: <span className="font-bold">{session?.user?.email}</span>
          </div>
          <button onClick={() => signOut()} className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
            Log Out
          </button>
          <button /*onClick={}*/ className="bg-yellow-500 text-white font-bold px-6 py-2 mt-3">
            Generate Challenge
          </button>
        </div>
      </div>
    </div>
  );
}