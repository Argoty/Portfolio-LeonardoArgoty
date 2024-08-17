import React from 'react'
import { BIO } from '../constants'
import { motion } from "framer-motion"

import { LANGUAGES } from "../constants"


const Bio = () => {
    return (
        <section className='flex max-w-4xl flex-col gap-12' id='bio'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }} className='text-center text-3xl lg:text-4xl'>Sobre Mi</motion.h2>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }} >
                {
                    BIO.map((item, i) => (
                        <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 * i }} key={i} className='mb-4 text-lg lg:text-xl'>
                            {item}
                        </motion.p>
                    ))
                }
            </motion.div>

            <div className="w-full">
                <motion.h2 className="text-2xl font-semibold mb-4 text-center" whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}>Idiomas</motion.h2>
                <div className="flex flex-wrap justify-center gap-4 mt-7">
                    {LANGUAGES.map((lang, index) => (
                        <motion.div
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            transition={{ duration: 0.5, delay: 0.6 * index }}
                            key={index}
                            className="flex items-center justify-between border border-neutral-500 rounded-lg p-3 bg-transparent w-full max-w-xs md:w-1/3 hover:shadow-lg hover:shadow-blue-700"
                        >
                            <div className="flex items-center">
                                <img src={lang.icon} alt={`${lang.name} icon`} className="w-8 h-8 mr-2" />
                                <span className="text-xl">{lang.name}</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-sm font-medium">Nivel</span>
                                <span className="text-base">{lang.level}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Bio