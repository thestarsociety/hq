
export default function Services() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a wide range of services to help your business succeed. From strategy to execution, we&apos;ve got you
                covered.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-muted rounded-md flex h-12 w-12 items-center justify-center">
                <BoltIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Strategy</h3>
              <p className="text-muted-foreground">
                We help you develop a winning strategy to achieve your business goals.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-muted rounded-md flex h-12 w-12 items-center justify-center">
                <PencilIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Design</h3>
              <p className="text-muted-foreground">Our designers create beautiful and user-friendly experiences.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-muted rounded-md flex h-12 w-12 items-center justify-center">
                <CodeIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Development</h3>
              <p className="text-muted-foreground">Our developers build scalable and secure applications.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-muted rounded-md flex h-12 w-12 items-center justify-center">
                <RocketIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Launch</h3>
              <p className="text-muted-foreground">We help you launch your product or service with confidence.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-muted rounded-md flex h-12 w-12 items-center justify-center">
                <GaugeIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Analytics</h3>
              <p className="text-muted-foreground">We help you track and analyze your business performance.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-muted rounded-md flex h-12 w-12 items-center justify-center">
                <PowerIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Support</h3>
              <p className="text-muted-foreground">We provide ongoing support to ensure your success.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function BoltIcon(props: any) {
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
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  }
  
  
  function CodeIcon(props: any) {
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
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  
  
  function GaugeIcon(props: any) {
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
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    )
  }
  
  
  function PencilIcon(props: any) {
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
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  }
  
  
  function PowerIcon(props: any) {
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
        <path d="M12 2v10" />
        <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
      </svg>
    )
  }
  
  
  function RocketIcon(props: any) {
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
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }