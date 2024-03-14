import Creators from "../components/home/Creators"
import HeroSection from "../components/home/HeroSection"


const Home = () => {
    return (
        <main className="w-full flex flex-col">
            <HeroSection />
            <Creators />
        </main>
    )
}

export default Home