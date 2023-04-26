import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='flex flex-col justify-center items-center space-y-6 page'>
      <h1 className='text-3xl font-bold'>Sobre o projeto</h1>
      
      <div className='w-1/3'>
        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    
      <Image width={300} height={300} alt='Image about' src='/images/charizard.png' />
    </div>
  )
}
