'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaLeaf, FaTree, FaCalendar } from 'react-icons/fa';
import { SiCodechef } from "react-icons/si";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import testimonialBg from '@/public/banner02.webp';
import reviewAvatar from '@/public/client02.webp';

const features = [
  {
    Icon: FaLeaf,
    title: 'Hygienic Food',
    text: 'We guarantee top-notch hygiene, ensuring every meal is prepared with the utmost care for a safe and delicious dining experience.',
  },
  {
    Icon: FaTree,
    title: 'Fresh Environment',
    text: 'Angus Treats offers a fresh, welcoming environment where every detail is designed to enhance your dining experience.',
  },
  {
    Icon: SiCodechef,
    title: 'Skilled Chefs',
    text: 'At Angus Treats, our skilled chefs craft each dish with precision, delivering an exceptional dining experience while prioritizing hygiene.',
  },
  {
    Icon: FaCalendar,
    title: 'Event & Party',
    text: 'Angus Treats is the perfect venue for events and parties, offering a memorable experience with top-tier cuisine and ambiance.',
  },
];


const reviews = [
  {
    text: "I just went to Firensteak, and man, it was amazing! Had their chili beef dry, herbs kitchen steak, French onion chicken and soup with garlic bread – all delicious! The taste was so good, and the place had a great vibe. Definitely recommend trying it out!",
    name: "Ismail Vlogger",
  },
  {
    text: "Absolutely loved the dining experience at Firensteak! The ambiance is perfect, and the steak was cooked to perfection. Will definitely be back for more!",
    name: "Sarah ",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <section className="relative text-center py-14 container mx-auto overflow-hidden">
        <div className="absolute inset-0 h-auto md:h-[600px]  ">
          <Image
            src={testimonialBg}
            alt="Background Image"
            fill
            priority
            sizes="(min-width: 1280px) 83.02vw, 100vw"
            quality={100}
            className="z-0"
          />
        </div>

        <div className="relative container mx-auto px-4 z-20">
          <div ref={sliderRef} className="keen-slider">
            {reviews.map((review, index) => (
              <div className="keen-slider__slide" key={index}>
                <p className="text-xl text-white mb-8 w-full mx-auto lg:max-w-2xl">{review.text}</p>
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={reviewAvatar}
                    alt="reviews"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <p className="text-lg font-semibold text-white mt-4">{review.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots for navigation */}
          {loaded && instanceRef.current && (
            <div className="dots z-50">
              {[
                ...Array(instanceRef.current.track.details.slides.length).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={"bg-white rounded-full w-3 ms-3 h-3 z-40 mb-16" + (currentSlide === idx ? " bg-yellow-400" : "")}
                  ></button>
                )
              })}
            </div>
          )}
        </div>

      </section>

      <div className="relative z-30 -mt-16 mx-auto">
        <ul className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-10">
          {features.map((feature, index) => (
            <li key={index} className="bg-[#0f0f0f] p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 text-yellow-300">
                <feature.Icon size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white font-pirata-one tracking-widest">{feature.title}</h3>
              <p className="text-white">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Testimonials;
