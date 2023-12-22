import IconsCarousel from "@/components/home-page/icons-carousel-infinite-scroll/IconsCarousel";
import Heading from "@/components/home-page/hero-section/Heading";
import IconsList from "@/components/home-page/icons-carousel-infinite-scroll/IconsList";
import HeroBackground from "@/components/home-page/hero-section/HeroBackground";
import { cls } from "@/utils/tailwind/cls";

export default function Home() {
	return (
		<div className={cls(`relative`)}>
			<Heading />
			<IconsCarousel>
				<IconsList />
			</IconsCarousel>
			<HeroBackground />
		</div>
	);
}
