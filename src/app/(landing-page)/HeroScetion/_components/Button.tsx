import { FaArrowRightLong } from "react-icons/fa6";

export default function Button(){
    const button = `bg-white text-black rounded-full font-semibold p-3 w-[150px] pl-4 mt-10 flex items-center gap-x-4 hover:bg-white/70`
    return(
        <div>
            <button className={button} id="btn">Learn More<FaArrowRightLong size={10} />
            </button>
        </div>
    )
}