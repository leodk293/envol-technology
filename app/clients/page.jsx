import React from 'react'
import Image from 'next/image'
import '../globals.css'

export default function Page() {
  return (
    <main className='flex flex-col items-center'>
      <div className='services h-[25rem] flex justify-center items-center'>
        <h1 className='text-white font-extrabold  text-5xl text-center'>Nos Clients</h1>
      </div>

      <div className='flex flex-col items-center w-auto text-white mx-5 mt-[100px] md:w-[70%] mx-0'>
        <p className='text-[20px] leading-7'>En tant que partenaire agrée NEXANS (ex Alcatel Cabling System), notre expertise
          de plus de 27 ans en matière de câblage intelligent d&#39;immeubles nous a valu la
          confiance des Organismes et Entreprises tels que <span className='font-bold'>'la BCEAO'</span>, <span className='font-bold'>'Bank Of Africa'</span>,
          <span className='font-bold'>'AGETIPE'</span>, <span className='font-bold'>'BMCD'</span> et bien d'aures .
        </p>

        <div className='flex flex-wrap mt-10 justify-center gap-5'>

          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.149)" }} className='flex flex-col w-[20rem] gap-5 rounded-[10px] border border-[#f2f2f2] px-4 py-2 cursor-pointer hover:scale-105 duration-300 hover:opacity-80 duration-300'>
            <h1 className='text-zinc-400 text-xl font-bold'>Banques et assurances</h1>
            <li>B.C.E.A.O</li>
            <li>B.D.M</li>
            <li>B.H.M</li>
            <li>B.O.A</li>
            <li>B.I.M</li>
            <li>C.N.A.R</li>
          </div>

          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.149)" }} className='flex flex-col w-[20rem] gap-5 rounded-[10px] border border-[#f2f2f2] px-4 py-2 cursor-pointer hover:scale-105 duration-300 hover:opacity-80 duration-300'>
            <h1 className='text-zinc-400 text-xl font-bold'>Les sociétés industrielles et commerciales</h1>
            <li>E.D.M</li>
            <li>C.M.D.T</li>
            <li>SONATAM</li>
            <li>MALITEL</li>
            <li>TOLMALI</li>
          </div>

          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.149)" }} className='flex flex-col w-[20rem] gap-5 rounded-[10px] border border-[#f2f2f2] px-4 py-2 cursor-pointer hover:scale-105 duration-300 hover:opacity-80 duration-300'>
            <h1 className='text-zinc-400 text-xl font-bold'>Administration publique</h1>
            <li>Ministère des Finances</li>
            <li>Délégation Générale aux Elections</li>
            <li>Mission Informatique</li>
            <li>Ministère de la Santé</li>
          </div>

        </div>
        <div className='flex flex-col gap-5 mt-[100px]'>
          <h1 className='text-5xl text-center font-extrabold'>NOTRE PARTENAIRE <span className='text-orange-700'>NEXANS</span></h1>
          <p className='leading-8 text-[18px]'>Nexans, leader mondial de l&#39;industrie du câble, propose une large gamme de solutions câbles cuivre
            et fibre optique pour les marchés d&#39;infrastructure, de l&#39;industrie et du bâtiment. Les câbles et
            systèmes de câblage de Nexans sont présents dans notre vie quotidienne depuis les
            télécommunications jusqu&#39;aux réseaux d&#39;énergie, l&#39;aéronautique, l&#39;espace, la construction,
            l&#39;automobile, le ferroviaire, la pétrochimie, les applications médicales, etc.
            Avec une présence industrielle dans 29 pays et des activités commerciales dans 65 pays, Nexans
            emploie 20 000 personnes avec un chiffre d&#39;affaires de 4,9 milliards d&#39;euros pour 2014. Nexans est
            coté à la Bourse de Paris.
          </p>
          <p className='text-xl font-semibold text-gray-400'>Pour plus d'informations, cliquez ici ➡️: <span className='text-orange-700'><a className='hover:text-orange-500 duration-300' target='_blank' href="https://www.nexans.com/">www.nexans.com</a></span></p>
        </div>
      </div>
    </main>
  )
}
