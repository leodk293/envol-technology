"use client";
import React from 'react';
import '../globals.css';
import Image from 'next/image';

import phone from './../../public/icons/phone-solid.svg';
import mail from './../../public/icons/envelope-solid.svg';
import location from './../../public/icons/location-dot-solid.svg';
import { useState } from 'react';

export default function Page() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "03d4a4fa-a78b-4a84-896b-4d2ae8da040b",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setSuccess(true);
    }
  }

  return (
    <main className='flex flex-col'>

      <div className='services h-[25rem] flex justify-center items-center'>
        <h1 className='text-white font-extrabold text-5xl text-center'>Contactez Nous</h1>
      </div>

      <section className='flex flex-col mx-3 justify-center gap-10 md:flex-row md:mx-[100px]'>
        <section className='flex flex-col self-center mt-10 gap-5 text-white md:mt-0'>
          <h1 className='text-center text-3xl font-bold underline underline-offset-4 text-white'>Restons en Contact</h1>
          <div className='flex flex-row mt-5 gap-5'>
            <Image width={40} height={40} className='w-[40px] h-[40px] self-center invert object-contain' src={phone} alt='PHONE' />
            <div className='flex flex-col gap-1'>
              <p className='text-2xl font-bold'>Par mobile</p>
              <p className='font-semibold'>+223 73 65 13 14/ 20 21 18 01/ 92 10 46 54</p>
            </div>
          </div>
          <div className='flex flex-row gap-5'>
            <Image width={40} height={40} className='w-[40px] h-[40px] self-center invert object-contain' src={mail} alt='MAIL' />
            <div className='flex flex-col gap-1'>
              <p className='text-2xl font-bold'>Par e-mail</p>
              <p className='font-semibold'>Notre équipe s'occupera de vous.</p>
              <p className='font-semibold'>contact@envoltechnology.com</p>
            </div>
          </div>
          <div className='flex flex-row gap-5'>
            <Image width={40} height={40} className='w-[40px] h-[40px] self-center invert object-contain' src={location} alt='LOCATION' />
            <div className='flex flex-col gap-1'>
              <p className='text-2xl font-bold'>Sur place</p>
              <p className='font-semibold'>Rendez-vous directement dans nos locaux ou nos agents s'efforceront de vous répondre.</p>
              <p className='font-semibold'>42 rue 837, Zone Industrielle <span>TSF</span>, Bamako, Mali</p>
            </div>
          </div>
        </section>
        <form
          className='flex flex-col h-[520px] gap-4 mt-[100px] border border-transparent p-4 rounded-[10px] shadow bg-[#00000068]'
          onSubmit={handleSubmit}
        >
          <label className='text-white translate-y-2 font-semibold' htmlFor="name">Entrez Votre Nom : </label>
          <input
            className='w-auto outline-none border text-[20px] border-transparent bg-[#6b6b6b25] shadow p-3 text-white rounded-[5px] placeholder:text-[#f1f1f1] md:w-[50rem]'
            placeholder='Enter Your Name...'
            id='name' type="text"
            name="name" required
          />
          <label className='text-white mt-5 translate-y-2 font-semibold' htmlFor="mail">Entrez Votre Email : </label>
          <input
            className='w-auto outline-none border text-[20px] border-transparent bg-[#6b6b6b25] shadow p-3 text-white rounded-[5px] placeholder:text-[#f1f1f1]'
            placeholder='Enter Your email...'
            type="email"
            id='mail'
            name="email" required
          />
          <label className='text-white translate-y-[0px] mt-5 font-semibold' htmlFor="msg">Votre Message : </label>
          <textarea
            className='outline-none translate-y-[0px] border text-[20px] h-[15rem] border-transparent bg-[#6b6b6b25] p-3 text-white rounded-[5px] placeholder:text-[#f1f1f1]'
            placeholder='Message here...'
            id='msg' name="message"
            required
          ></textarea>
          <button
            className='self-start p-2 text-[20px] border border-transparent w-[180px] font-bold shadow bg-[#202020] text-white cursor-pointer rounded-[5px] hover:bg-[#4a4a4a] duration-500 hover:translate-x-2 duration-300'
            type="submit">Envoyer</button>
          {(success=== true) && <p className='text-green-600'>Message envoyé avec succès</p>}
        </form>
      </section>
    </main>
  );
}
