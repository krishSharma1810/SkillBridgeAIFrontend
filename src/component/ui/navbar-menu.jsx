"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"


const MenuItem = ({
  item,
  link
}) => {
    const navigate = useNavigate()
  return (
    (<div onClick={() => navigate(link)} 
    className="relative ">
      <motion.p
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white text-lg">
        {item}
      </motion.p>
      
    </div>)
  );
};

const Menu = ({
  children
}) => {
  return (
    (<nav
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-evenly space-x-16 px-8 py-6 ">
      {children}
    </nav>)
  );
};



export { Menu, MenuItem };


