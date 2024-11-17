import { FaArrowRightLong } from 'react-icons/fa6';

export default function Button() {
  const button = `bg-white text-black rounded-full mx-auto mb-10 font-semibold p-3 w-[150px] pl-4 flex items-center gap-x-4 hover:bg-white/70`;
  return (
    <div>
      <button className={button} id="btn">
        Our Work
        <FaArrowRightLong size={10} />
      </button>
    </div>
  );
}
