import { Elements, IContentItem } from "@kontent-ai/delivery-sdk";
import { RichText } from "./RichText";
import { TextWithImage } from "./TextWithImage";
import { TwoColumnList } from "./TwoColumnList";

export type BodyContent = IContentItem<{
    body_fragments: Elements.LinkedItemsElement<RichText | TextWithImage | TwoColumnList>;
}>;

export interface BodyContentContent {
    body_fragments: Elements.LinkedItemsElement<RichText | TextWithImage | TwoColumnList>;
};