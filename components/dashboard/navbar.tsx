"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef?.current?.focus();
      }, 150);
    }

    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchOpen]);

  return (
    <div className="w-full flex items-center justify-between ">
      <div className="flex flex-col">
        <h1 className="font-bold text-[1.7rem] text-mainColor">
          Hello, <span className="font-light text-foreground">Amir</span>
        </h1>
        <p>Welcome back!</p>
      </div>

      {/* Search input */}

      <div
        className={`w-screen h-screen absolute left-0 bottom-0 flex items-center justify-center dark:bg-black/25 bg-white/25 backdrop-blur-sm z-10 ${
          isSearchOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`flex transition-all duration-150 ${
            isSearchOpen
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 -translate-y-10"
          }`}
        >
          <div
            className={`flex items-center border w-[500px] p-2 rounded gap-2`}
          >
            <IoIosSearch size={28} />
            <input
              type="text"
              placeholder="Search..."
              ref={searchInputRef}
              className="border-none outline-none bg-transparent w-full"
            />
          </div>
          <button onClick={() => setIsSearchOpen(false)}>
            <IoMdClose size={32} />
          </button>
        </div>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-6">
        <div className="cursor-pointer" onClick={() => setIsSearchOpen(true)}>
          <IoIosSearch size={30} />
        </div>
        <div className="flex items-center cursor-pointer">
          <div className="w-[2.6rem] h-[2.6rem] bg-mainColor rounded-md"></div>
          <MdKeyboardArrowDown size={28} />
        </div>
      </div>
    </div>
  );
};
