import React from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const[activeSection, setActiveSession] = useState('home')
    const navLinks  = (
        <ul>
            <li>
                <a href='#home'>Home</a>
            </li>
        </ul>
    ) 
  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full'>
            {/* logo */}
            <div className='text-white text-lg font-semibold'>
                <a href='/'>
                <img src='/logo.svg' alt='logo' />
                </a>
            </div>
            {/* navitems */}
            <div>
                <nav>
                    {navLinks}
                </nav>
            </div>
            {/* button */}
        </div>
    </header>
  )

}

export default Navbar