import { Hero } from '@/components/Hero/Hero';
import { WeHaveSection } from '@/components/WeHaveSection/WeHaveSection';
import { WeMakeDeliciousSection } from '@/components/WeMakeDeliciousSection/WeMakeDeliciousSection';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WeHaveSection />
      <WeMakeDeliciousSection />
    </div>
  );
}
