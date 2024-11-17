"use client";

import axios from "axios"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const Menu = () => {
  const menu = `flex gap-x-24 text-sm items-center`;
  const btn = `bg-white/10 p-2 rounded-full hover:bg-white/15 text-sm font-medium px-4`

  const router = useRouter();

  const logoutHandler = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      router.push("/login");
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
      <ul className={menu} id='menu'>
        <li>
          <Link href={'/'}>WHAT WE DO</Link>
        </li>
        <li>
          <Link href={'/'}>WHO WE ARE</Link>
        </li>
        <li>
          <Link href={'/'}>BEING HERE</Link>
        </li>
        <li>
          <Link href={'/'}>CAREERS</Link>
        </li>
        <li>
          <button onClick={logoutHandler} className={btn}>Logout</button>
        </li>
      </ul>
    </>
  );
};
export default Menu;
