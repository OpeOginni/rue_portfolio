import { Fragment, useState } from "react";
import { Text } from "@chakra-ui/react";
import "../App.css";

function Footer() {
  return (
    <div className="block">
      <div className="text-white text-sm bg-[#27272A] flex flex-row items-center justify-between gap-5 h-20">
        <div className=" lg:text-2xl md:text-sm lg:pl-11 pl-5">
          <Text fontFamily="monospace" textColor="white">
            RUEBITS
          </Text>
        </div>
        <Text color="white" fontSize="10px">
          © Copyright {new Date().getFullYear()}. All right reserved
        </Text>

        <div className=" flex flex-row gap-5 items-center justify-between lg:pr-11 pr-4"></div>
      </div>
    </div>
  );
}
export default Footer;
