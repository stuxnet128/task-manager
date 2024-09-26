"use client";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaDiagramProject, FaLayerGroup } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItems {
  name: string;
  icon: ReactNode;
  isSelected: boolean;
}

export const Sidebar = () => {
  const pathname = usePathname();
  const [menuItems, setMenuItems] = useState<MenuItems[]>([
    {
      name: "Dashboard",
      icon: <MdDashboard />,
      isSelected: false,
    },
    {
      name: "Projects",
      icon: <FaDiagramProject />,
      isSelected: false,
    },
    {
      name: "Categories",
      icon: <FaLayerGroup />,
      isSelected: false,
    },
  ]);

  useEffect(() => {
    const currentUrl = pathname.replace("/", "").toLowerCase();
    const updatedMenuItems = menuItems.map((item) => ({
      ...item,
      isSelected: item.name.toLowerCase() === currentUrl,
    }));
    setMenuItems(updatedMenuItems);
  }, [pathname]);

  const updateSelectedItem = (itemIndex: number) => {
    const updatedMenuItems = menuItems.map((item, index) => ({
      ...item,
      isSelected: index === itemIndex,
    }));
    setMenuItems(updatedMenuItems);
  };

  return (
    <nav className="border-r shadow-lg hidden dark:border-gray-800  border-gray-200 w-[330px] p-6 py-16 md:flex flex-col items-center gap-3 justify-between">
      {/* Logo */}
      <Link href={"/"} className="flex gap-1 items-center justify-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="w-[30px]"
        />
        <h1 className="text-2xl font-light text-mainGreenColor">
          <span className="font-extrabold text-mainColor">Taskify</span> Hub
        </h1>
      </Link>

      <div className="flex text-[15px] justify-center  flex-col gap-3 w-[182px] h-1/3 ">
        {menuItems.map((item, index) => (
          <Link
            href={item.name.toLowerCase()}
            className={`flex items-center gap-2 cursor-pointer border border-transparent hover:border-gray-800  rounded p-2 w-full group transition ${
              item.isSelected && "bg-mainColor text-white"
            }`}
            key={index}
            onClick={() => updateSelectedItem(index)}
          >
            <span
              className={`text-mainColor group-hover:scale-110  transition duration-300 ${
                item.isSelected && "text-white"
              }`}
            >
              {item.icon}
            </span>
            {item.name}
          </Link>
        ))}
      </div>

      {/* Theme Toggle */}
      <div className="flex items-center justify-between w-full">
        <button className="flex border-mainColor border  px-2 py-1 rounded">
          <CiLogout size={24} />
          Logout
        </button>
        <ModeToggle />
      </div>
    </nav>
  );
};
