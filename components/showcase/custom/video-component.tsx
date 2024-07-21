export const VideoComponent = () => {
    return (
        <div className="w-full h-full border-[1.5px] border-none rounded-[20px] bg-transparent mt-4">
            <video 
                className="h-full w-full rounded-[20px]" 
                loop 
                autoPlay 
                muted 
                playsInline
                src="/videos/meta-ai-landing.mp4"
            >
            </video>
        </div>
    )
}