import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import AppLogo from "../AppLogo/AppLogo";
import Button from "../Button/Button";

const Header = () => {
    const navItems = [
        { name: 'Create CV', url: '' },
        { name: 'Jobs', url: 'jobs' },
        { name: 'Test', url: 'tests' },
        { name: 'About Us', url: 'about-us' },
        { name: 'Contact Us', url: 'contact-us' },
    ];

    const navMenuRef = useRef(null);

    const toggleMenu = (e) => {
        const navMenu = navMenuRef.current;
        const menuIcon = e.currentTarget;

        if (navMenu) {
            const toggleStatus = navMenu.classList.toggle('hidden');
            if (toggleStatus) {
                navMenu.classList.remove('flex');
                // change icon to menu bar
                menuIcon.classList.remove('fa-xmark');
            } else {
                navMenu.classList.add('flex');
                // change icon to close menu
                menuIcon.classList.add('fa-xmark');
            }

            // add color to the menu icon to show that it has been toggled.
            menuIcon.classList.toggle('text-gray-500');
        }
    }

    const location = useLocation();

    return (
        <header className="p-6 bg-white border-b md:border-0 md:bg-[#FAFDFF]">
            <div className="flex items-center justify-between gap-4 md:w-[92%] mx-auto">
                <AppLogo />
                <div
                    className="md:static z-10 md:z-0 border-b md:border-0 hidden md:flex absolute bg-[#FAFDFF] md:bg-transparent p-6 md:p-0 left-0 top-[6rem] w-full md:w-fit items-center"
                    ref={navMenuRef}
                >
                    <nav className="flex gap-6 md:items-center text-[18px] flex-col md:flex-row w-full md:w-fit">
                        {navItems.map(navItem =>
                            <Link to={navItem.url} key={navItem.name} className={`hover:text-[#0959FE] hover:border-b-2 hover:font-bold 
                            hover:border-[#0959FE] md:text-xs lg:text-base my-1 md:my-0 
                            ${location.pathname.replace("/", "") === navItem.url ? "text-[#0959FE] border-b-2 font-bold border-[#0959FE]" : ""}`}>
                                {navItem.name}
                            </Link>
                        )}
                    </nav>
                </div>
                <div className="flex items-center gap-6">
                    <Button onClick={() => window.location.href = '/login'}>Get Started</Button>
                    <i
                        onClick={toggleMenu}
                        className="fa-solid fa-bars-staggered z-10 cursor-pointer hover:opacity-70 text-3xl md:hidden"
                        id="menu-icon"
                    ></i>
                </div>
            </div>
        </header>
    );
}

export default Header;