import { useRouter } from "next/router";
import React from "react";
import { BsTwitter } from "react-icons/bs";
type SidebarLogoProps = {};

const SidebarLogo: React.FC<SidebarLogoProps> = () => {
  const router = useRouter();

  return (
    <div
      className="rounded-full 
    h-14
    w-14
    p-4 flex items-center justify-center hover:bg-blue-300 hover:opacity-10 cursor-pointer transition"
      onClick={() => router.push("/")}
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
};
export default SidebarLogo;
