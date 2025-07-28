import { Hero } from '@/components/Hero/Hero';
import { NewEventsSection } from '@/components/NewEventsSection/NewEventsSection';
import { NewProductsSection } from '@/components/NewProductsSection/NewProductsSection';
import { WeHaveSection } from '@/components/WeHaveSection/WeHaveSection';
import { WeMakeDeliciousSection } from '@/components/WeMakeDeliciousSection/WeMakeDeliciousSection';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WeHaveSection />
      <WeMakeDeliciousSection />
      <NewProductsSection />
      <NewEventsSection />
    </div>
  );
}
