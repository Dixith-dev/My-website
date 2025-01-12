import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Team</div>
                    <p className="flex flex-row items-center my-[25px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Founder and CEO - D</span>    
                    </p>
                    <p className="flex flex-row items-center my-[8px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Lead developer and project manager - Krish</span>    
                    </p>

                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Our Social Media</div>
                    
                    <p className="flex flex-row items-center my-[25px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact Us</div>

                    <p className="flex flex-row items-center my-[25px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">dixith@tabrobotics.com</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">+919398760681</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                
            </div>
        </div>
    </div>
  )
}

export default Footer