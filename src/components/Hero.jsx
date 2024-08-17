import React from 'react'
import { HERO } from "../constants"
import javierImg from "../assets/yofoto.jpeg"
import { motion } from "framer-motion"

import Typewriter from 'react-typewriter-effect';

const Hero = () => {
    return (
        <section className='flex min-h-screen flex-wrap items-center'>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full md:w-1/2'>
                <h2 className='my-4 p-2 text-3xl font-bold md:text-5xl lg:text-6xl'>
                    Hola, soy <span
                        className='gradient-text'
                    >
                        {HERO.name}
                    </span>
                </h2>

                <p className='p-2 text-2xl tracking-tighter lg:text-4xl flex flex-wrap'>
                    <span className='mr-2'>Soy</span>
                    <Typewriter
                        textStyle={{
                            fontFamily: 'sans-serif',
                            background: 'linear-gradient(90deg, #479aff, #959595)', // De azul claro a gris claro
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                        startDelay={100}
                        cursorColor="#3F3D56"
                        multiText={HERO.qualities}
                        multiTextDelay={1000}
                        typeSpeed={100}
                        multiTextLoop
                    />
                </p>
                <p className='mb-8 p-2 text-lg'>
                    {HERO.description}
                </p>
            </motion.div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='w-full md:w-1/2 lg:p-8'
            >
                <div className='flex justify-center'>
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        src={javierImg}
                        width={270}
                        height={270}
                        alt="Javier Leonardo"
                        className='rounded-full shadow-lg shadow-blue-700'
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero