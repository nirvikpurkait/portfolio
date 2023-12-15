import IconsCarousel from "@/components/icons-carousel-infinite-scroll/IconsCarousel";
import Heading from "@/components/hero-section/Heading";
import IconsList from "@/components/icons-carousel-infinite-scroll/IconsList";

export default function Home() {
	return (
		<>
			<Heading />
			<IconsCarousel>
				<IconsList />
			</IconsCarousel>
		</>
	);
}
