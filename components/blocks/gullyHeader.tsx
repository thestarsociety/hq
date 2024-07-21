import { Separator } from "../ui/separator"

export const GullyHeader = () => {
    return (
        <div className="w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] bg-transparent mt-4">
            <div className="flex flex-col leading-tight">
                <div className="flex items-center justify-start">
                    <h1 className="text-zinc-900 text-[200px] font-medium">
                        Let&apos;s
                    </h1>
                </div>
                <Separator className="bg-zinc-800"/>
                <div className="flex items-center justify-center">
                    <h1 className="text-zinc-900 text-[200px] font-medium">
                        Talk
                    </h1>
                </div>
                <Separator className="bg-zinc-800 h-[0.5px]"/>
                <div className="flex items-center justify-end">
                    <h1 className="text-zinc-900 text-[200px] font-medium">
                        Creativity.
                    </h1>
                </div>
            </div>
        </div>
    )
}