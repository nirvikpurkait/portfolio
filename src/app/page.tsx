import IconsCarousel from "@/components/icons-carousel-infinite-scroll/IconsCarousel";
import Heading from "@/components/hero-section/Heading";
import icons from "@/database/static/icons.json";

export default function Home() {
	return (
		<>
			<Heading />
			<IconsCarousel icons={icons} />
		</>
	);
}
