import React, { useState } from 'react'
import logo from "../assets/logo2.png"
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenu(!isMobileMenu)
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();

        const targetElement = document.querySelector(href);

        if (targetElement) {
            const offset = -85;

            const elementPosition = targetElement.getBoundingClientRect().top;

            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }

        setIsMobileMenu(false);
    }

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop menu */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-xl border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-between gap-6'>
                        {/* logo to go beggining */}
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" width={150} />
                            </a>
                        </div>

                        {/* navigation links */}
                        <div>
                            <ul className='flex items-center gap-4'>
                                {
                                    NAVIGATION_LINKS.map((item, i) => (
                                        <li key={i}>
                                            <a href={item.href} className='text-sm hover:text-blue-400' onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    {/* top part of the navbar, means the logo and the icon button to show the section List */}
                    <div className='flex items-center justify-between'>
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" width={90} className='m-2' />
                            </a>
                        </div>

                        {/* Menu button, its funcionality like the icons */}
                        <div className='flex items-center'>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {
                                    isMobileMenu ? (
                                        <FaTimes className='m-2 h-6 w-5' />
                                    ) : (
                                        <FaBars className='m-2 h-6 w-5' />
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    {/* Sections list  */}
                    {
                        isMobileMenu && (
                            <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                                {
                                    NAVIGATION_LINKS.map((item, i) => (
                                        <li key={i}>
                                            <a href={item.href} className='block w-full text-lg' onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar