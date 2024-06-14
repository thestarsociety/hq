import { BackgroundBeams } from "@/components/magicui/background-beams";
import SparklesText from "@/components/magicui/sparckles-text";

const HqPage = () => {
    return (
        <div className="flex relative h-screen w-full items-center justify-center overflow-hidden">
            <div className="z-10 text-center flex flex-col items-center justify-center space-y-5">
                <SparklesText
                    text="Coming Soon"
                    className="text-7xl font-bold"
                    colors={{ first: "#FF930F", second: "#FFF95B" }}
                />
            </div>
            <BackgroundBeams />
        </div>
    );
}
 
export default HqPage;