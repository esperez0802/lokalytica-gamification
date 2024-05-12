import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function LeaderboardPage() {
  const session = await getServerSession(authOptions);

  const userData = [
    {
      userId: "664026cda81b28b48ee7db29",
      name: "Emilio Perez",
      powerConsumption: [50.2, 48.6, 47.8]
    },
    {
      userId: "66402d80a81b28b48ee7db31",
      name: "John",
      powerConsumption: [55.0, 53.2, 52.5]
    },
    {
      userId: "66405c2d96710f7915ec7934",
      name: "Amy",
      powerConsumption: [45.6, 43.8, 42.7]
    },
    {
      userId: "66405df22ce6b014a0850567",
      name: "Kyle",
      powerConsumption: [60.4, 58.9, 57.3]
    },
    {
      userId: "66405e612ce6b014a085056b",
      name: "Kate",
      powerConsumption: [49.5, 48.1, 47.4]
    }
  ];

  // Sort users by average power consumption
  userData.sort((a, b) => calculateAveragePowerConsumption(a.powerConsumption) - calculateAveragePowerConsumption(b.powerConsumption));

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
          {session && <Link href="/dashboard"><span style={{ fontWeight: 700 }} className="links">Welcome, {session?.user?.name}</span></Link>}
        </div>
      </header>
      <main style={{ textAlign: "center" }}>
        <h1>Leaderboard</h1>
        <table style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Average Power Consumption (kWh)</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user.userId}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{calculateAveragePowerConsumption(user.powerConsumption).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>  
  )
}

const calculateAveragePowerConsumption = (powerConsumption) => {
  const sum = powerConsumption.reduce((acc, val) => acc + val, 0);
  return sum / powerConsumption.length;
}
