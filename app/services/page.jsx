import React from 'react'
import Image from 'next/image'
import '../globals.css'

import antenna from './../../public/images/antenna.jpg'
import construction from './../../public/images/construction.jpg'
import system from './../../public/images/system.jpg'
import cablage from './../../public/images/smart-cablage.jpg'

export default function Page() {
  return (
    <main className='flex flex-col'>
      <div className='services h-[25rem] flex justify-center items-center'>
        <h1 className='text-white font-extrabold  text-5xl text-center'>Nos Services</h1>
      </div>

      <p className='text-white w-auto mx-3 self-center mt-10 text-[20px] md:w-[67rem] md:mx-0'>Nous vous offrons une gamme de service complète et varier selon vos besoins. Nos agents ont pu acquérir
        de l'experience et la competence pour étudier, planifier, estimer le budget nécessaire a de telles opérations et ainsi
        vous transmettre un dévis dans les plus brefs délais
      </p>

      <div className='flex flex-wrap gap-5 mt-[100px] justify-center'>
        <Image width={350} height={''} className='object-cover h-[300px] border border-black p-1 bg-white rounded-[10px] cursor-pointer hover:brightness-50 duration-200' src={antenna} alt='ANTENNA' />
        <Image width={350} height={''} className='object-cover h-[300px] border border-black p-1 bg-white rounded-[10px] cursor-pointer hover:brightness-50 duration-200' src={system} alt='SYSTEM-NETWORK' />
        <Image width={350} height={''} className='object-cover h-[300px] border border-black p-1 bg-white rounded-[10px] cursor-pointer hover:brightness-50 duration-200' src={cablage} alt='CONSTRUCTION' />
      </div>

      <div className='flex flex-wrap gap-10 justify-center mt-10'>
        <div className='flex flex-col gap-2 text-white text-xl w-[20rem] '>
          <h1 className='text-3xl text-gray-400 border border-transparent p-5 h-[120px] flex justify-center items-center bg-black font-bold rounded-[5px]'>Distribution & Maintenance</h1>
          <p className='text-gray-300 flex justify-center items-center h-[90px] font-bold bg-[#272727ac] px-2 rounded-[5px]'>Ondulateur, Informatique & Vidéo Surveillance</p>
          <p className='bg-black leading-8 h-[480px] flex justify-center items-center font-semibold p-5 text-white rounded-[5px]'>Couvrant l'ensemble des gammes de machines allant du PC au DataCenter, ainsi que des onduleurs,
            nous assurons la vente, la maintenance, et le support technologique pour tous les produits. Envol
            Technology facilite la tâche des responsables des parcs informatiques en collaborant à la mise en
            place de pratiques informatiques normalisées.
          </p>
        </div>

        <div className='flex flex-col gap-2 text-white text-xl w-[20rem] '>
          <h1 className='text-3xl text-gray-400 border border-transparent p-5 h-[120px] flex justify-center items-center bg-black font-bold rounded-[5px]'>Systèmes & Reséaux</h1>
          <p className='text-gray-300 flex justify-center items-center h-[90px] font-bold bg-[#272727ac] px-2 rounded-[5px]'>Logiciel & ERP</p>
          <p className='bg-black leading-8 h-[480px] flex justify-center items-center font-semibold p-5 text-white rounded-[5px]'>Des services personnalisés de montage, de configuration et d'installation d'équipements
            ainsi que de logiciels. Toujours en quête de positionnement futuriste, Envol innove dans le e-business par
            la mise en œuvre d'applications particulièrement adaptées aux besoins du marché africain pour les utilisateurs
            TIC.
          </p>
        </div>

        <div className='flex flex-col gap-2 text-white text-xl w-[20rem] '>
          <h1 className='text-3xl text-gray-400 border border-transparent p-5 h-[120px] flex justify-center items-center bg-black font-bold rounded-[5px]'>Câblage intelligent</h1>
          <p className='text-gray-300 flex justify-center items-center h-[90px] font-bold bg-[#272727ac] px-2 rounded-[5px]'>Telephone & Fibre</p>
          <p className='bg-black leading-8 h-[480px] font-semibold p-5 text-white rounded-[5px]'>L'offre réseaux d'Envol Technology Mali est bâtie sur son partenariat avec le leader mondial de l'industrie
            du câblage, Nexans, et permet de répondre à la demande des entreprises les plus exigeantes en matière de câblage intelligent d'immeubles.
          </p>
        </div>

      </div>
    </main>
  )
}
