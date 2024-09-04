import React from 'react'

import huawei from './../../public/icons/Huawei.svg'
import alcatel from './../../public/icons/alcatel-lucent-logo.svg'
import nexans from './../../public/icons/nexans.svg'
import legrand from './../../public/icons/Legrand.svg'
import dsystems from './../../public/icons/dassault-systemes-logo.svg'
import dell from './../../public/icons/Dell.png'

import Image from 'next/image'
import '../globals.css'

export default function Page() {
    return (
        <main className='flex flex-col items-center'>
            <div className='services h-[25rem] flex justify-center items-center'>
                <h1 className='text-white font-extrabold  text-5xl text-center'>Nos Partenaires</h1>
            </div>

            <div className='w-auto mt-10 mx-3 flex flex-col items-center gap-5 md:mx-0'>
                <p className='text-white leading-7 text-[20px] md:w-[60rem]'>En tant que société régionale, nous nous attelons depuis notre création à participer activement
                    au développement de la zone Afrique de l'Ouest à travers nos partenariats solides avec des
                    éditeurs de renom, tous à la pointe dans leurs domaines, ainsi qu'avec de grands spécialistes
                    et multinationales très confortablement référencés.
                </p>
                <p className='text-white mt-[90px] self-center font-bold uppercase text-2xl md:text-4xl'>Plaisir de travailler avec eux :</p>

                <div className="flex flex-wrap justify-center gap-4 w-auto md:w-[70rem] md:grid grid-cols-3">
                    <div className='flex flex-col items-center gap-1 border border-transparent rounded-[10px] bg-white p-1'>
                        <Image width={200} height={200} className="w-[200px] h-[200px] object-contain mx-auto" src={huawei} alt="HUAWEI" />
                        <a className='border border-transparent bg-slate-300 px-5 py-2 rounded-[5px] font-bold text-zinc-600 text-[20px] hover:bg-slate-200 duration-300' href="https://www.huawei.com/en/" target='_blank'>More infos</a>
                    </div>

                    <div className='flex flex-col items-center gap-1 border border-transparent rounded-[10px] bg-white p-1'>
                        <Image width={200} height={200} className="w-[200px] h-[200px] object-contain mx-auto" src={alcatel} alt="ALCATEL" />
                        <a className='border border-transparent bg-slate-300 px-5 py-2 rounded-[5px] font-bold text-zinc-600 text-[20px] hover:bg-slate-200 duration-300' href="https://www.al-enterprise.com/" target='_blank'>More infos</a>
                    </div>

                    <div className='flex flex-col items-center gap-1 border border-transparent rounded-[10px] bg-white p-1'>
                        <Image width={200} height={200} className="w-[200px] h-[200px] object-contain mx-auto" src={dell} alt="DELL" />
                        <a className='border border-transparent bg-slate-300 px-5 py-2 rounded-[5px] font-bold text-zinc-600 text-[20px] hover:bg-slate-200 duration-300' href="https://www.dell.com/en-uk" target='_blank'>More infos</a>
                    </div>

                    <div className='flex flex-col items-center gap-1 border border-transparent rounded-[10px] bg-white p-1'>
                        <Image width={200} height={200} className="w-[200px] h-[200px] object-contain mx-auto" src={legrand} alt="LEGRAND" />
                        <a className='border border-transparent bg-slate-300 px-5 py-2 rounded-[5px] font-bold text-zinc-600 text-[20px] hover:bg-slate-200 duration-300' href="https://www.legrand.com/en/landing" target='_blank'>More infos</a>
                    </div>

                    <div className='flex flex-col items-center gap-1 border border-transparent rounded-[10px] bg-white p-1'>
                        <Image width={200} height={200} className="w-[200px] h-[200px] object-contain mx-auto" src={nexans} alt="NEXANS" />
                        <a className='border border-transparent bg-slate-300 px-5 py-2 rounded-[5px] font-bold text-zinc-600 text-[20px] hover:bg-slate-200 duration-300' href="https://www.nexans.com/" target='_blank'>More infos</a>
                    </div>

                    <div className='flex flex-col items-center gap-1 border border-transparent rounded-[10px] bg-white p-1'>
                        <Image width={200} height={200} className="w-[200px] h-[200px] object-contain mx-auto" src={dsystems} alt="DASSAULT SYSTEMES" />
                        <a className='border border-transparent bg-slate-300 px-5 py-2 rounded-[5px] font-bold text-zinc-600 text-[20px] hover:bg-slate-200 duration-300' href="https://www.3ds.com/" target='_blank'>More infos</a>
                    </div>

                </div>

            </div>

        </main>
    )
}
