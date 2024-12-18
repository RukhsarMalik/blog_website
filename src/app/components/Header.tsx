import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { BiWorld } from "react-icons/bi";
import Link from 'next/link';
  
  
export const Header = () => {
  return (
    <div className='flex h-[50px] md:h-[90px] bg-black justify-between font-sans items-center p-10 sticky top-0 z-50'>
            <div className='flex flex-row gap-4 items-center'>
                <div className='text-white '>
                  <BiWorld className='w-6 h-6 md:w-8 md:h-8' />
                </div>
                <div className='flex text-[20px] md:text-[30px] font-bold text-white items-center'>
                    The World of Travel
                </div>
                
            </div>
           
            <ul className='hidden lg:flex text-gray-200 text-[16px] gap-4 cursor-pointer'>
              <li>
                 <Link href='/' className='hover:text-orange-600'>Home</Link>
              </li>
              <li>
               <Link href="/blog" className='hover:text-orange-600'>Blog</Link>
              </li>
               <li>
               <Link href="/about" className="hover:text-orange-600">About</Link>

              </li>
               <li>
                  <Link href="/contact" className='hover:text-orange-600'>Contact</Link>
              </li>
              <li>
              <Link href="/destination" className='hover:text-orange-600'>Destination</Link>
              </li> 
                
            </ul>

            <Sheet >
            <SheetTrigger className="md:hidden text-white"  aria-label="Open mobile menu"  >
                <Menu/>
              </SheetTrigger>
                <SheetContent aria-label="Mobile navigation">
                    <SheetTitle className='text-white'>Menu</SheetTitle>
                    <ul className='flex flex-col text-black text-[16px] gap-4  cursor-pointer'>
                      <li>
                         <Link href='/' className='hover:text-orange-600'>Home</Link>
                      </li>
                      <li>
                        <Link href="/blog" className='hover:text-orange-600'>Blog</Link>
                      </li>
                      <li>
                        <Link href="/about" className='hover:text-orange-600'>About</Link>
                      </li>
                      <li>
                         <Link href="/contact" className='hover:text-orange-600'>Contact</Link>
                      </li>
                      <li>
                      <Link href="/destination" className='hover:text-orange-600'>Destination</Link>
                      </li>   
                    </ul>
                    
                    
                </SheetContent>
            </Sheet>

    
    </div>
  )
}
