import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='shadow py-5 bg-slate-800 mb-8 '>
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex flex-row space-x-4 items-center'>
          <span>
            <Image
              alt="Pokenext logo"
              width={30}
              height={30}
              src="/images/pokeball.png"
            />
          </span>
          <h1 className='text-white text-xl'>Pokenext</h1>
        </div>
        <div>
          <nav>
            <ul className='flex flex-row space-x-4'>
              <li className='text-white p-1 transition border-b-2  border-solid border-transparent hover:border-white'>
                <Link href='/' className=''>
                  Home
                </Link>
              </li>
              <li className='text-white p-1 transition border-b-2 border-solid border-transparent hover:border-white'>
                <Link href='/about' className=''>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
