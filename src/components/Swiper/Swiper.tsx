'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { swiperData } from '@/data/swiper';

import { SwiperCard } from './SwiperCard';

export const Swiper = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="scrollbar-hide overflow-x-auto px-[5vw] xl:px-[7vw] 2xl:px-[10vw]"
      >
        <div className="grid auto-cols-max grid-flow-col gap-6 pb-4">
          {swiperData.map((item) => (
            <SwiperCard
              key={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
              size={item.size}
            />
          ))}
          <div className="flex items-center justify-center">
            <button
              className={clsx(
                'flex h-14 w-14 items-center justify-center',
                'lg:h-21 lg:w-21',
                'cursor-pointer transition-all duration-300 hover:scale-110',
                'ml-4'
              )}
              onClick={() => {
                if (containerRef.current) {
                  containerRef.current.scrollBy({
                    left: -300,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              <Image
                src="/assets/svg/ui-elements/arrow-boxed.svg"
                alt="Previous"
                width={84}
                height={84}
              />
            </button>
          </div>
          <div className="w-[5vw] xl:w-[7vw] 2xl:w-[10vw]"></div>
        </div>
      </div>
    </div>
  );
};
