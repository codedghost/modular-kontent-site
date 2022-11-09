import { transformImageUrl } from "@kontent-ai/delivery-sdk";
import { TransformImageUrlProps } from "./ImageHelperProps";

export function TransformImageUrl({url, height, width}: TransformImageUrlProps) {
    const transformedUrl = transformImageUrl(url)
        .withCompression("lossless")
        .withHeight(height)
        .withWidth(width)
        .getUrl();

    return transformedUrl;
}