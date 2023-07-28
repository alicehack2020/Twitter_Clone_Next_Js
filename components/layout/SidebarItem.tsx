import React from "react";

type SidebarItemProps = {
  lable: string;
  href?: string;
  icon: React.FC<React.RefAttributes<SVGSVGElement>>;
  onClick?: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  lable,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className=" flex  items-center">
      <div
        className="
          rounded-full
          h-14
          w-14
          p-4 hover:bg-slate-300 hover:bg-opacity-10
          cursor-pointer"
      >
        <Icon className="h-6 block" />
      </div>
      <p className="hidden lg:block">{lable}</p>
    </div>
  );
};
export default SidebarItem;
