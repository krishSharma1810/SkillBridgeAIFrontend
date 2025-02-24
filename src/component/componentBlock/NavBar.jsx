import React from 'react';
import { Menu, MenuItem } from "../ui/navbar-menu";
import cn from "../../lib/utils";

const Navbar = () => {
    return (
        // Nav bar 
        <div className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-1000")}>
            <Menu >  
                <MenuItem  item="Home" link="/home" />
                <MenuItem  item="About" link="/about" />
                <MenuItem  item="ChatBot" link="/chatbot" />
                <MenuItem  item="Contact" link="/contact" />
            </Menu>
        </div>
    );
}

export default Navbar;
