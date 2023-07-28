import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { BellIcon,UserIcon,ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
 import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
 
interface MenuItem {
  label: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
const Sidebar = () => {
  const item = [
    {
      lable: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      lable: "Notifications",
      href: "/notifications",
      icon: BellIcon,
    },
    {
      lable: "Profile",
      href: "/",
      icon: UserIcon,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
              <div className="space-y-2 lg:w-[230px]">
                  <SidebarLogo />
                  {
                      item.map((item) => (
                          <SidebarItem
                              key={item.href}
                              href={item.href}
                              lable={item.lable}
                              icon={item.icon}
                          />
                      ))
                  }
                  <SidebarItem onClick={() => { }} icon={ArrowLeftOnRectangleIcon} lable="Logout"/>
                  <SidebarTweetButton/>
              </div>
      </div>
     
    </div>
  );
};
export default Sidebar;
