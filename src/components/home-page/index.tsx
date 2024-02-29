import IconsCarousel from "@/components/home-page/icons-carousel-infinite-scroll/icons-carousel";
import Heading from "@/components/home-page/hero-section/intro";
import IconsList from "./icons-carousel-infinite-scroll/icons-list";
import HeroBackground from "@/components/home-page/home-background";
import { cn } from "@/lib/shadcn-ui/utils";

export default function Home() {
  return (
    <div className={cn(`relative`)}>
      <Heading />
      <IconsCarousel>
        <IconsList />
      </IconsCarousel>
      <HeroBackground />
    </div>
  );
}
