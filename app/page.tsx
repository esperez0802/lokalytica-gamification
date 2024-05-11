import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.png'
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from './api/auth/[...nextauth]/route';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lokalytica</title>
      </Head>
      <header className="header">
        <div className="logo">
          <Image src={Logo} alt="Lokalytica Logo"/>
        </div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/login">Login</Link>
        </div>
      </header>
      <main className="px-3 mt-50 h-[80vh] flex flex-col justify-center items-center">
        <div className='font-sans text-5xl font-semibold lg:text-center text-yellow-400'>
          Powering Efficiency,<br/>Empowering Tomorrow.
        </div>
        <p className='font-sans text-xl text-center mt-8'>
          Leading the way for local energy management and conservation.
        </p>
      </main>
    </div>
  )
}
