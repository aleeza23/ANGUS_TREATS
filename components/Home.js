import Image from 'next/image';
import React from 'react';
import bgImg from '@/public/banner01.webp';


const Home = () => {
  return (
    <div className="relative h-[500px]">
      <Image
        src={bgImg}
        alt="Background Image"
        fill
        sizes="(min-width: 1980px) 1536px, (min-width: 1320px) calc(68.75vw + 189px), (min-width: 1040px) calc(21.15vw + 804px), (min-width: 780px) 768px, (min-width: 680px) 640px, calc(94.44vw + 17px)"
        className="object-cover"
      />
      <div className="absolute inset-0  flex justify-end items-end">
        <button className="font-pirata-one tracking-widest text-xl z-20 text-black -mb-10 md:-mb-20 w-40 h-40 bg-white rounded-full mr-6">
          BOOK NOW!!
        </button>
      </div>
    </div>
  );
};

export default Home;
