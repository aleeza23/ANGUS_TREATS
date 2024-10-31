import Conatiner from '@/components/Container'
import React from 'react'
import AboutHero from '@/components/AboutHero'
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'));

const AboutPage = () => {
    return (
        <Conatiner>
            <div className='bg-[#0f0f0f] container mx-auto'>
                <AboutHero />
            </div>
       <Footer />
        </Conatiner>

    )
}

export default AboutPage