'use client'
import Marquee from "react-fast-marquee";
import { SiAirtel } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import ScrollReveal from "@/components/ScrollRevealAnimation";

export default function FifthSection(){
    const brand = `flex justify-between max-w-full mx-auto gap-x-24 mt-48`
    const heading = `text-[60px] mt-[206px] mb-10 font-semibold max-w-full px-[300px] text-center`
    const button = `bg-white text-black rounded-full mx-auto mb-10 font-semibold p-3 w-[150px] pl-4 flex items-center gap-x-4 hover:bg-white/70 mb-24`
    return(
        <div>
            <ScrollReveal>
            <Marquee>
            <div className={brand}>
                <ul className="flex gap-x-24">
                    <li className="flex items-center gap-x-1"><SiAirtel size={40} /><span className="text-3xl">Airtel</span></li>
                    <li className="flex items-center gap-x-1"><SiAirtel size={40} /><span className="text-3xl">Airtel</span></li>
                    <li className="flex items-center gap-x-1"><SiAirtel size={40} /><span className="text-3xl">Airtel</span></li>
                    <li className="flex items-center gap-x-1"><SiAirtel size={40} /><span className="text-3xl">Airtel</span></li>
                    <li className="flex items-center gap-x-1"><SiAirtel size={40} /><span className="text-3xl">Airtel</span></li>
                    <li className="flex items-center gap-x-1"><SiAirtel size={40} /><span className="text-3xl">Airtel</span></li>
                    <li className="flex items-center gap-x-1"><SiAirtel size={40} /><span className="text-3xl">Airtel</span></li>
                </ul>
            </div>
        </Marquee>
        </ScrollReveal>
        <div>
        <ScrollReveal>
        <h1 className={heading}>
            We`d Love To Be your Partner
        </h1>
        <button className={button} id="btn">Let`s Talk<FaArrowRightLong size={10} />
        </button>
        </ScrollReveal>
        </div>
        </div>
    )
}