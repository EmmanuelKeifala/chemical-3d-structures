'use client';
import Search from '@/components/Search';
import React from 'react';
import {TypeAnimation} from 'react-type-animation';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 mx-10">
        <div>
          <p className="text-4xl font-semibold text-center text-black">
            Uncover the Beauty of
          </p>
        </div>
        <p className="ml-3 text-2xl font-extrabold text-center text-indigo-600 mt-5">
          <TypeAnimation
            sequence={[
              'Molecular Structures',
              3000,
              'Compounds Together',
              3000,
            ]}
            wrapper="span"
            speed={20}
            style={{
              fontSize: '2em',
              display: 'flex',
            }}
            repeat={Infinity}
          />
        </p>
      </div>

      <div className="h-full w-full flex items-center justify-center  bg-gradient-to-r from-teal-300 to-pink-100 via-purple-400   background-animate">
        <div className=" mt-28 w-full flex items-center justify-center">
          <Search />
        </div>
      </div>
    </>
  );
}
