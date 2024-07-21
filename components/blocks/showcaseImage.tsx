

interface ShowCaseImageProps {
    backgroundColor: string;
    backgroundImage: string;
}

export const ShowcaseImage = ({
    backgroundColor,
    backgroundImage
}: ShowCaseImageProps) => {
    return (
        <div 
        className={`w-full h-[680px] p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] mt-4 ${backgroundColor}`}
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
        />
    )
}