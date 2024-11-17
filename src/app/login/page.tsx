'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Login() {
  const login = `text-center h-screen mt-24 max-w-full mx-auto my-auto`;

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [desable, setDesable] = useState(true);

  const router = useRouter();
  const submitHandler = async () => {
    try {
      const res = await axios.post('/api/users/login', user);
      toast.success(res.data.message);
      router.push('/');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };


  useEffect(() => {
    if(user.email.length>0 && user.password.length>0){
        setDesable(false);
    }else{
        setDesable(true);
    }
  }, [user]);

  return (
    <div className={login}>
      <div className="flex flex-col w-[300px] h-[360px] mx-auto text-start gap-y-2 bg-white/10 p-2 py-8 px-8 rounded-md">
        <h1 className="text-xl font-medium mb-8">Login</h1>
        <label>email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className=" focus:outline-none rounded-sm text-black p-1"
        />
        <label>password</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className=" focus:outline-none rounded-sm text-black p-1"
        />
        <button
          className={`${
            desable
              ? 'bg-slate-400 cursor-not-allowed'
              : 'bg-white/10 hover:bg-white/5'
          } rounded-sm p-1 mt-4`}
          onClick={submitHandler}
        >
          Login
        </button>
        <p className="text-sm my-3">
          Don't have an account? <Link href={'/signup'}>SignUp</Link>
        </p>
      </div>
    </div>
  );
}
