import { Elements, IContentItem } from "@kontent-ai/delivery-sdk";
import { Header } from "./Header";
import { NavBarItem } from "./NavBarItem";

export type NavBar = IContentItem<{
    header: Elements.LinkedItemsElement<Header>;
    nav_items: Elements.LinkedItemsElement<NavBarItem>;
}>;

export interface NavBarContent {
    header: Elements.LinkedItemsElement<Header>;
    nav_items: Elements.LinkedItemsElement<NavBarItem>;
};