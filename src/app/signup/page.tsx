'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Login() {
  const router = useRouter();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [disable, setDisable] = useState(true);

  const submitHandler = async () => {
    try {
      const res = await axios.post('/api/users/signup', user);
      toast.success(res.data.message);
      router.push('/login');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length>0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  return (
    <div className="text-center h-screen mt-24 max-w-full mx-auto my-auto">
      <div className="flex flex-col w-[300px] h-[430px] mx-auto text-start gap-y-2 bg-white/10 p-2 py-8 px-8 rounded-md">
        <h1 className="text-xl font-medium mb-8">Sign Up</h1>
        <label>Username</label>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="focus:outline-none rounded-sm text-black p-1"
        />
        <label>Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="focus:outline-none rounded-sm text-black p-1"
        />
        <label>Password</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="focus:outline-none rounded-sm text-black p-1"
        />
        <button
          className={`${
            disable
              ? 'bg-slate-400 cursor-not-allowed'
              : 'bg-white/10 hover:bg-white/5'
          } rounded-sm p-1 mt-4`}
          onClick={submitHandler}
          disabled={disable}
        >
          Sign Up
        </button>
        <p className="text-sm my-3">
          Already have an account? <Link href={'/login'}>Login</Link>
        </p>
      </div>
    </div>
  );
}
