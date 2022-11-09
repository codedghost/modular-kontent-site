import { Container } from "react-bootstrap";
import ImageElement from "../../../helpers/KontentElementHelpers/ImageElement/ImageElement";
import OrientationHelper from "../../../helpers/KontentElementHelpers/OrientationHelper/OrientationHelper";
import BackgroundImageComponentProps from "./BackgroundImageComponentProps";

export default function BackgroundImageComponent({Url, Orientation, Content, Container}: BackgroundImageComponentProps) {
    return (
        <div className="image-with-text">
            <div className="banner-image">
                <ImageElement url={Url} classString="dim-image" />
            </div>
            <div className={`banner-text banner-text-${
                OrientationHelper({Orientation: Orientation})
            } ${Container ? 'container' : ''}`}>
                {Content}
            </div>
        </div>
    );
}