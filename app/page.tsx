import Search from '@/components/Search';
import React from 'react';

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center  bg-gradient-to-r from-green-300 to-blue-300 via-purple-200   background-animate">
      <div className=" mt-28 w-full flex items-center justify-center">
        <Search />
      </div>
    </div>
  );
}
