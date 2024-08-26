import React from 'react'
import logo from '../public/images/ENVOL.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-10 border border-transparent bg-black p-10 w-full position-relative bottom-0'>
      <div className='flex flex-wrap justify-center gap-5'>
        <h1 className=' text-zinc-400 text-5xl self-center text-center font-extrabold'>Envol Technology</h1>
        <Image width={200} height={200} className=' object-contain self-center invert' src={logo} alt='LOGO' />
      </div>

      <div className='flex flex-wrap text-white gap-10 pt-10'>
        <div className='flex flex-col gap-3 text-white'>
          <h1 className='text-2xl font-bold underline underline-offset-4'>Contacts</h1>
          <p>Tel : +223 20 21 18 01</p>
          <p>Fax : +223 20 21 61 07</p>
          <p>Mail : contact@envoltechnology.com</p>
        </div>

        <span className='hidden md:flex h-[15rem] w-[1px] bg-white'></span>

        <div className='flex flex-col gap-5 text-white'>
          <h1 className='text-2xl font-bold underline underline-offset-4'>Adresse</h1>
          <p>Zone Industrielle TSF. Rue 837, Porte 42,<br /> Bamako Mali | B.P. 854</p>
        </div>

        <span className='hidden md:flex h-[15rem] w-[1px] bg-white'></span>

        <div className='flex flex-col gap-5 text-white'>
          <h1 className='text-2xl font-bold underline underline-offset-4'>Les Horaires</h1>
          <div className='flex flex-col'>
            <p>Lundi : 8H-17H ✅</p>
            <p>Mardi : 8H-17H ✅</p>
            <p>Mercrei : 8H-17H ✅</p>
            <p>Jeudi : 8H-17H ✅</p>
            <p>Vendredi : 8H-17H ✅</p>
            <p>Samedi : Fermé ❌</p>
            <p>Dimanche : Fermé ❌</p>
          </div>
        </div>

      </div>

    </footer>
  )
}
