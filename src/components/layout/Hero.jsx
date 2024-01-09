import React from 'react'
import Image from 'next/image'
import { Right } from '../icons/Right'

export const Hero = () => {
  return (
    <>
    <section className='hero'>
    <div className='py-14'>
     <h1 className='text-4xl font-semibold'/*} font ko bada krne ke liye and bold krne ke liye */>Everything <br/>is better when <br/> there is a&nbsp; <span className='text-primary'>Pizza</span></h1> 
        <p className='my-6 text-gray-500 text-sm'>
            Pizza is the missing piece that makes everyday complete,a simple yet delicious joy in life
        </p>
    <div className='flex gap-4 text-sm'>
        <button className='flex items-center bg-primary rounded-full px-4 py-2 text-white uppercase '>Order Now
        <Right className='bg-white'/>
        </button>
        <button className='flex gap-2 text-gray-600 px-2 py-2 font-semibold'>
          Learn More
          <Right/>
          </button>
        
        </div>    

    </div>
    
       <div className='relative'>
       <Image src={'/Pizza.jpg'} 
        layout='fill'
        objectFit='contain'
        alt='pizza'
         >


        </Image>
       </div>
       
    </section>
    
    </>
  )
}
