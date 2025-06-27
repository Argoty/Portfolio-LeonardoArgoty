import React from 'react'
import { SKILLS } from '../constants'
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const Skills = () => {
    return (
        <div className='container mx-auto' id='skills'>
            <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>Tecnologías</h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 py-8'
            >
                {SKILLS.map((s, i) => (
                    <motion.div
                        variants={itemVariants}
                        key={i}
                        className="flex flex-col items-center justify-center bg-stone-800/80 rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300"
                    >
                        <div className="mb-3">{s.icon}</div>
                        <h3 className="text-md lg:text-lg font-medium text-center">{s.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills