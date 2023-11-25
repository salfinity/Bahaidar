"use client"; 

import { booksData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {};

export default function Books({}: Props) {
 const { ref } = useSectionInView("Books");
 const books = [
  1, 2, 3, 4, 5
 ]

 
 return (
  <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5 }} 
  ref={ref}
  id="books" 
  className='h-screen top-56 relative  flex-col text-left md:flex-row w-full justify-center mx-auto items-center mb-28 z-0'>
    <h2 className="text-center mt-10 uppercase text-3xl tracking-[20px]">
     Books
    </h2>

    <div className='relative max-w-full flex overflow-x-scroll overflow-y-hidden  snap-x
    snap-mandatory mt-2 z-20'>
     {booksData.map((book, index) => (
      <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
       
       <motion.img
        initial={{ 
         opacity: 0, 
         y: -300, 
        }} 
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={book.imageUrl.src} // Use the imageUrl from the book object
        alt="" // Use the title as alt text        
       />
       

       <div className='space-y-6 px-0 md:px-10 max-w-7xl'>
        <h4 className='text-2xl font-semibold text-center'>
         <span className='underline decoration-[#F7AB0A]/50'>
          Book {index + 1} of {booksData.length}:
          </span>{" "}
          {book.title} 
          </h4>

          <p className='text-lg text-center md:text-left'>
           {book.description}</p>
         </div>
      </div>
     ))}
    </div>
   
    <div className='w-full absolute top-[30%] bg-[#ff0000]/10 left-0 h-[500px] -skew-y-12' />
  </motion.div>
)
}

