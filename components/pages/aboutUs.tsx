"use client";

import { Peoples } from "../peoples";

export default function AboutUs() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-xl px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl lg:text-6xl">
              Empowering the Future
            </h1>
          </div>
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2 pt-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mission is to empower to thrive in the digital age. We believe in the
                transformative power of technology and are committed to providing innovative solutions that drive progress
                and unlock new possibilities for absolutely free of cost.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Values</h2>
              <ul className="mt-4 space-y-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Innovation: We embrace creativity and continuously seek new ways to push the boundaries of what&apos;s
                    possible.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Integrity: We are committed to honesty, transparency, and ethical practices in all that we do.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Customer Focus: We prioritize the needs and success of our users and members, working tirelessly to exceed
                    their expectations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Collaboration: We believe in the power of teamwork and foster a culture of open communication and
                    mutual respect.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Sustainability: We are committed to environmental responsibility and strive to create solutions that
                    have a positive impact on the world.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }