import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();
  return (
    <div className=" flex w-full h-14 font-medium cursor-pointer text-fontprimary bg-secondary items-center justify-between px-8">
      <p className="text-lg " onClick={() => navigate("/")}>
        Movie App
      </p>

      <RiContactsLine size={25} className="cursor-pointer" />
    </div>
  );
};

export default Header;
