import { createRichTextHtmlResolver } from "@kontent-ai/delivery-sdk";
import { useEffect, useState } from "react";
import { TransformImageUrl } from "../ImageHelper/ImageHelper";
import { TransformImageUrlProps } from "../ImageHelper/ImageHelperProps";
import RichTextElementProps from "./RichTextElementProps";

export default function RichTextElement({Element}: RichTextElementProps) {
    const [richTextContent, setRichTextContent] = useState<string>('');

    const richTextResolver = createRichTextHtmlResolver();

    useEffect(() => {
        setRichTextContent(richTextResolver.resolveRichText({
            element: Element,
            imageResolver: (imageId, image) => {
                return {
                    imageUrl: TransformImageUrl({url: image?.url, width: 1080, height: 1920 } as TransformImageUrlProps)
                }
            }
        }).html);
    }, [Element]);

    return (<div dangerouslySetInnerHTML={{__html: richTextContent}} />);
}