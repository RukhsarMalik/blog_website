import React from 'react'

export const Header = () => {
  return (
    <div className='flex md:h-[70px] bg-black justify-between font-sans items-center p-10'>
            <div className='flex text-[20px] text-white'>
                The World of Travel
            </div>
            <ul className='flex text-gray-200 text-[16px] gap-4  cursor-pointer'>
                <li className='hover:text-orange-600'>Home</li>
                <li className='hover:text-orange-600'>Blog</li>
                <li className='hover:text-orange-600'>About</li>
                <li className='hover:text-orange-600'>Contact</li>
                <li className='hover:text-orange-600'>Destination</li>
                
            </ul>
    
    </div>
  )
}
