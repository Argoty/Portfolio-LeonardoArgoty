import React from 'react'
import logo from "../assets/logo2.png"
import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='mb-3 mt-20'>
        <div className='flex items-center justify-center'>
            <motion.img initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 0.5}} src={logo} alt="logo" width={200} className='my-10'/>
        </div>

        <div className='flex items-center justify-center gap-8'>
            {
                SOCIAL_MEDIA_LINKS.map((link, i) => (
                    <motion.a initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 0.1, delay: 0.5*i}} href={link.href} key={i} target='_blank' rel='noopener noreferrer'>
                        {link.icon}
                    </motion.a>
                ))
            }
        </div>

        <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>
            &copy;Javier Leonardo Argoty Roa. Reservados todos los derechos.
        </p>
    </footer>
  )
}

export default Footer