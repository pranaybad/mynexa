import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FcAbout } from 'react-icons/fc';
import { MdHomeRepairService } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { RiLoginCircleFill } from 'react-icons/ri';
import { SiGnuprivacyguard } from 'react-icons/si';


// FcAbout
// MdHomeRepairService
// RiContactsFill
// RiLoginCircleFill
// SiGnuprivacyguard

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl'>
        <div className="logo mx-5">
         <Link href={'/'}><a><Image width={200} height={40} src="/logo.svg" alt=""/></a></Link>
         
            </div>
        <div className="nav flex items-center">
            <ul className='flex items-center space-x-6 font-bold md:text-md'>
                <Link href={"/"}><a><li><FcAbout className='text-4xl'/></li></a></Link>
                <Link href={"/service"}><a><li><MdHomeRepairService className='text-4xl'/></li></a></Link>
                <Link href={"/contact"}><a><li><RiContactsFill className='text-4xl'/></li></a></Link>
                <Link href={"/login"}><a><li><RiLoginCircleFill className='text-4xl'/></li></a></Link>
                <Link href={"/signup"}><a><li><SiGnuprivacyguard className='text-4xl'/></li></a></Link>
            </ul>
        </div>

    </div>
  )
}

export default Navbar