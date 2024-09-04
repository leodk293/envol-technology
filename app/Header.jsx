"use client";
import React, { useState, useEffect } from 'react';
import menuIcon from '../public/icons/menu-white.png';
import closeIcon from '../public/icons/close-white.png';
import arrow from '../public/icons/arrow-icon-dark.png';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/ENVOL.png';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        setHasMounted(true); // Indicate that the component has mounted

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!hasMounted) {
        return (
            <header className="fixed z-20 w-full flex justify-center p-5 top-0">
                <div className="hidden md:flex flex-row justify-evenly gap-[15rem] pt-5 block">
                    <Link className='self-center invert' href={'/'}>
                        <Image width={200} height={200} className='object-contain' src={logo} alt='LOGO' />
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-[30px] md:hidden">
                    <div className="flex flex-row gap-[160px] justify-between pt-5">
                        <Link className='self-center invert' href={'/'}>
                            <Image width={200} height={200} className='object-contain' src={logo} alt='LOGO' />
                        </Link>
                        <Image
                            className="w-[40px] h-[40px] cursor-pointer transition-transform duration-300 ease-in-out"
                            alt={showMenu ? 'CLOSE' : 'MENU'}
                            src={showMenu ? closeIcon : menuIcon}
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className={`fixed z-20 w-full flex justify-center p-5 top-0 transition-all duration-500 ${isDark ? 'bg-black shadow-lg h-[130px]' : 'bg-transparent h-[150px]'}`}>
            <div id="home" className="hidden md:flex flex-row justify-evenly gap-[15rem] pt-5 block">
                <Link className='self-center invert' href={'/'}>
                    <Image width={200} height={200} className='object-contain' src={logo} alt='LOGO' />
                </Link>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-row gap-[30px] text-[20px] font-bold text-[#f1f1f1] self-center border shadow-md bg-[#111] border-transparent px-5 py-4 rounded-[30px]">
                        <Link className={`${pathname === "/" ? "text-orange-800" : ""} hover:text-orange-500 duration-300`} href={"/"}>Accueil</Link>
                        <Link className={`text-capitalize ${pathname === "/about" ? "text-orange-800" : ""} hover:text-orange-500 duration-300`} href={"/about"}>À propos</Link>
                        <Link className={`${pathname === "/services" ? "text-orange-800" : ""} hover:text-orange-500 duration-300`} href={"/services"}>Services</Link>
                        <Link className={`${pathname === "/clients" ? "text-orange-800" : ""} hover:text-orange-500 duration-300`} href={"/clients"}>Nos Clients</Link>
                        <Link className={`${pathname === "/partners" ? "text-orange-800" : ""} hover:text-orange-500 duration-300`} href={"/partners"}>Nos Partenaires</Link>
                    </div>

                    <button className={`flex flex-row items-center justify-center gap-3 border border-white py-2 px-5 rounded-[30px] cursor-pointer self-center hover:translate-x-3 duration-300 ${pathname === "/contact" ? "bg-orange-900 border-transparent" : ""}`}>
                        <Link className="text-white text-[20px]" href="/contact">Contact</Link>
                        <Image className="w-[15px] object-cover" alt="ARROW" src={arrow} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center gap-[30px] md:hidden">
                <div className="flex flex-row gap-[160px] justify-between pt-5">
                    <Link className='self-center invert' href={'/'}>
                        <Image width={200} height={200} className='object-contain' src={logo} alt='LOGO' />
                    </Link>
                    <Image
                        className={`cursor-pointer object-contain transition-transform duration-300 ease-in-out ${showMenu ? 'rotate-90' : 'rotate-0'}`}
                        width={40}
                        height={40}
                        alt={showMenu ? 'CLOSE' : 'MENU'}
                        src={showMenu ? closeIcon : menuIcon}
                        onClick={() => setShowMenu(!showMenu)}
                    />
                </div>

                <div className={`transition-transform duration-300 text-white font-bold ease-in-out transform ${showMenu ? 'translate-x-0 scale-100' : 'translate-x-full scale-0'} flex flex-col items-center text-[20px] py-5 gap-4 border-2 border-black bg-black rounded-[10px] w-full`}>
                    <Link className={pathname === "/" ? "text-orange-800" : ""} href={"/"}>Accueil</Link>
                    <Link className={`text-capitalize ${pathname === "/about" ? "text-orange-800" : ""}`} href={"/about"}>À propos</Link>
                    <Link className={pathname === "/services" ? "text-orange-800" : ""} href={"/services"}>Services</Link>
                    <Link className={pathname === "/clients" ? "text-orange-800" : ""} href={"/clients"}>Nos Clients</Link>
                    <Link className={pathname === "/partners" ? "text-orange-800" : ""} href={"/partners"}>Nos Partenaires</Link>
                    <Link className={pathname === "/contact" ? "text-orange-800" : ""} href={"/contact"}>Contact</Link>
                </div>
            </div>
        </header>
    );
}
