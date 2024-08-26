import React from 'react'
import '../globals.css'
import Image from 'next/image'
import maintenance from './../../public/images/maintenance.jpg'
import cablage from './../../public/images/cablage.jpg'
import sysReseau from './../../public/images/systeme-reseau.jpg'

export default function Page() {
  return (
    <main className='text-white flex flex-col items-center'>
      <div className='about h-[25rem] flex justify-center items-center'>
        <h1 className='text-center text-5xl font-extrabold '>Sur nous</h1>
      </div>
      <div className='flex flex-col items-center gap-2 mt-[5rem] w-auto mx-3 md:w-[60rem]'>
        <p className='text-[20px]'>Créé en 1987, anciennement dénommé le Groupe Malien d'Informatique (GMI S.A.), Envol Technology (Mali)
          dont le siège est à Bamako est une société de :
        </p>

        <div className='flex flex-wrap justify-center mt-10 gap-5'>
          <div className='border border-transparent text-xl bg-black p-5 w-[25rem] h-[10rem] flex gap-5 justify-center items-center text-[#f1f1f1] cursor-pointer rounded-[5px] hover:translate-x-1 duration-300'>
            <p className='flex justify-center items-center p-5 text-4xl rounded-[50%] bg-stone-900 w-[9rem]'>1</p>
            <p className='w-[25rem]'>Distribution des équipements & Solutions dans le domaine du TIC</p>
          </div>
          <div className='border border-transparent text-xl bg-black p-5 w-[25rem] h-[10rem] flex gap-5 justify-center items-center text-[#f1f1f1] cursor-pointer rounded-[5px] hover:translate-x-1 duration-300'>
            <p className='flex justify-center items-center p-5 text-4xl rounded-[50%] bg-stone-900 w-[9rem]'>2</p>
            <p className='w-[25rem]'>Intégrateur Réseaux & Télécoms</p>
          </div>
          <div className='border border-transparent text-xl bg-black p-5 w-[25rem] h-[10rem] flex gap-5 justify-center items-center text-[#f1f1f1] cursor-pointer rounded-[5px] hover:translate-x-1 duration-300'>
            <p className='flex justify-center items-center p-5 text-4xl rounded-[50%] bg-stone-900 w-[9rem]'>3</p>
            <p className='w-[25rem]'>Technologies de l’information et de la communication</p>
          </div>
          <div className='border border-transparent text-xl bg-black p-5 w-[25rem] h-[10rem] flex gap-5 justify-center items-center text-[#f1f1f1] cursor-pointer rounded-[5px] hover:translate-x-1 duration-300'>
            <p className='flex justify-center items-center p-5 text-4xl rounded-[50%] bg-stone-900 w-[9rem]'>4</p>
            <p className='w-[25rem]'>Fourniture et intégration de solutions d’infrastructure</p>
          </div>
        </div>

      </div>

      <div className='flex flex-wrap mt-[100px] justify-center gap-5'>

        <div className='flex flex-col items-center target cursor-pointer'>
          <Image width={350} height={''} className='object-cover border border-transparent p-[1px] bg-[#f1f1f1] h-[300px] rounded-[10px] hover:scale-105 duration-500 hover:brightness-50' src={maintenance} alt='Maintenance' />
          <p className='text-2xl font-bold name'>Distribution et Maintenance</p>
        </div>

        <div className='flex flex-col items-center target cursor-pointer'>
          <Image width={350} height={''} className='object-cover border border-transparent p-[1px] bg-[#f1f1f1] h-[300px] rounded-[10px] hover:scale-105 duration-500 hover:brightness-50' src={sysReseau} alt='systemes et reseaux' />
          <p className='text-2xl font-bold name'>Systèmes et réseaux</p>
        </div>

        <div className='flex flex-col items-center target cursor-pointer'>
          <Image width={350} height={''} className='object-cover border border-transparent p-[1px] bg-[#f1f1f1] h-[300px] rounded-[10px] hover:scale-105 duration-500 hover:brightness-50' src={cablage} alt='cablage intelligent' />
          <p className='text-2xl font-bold name'>Câblage Intelligent</p>
        </div>

      </div>
    </main>
  )
}
