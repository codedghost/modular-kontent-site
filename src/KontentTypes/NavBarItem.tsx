import { Elements, IContentItem } from "@kontent-ai/delivery-sdk";

export type NavBarItem = IContentItem<{
    title: Elements.TextElement;
    url_route: Elements.TextElement;
}>;

export interface NavBarItemContent {
    title: Elements.TextElement;
    url_route: Elements.TextElement;
};