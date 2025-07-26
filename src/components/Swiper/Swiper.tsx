import { swiperData } from '@/data/swiper';

import { SwiperCard } from './SwiperCard';

export const Swiper = () => {
  return (
    <div className="scrollbar-hide overflow-x-auto px-[5vw] xl:px-[7vw] 2xl:px-[10vw]">
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
        <div className="w-[5vw] xl:w-[7vw] 2xl:w-[10vw]"></div>
      </div>
    </div>
  );
};
