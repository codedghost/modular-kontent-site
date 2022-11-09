import { Elements, IContentItem } from "@kontent-ai/delivery-sdk";

export type TextWithImage = IContentItem<{
    main_text: Elements.RichTextElement;
    image: Elements.AssetsElement;
    content_orientation__orientation: Elements.TextElement;
}>;

export interface TextWithImageContent {
    main_text: Elements.RichTextElement;
    image: Elements.AssetsElement;
    content_orientation__orientation: Elements.TextElement;
}
