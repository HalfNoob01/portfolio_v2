import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple"> work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button key={card.id} borderRadius='1.75rem' 
           duration={Math.floor(Math.random() * 10000 + 10000)}
           className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
              <Image 
                src={card.thumbnail}
                alt={card.title} // Use the title as the alt text for better accessibility
                width={128} // Example width, adjust based on your design
                height={128} // Example height, adjust based on your design
                className='lg:w-32 md:w-20 w-16'
              />

              <div className='lg:ms-5'>
                <h1 className='text-start text-xl md:text-2xl font-bold'>
                  {card.title}
                </h1>
                <p className='text-start text-white-100 mt-3 font-semibold'>
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
