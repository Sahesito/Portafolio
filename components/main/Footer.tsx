import React from "react";
import {
    RxDiscordLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <a
                            href="https://www.instagram.com/sahesito/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
                        >
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/erwin-marchan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
                        >
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/Sahesito"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
                        >
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </a>
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px]">
                            <span className="text-[15px] ml-[6px]">Erwin Marchan Sosa</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px]">
                            <span className="text-[15px] ml-[6px]">FullStack & Android Developer</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px]">
                            <span className="text-[15px] ml-[6px] text-purple-400">mar.sosaer5@gmail.com</span>
                        </p>
                    </div>

                </div>

                <div className="mb-[20px] text-[15px] text-center text-gray-400">
                    &copy; Erwin Marchan Sosa 2026. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;