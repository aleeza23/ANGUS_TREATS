import Image from 'next/image'
import React from 'react'
import steak01 from '@/public/steak-01.webp'
import Conatiner from '@/components/Container';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'));

const Page = () => {
    return (
        <Conatiner>
            <div className="flex justify-center my-10">
                <h1 className='text-2xl text-white font-pirata-one tracking-widest'>Photo Gallery</h1>
            </div>
            <div className=" bg-[#0f0f0f] container mx-auto p-5 sm:p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="grid gap-2">
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                    <div className='relative h-60'>
                        <Image
                            fill
                            className="h-auto max-w-full rounded-lg"
                            src={steak01}
                            alt="Steak Image"
                        />
                    </div>
                </div>
            </div>
            <Footer />

        </Conatiner>
    );
}

export default Page;
