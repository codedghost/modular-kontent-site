import { Elements, IContentItem } from "@kontent-ai/delivery-sdk";

export type TwoColumnList = IContentItem<{
    left_column: Elements.RichTextElement;
    right_column: Elements.RichTextElement;
    background_image: Elements.AssetsElement;
}>;

export interface TwoColumnListContent {
    left_column: Elements.RichTextElement;
    right_column: Elements.RichTextElement;
    background_image: Elements.AssetsElement;
};