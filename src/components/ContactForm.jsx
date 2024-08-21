import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { motion } from "framer-motion";
import { CONTACT } from '../constants';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    // Function to change the value of the form inputs dinamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // function to validate the fields of the form
    const validate = () => {
        let errors = {};

        if (!formData.name) errors.name = "Name is required"

        if (!formData.email) { errors.email = "Email is required" } else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(formData.email)) {
            errors.email = "Email is invalid"
        }

        if (!formData.message) errors.message = "Message is required";

        return errors;
    }

    // Function to submit the form
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({});
            setIsSending(true);

            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
                .then(res => {
                    toast.success("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" })
                })
                .catch(err => {
                    console.log("ERROR: ", err);
                    toast.error("Failed to send message. Try again later.")
                })
                .finally(() => setIsSending(false))
        }
    }

    return (
        <div className='p-4 lg:w-3/4' id='contact'>
            <Toaster />

            <h2 className='text-center text-4xl font-semibold my-8 tracking-tighter'>¡Contáctame!</h2>
            <div className='mb-8 flex flex-col md:flex-row md:justify-between gap-4'>
                {/* Email Section */}
                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }} className='flex items-center gap-2 transition-transform duration-300 transform hover:scale-105 group' >
                    <FiMail className='text-xl group-hover:text-blue-500' />
                    <a
                        href={`mailto:${CONTACT.email}`}
                        className='text-lg text-stone-100 relative group'
                    >
                        {CONTACT.email}
                        {/* Línea del link al hacer hover */}
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>

                {/* Address Section */}
                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.3 }} className='flex items-center gap-2 transition-transform duration-300 transform hover:scale-105 group'>
                    <FiMapPin className='text-xl group-hover:text-cyan-400' />
                    <p className='text-lg text-stone-100'>
                        {CONTACT.location}
                    </p>
                </motion.div>
            </div>

            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                {/* Name and email */}
                <div className='flex space-x-4 mb-4'>
                    {/* Form inputs with their styles and functionality */}
                    <div className='lg:w-1/2'>
                        <input type="text"
                            name='name'
                            id='name'
                            value={formData.name}
                            placeholder='Nombre'
                            onChange={handleChange}
                            className='w-full mb-8 appearance-none rounded-xl border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                        />
                        {errors.name && (
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='text-sm text-red-400'>{errors.name}</motion.p>
                        )}
                    </div>

                    <div className='lg:w-1/2'>
                        <input type="email"
                            name='email'
                            id='email'
                            value={formData.email}
                            placeholder='Email'
                            onChange={handleChange}
                            className='mb-8 w-full appearance-none rounded-xl border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                        />
                        {errors.email && (
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='text-sm text-red-400'>{errors.email}</motion.p>
                        )}
                    </div>
                </div>

                {/* Message */}
                <div className='mb-4'>
                    <textarea
                        name='message'
                        id='message'
                        value={formData.message}
                        placeholder='Mensaje'
                        onChange={handleChange}
                        rows={6}
                        className='mb-8 w-full appearance-none rounded-xl border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                    />
                    {errors.message && (
                        <p className='text-sm text-red-400'>{errors.message}</p>
                    )}
                </div>

                {/* Submit button */}
                <button className={`px-4 py-2 border rounded-md border-stone-50/30 mb-8 w-full bg-stone-200 text-stone-900 text-md font-bold hover:bg-stone-300 hover:shadow-lg hover:shadow-blue-700 ${isSending ? "cursor-not-allowed opacity-50" : ""}`} disabled={isSending}>
                    <div className='flex items-center justify-center gap-3'>
                        {isSending ? "Enviando..." : "Enviar"}
                        <FiSend />
                    </div>
                </button>
            </motion.form>

        </div>
    )
}

export default ContactForm