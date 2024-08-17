import React from 'react'
import { PROJECTS } from '../constants'
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { motion } from "framer-motion"

const Projects = () => {
    return (
        <section className='pt-20' id='projects'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }} className='mb-8 text-center text-3xl lg:text-4xl'>Proyectos</motion.h2>

            <div className="grid gap-8 lg:grid-cols-2 grid-cols-1">
                {
                    PROJECTS.map((project, i) => (
                        <motion.div
                            key={i}
                            className="border border-stone-50/30 bg-white/3 p-6 rounded-3xl hover:shadow-lg hover:shadow-blue-700"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* IMAGEN DEL PROYECTO Y BOTONES DE GITHUB Y DEL DEPLOY */}
                            <div className="group relative overflow-hidden rounded-3xl mb-4">
                                <motion.img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-64 w-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <div className="flex flex-col opacity-0 absolute inset-0 items-center justify-center text-white backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 mb-2">
                                        <div className="flex items-center">
                                            <span>Github</span>
                                            <FaGithub className="ml-2" />
                                        </div>
                                    </a>

                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-blue-900 text-white hover:bg-blue-800 px-4 py-2">
                                        <div className="flex items-center">
                                            <span>Ver</span>
                                            <FaEye className="ml-2" />
                                        </div>
                                    </a>
                                </div>
                            </div>



                            {/* INFORMACION */}
                            <div className="text-center">
                                <h6 className="mb-2 font-semibold text-xl">
                                    {project.name}
                                </h6>

                                <p className="mb-4 text-neutral-350">
                                    {project.description}
                                </p>

                                {/* TECNOLOGIAS USADAS */}
                                <div className="flex flex-wrap justify-center">
                                    {
                                        project.technologies.map((t, i) => (
                                            <span
                                                key={i}
                                                className='mr-2 mt-4 bg-blue-900/30 text-blue-200 rounded-md px-3 py-1 text-sm font-medium hover:bg-blue-900/50 hover:text-blue-100 transition-colors duration-300'
                                            >
                                                {t}
                                            </span>
                                        ))
                                    }

                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>

        </section>
    )
}

export default Projects