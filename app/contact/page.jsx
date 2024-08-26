"use client";
import React, { useState } from 'react';
import '../globals.css';

export default function Page() {
  const [success, setSuccess] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dd48860e-b3af-4ef5-b3dc-8ad93c545f95"); 
    formData.append("recipient", "contact@envoltechnology.com");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        console.log(result);
        setSuccess(true);
      } else {
        console.error(result);
        setSuccess(false);
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      setSuccess(false);
    }
  }

  return (
    <main className='flex flex-col items-center'>
      <div className='services h-[25rem] flex justify-center items-center'>
        <h1 className='text-white font-extrabold text-5xl text-center'>Contactez Nous</h1>
      </div>

      <form className='flex flex-col gap-4 mt-[100px] border border-transparent p-4 rounded-[10px] shadow bg-[#00000018]' onSubmit={handleSubmit}>
        <label className='text-white translate-y-3' htmlFor="name">Entrez Votre Nom : </label>
        <input className='w-auto outline-none border text-[20px] border-transparent bg-[#00000032] shadow p-3 text-white rounded-[5px] placeholder:text-[#f1f1f1] md:w-[50rem]' placeholder='Enter Your Name...' id='name' type="text" name="name" required />

        <label className='text-white mt-5 translate-y-3' htmlFor="mail">Entrez Votre Email : </label>
        <input className='w-auto outline-none border text-[20px] border-transparent bg-[#00000032] shadow p-3 text-white rounded-[5px] placeholder:text-[#f1f1f1]' placeholder='Enter Your email...' type="email" id='mail' name="email" required />

        <label className='text-white mt-5 translate-y-3' htmlFor="msg">Votre Message : </label>
        <textarea className='outline-none border text-[20px] h-[15rem] border-transparent bg-[#00000032] p-3 text-white rounded-[5px] placeholder:text-[#f1f1f1]' placeholder='Message here...' id='msg' name="message" required></textarea>

        <div className='flex flex-row gap-5'>
          <button className='self-start p-2 text-[20px] border border-transparent w-[180px] font-bold shadow bg-[#0b0b0b] text-white cursor-pointer rounded-[5px] hover:bg-[#111] duration-500 hover:translate-x-2 duration-300' type="submit">Envoyer</button>
          {success === true && <p className='self-center text-green-700 font-bold'>Message successfully sent</p>}
          {success === false && <p className='self-center text-red-700 font-bold'>There was an error sending the message</p>}
        </div>
      </form>
    </main>
  );
}
