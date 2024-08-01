'use client'

import Logo from "./_components/Logo"
import Menu from "./_components/MenuItems"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    const nav = `flex max-w-full mx-12 items-center py-10 justify-between`

    var tl = gsap.timeline();
  useGSAP(() => {
    tl.from('#logo', {
        y: 10,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
        ease: 'elastic.out(1,1)',
      });
    tl.from('#menu', {
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.1, // Stagger each item by 0.1 seconds
        ease: "power2.out" // Optional easing
      });
      tl.from('#heading', {
        y: 10,
        duration: 0.5,
        delay: 0.2,
        opacity: 0,
        ease: 'elastic.out(1,1)',
      });
    tl.from('#disc', {
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.1, // Stagger each item by 0.1 seconds
        ease: "power2.out" // Optional easing
      });
    tl.from('#btn', {
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.1, // Stagger each item by 0.1 seconds
        ease: "power2.out" // Optional easing
      });
  });

    return(
        <section className='bg-black/30'>
            <div className={nav}>
            <Logo/>
            <Menu/>
            </div>
        </section>
    )
}
export default Navbar;