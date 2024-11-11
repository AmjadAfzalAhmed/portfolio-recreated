import React from "react";
import Image from 'next/image';
import ts from '/public/ts.png';
import tw from '/public/tailwind.png';
import htm from '/public/html.png';
import nxj from '/public/nextjs.png';
import react from '/public/react.png';
import ps from '/public/pshop.png';


const Skills = () => {
  return (    
    <div className='bg-white w-[1400px] min-h-[90vh] px-10 py-12'>    
      <h1 className='text-4xl font-extrabold text-blue-500 text-center bg-transparent mb-8 hover:transiti-transform duration-300 scale-105 '>Skills Section</h1> 
      <div className="flex flex-col gap-6 mx-auto text-lg text-blue-600">
        <div className="line-1 flex justify-between gap-10 px-10">
        <div className='item-1 bg-sky-500 mb-8 w-[300px] h-[300px] grid place-items-center rounded-lg text-[#ccc] text-xl shadow-sky-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in'>
          <span className="bg-yellow-200 ring ring-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>1</span>
          </span>
          <h3 className='text-2xl text-yellow-300'>Typescript</h3>
          <Image
          src={ts}
          alt='ts-icon'
          width={50}
          height={50}
          className='rounded-md'
          />
          <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='item-2 bg-yellow-500 mb-8 w-[300px] h-[300px] grid place-items-center rounded-lg text-[#ccc] text-xl shadow-yellow-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in'>
          <span className="bg-blue-300 ring ring-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>2</span>
          </span>
          <h3 className='text-2xl text-blue-300'>HTML / CSS</h3>
          <Image
          src={htm}
          alt='html-icon'
          width={100}
          height={100}
          className='rounded-md'
          />
          <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div className='item-3 bg-red-500 mb-mb-8 w-[300px] h-[300px] grid place-items-center rounded-lg text-[#ccc] text-xl shadow-red-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in'>
          <span className="bg-green-300 ring ring-green-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>3</span>
          </span>
          <h3 className='text-2xl text-green-400'>Tailwind CSS</h3>
          <Image
          src={tw}
          alt='tailwind'
          width={100}
          height={100}
          className='rounded-md'
          />
          <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
        <div className="line-2 flex justify-between gap-10 px-10">
        <div className='item-4 bg-green-500 mb-8 w-[300px] h-[300px] grid place-items-center rounded-lg text-[#ccc] text-xl shadow-green-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in'>
          <span className="bg-blue-300 ring ring-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>4</span>
          </span>
          <h3 className='text-2xl text-red-400'>Next JS</h3>
          <Image
          src={nxj}
          alt='nextjs'
          width={100}
          height={100}
          className='rounded-md'
          />
          <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='item-5 bg-purple-500 mb-8 w-[300px] h-[300px] grid place-items-center rounded-lg text-[#ccc] text-xl shadow-purple-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in'>
          <span className="bg-yellow-300 ring ring-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>5</span>
          </span>
          <h3 className='text-2xl text-yellow-400'>React JS</h3>
          <Image
          src={react}
          alt='reactjs'
          width={100}
          height={100}
          className='rounded-md'
          />
          <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='item-6 bg-white mb-8 w-[300px] h-[300px] grid place-items-center rounded-lg text-[#ccc] text-xl shadow-green-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in'>
          <span className="bg-gray-500 ring ring-slate-400 rounded-full w-12 h-12 flex items-center justify-center">
            <span>6</span>
          </span>
          <h3 className='text-2xl text-red-400'>Photoshop</h3>
          <Image
          src={ps}
          alt='photoshop'
          width={100}
          height={100}
          className='rounded-md'
          />
          <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Skills
