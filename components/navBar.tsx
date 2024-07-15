import { IndexPage } from "./pages"
import { ApproachPage } from "./pages/approach"
import { CareersPage } from "./pages/careers"
import { ContactPage } from "./pages/contact"
import { HeroPage } from "./pages/hero"
import { TeamPage } from "./pages/team"
import { WorkPage } from "./pages/work"

export const NavBar = () => {
    return (
        <div className="fixed w-[15%] my-[50px] px-5">
            <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-minimalteal text-white">
            <HeroPage />
            </div>
            <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-mutedcoral text-white">
            <ApproachPage />
            </div>
            <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-dustylavender text-white">
            <WorkPage />
            </div>
            <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-sagegreen text-white">
            <TeamPage />
            </div>
            <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-subduednavy text-white">
            <CareersPage />
            </div>
            <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:marker:border-black rounded-[20px] transition-[height] duration-500 bg-warmtaupe text-white">
            <ContactPage />
            </div>
            <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-mellowyellow text-white">
            <IndexPage />
            </div>
      </div>
    )
}