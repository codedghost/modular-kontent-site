import { Elements, IContentItem } from "@kontent-ai/delivery-sdk";
import { Page } from "./Page";

export type RouteType = IContentItem<{
    url_fragment: Elements.TextElement;
    page: Elements.LinkedItemsElement<Page>;
}>;

export interface RouteContent {
    url_fragment: Elements.TextElement;
    page: Elements.LinkedItemsElement<Page>;
}
