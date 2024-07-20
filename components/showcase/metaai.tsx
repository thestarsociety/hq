import ShowcaseMainTextWithImage from "./custom/showcase-main-image-1"
import { ShowcaseMainImageWithoutText } from "./custom/showcase-main-image-2"
import { VideoComponent } from "./custom/video-component"

const leftText = "We were tasked with helping Meta create a visual language to represent the striking and complex ideas behind one of their most important efforts, Meta AI. A brand with a diverse audience, from the press to academia and researchers. "
const rightText= "Together, we chose to pursue the inherent beauty of the foundational concepts behind AI to create a visual world that felt equally complex, beautiful, and new. Something that could express the ideas that lie at the boundaries of artificial life and creativity — something that looks perhaps like software biomimicry."

export const MetaAI = () => {
    return (
        <div>
            <VideoComponent />

            {/* Showcase Title */}
            <ShowcaseMainTextWithImage backgroundColor="bg-quasarBlue" backgroundImage="/showcase/metaai/meta-ai-titles-block-1.png" leftText={leftText} rightText={rightText} text1="The Beauty" text2="of" text3="complexity" minText="We make complex things in a simpler and more understandable way."/>

            {/* Part-2 image */}
            <ShowcaseMainImageWithoutText backgroundColor="bg-quasarBlue" backgroundImage="/showcase/metaai/meta-ai-titles-block-2.png"/>
        </div>
    )
}