import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-content padding-container relative -z-30 py-5"> 
        <Link href="/">
            <Image src="../hilink-logo.svg" alt="logo" width={74} height={29} />
            <ul className='hidden h-full gap-12 lg:flex'></ul>
        </Link>
    </nav>         
  )
}

export default Navbar