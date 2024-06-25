"use client";

import GridPattern from "@/components/magicui/grid-background";
import { Highlight } from "@/components/magicui/hero-highlight";
import { ShinyButton } from "@/components/magicui/shiny-button";
import AboutUs from "@/components/pages/aboutUs";
import ContactUs from "@/components/pages/contactUs";
import Footer from "@/components/pages/footer";
import Projects from "@/components/pages/projects";
import Services from "@/components/pages/services";
import { MarqueeDemo } from "@/components/reviews";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const HqPage = () => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 z-0">
                <GridPattern width={50} height={50}/>
            </div>

            {/* Main content */}
            <div className="relative z-10 space-y-5">
                {/* Fixed Navbar at the top */}
                

                {/* Main content container with top padding */}
                <div className="pt-16">
                    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <ShinyButton name="Site under construction"/>
                                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                            Innovating Today for a &nbsp;
                                            
                                        </h1>
                                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        <Highlight>Sustainable Tomorrow.</Highlight>
                                        </h1>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                            We are a group of people working on building better products accessible to everyone.
                                        </p>
                                    </div>
                                    <div className="w-full max-w-sm space-y-2">
                                        {/* Form placeholder */}
                                        <form className="flex gap-2">
                                            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 bg-gray-900" />
                                            <Button type="submit">Get Started</Button>
                                        </form>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Join the newsletter to unlock exclusive features and insights.{" "}
                                            <Link href="#" className="underline underline-offset-2" prefetch={false}>
                                            Terms &amp; Conditions
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <MarqueeDemo />
                            </div>
                        </div>
                    </section>
                    <AboutUs />
                    <Services />
                    <Projects />
                    <ContactUs />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default HqPage;
