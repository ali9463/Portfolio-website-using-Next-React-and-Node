// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin , BsInstagram} from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-3 lg:py-12">

      <div className=" lg:gap-12 gap-y- items-center">
        <div className="order-2 lg:order-1 flex flex-col items-center justify-center p-2 pb-3 md:pb-10 md:px-10 lg:pt-10">
        <Image
              src="/section.svg"
              alt="Hero"
              width={1572}
              height={795}
              className="absolute top-0 -z-10"
            />
          <h1 className="text-3xl font-bold leading-10 text-center text-black md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I am {' '}
            <span className="text-[#FFA500]">{personalData.name}</span>
            {` , A Professional `}
            <span className=" text-[#0000FF] font-bold">{personalData.designation}</span>
            {/* {` And `}
            <span className=" text-[#0000FF] font-bold">{personalData.designation3}</span> */}
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
          <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-[#0a66c2] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-[#171515]  hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.instagram}
              target='_blank'
              className="transition-all text-red-600  hover:scale-125 duration-300"
            >
              <BsInstagram size={30} />
            </Link>
            <Link
              href={personalData.instagram}
              target='_blank'
              className="transition-all  hover:scale-125 duration-300"
            >
             <Image
              src="/fiverr.png"
              alt="Hero"
              width={30}
              height={30}
              className=""
            />
            </Link>


          </div>

          <div className="flex items-center gap-3">
            {/* <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0000FF] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link> */}

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#FFA500] px-3 md:px-8 py-2 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;