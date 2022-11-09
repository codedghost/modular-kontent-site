import { Elements, IContentItem } from "@kontent-ai/delivery-sdk";

export type RichText = IContentItem<{
   text: Elements.RichTextElement;
   orientation: Elements.TextElement;
}>;

export interface RichTextContent {
    text: Elements.RichTextElement;
    orientation: Elements.TextElement;
};