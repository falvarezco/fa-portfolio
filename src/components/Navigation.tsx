import React from 'react';

const Navigation = () => {
  return (
    <div className='fixed justify-center top-7 w-full flex'>
      <nav className='bg-zinc-600 w-[837px] h-[94px] rounded-full flex items-center py-2 px-2 pr-[18px]'>
        <section className='flex gap-x-6 items-center'>
          <figure className='rounded-full bg-yellow-300 w-[80px] h-[80px]'>
            {/* Include Image Here */}
          </figure>
          <h1 className='text-neutral-100 text-xl font-light'>Felipe Alvarez</h1>
        </section>
      </nav>
    </div>
  )
}

export default Navigation;