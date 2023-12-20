import Search from '@/components/Search';
import React from 'react';

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white">
      <div className=" mt-28 w-full flex items-center justify-center">
        <Search />
      </div>
    </div>
  );
}
