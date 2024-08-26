import React from 'react'
import Image from 'next/image'
import '../globals.css'

import antenna from './../../public/images/antenna.jpg'
import building from './../../public/images/building.jpg'
import construction from './../../public/images/construction.jpg'

export default function Page() {
  return (
    <main>
      <div className='services h-[25rem] flex justify-center items-center'>
        <h1 className='text-white font-extrabold  text-5xl text-center'>Nos Services</h1>
      </div>

      <div className='flex flex-wrap gap-5 mt-[100px] justify-center'>
        <Image width={350} height={''} className='object-cover h-[300px] rounded-[10px] cursor-pointer hover:brightness-50 duration-200' src={antenna} alt='ANTENNA' />
        <Image width={350} height={''} className='object-cover h-[300px] rounded-[10px] cursor-pointer hover:brightness-50 duration-200' src={building} alt='BUILDING' />
        <Image width={350} height={''} className='object-cover h-[300px] rounded-[10px] cursor-pointer hover:brightness-50 duration-200' src={construction} alt='CONSTRUCTION' />
      </div>

      <div className='flex flex-wrap gap-10 justify-center mt-10'>
        <div className='flex flex-col gap-5 text-white text-xl w-[20rem] '>
          <h1 className='text-2xl underline underline-offset-8 font-bold'>Service 1 :</h1>
          <li>Distribution et Maintenance</li>
          <li>Systèmes et réseaux</li>
          <li>Cablage Intelligent</li>
          <li>Développement de solutions bancaires</li>
        </div>

        <div className='flex flex-col gap-5 text-white text-xl w-[20rem]'>
          <h1 className='text-2xl font-bold underline underline-offset-8'>Service 2 :</h1>
          <li>Distribution, Installation et maintenance de matériels de télécommunications et d’ Energie</li>
          <li>Etudes - Ingénierie - Consultation dans les domaines des télécommunications et de l’Energie</li>
        </div>

        <div className='flex flex-col gap-5 text-white text-xl w-[20rem]'>
          <h1 className='text-2xl font-bold underline underline-offset-8'>Service 3 :</h1>
          <li>Fournisseur de solutions Télécoms et internet</li>
        </div>

      </div>
    </main>
  )
}
