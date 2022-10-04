import React from 'react'
import { useState } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import PasswordForm from './components/PasswordForm'

const App = () => {
  const [dark, setDark] = useState(false)

  return (
    <main className={dark ? 'dark' : ''}>
      <div className='min-h-screen flex justify-center items-center bg-zinc-100 dark:bg-gray-700'>
        <div className='max-w-sm text-sky-700 dark:text-sky-300 shadow-lg dark:shadow-[#ffffff22] rounded-xl px-6 py-8'>
          <div className='flex justify-center gap-x-3 mb-8'>
            <h2 className='font-bold uppercase text-2xl'>Password generator</h2>
            <button 
              onClick={() => {setDark(!dark)}}
              className='text-xl'
            >
              {dark ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </button>
          </div>
          <PasswordForm />
        </div>
      </div>
    </main>
  )
}

export default App