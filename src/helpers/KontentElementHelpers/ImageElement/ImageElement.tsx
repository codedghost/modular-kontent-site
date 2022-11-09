import ImageElementProps from "./ImageElementProps";
import { TransformImageUrl } from "../ImageHelper/ImageHelper";

export default function ImageElement({url, height, width, classString}: ImageElementProps) {
    var transformedUrl = TransformImageUrl({url, height, width});

    return (<img src={transformedUrl} className={classString} alt=""></img>)
}

ImageElement.defaultProps = {
    url: "",
    height: 1080,
    width: 1920,
    classString: ""
} as ImageElementProps