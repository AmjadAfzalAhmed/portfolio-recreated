import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import aboutPic from '/public/image.png';
import Image from 'next/image';
import Link from "next/link";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons/faChevronCircleUp";

const About = () => {
  return (
    <div>
      <section className="about w-[1440px] min-h-[100vh] bg-[#002057] ">
        <h2 className="heading text-4xl pt-12 text-white font-extrabold flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} className='w-8 h-8 mr-2' />
          About Me
        </h2>

        <div className="flex justify-between">
          <div className="image w-[50%]">
            <Image
              src={aboutPic}
              alt="aboutPic"
              className="w-[600px] h-[600px]"
            />
          </div>
          <div className="content w-[50%] pt-[100px]">
            <h2 className="text-4xl text-blue-700 font-extrabold mb-8">I am Amjad</h2>
            <span className="tag text-2xl text-pink-600 font-semibold leading-7 tracking-wider">
              Full Stack Developer
            </span>

            <p className="text-justify text-[#ccc] text-2xl font-semibold leading-7 tracking-wider mt-6">
              I am a Full-Stack developer based in Karachi, Pakistan. I
              am very passionate about improving my coding skills & developing 
              applications & websites.
              <br /> I build WebApps and Websites. Working for myself to improve
              my skills.
              <br /> Love to build Full-Stack clones too.
            </p>     
            <button className='w-[200px] h-[60px] bg-yellow-400 rounded-xl text-white text-[20px] flex justify-center items-center py-2 my-6 hover:scale-105 transition-transform duration-300 ease-in shadow-yellow-100 shadow-sm'>Click Me<Link href=''>
            <FontAwesomeIcon 
            icon={faChevronCircleUp}
            className='w-6 h-6 text-white ml-2 hover:transition-transform duration-300 ease-in hover:translate-x-1'
            />
            </Link></button>  
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
