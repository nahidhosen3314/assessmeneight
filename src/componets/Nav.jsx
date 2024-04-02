import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";


const Nav = () => {


    const [open, setOpen] = useState(false);

    return (
        <div className="lg:py-10 py-6 relative">
            <div className="container">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <h3 className="font-primary">Book vibe</h3>
                    </a>
                    <div className="">
                        <ul className={`h-menu ${open === true ? 'active': ''}`}>
                            <NavLink to='/' className={({isActive})=> isActive ? "text-primary font-semibold  border-primary border rounded-lg py-2 px-4 text-lg" : 'font-normal border border-transparent text-[#131313]/80'}>Home</NavLink>
                            <NavLink to='/ListedBooks' className={({isActive})=> isActive ? "text-primary font-semibold  border-primary border rounded-lg py-2 px-4 text-lg" : 'font-normal border border-transparent text-[#131313]/80'}>Listed Books</NavLink>
                            
                            <NavLink to='/PagesRead' className={({isActive})=> isActive ? "text-primary font-semibold  border-primary border rounded-lg py-2 px-4 text-lg" : 'font-normal border border-transparent text-[#131313]/80'}>Pages to Read</NavLink>

                            <NavLink to='/About' className={({isActive})=> isActive ? "text-primary font-semibold  border-primary border rounded-lg py-2 px-4 text-lg" : 'font-normal border border-transparent text-[#131313]/80'}>About</NavLink>

                            <NavLink to='/Contact' className={({isActive})=> isActive ? "text-primary font-semibold  border-primary border rounded-lg py-2 px-4 text-lg" : 'font-normal border border-transparent text-[#131313]/80'}>Contact Us</NavLink>
                        </ul>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="items-center md:block hidden">
                            <button className="mr-3">Sign In</button>
                            <button className="bg-secondary">Sign Up</button>
                        </div>
                        <div onClick={()=> setOpen(!open)} className="lg:hidden block text-4xl text-heading cursor-pointer">
                            {
                                open === true ? 
                                <IoCloseSharp />
                                :  <MdMenu />
                            }  
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Nav;