import HeroSection from "../components/home/HeroSection"
import MaxWrapper from "../components/shared/MaxWrapper"


const Home = () => {
    return (
        <MaxWrapper className="w-full flex flex-col">
            <HeroSection />
        </MaxWrapper>
    )
}

export default Home