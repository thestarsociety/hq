interface TwoColumnImageProps {
    backgroundImageOne: string;
    backgroundImageTwo: string;
}

export const TwoColumnImage = ({
    backgroundImageOne,
    backgroundImageTwo
}: TwoColumnImageProps) => {
    return (
        <div className="w-full h-[650px] border-[1.5px] border-none rounded-[20px] bg-transparent mt-4">
            <div className="flex flex-row h-full rounded-[20px] gap-6">
                <div className="basis-1/2 h-full w-full rounded-[20px]" style={{
                    backgroundImage: `url(${backgroundImageOne})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} />
                
                <div className="basis-1/2 h-full w-full rounded-[20px]" style={{
                    backgroundImage: `url(${backgroundImageTwo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} />
            </div>
        </div>
    )
}