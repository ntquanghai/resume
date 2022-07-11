import Button from "../../components/button/button";
import { Link, Outlet } from "react-router-dom";
import Divider from "@mui/material/Divider";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiGithub,
  SiGmail,
  SiFacebook,
} from "react-icons/si";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  const infoList = [
    "About me",
    "Education",
    "Skills",
    "Personal projects",
    "Personal experience",
  ];
  return (
    <footer className="w-full px-60 mt-auto py-6 justify-between flex bg-gray-800 border-t border-gray-700">
      <div className="w-full flex justify-between mt-2 text-gray-300">
        <div className="flex">
          <IoMdCall className="w-6 h-6 mr-2"></IoMdCall>
          <div className="">(+84)977005564</div>{" "}
        </div>
        <div className="flex">
          <SiGmail className="w-6 h-6 mr-2"></SiGmail>
          <div className = "my-auto">ntqhai2002@gmail.com</div>{" "}
        </div>
        <a href="https://github.com/ntquanghai" className="flex">
          <SiGithub className="w-6 h-6 mr-2"></SiGithub> <div className = "my-auto">GitHub</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
