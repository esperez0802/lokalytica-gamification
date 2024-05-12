import Image from 'next/image'
import Logo from '../public/logo.png'
import Link from 'next/link'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Head from 'next/head';

export default async function LeaderboardPage() {
  const session = await getServerSession(authOptions);

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
          <Link href="/leaderboard" className="currentPage">Leaderboard</Link>
          {!session && <Link href="/login" className="links">Login</Link>}
          {session && <Link href="/dashboard"><span style = {{ fontWeight: 700}} className="links">Welcome, {session?.user?.name}</span></Link>}
        </div>
      </header>
    </div>  
  )
}