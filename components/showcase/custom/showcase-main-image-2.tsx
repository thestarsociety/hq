

interface ShowcaseMainImageWithoutTextProps {
    backgroundColor: string;
    backgroundImage: string;
}

export const ShowcaseMainImageWithoutText = ({
    backgroundColor,
    backgroundImage
}: ShowcaseMainImageWithoutTextProps) => {
    return (
        <div 
        className={`w-full h-screen p-[20px] border-[1.5px] border-none rounded-[20px] mt-4 ${backgroundColor}`}
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
        />
    )
}