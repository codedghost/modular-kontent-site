import RichTextElement from "../../../helpers/KontentElementHelpers/RichTextElement/RichTextElement";
import BackgroundImageComponent from "../BackgroundImageComponent/BackgroundImageComponent";
import TextWithImageComponentProps from "./TextWithImageComponentProps";

export default function TextWithImageComponent({ TextWithImageContent }: TextWithImageComponentProps) {
    var content = (
        <RichTextElement Element={TextWithImageContent.main_text} />
    );

    return (
        <BackgroundImageComponent 
            Url={TextWithImageContent.image.value[0].url}
            Orientation={TextWithImageContent.content_orientation__orientation?.value}
            Content={content}
            Container={false} />
    );
}
