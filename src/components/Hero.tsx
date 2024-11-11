import Link from "next/link";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagramSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import prof from '/public/prof.jpg'

const Hero = () => {
  return (
    <div className='flex gap-[200px]'>
      <section className="relative min-h-[90vh] flex flex-wrap gap-[1.5rem] items-center mt-8">
        <div id="particles-js"></div>

        <div className="content flex-grow flex-shrink basis-[40rem] pt-4 z-[1] pl-14">
          <h2 className="text-[3rem] text-[#002057] font-extrabold">
            Hi There,
            <br /> I am Amjad Afzal <br />
            <span className="text-[3rem] text-[#ff7b00] font-extrabold">
              Ahmed
            </span>
          </h2>
          <p className="text-[2rem] text-[#000] font-semibold">
            Full Stack Developer <span className="typing-text"></span>
          </p>
          <a className="btn flex justify-center items-center bg-[#2506ad] mt-[1rem] absolute leading-0 py-2 px-[2rem] rounded-[4em] shadow-custom-lg transition duration-[0.5s] ease-in text-center text-white cursor-pointer hover:bg-[#1a047e]">
            <span className="text-xl font-bold">About Me</span>
            <FontAwesomeIcon
              icon={faArrowCircleDown}
              className="w-4 h-4 ml-2 cursor-pointer transition ease-in duration-[0.3s] hover:translate-x-1"
            />
          </a>
          {/* Social Icons */}
          <div className="socials relative mt-[8rem]">
            <ul className="social-icons flex pl-0 mb-0 list-none">
              <li className='inline-block mb-[14px]'>
                <Link
                  href="https://www.linkedin.com/in/amjad-afzal-ahmed-298481283/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn}
                  className='bg-[#09011b] text-xl text-[#00d9ff] text-center w-[46px] h-[46px] p-2 mr-2 rounded-full hover:bg-[#007bb6] hover:text-white' />
                </Link>
              </li>
              <li className='inline-block mb-[14px]'>
                <Link href="https://github.com/AmjadAfzalAhmed" target="_blank">
                  <FontAwesomeIcon icon={faGithub} 
                  className='bg-[#09011b] text-xl text-[#00d9ff] text-center w-[46px] h-[46px] p-2 mr-2 rounded-full hover:bg-[#0e0e0e] hover:text-white'/>
                </Link>
              </li>
              <li className='inline-block mb-[14px]'>
                <Link href="https://twitter.com" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} 
                  className='bg-[#09011b] text-xl text-[#00d9ff] text-center w-[46px] h-[46px] p-2 mr-2 rounded-full hover:bg-[#00aced] hover:text-white'/>
                </Link>
              </li>
              <li className='inline-block mb-[14px]'>
                <Link href="https://www.instagram.com/" target="_blank">
                  <FontAwesomeIcon icon={faInstagramSquare} 
                  className='bg-[#09011b] text-xl text-[#00d9ff] text-center w-[46px] h-[46px] p-2 mr-2 rounded-full hover:bg-[#ee00da] hover:text-white'/>
                </Link>
              </li>
              <li className='inline-block mb-[14px]'>
                <Link href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} 
                  className='bg-[#09011b] text-[#00d9ff] text-center w-[46px] h-[46px] p-2 mr-2 rounded-full hover:bg-[#00aced] hover:text-white'/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="image-section mt-10 w-[50%]">
        <Image
        src={prof}
        alt='profile-pic'
        className='mt-[100px] ml-10 w-[400px] h-[400px] rounded-full border-4 border-[#fc8c05] shadow-sky-300 shadow-lg transition ease-in duration-[0.4s] hover:scale-[1.1]'
        />
      </div>
    </div>
  );
};

export default Hero;
