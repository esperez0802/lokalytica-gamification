import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image'
import Logo from '../public/logo.png'

export default function RegisterForm() {
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
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-yellow-500">
          <h1 className="text-xl font-bold my-4">Register</h1>
        
          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="bg-yellow-500 text-white font-bold cursor-pointer px-6 py-2">
              Register
            </button>

            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            Error Message 
            </div>

            <Link className="text-sm mt-3 text-right" href={'/login'}>
              Already have an account? <span className="underline">
                Login</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}