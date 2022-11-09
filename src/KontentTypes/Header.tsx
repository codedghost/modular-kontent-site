import { Elements, IContentItem } from "@kontent-ai/delivery-sdk";

export type Header = IContentItem<{
    header_text: Elements.TextElement;
    url_route: Elements.TextElement;
}>;

export interface HeaderContent {
    header_text: Elements.TextElement;
    url_route: Elements.TextElement;
};