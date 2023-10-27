import React, { Fragment, useState, useEffect } from "react";
import { listMenu } from "../../constant";
import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";
import clsx from "clsx";

interface MenuItem {
  id: number;
  link: string;
  name: string;
  icon: JSX.Element;
  subMenu: MenuItem[];
}

interface SidebarProps {
  listMenu: MenuItem[];
}

export function SidebarMenu({ isOpen }: { isOpen: boolean }) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [linkActive, setActiveLink] = useState<number | null>(null);

  useEffect(() => {
    console.log({ linkActive });
  }, [linkActive]);

  const toggleSubMenu = (id: number) => {
    if (openSubMenu === id) {
      // Jika submenu yang sedang terbuka adalah yang sama, tutup submenu
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(id);
    }
  };

  return (
    <div className="text-white text-sm overflow-auto">
      <ul>
        {listMenu.map((menu) => (
          <li key={menu.id}>
            {menu.subMenu.length > 0 ? (
              <div
                className={clsx(
                  `p-1 flex justify-between items-center hover:cursor-pointer hover:text-yellow-400 font-extralight hover:font-normal hover:rounded-md hover:bg-blue-600`
                )}
                onClick={() => toggleSubMenu(menu.id)}
              >
                <button className="flex items-center gap-2">
                  {menu.icon} {!isOpen ? "" : <span>{menu.name}</span>}
                </button>
                <BiDownArrow
                  size={15}
                  className={`mr-2 transform transition-transform ${
                    openSubMenu === menu.id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            ) : (
              <Link
                href={`/${menu.link}`}
                className={clsx(
                  `p-1 font-extralight flex gap-2 items-center hover:cursor-pointer hover:text-yellow-400 hover:font-normal hover:rounded-md hover:bg-blue-600`,
                  {
                    "text-yellow-400 font-normal": menu.id === linkActive,
                  }
                )}
                onClick={() => setActiveLink(menu.id)}
              >
                {menu.icon}
                {!isOpen ? "" : <span>{menu.name}</span>}
              </Link>
            )}
            {menu.subMenu.length > 0 ? (
              <ul
                className={`${
                  openSubMenu === menu.id
                    ? "max-h-screen transition-all duration-500 ease-in"
                    : "max-h-0"
                } overflow-hidden`}
              >
                {menu.subMenu.map((subMenu) => (
                  <Link
                    key={subMenu.id}
                    className={clsx(
                      `flex gap-2 items-center hover:cursor-pointer hover:text-yellow-400 font-extralight hover:font-normal hover:rounded-md hover:bg-blue-600`,
                      {
                        "text-yellow-400 font-normal":
                          subMenu.id === linkActive,
                      }
                    )}
                    href={`/${subMenu.link}`}
                    onClick={() => setActiveLink(subMenu.id)}
                  >
                    {!isOpen ? (
                      ""
                    ) : (
                      <div className="pl-10 py-0 px-1 mb-1">
                        - {subMenu.name}
                      </div>
                    )}
                  </Link>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
