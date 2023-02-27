import { Fragment, useState } from "react";
import { Text } from "@chakra-ui/react";
import "../App.css";

function Header() {
  return (
    <Fragment>
      <div className="sm:block hidden">
        <div className="text-white text-sm bg-projectDarkGray flex flex-row items-center justify-between gap-5 h-24 border-b-2">
          <div className=" text-2xl lg:pl-11 pl-5">
            <Text fontFamily="monospace" textColor="white">
              RUEBITS
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between lg:gap-8 gap-4">
            <a className="" href="#home">
              Home
            </a>
            <a className="" href="#about">
              About{" "}
            </a>
            <a className="" href="#services">
              Services{" "}
            </a>
            <a className="" href="#portfolio">
              Portfolio{" "}
            </a>
          </div>
          <div className=" flex flex-row gap-5 items-center justify-between lg:pr-11 pr-4">
            <a className="" href="#portfolio">
              Resume
            </a>
            <button className="bg-white text-projectDarkGray px-4 py-1">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden block">
        <div className=" text-white lg:text-sm bg-projectDarkGray flex flex-row items-center justify-between lg:gap-5 h-24 border-b-2 gap-2 text-xs">
          <div className=" text-2xl lg:pl-11 pl-5">
            <Text fontFamily="monospace" textColor="white">
              TESTER
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between lg:gap-8 gap-4">
            <a className="" href="#home">
              Home
            </a>
            <a className="" href="#about">
              About{" "}
            </a>
            <a className="" href="#services">
              Services{" "}
            </a>
            <a className="" href="#portfolio">
              Portfolio{" "}
            </a>
          </div>
          <div className=" flex flex-row gap-5 items-center justify-between lg:pr-11 pr-4">
            <a className="" href="#portfolio">
              Resume
            </a>
            <button className="bg-white text-projectDarkGray px-4 py-1">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Header;
