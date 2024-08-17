import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion";


const Experience = () => {
    return (
        <section className='pt-20 w-full' id='work'>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='text-center text-4xl font-semibold tracking-tighter'>Experiencia</motion.h2>

            <div className='mt-9' >
                {
                    EXPERIENCES.map((exp, i) => (
                        <div key={i} className='mb-8 flex flex-wrap lg:justify-center'>
                            {/* AÑO DE EXPERIENCIA */}
                            <motion.div whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.7 }} className='w-full lg:w-1/4'>
                                <p className='mb-4 text-md'>{exp.duration}</p>
                            </motion.div>

                            {/* INFORMACION */}
                            <motion.div whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 0.7 }} className='w-full lg:w-3/4 max-w-xl'>
                                <h6 className='text-2xl font-semibold'>
                                    {exp.title} - {" "}
                                    <span className='text-xl text-blue-400'>{exp.company}</span>
                                </h6>

                                <p className='mb-4 text-neutral-400 text-base'>{exp.description}</p>
                                {/* TECNOLOGIAS USADAS */}
                                {
                                    exp.technologies.map((t, i) => (
                                        <span key={i} className=' hover:shadow-lg hover:shadow-blue-700 mr-2 mt-4 bg-blue-900/70 text-blue-200 rounded-sm px-2 py-1 text-sm font-medium'>{t}</span>
                                    ))
                                }
                            </motion.div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Experience