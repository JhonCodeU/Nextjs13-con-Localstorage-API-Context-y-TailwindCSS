"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTaskContext } from '@/context/TaskContext';

const Navbar = () => {

  const router = useRouter();
  const { tasks } = useTaskContext();

  return (
    <header className='flex justify-between items-center bg-gray-800 px-6 py-3'>

      <Link href='/'>
        <h1 className='font-bold text-3xl text-white'>Task App</h1>
        <span className='text-gray-400 text-sm'>{tasks.length} tasks</span>
      </Link>

      <div>
        <button
          onClick={() => router.push('/new')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-sm inline-flex items-center"
        >Add Task</button>
      </div>
    </header>
  );
}

export default Navbar;