"use client";

import { TssHero } from "@/components/icons/tssHero";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

const HomePage = () => {

    const router = useRouter();

    const onClick = (
        social: "github" | "instagram"
    ) => {
        if (social === "github") {
            router.push("https://github.com/thestarsociety")
        } else if (social === "instagram") {
            router.push("https://instagram.com/tss_hq")
        }   
    }

    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="flex flex-col items-center justify-center">
                <TssHero height={215} width={520} />
                <div className="flex flex-row items-center justify-center mt-8 gap-x-6">
                    <GitHubLogoIcon height={30} width={30} className="cursor-pointer hover:text-teal-400" onClick={() => onClick("github")}/>
                    <InstagramLogoIcon height={30} width={30} className="cursor-pointer hover:text-orange-400" onClick={() => onClick("instagram")}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
