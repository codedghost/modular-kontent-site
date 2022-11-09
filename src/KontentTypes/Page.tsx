import { Elements, IContentItem } from "@kontent-ai/delivery-sdk";
import { BodyContent } from "./BodyContent";
import { NavBar } from "./NavBar";

export type Page = IContentItem<{
    page_fragments: Elements.LinkedItemsElement<NavBar | BodyContent>;
}>;

export interface PageContent {
    page_fragments: Elements.LinkedItemsElement<NavBar | BodyContent>;
};