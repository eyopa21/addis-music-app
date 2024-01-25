import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { motion } from "framer-motion";

import { FaCrown } from "react-icons/fa";

const navs = [
{
name: "Home",
to: '/home'
},
{
name: "Musics",
to: '/musics'
},
{
name: "Contact",
to: '/contact'
},

];

const Navbar = () => {
const navigate = useNavigate();
const [{ user }, dispatch] = useStateValue();
const [isOpen, setIsOpen] = useState(false);
const [isMenu, setIsMenu] = useState(false);

const logout = () => {
const firebaseAuth = getAuth(app);
firebaseAuth
.signOut()
.then(() => {
window.localStorage.setItem("auth", "false");
})
.catch((e) => console.log(e));
navigate("/login", { replace: true });
};

const toggleNavbar = () => {
setIsOpen(!isOpen);
};
const listItems = navs.map((nav, key) => (
<NavLink key={key} to={ nav.to} className={({isActive})=> isActive ? isActiveStyles : isNotActiveStyles}
    onClick={toggleNavbar}>

    <li className="px-3 py-2 cursor-pointer rounded hover:bg-sky-100">
        {nav.name}
    </li>
</NavLink>
));
return (
<div className="container relative  p-3 flex  justify-between items-center">
    <NavLink to={"/"}> <h4 className="text-3xl font-bold text-violet-600">Addis music</h4>
    </NavLink>
    <div className="md:flex md:space-x-4">

        <nav className={isOpen ? ("flex") : (" hidden md:flex")}>
            <ul
                className="flex bg-white absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-12 left-0 md:top-0 md:flex">
                {listItems}</ul>

        </nav>
        <div className="flex  items-center ml-auto cursor-pointer gap-2 relative" onMouseEnter={()=> setIsMenu(true)}
            onMouseLeave={() => setIsMenu(false)}
            >
            <img className="w-12 min-w-[44px] object-cover rounded-full shadow-lg" src={user?.user?.imageURL} alt=""
                referrerPolicy="no-referrer" />
            <div className="flex flex-col">
                <p className="text-textColor text-lg hover:text-headingColor font-semibold">
                    {user?.user.name}
                </p>
                <p className="flex items-center gap-2 text-xs text-gray-500 font-normal">
                    Premium Member.{" "}
                    <FaCrown className="text-xm -ml-1 text-yellow-500" />{" "}
                </p>
            </div>

            {isMenu && (
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
                className="absolute z-10 top-12 right-0 w-275 p-4 gap-4 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col">
                <NavLink to={"/userProfile"}> <p
                    className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                    Profile
                    </p>
                </NavLink>

                <hr />
                {user?.user.role === "admin" && (
                <>
                    <NavLink to={"/dashboard/home"}> <p
                        className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                        Dashboard
                        </p>
                    </NavLink>
                    <hr />
                </>
                )}
                <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out"
                    onClick={logout}>
                    Sign out
                </p>
            </motion.div>
            )}
        </div>
    </div>
    <div className="md:hidden">
        <button className="flex justify-center items-center" onClick={toggleNavbar}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"
                strokeLinecap="round" strokeLinejoin="round" className={isOpen ? ("hidden") : ("flex")}>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"
                strokeLinecap="round" strokeLinejoin="round" className={isOpen ? ("flex") : ("hidden")}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
</div>
);
};

export default Navbar;