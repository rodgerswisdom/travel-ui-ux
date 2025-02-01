import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-content padding-container relative -z-30 py-5"> 
        <Link href="/">
            <Image src="../hilink-logo.svg" alt="logo" width={100} height={100} />
        </Link>
    </nav>         
  )
}

export default Navbar