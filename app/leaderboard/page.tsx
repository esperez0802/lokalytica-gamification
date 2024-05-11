import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.png'

const Leaderboard = () => {
  return (
    <header className="header">
      <div className="logo">
        <Image src={Logo} alt="Lokalytica Logo"/>
      </div>
    </header>
  )
}

export default Leaderboard