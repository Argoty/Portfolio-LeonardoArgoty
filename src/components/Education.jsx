import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className='py-8' id='education'>
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='mb-4 text-center text-3xl font-bold'>Educación</motion.h2>
      
      <div className='space-y-8 p-10'>
        {
          EDUCATION.map(((ed, i) => (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 * i }} key={i} className='rounded-xl border border-stone-50/30 bg-white/5 p-4  hover:shadow-lg hover:shadow-blue-700'>
              <h3 className='text-2xl font-semibold'>{ed.degree}</h3>

              <p className='text-xl'>{ed.institution}</p>
              <p className='text-sm text-stone-300'>{ed.duration}</p>

              <p className='mt-2 text-base'>{ed.description}</p>
            </motion.div>
          )))
        }
      </div>
    </section>
  )
}

export default Education