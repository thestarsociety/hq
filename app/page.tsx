import { TssHero } from "@/components/icons/tssHero";
import { ShinyButton } from "@/components/magicui/shiny-button";
import AboutUs from "@/components/pages/aboutUs";
import Image from "next/image";

const HomePage = () => {
    return ( 
        <main className="flex flex-col h-full w-full items-center justify-center p-8">
            <ShinyButton name="🚀 Introducing Orion!" urlPush="https://orion.thestarsociety.tech"/>
            <div className="hidden md:flex h-full w-full items-center justify-center p-16">
                <TssHero height={464} width={1118}/>
            </div>
            <div className="relative w-full max-w-md mt-8 md:hidden">
                <Image 
                    alt="Space"
                    src="/hero.jpg"
                    width={550}
                    height={278}
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h1 className="font-extrabold text-4xl sm:text-4xl text-white text-center px-4">
                        THE STAR SOCIETY
                    </h1>
                </div>
            </div>
            <AboutUs />
        </main>
     );
}
 
export default HomePage;