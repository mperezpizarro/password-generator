import React from 'react'
import { BsClipboard } from 'react-icons/bs'
import { useState } from 'react'

const PasswordForm = () => {
    const [range, setRange] = useState(8)

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='shadow-md dark:shadow-[#ffffff22] rounded-lg px-4 py-3 flex justify-between gap-x-2'>
                <input type="text" name="password" id="password" disabled='disabled' placeholder='Your password...' className='bg-transparent w-full' />
                <button type='button' className='text-xl'>
                    <BsClipboard />
                </button>
            </div>
            <div className='text-gray-700 dark:text-gray-100 my-6'>
                <label htmlFor="strength">Password strength:</label>
                <div className='flex items-center gap-x-4 my-2'>
                    <input 
                        type="range" name="strength" id="strength" 
                        defaultValue={8} min={8} max={24} className='flex-1'
                        onChange={(e) => {setRange(e.currentTarget.value)}} 
                    />
                    <span className='font-bold'>{range}</span>
                </div>
            </div>
            <div className='flex justify-center'>
                <input 
                    type="submit" value="Generate password!"
                    className='bg-sky-700 dark:bg-sky-300 dark:text-gray-700 
                    text-gray-100 rounded-lg px-3 py-4 font-bold cursor-pointer active:scale-95'
                />
            </div>
        </form>
    )
}

export default PasswordForm